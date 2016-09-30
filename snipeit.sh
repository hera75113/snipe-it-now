#!/bin/bash

######################################################
#           Snipe-It Install Script                  #
#          Script created by Mike Tucker             #
#            mtucker6784@gmail.com                   #
# This script is just to help streamline the         #
# install process for Debian and CentOS              #
# based distributions. I assume you will be          #
# installing as a subdomain on a fresh OS install.   #
# Right now I'm not going to worry about SMTP setup  #
#                                                    #
# Feel free to modify, but please give               #
# credit where it's due. Thanks!                     #
######################################################

# ensure running as root
if [ "$(id -u)" != "0" ]; then
  exec sudo "$0" "$@"
fi
#First things first, let's set some variables and find our distro.
clear

name="snipeit"
si="Snipe-IT"
hostname="$(hostname)"
fqdn="$(hostname --fqdn)"
ans=default
hosts=/etc/hosts
file=master.zip
tmp=/tmp/$name
fileName=snipe-it-master

spin[0]="-"
spin[1]="\\"
spin[2]="|"
spin[3]="/"

rm -rf $tmp/
mkdir $tmp

# Debian/Ubuntu friendly f(x)s
progress () {
	while kill -0 $pid > /dev/null 2>&1
        do
        	for i in "${spin[@]}"
                do
                	if [ -e /proc/$pid ]; then
                        echo -ne "\b$i"
                        sleep .1
                        else
                        echo -ne "\n\b\n"
                        fi
                done
        done
}

vhenvfile () {
		sudo ls -al /etc/apache2/mods-enabled/rewrite.load >> /var/log/snipeit-install.log 2>&1
		apachefile=/etc/apache2/sites-available/$name.conf
		echo "* Create Virtual host for apache."
		echo >> $apachefile "<VirtualHost *:80>"
		echo >> $apachefile "ServerAdmin webmaster@localhost"
		echo >> $apachefile "    <Directory $webdir/$name/public>"
		echo >> $apachefile "        Require all granted"
		echo >> $apachefile "        AllowOverride All"
		echo >> $apachefile "   </Directory>"
		echo >> $apachefile "    DocumentRoot $webdir/$name/public"
		echo >> $apachefile "    ServerName $fqdn"
		echo >> $apachefile "        ErrorLog /var/log/apache2/snipeIT.error.log"
		echo >> $apachefile "        CustomLog /var/log/apache2/access.log combined"
		echo >> $apachefile "</VirtualHost>"
		echo >> $hosts "127.0.0.1 $hostname $fqdn"
		a2ensite $name.conf >> /var/log/snipeit-install.log 2>&1

		cat > $webdir/$name/.env <<-EOF
		#Created By Snipe-it Installer
		APP_TIMEZONE=$(cat /etc/timezone)
		DB_HOST=localhost
		DB_DATABASE=snipeit
		DB_USERNAME=snipeit
		DB_PASSWORD=$mysqluserpw
		APP_URL=http://$fqdn
		APP_KEY=$random32
		EOF
}

perms () {
		if [ $distro == "debian" ]; then
		#Change permissions on directories
		 chmod -R 755 $webdir/$name/storage
		chmod -R 755 $webdir/$name/storage/private_uploads
		chmod -R 755 $webdir/$name/public/uploads
		chown -R www-data:www-data /var/www/$name
		# echo "* Finished permission changes."
		else
		sudo chmod -R 755 $webdir/$name/storage
		sudo chmod -R 755 $webdir/$name/storage/private_uploads
		sudo chmod -R 755 $webdir/$name/public/uploads
		sudo chown -R www-data:www-data /var/www/$name
		fi
}

#CentOS Friendly f(x)s
function isinstalled {
  if yum list installed "$@" >/dev/null 2>&1; then
    true
  else
    false
  fi
}

if [ -f /etc/lsb-release ]; then
    distro="$(lsb_release -s -i )"
    version="$(lsb_release -s -r)"
elif [ -f /etc/os-release ]; then
    distro="$(. /etc/os-release && echo $ID)"
    version="$(. /etc/os-release && echo $VERSION_ID)"
#Order is important here.  If /etc/os-release and /etc/centos-release exist, we're on centos 7.
#If only /etc/centos-release exist, we're on centos6(or earlier).  Centos-release is less parsable,
#so lets assume that it's version 6 (Plus, who would be doing a new install of anything on centos5 at this point..)
elif [ -f /etc/centos-release ]; then
	distro="Centos"
	version="6"
else
    distro="unsupported"
fi


echo "
	   _____       _                  __________
	  / ___/____  (_)___  ___        /  _/_  __/
	  \__ \/ __ \/ / __ \/ _ \______ / /  / /
	 ___/ / / / / / /_/ /  __/_____// /  / /
	/____/_/ /_/_/ .___/\___/     /___/ /_/
	            /_/
"

echo ""
echo ""
echo "  Welcome to Snipe-IT Inventory Installer for Centos, Debian and Ubuntu!"
echo ""
shopt -s nocasematch
case $distro in
        *Ubuntu*)
                echo "  The installer has detected Ubuntu version $version as the OS."
                distro=ubuntu
                ;;
		*Debian*)
                echo "  The installer has detected Debian version $version as the OS."
                distro=debian
                ;;
        *centos*|*redhat*)
                echo "  The installer has detected $distro version $version as the OS."
                distro=centos
                ;;
        *)
                echo "  The installer was unable to determine your OS. Exiting for safety."
                exit
                ;;
esac
shopt -u nocasematch
#Get your FQDN.

echo -n "  Q. What is the FQDN of your server? ($fqdn): "
read fqdn
if [ -z "$fqdn" ]; then
        fqdn="$(hostname --fqdn)"
fi
echo "     Setting to $fqdn"
echo ""

#Do you want to set your own passwords, or have me generate random ones?
until [[ $ans == "yes" ]] || [[ $ans == "no" ]]; do
echo -n "  Q. Do you want me to automatically create the snipe database user password? (y/n) "
read setpw

case $setpw in
        [yY] | [yY][Ee][Ss] )
                mysqluserpw="$(echo `< /dev/urandom tr -dc _A-Za-z-0-9 | head -c16`)"
                ans="yes"
                ;;
        [nN] | [n|N][O|o] )
                echo -n  "  Q. What do you want your snipeit user password to be?"
                read -s mysqluserpw
                echo ""
		ans="no"
                ;;
        *) 	echo "  Invalid answer. Please type y or n"
                ;;
esac
done

#Snipe says we need a new 32bit key, so let's create one randomly and inject it into the file
random32="$(echo `< /dev/urandom tr -dc _A-Za-z-0-9 | head -c32`)"

#db_setup.sql will be injected to the database during install.
#Again, this file should be removed, which will be a prompt at the end of the script.
dbsetup=$tmp/db_setup.sql
echo >> $dbsetup "CREATE DATABASE snipeit;"
echo >> $dbsetup "GRANT ALL PRIVILEGES ON snipeit.* TO snipeit@localhost IDENTIFIED BY '$mysqluserpw';"

#Let us make it so only root can read the file. Again, this isn't best practice, so please remove these after the install.
chown root:root $dbsetup
chmod 700 $dbsetup

## TODO: Progress tracker on each step

case $distro in
	debian)
		#####################################  Install for Debian ##############################################
		#Update/upgrade Debian/Ubuntu repositories, get the latest version of git.
		#Git clone snipeit, create vhost, edit hosts file, create .env file, mysql install
		#composer install, set permissions, restart apache.
		#BTW, Debian, I swear, you're such a pain.

		webdir=/var/www
		echo -e "\n* Updating Debian packages in the background... ${spin[0]}\n"
		apt-get update >> /var/log/snipeit-install.log & pid=$! 2>&1
		wait
		apt-get upgrade >> /var/log/snipeit-install.log & pid=$! 2>&1
		wait
		echo -e "\n* Installing packages... ${spin[0]}\n"
		echo -e "\n* Going to suppress more messages that you don't need to worry about. Please wait... ${spin[0]}"
		DEBIAN_FRONTEND=noninteractive apt-get -y install mariadb-server mariadb-client apache2 git unzip php5 php5-mcrypt php5-curl php5-mysql php5-gd php5-ldap libapache2-mod-php5 curl >> /var/log/snipeit-install.log & pid=$! 2>&1
		progress
		wait
		echo -e "\n* Cloning Snipeit, extracting to $webdir/$name..."
		git clone https://github.com/snipe/snipe-it $webdir/$name >> /var/log/snipeit-install.log & pid=$! 2>&1
		progress
		php5enmod mcrypt >> /var/log/snipeit-install.log 2>&1
		a2enmod rewrite >> /var/log/snipeit-install.log 2>&1
		vhenvfile
		wait
		echo >> $hosts "127.0.0.1 $hostname $fqdn"
		a2ensite $name.conf
		echo -e "* Modify the Snipe-It files necessary for a production environment.\n* Securing Mysql"
		# Have user set own root password when securing install
		# and just set the snipeit database user at the beginning
		/usr/bin/mysql_secure_installation
		echo -e "* Creating Mysql Database and User.\n##  Please Input your MySQL/MariaDB root password: "
		mysql -u root -p < $dbsetup
		cd $webdir/$name/
		curl -sS https://getcomposer.org/installer | php
		php composer.phar install --no-dev --prefer-source
		perms
		service apache2 restart
		;;
	ubuntu)
		#####################################  Install for Ubuntu  ##############################################
		#Update/upgrade Debian/Ubuntu repositories, get the latest version of git.
		#Git clone snipeit, create vhost, .env file, mysql install
		#composer install, set permissions, restart apache.

		webdir=/var/www
		echo -ne "\n* Updating with apt-get update in the background... ${spin[0]}"
		sudo apt-get update >> /var/log/snipeit-install.log & pid=$! 2>&1
		rm /var/lib/dpkg/lock
		progress
		echo -ne "\n* Upgrading packages with apt-get upgrade in the background... ${spin[0]}"
		sudo apt-get -y upgrade >> /var/log/snipeit-install.log & pid=$! 2>&1
		progress
		echo -ne "\n* Setting up LAMP in the background... ${spin[0]}\n"
		sudo DEBIAN_FRONTEND=noninteractive apt-get install -y lamp-server^ >> /var/log/snipeit-install.log & pid=$! 2>&1 
		progress
		if [ "$version" == "16.04" ]; then
			sudo apt-get install -y git unzip php php-mcrypt php-curl php-mysql php-gd php-ldap php-zip php-mbstring php-xml >> /var/log/snipeit-install.log & pid=$! 2>&1
			progress
			sudo phpenmod mcrypt >> /var/log/snipeit-install.log 2>&1
			sudo phpenmod mbstring >> /var/log/snipeit-install 2>&1
			sudo a2enmod rewrite >> /var/log/snipeit-install.log 2>&1
		else
			sudo apt-get install -y git unzip php5 php5-mcrypt php5-curl php5-mysql php5-gd php5-ldap >> /var/log/snipeit-install.log & pid=$! 2>&1
			progress
			sudo php5enmod mcrypt >> /var/log/snipeit-install.log 2>&1
			sudo a2enmod rewrite >> /var/log/snipeit-install.log 2>&1
		fi
		echo -ne "\n* Cloning Snipeit, extracting to $webdir/$name... ${spin[0]}"
		git clone https://github.com/snipe/snipe-it $webdir/$name >> /var/log/snipeit-install.log & pid=$! 2>&1
		progress
		vhenvfile
		echo -e "* MySQL Phase next.\n"
		/usr/bin/mysql_secure_installation
		echo -e "* Creating MySQL Database and user.\n* Please Input your MySQL/MariaDB root password created in the previous step.: "
		mysql -u root -p < $dbsetup
		echo -e "\n* Securing Mysql\n* Installing and configuring composer"
		cd $webdir/$name/
		curl -sS https://getcomposer.org/installer  | php
		php composer.phar install --no-dev --prefer-source
		perms
		service apache2 restart
		;;
	centos )
	if [ "$version" == "6" ]; then
		#####################################  Install for Centos/Redhat 6  ##############################################

		webdir=/var/www/html
		#Allow us to get the mysql engine
		echo ""
		echo "##  Adding IUS, epel-release and mariaDB repos.";
		mariadbRepo=/etc/yum.repos.d/MariaDB.repo
		touch $mariadbRepo
		echo >> $mariadbRepo "[mariadb]"
		echo >> $mariadbRepo "name = MariaDB"
		echo >> $mariadbRepo "baseurl = http://yum.mariadb.org/10.0/centos6-amd64"
		echo >> $mariadbRepo "gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB"
		echo >> $mariadbRepo "gpgcheck=1"
		echo >> $mariadbRepo "enable=1"

		yum -y install wget epel-release >> /var/log/snipeit-install.log 2>&1
		wget -P $tmp/ https://centos6.iuscommunity.org/ius-release.rpm >> /var/log/snipeit-install.log 2>&1
		rpm -Uvh $tmp/ius-release*.rpm >> /var/log/snipeit-install.log 2>&1

		#Install PHP and other needed stuff.
		echo "##  Installing PHP and other needed stuff";
		PACKAGES="httpd MariaDB-server git unzip php56u php56u-mysqlnd php56u-bcmath php56u-cli php56u-common php56u-embedded php56u-gd php56u-mbstring php56u-mcrypt php56u-ldap"

		for p in $PACKAGES;do
			if isinstalled $p;then
				echo " ##" $p "Installed"
			else
				echo -n " ##" $p "Installing... "
				yum -y install $p >> /var/log/snipeit-install.log 2>&1
				echo "";
			fi
		done;

		echo -e "\n##  Downloading Snipe-IT from github and putting it in the web directory.";

		wget -P $tmp/ https://github.com/snipe/snipe-it/archive/$file >> /var/log/snipeit-install.log 2>&1
		unzip -qo $tmp/$file -d $tmp/
		cp -R $tmp/$fileName $webdir/$name

		# Make mariaDB start on boot and restart the daemon
		echo "##  Starting the mariaDB server.";
		chkconfig mysql on
		/sbin/service mysql start

		echo "##  Securing mariaDB server.";
		/usr/bin/mysql_secure_installation

		echo "##  Creating MySQL Database/User."
		echo "##  Please Input your MySQL/MariaDB root password: "
		mysql -u root -p < $dbsetup

		#Create the new virtual host in Apache and enable rewrite
		echo "##  Creating the new virtual host in Apache.";
		apachefile=/etc/httpd/conf.d/$name.conf

		echo >> $apachefile ""
		echo >> $apachefile ""
		echo >> $apachefile ""
		echo >> $apachefile "<VirtualHost *:80>"
		echo >> $apachefile "ServerAdmin webmaster@localhost"
		echo >> $apachefile "    <Directory $webdir/$name/public>"
		echo >> $apachefile "        Allow From All"
		echo >> $apachefile "        AllowOverride All"
		echo >> $apachefile "        Options +Indexes"
		echo >> $apachefile "   </Directory>"
		echo >> $apachefile "    DocumentRoot $webdir/$name/public"
		echo >> $apachefile "    ServerName $fqdn"
		echo >> $apachefile "        ErrorLog /var/log/httpd/snipeIT.error.log"
		echo >> $apachefile "        CustomLog /var/log/access.log combined"
		echo >> $apachefile "</VirtualHost>"

		echo "##  Setting up hosts file.";
		echo >> $hosts "127.0.0.1 $hostname $fqdn"

		# Make apache start on boot and restart the daemon
		echo "##  Starting the apache server.";
		chkconfig httpd on
		/sbin/service httpd start

		tzone=$(grep ZONE /etc/sysconfig/clock | tr -d '"' | sed 's/ZONE=//g');
		echo "## Configuring .env file."

		cat > $webdir/$name/.env <<-EOF
		#Created By Snipe-it Installer
		APP_TIMEZONE=$tzone
		DB_HOST=localhost
		DB_DATABASE=snipeit
		DB_USERNAME=snipeit
		DB_PASSWORD=$mysqluserpw
		APP_URL=http://$fqdn
		APP_KEY=$random32
		DB_DUMP_PATH='/usr/bin'
		EOF

		echo "##  Configure composer"
		cd $webdir/$name
		curl -sS https://getcomposer.org/installer | php
		php composer.phar install --no-dev --prefer-source

		# Change permissions on directories
		sudo chmod -R 755 $webdir/$name/storage
		sudo chmod -R 755 $webdir/$name/public/uploads
		sudo chown -R apache:apache $webdir/$name

                /sbin/service iptables status >/dev/null 2>&1
                if [ $? = 0 ]; then
                      #Open http/https port
                      iptables -I INPUT 1 -p tcp -m tcp --dport 80 -j ACCEPT
                      iptables -I INPUT 1 -p tcp -m tcp --dport 443 -j ACCEPT
                      #Save iptables
                      service iptables save
                fi


	       service httpd restart

	elif [ "$version" == "7" ]; then
		#####################################  Install for Centos/Redhat 7  ##############################################

		webdir=/var/www/html

		#Allow us to get the mysql engine
		echo -e "\n##  Add IUS, epel-release and mariaDB repos.";
		yum -y install wget epel-release >> /var/log/snipeit-install.log 2>&1
		wget -P $tmp/ https://centos7.iuscommunity.org/ius-release.rpm >> /var/log/snipeit-install.log 2>&1
		rpm -Uvh $tmp/ius-release*.rpm >> /var/log/snipeit-install.log 2>&1

		#Install PHP and other needed stuff.
		echo "##  Installing PHP and other needed stuff";
		PACKAGES="httpd mariadb-server git unzip php56u php56u-mysqlnd php56u-bcmath php56u-cli php56u-common php56u-embedded php56u-gd php56u-mbstring php56u-mcrypt php56u-ldap"

		for p in $PACKAGES;do
			if isinstalled $p;then
				echo " ##" $p "Installed"
			else
				echo -n " ##" $p "Installing... "
				yum -y install $p >> /var/log/snipeit-install.log 2>&1
			echo "";
			fi
		done;

		echo -e "\n##  Downloading Snipe-IT from github and put it in the web directory.";

		wget -P $tmp/ https://github.com/snipe/snipe-it/archive/$file >> /var/log/snipeit-install.log 2>&1
		unzip -qo $tmp/$file -d $tmp/
		cp -R $tmp/$fileName $webdir/$name

		# Make mariaDB start on boot and restart the daemon
		echo "##  Starting the mariaDB server.";
		systemctl enable mariadb.service
		systemctl start mariadb.service

		echo "##  Securing mariaDB server.";
		echo "";
		echo "";
		/usr/bin/mysql_secure_installation

		echo "##  Creating MySQL Database/User."
		echo "##  Please Input your MySQL/MariaDB root password "
		mysql -u root -p < $dbsetup

		##TODO make sure the apachefile doesnt exist isnt already in there

		#Create the new virtual host in Apache and enable rewrite
		apachefile=/etc/httpd/conf.d/$name.conf

		echo "##  Creating the new virtual host in Apache.";
		echo >> $apachefile ""
		echo >> $apachefile ""
		echo >> $apachefile "LoadModule rewrite_module modules/mod_rewrite.so"
		echo >> $apachefile ""
		echo >> $apachefile "<VirtualHost *:80>"
		echo >> $apachefile "ServerAdmin webmaster@localhost"
		echo >> $apachefile "    <Directory $webdir/$name/public>"
		echo >> $apachefile "        Allow From All"
		echo >> $apachefile "        AllowOverride All"
		echo >> $apachefile "        Options +Indexes"
		echo >> $apachefile "   </Directory>"
		echo >> $apachefile "    DocumentRoot $webdir/$name/public"
		echo >> $apachefile "    ServerName $fqdn"
		echo >> $apachefile "        ErrorLog /var/log/httpd/snipeIT.error.log"
		echo >> $apachefile "        CustomLog /var/log/access.log combined"
		echo >> $apachefile "</VirtualHost>"

##TODO make sure this isnt already in there
		echo "##  Setting up hosts file.";
		echo >> $hosts "127.0.0.1 $hostname $fqdn"

		echo "##  Starting the apache server.";
		# Make apache start on boot and restart the daemon
		systemctl enable httpd.service
		systemctl restart httpd.service

		tzone=$(timedatectl | gawk -F'[: ]' ' $9 ~ /zone/ {print $11}');
		echo "## Configuring .env file."

		cat > $webdir/$name/.env <<-EOF
		#Created By Snipe-it Installer
		APP_TIMEZONE=$tzone
		DB_HOST=localhost
		DB_DATABASE=snipeit
		DB_USERNAME=snipeit
		DB_PASSWORD=$mysqluserpw
		APP_URL=http://$fqdn
		APP_KEY=$random32
		DB_DUMP_PATH='/usr/bin'
		EOF

		# Change permissions on directories


		#Install / configure composer
		cd $webdir/$name

		curl -sS https://getcomposer.org/installer | php
		php composer.phar install --no-dev --prefer-source

		sudo chmod -R 755 $webdir/$name/storage
		sudo chmod -R 755 $webdir/$name/storage/private_uploads
		sudo chmod -R 755 $webdir/$name/public/uploads
		sudo chown -R apache:apache $webdir/$name
		# Make SeLinux happy
		sudo chcon -R -h -t httpd_sys_script_rw_t $webdir/$name/

          	#Check if SELinux is enforcing
	       	if [ $(getenforce) == "Enforcing" ]; then
	 	       #Add SELinux and firewall exception/rules.
		       #Required for ldap integration
	       	       setsebool -P httpd_can_connect_ldap on
	 	       #Sets SELinux context type so that scripts running in the web server process are allowed read/write access
	 	       sudo chcon -R -h -t httpd_sys_script_rw_t $webdir/$name/
 	       	fi

		systemctl restart httpd.service

	else
		echo "Unable to Handle Centos Version #.  Version Found: " $version
		return 1
	fi
esac

echo ""
echo "  ***If you want mail capabilities, edit $webdir/$name/.env and edit based on .env.example***"
echo ""
echo "  ***Open http://$fqdn to login to Snipe-IT.***"
echo ""
echo ""
echo "* Cleaning up..."
rm -f snipeit.sh
rm -f install.sh
rm -rf $tmp/
echo "* Finished!"
sleep 1
