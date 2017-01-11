<?php

return array(
    'ad'				        => 'Active Directory',
    'ad_domain'				    => 'Dominio Active Directory',
    'ad_domain_help'			=> 'This is sometimes the same as your email domain, but not always.',
    'is_ad'				        => 'This is an Active Directory server',
	'alert_email'				=> 'Invia avvisi a',
	'alerts_enabled'			=> 'Allarmi Attivati',
	'alert_interval'			=> 'Expiring Alerts Threshold (in days)',
	'alert_inv_threshold'		=> 'Inventory Alert Threshold',
	'asset_ids'					=> 'ID modello',
	'auto_increment_assets'		=> 'Genera auto-incremento ID beni',
	'auto_increment_prefix'		=> 'Prefisso (Opzionale)',
	'auto_incrementing_help'    => 'Abilita auto-incremento ID beni prima di impostare questa',
	'backups'					=> 'Backups',
	'barcode_settings'			=> 'Impostazioni codice a barre',
    'confirm_purge'			    => 'Conferma Cancellazione',
    'confirm_purge_help'		=> 'Inserire il testo "DELETE" nel campo di seguito per eliminare i tuoi record cancellati. Quest\'operazione non può essere annullata.',
	'custom_css'				=> 'CSS Personalizzato',
	'custom_css_help'			=> 'Inserisci qualsiasi CSS personalizzato che vuoi utilizzare. Do not include the &lt;style&gt;&lt;/style&gt; tags.',
	'default_currency'  		=> 'Valuta predefinita',
	'default_eula_text'			=> 'EULA Predefinita',
  'default_language'					=> 'Lingua predefinita',
	'default_eula_help_text'	=> 'È possibile associare EULAs personalizzati a categorie di beni specifici.',
    'display_asset_name'        => 'Mostra Nome Bene',
    'display_checkout_date'     => 'Mostra Data Estrazione',
    'display_eol'               => 'Visualizzare EOL in vista tabella',
    'display_qr'                => 'Visualizza codici quadrati',
	'display_alt_barcode'		=> 'Visualizza codici a barre',
	'barcode_type'				=> 'Tipo di codice a barre 2D',
	'alt_barcode_type'			=> 'Tipo di codice a barre 1D',
    'eula_settings'				=> 'Impostazioni EULA',
    'eula_markdown'				=> 'Questa EULA consente <a href="https://help.github.com/articles/github aromatizzato-markdown/">Github flavored markdown</a>.',
    'general_settings'			=> 'Impostazioni Generali',
	'generate_backup'			=> 'Crea Backup',
    'header_color'              => 'Colore intestazione',
    'info'                      => 'Queste impostazioni consentono di personalizzare alcuni aspetti della vostra installazione.',
    'laravel'                   => 'Laravel Version',
    'ldap_enabled'              => 'LDAP abilitato',
    'ldap_integration'          => 'Integrazione LDAP',
    'ldap_settings'             => 'Impostazioni LDAP',
    'ldap_server'               => 'Server LDAP',
    'ldap_server_help'          => 'This should start with ldap:// (for unencrypted or TLS) or ldaps:// (for SSL)',
	'ldap_server_cert'			=> 'Validazione certificato SSL di LDAP',
	'ldap_server_cert_ignore'	=> 'Consenti Certificato SSL non valido',
	'ldap_server_cert_help'		=> 'Seleziona questa casella se stai utilizzando un certificato SSL autofirmato e vuoi accettare un certificato SSL non valido.',
    'ldap_tls'                  => 'Usa TLS',
    'ldap_tls_help'             => 'This should be checked only if you are running STARTTLS on your LDAP server. ',
    'ldap_uname'                => 'Nome utente LDAP',
    'ldap_pword'                => 'Password LDAP',
    'ldap_basedn'               => 'DN Base',
    'ldap_filter'               => 'Filtro LDAP',
    'ldap_pw_sync'              => 'Sincronizzazione password LDAP',
    'ldap_pw_sync_help'         => 'Uncheck this box if you do not wish to keep LDAP passwords synced with local passwords. Disabling this means that your users may not be able to login if your LDAP server is unreachable for some reason.',
    'ldap_username_field'       => 'Campo nome utente',
    'ldap_lname_field'          => 'Cognome',
    'ldap_fname_field'          => 'Nome LDAP',
    'ldap_auth_filter_query'    => 'Query di Autenticazione LDAP',
    'ldap_version'              => 'Versione LDAP',
    'ldap_active_flag'          => 'LDAP Active Flag',
    'ldap_emp_num'              => 'ID impiegato LDAP',
    'ldap_email'                => 'Email LDAP',
    'load_remote_text'          => 'Script remoti',
    'load_remote_help_text'		=> 'Questa installazione di Snipe-IT può caricare script dal mondo esterno.',
    'logo'                    	=> 'Logo',
    'full_multiple_companies_support_help_text' => 'Restringere gli utenti (amministratori inclusi) assegnati ad una azienda agli asset della propria azienda.',
    'full_multiple_companies_support_text' => 'Supporto completo ad aziende multiple',
    'optional'					=> 'facoltativo',
    'per_page'                  => 'Risultati per Pagina',
    'php'                       => 'PHP Version',
    'php_gd_info'               => 'È necessario installare php-gd per visualizzare i codici QR, consultare le istruzioni di installazione.',
    'php_gd_warning'            => 'Il plugin PHP Image Processing and GD non è installato.',
    'qr_help'                   => 'Abilita codici QR primo di impostare questo',
    'qr_text'                   => 'QR Code Text',
    'setting'                   => 'Impostazioni',
    'settings'                  => 'Impostazioni',
    'site_name'                 => 'Nome sito',
    'slack_botname'             => 'Botname Slack',
    'slack_channel'             => 'Canale Slack',
    'slack_endpoint'            => 'Finale Slack',
    'slack_integration'         => 'Impostazioni Slack',
    'slack_integration_help'    => 'L\'integrazione con Slack è opzionale, comunque il finale ed il canale sono richiesto se tu vuoi usarlo. Per configurare l\'integrazione con Slack, tu devi prima <a href=":slack_link" target="_new"> creare un webhook </a> nel tuo account di Slack.',
    'snipe_version'  			=> 'Snipe-IT version',
    'system'                    => 'Informazioni di sistema',
    'update'                    => 'Aggiorna impostazioni',
    'value'                     => 'Valore',
    'brand'                     => 'Personalizzazione',
    'about_settings_title'      => 'Impostazioni',
    'about_settings_text'       => 'Queste impostazioni ti permettono di personalizzare alcuni aspetti della tua installazione.',
    'labels_per_page'           => 'Etichetta per pagina',
    'label_dimensions'          => 'Dimensioni dell\'etichetta (pollici)',
    'page_padding'             => 'Margini della pagina (pollici)',
    'purge'                    => 'Eliminare i record cancellati',
    'labels_display_bgutter'    => 'Label bottom gutter',
    'labels_display_sgutter'    => 'Label side gutter',
    'labels_fontsize'           => 'Label font size',
    'labels_pagewidth'          => 'Label sheet width',
    'labels_pageheight'         => 'Label sheet height',
    'label_gutters'        => 'Label spacing (inches)',
    'page_dimensions'        => 'Dimensioni della pagina (pollici)',
    'label_fields'          => 'Label visible fields',
    'inches'        => 'pollici',
    'width_w'        => 'l',
    'height_h'        => 'h',
    'text_pt'        => 'pt',
    'two_factor'        => 'Two Factor Authentication',
    'two_factor_secret'        => 'Two-Factor Code',
    'two_factor_enrollment'        => 'Two-Factor Enrollment',
    'two_factor_enabled_text'        => 'Enable Two Factor',
    'two_factor_reset'        => 'Reset Two-Factor Secret',
    'two_factor_reset_help'        => 'This will force the user to enroll their device with Google Authenticator again. This can be useful if their currently enrolled device is lost or stolen. ',
    'two_factor_reset_success'          => 'Two factor device successfully reset',
    'two_factor_reset_error'          => 'Two factor device reset failed',
    'two_factor_enabled_warning'        => 'Enabling two-factor if it is not currently enabled will immediately force you to authenticate with a Google Auth enrolled device. You will have the ability to enroll your device if one is not currently enrolled.',
    'two_factor_enabled_help'        => 'This will turn on two-factor authentication using Google Authenticator.',
    'two_factor_optional'        => 'Selective (Users can enable or disable if permitted)',
    'two_factor_required'        => 'Required for all users',
    'two_factor_disabled'        => 'Disabled',
    'two_factor_enter_code'	=> 'Enter Two-Factor Code',
    'two_factor_config_complete'	=> 'Submit Code',
    'two_factor_enabled_edit_not_allowed' => 'Your administrator does not permit you to edit this setting.',
    'two_factor_enrollment_text'	=> "Two factor authentication is required, however your device has not been enrolled yet. Open your Google Authenticator app and scan the QR code below to enroll your device. Once you've enrolled your device, enter the code below",
    'require_accept_signature'      => 'Require Signature',
    'require_accept_signature_help_text'      => 'Enabling this feature will require users to physically sign off on accepting an asset.',
    'left'        => 'sinistra',
    'right'        => 'destra',
    'top'        => 'top',
    'bottom'        => 'bottom',
    'vertical'        => 'verticale',
    'horizontal'        => 'orizzontale',
    'zerofill_count'        => 'Length of asset tags, including zerofill',
);
