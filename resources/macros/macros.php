<?php
/**
* Macro helpers
*
*/


/**
* Locale macro
* Generates the dropdown menu of available languages
*/
Form::macro('locales', function ($name = "locale", $selected = null, $class = null, $id = null) {

    $locales = array(
      ''=> " ",
      'en'=> "English, US",
      'en-GB'=> "English, UK",
      'ar'=> "Arabic",
      'bg'=> "Bulgarian",
      'zh-CN'=> "Chinese Simplified",
      'zh-TW'=> "Chinese Traditional",
      'hr'=> "Croatian",
      'cs'=> "Czech",
      'da'=> "Danish",
      'nl'=> "Dutch",
      'en-ID'=> "English, Indonesia",
      'fi'=> "Finnish",
      'fr'=> "French",
      'de'=> "German",
      'el'=> "Greek",
      'he'=> "Hebrew",
      'hu'=> "Hungarian",
      'id'=> "Indonesian",
      'it'=> "Italian",
      'ja'=> "Japanese",
      'ko'=> "Korean",
      'lt'=> "Lithuanian",
      'ms'=> "Malay",
      'no'=> "Norwegian",
      'pl'=> "Polish",
      'pt-PT'=> "Portuguese",
      'pt-BR'=> "Portuguese, Brazilian",
      'ro'=> "Romanian",
      'ru'=> "Russian",
      'es-ES'=> "Spanish",
      'es-CO'=> "Spanish, Colombia",
      'sv-SE'=> "Swedish",
      'th'=> "Thai",
      'tr'=> "Turkish",
      'vi'=> "Vietnamese",
    );

    $idclause='';
    if($id) {
      $idclause=" id='$id'";
    }
    $select = '<select name="'.$name.'" class="'.$class.'" style="min-width:350px"'.$idclause.'>';

    foreach ($locales as $abbr => $locale) {
        $select .= '<option value="'.$abbr.'"'.($selected == $abbr ? ' selected="selected"' : '').'>'.$locale.'</option> ';
    }

    $select .= '</select>';

    return $select;

});


/**
* Country macro
* Generates the dropdown menu of countries for the profile form
*/
Form::macro('countries', function ($name = "country", $selected = null, $class = null, $id = null) {

    $countries = array(
    ''=>"Select a Country",
    'AC'=>'Ascension Island',
    'AD'=>'Andorra',
    'AE'=>'United Arab Emirates',
    'AF'=>'Afghanistan',
    'AG'=>'Antigua And Barbuda',
    'AI'=>'Anguilla',
    'AL'=>'Albania',
    'AM'=>'Armenia',
    'AN'=>'Netherlands Antilles',
    'AO'=>'Angola',
    'AQ'=>'Antarctica',
    'AR'=>'Argentina',
    'AS'=>'American Samoa',
    'AT'=>'Austria',
    'AU'=>'Australia',
    'AW'=>'Aruba',
    'AX'=>'Ãƒâ€¦land',
    'AZ'=>'Azerbaijan',
    'BA'=>'Bosnia And Herzegovina',
    'BB'=>'Barbados',
    'BE'=>'Belgium',
    'BD'=>'Bangladesh',
    'BF'=>'Burkina Faso',
    'BG'=>'Bulgaria',
    'BH'=>'Bahrain',
    'BI'=>'Burundi',
    'BJ'=>'Benin',
    'BM'=>'Bermuda',
    'BN'=>'Brunei Darussalam',
    'BO'=>'Bolivia',
    'BR'=>'Brazil',
    'BS'=>'Bahamas',
    'BT'=>'Bhutan',
    'BV'=>'Bouvet Island',
    'BW'=>'Botswana',
    'BY'=>'Belarus',
    'BZ'=>'Belize',
    'CA'=>'Canada',
    'CC'=>'Cocos (Keeling) Islands',
    'CD'=>'Congo (Democratic Republic)',
    'CF'=>'Central African Republic',
    'CG'=>'Congo (Republic)',
    'CH'=>'Switzerland',
    'CI'=>'Côte d\'Ivoire',
    'CK'=>'Cook Islands',
    'CL'=>'Chile',
    'CM'=>'Cameroon',
    'CN'=>'People\'s Republic of China',
    'CO'=>'Colombia',
    'CR'=>'Costa Rica',
    'CU'=>'Cuba',
    'CV'=>'Cape Verde',
    'CX'=>'Christmas Island',
    'CY'=>'Cyprus',
    'CZ'=>'Czech Republic',
    'DE'=>'Germany',
    'DJ'=>'Djibouti',
    'DK'=>'Denmark',
    'DM'=>'Dominica',
    'DO'=>'Dominican Republic',
    'DZ'=>'Algeria',
    'EC'=>'Ecuador',
    'EE'=>'Estonia',
    'EG'=>'Egypt',
    'ER'=>'Eritrea',
    'ES'=>'Spain',
    'ET'=>'Ethiopia',
    'EU'=>'European Union',
    'FI'=>'Finland',
    'FJ'=>'Fiji',
    'FK'=>'Falkland Islands (Malvinas)',
    'FM'=>'Micronesia, Federated States Of',
    'FO'=>'Faroe Islands',
    'FR'=>'France',
    'GA'=>'Gabon',
    'GD'=>'Grenada',
    'GE'=>'Georgia',
    'GF'=>'French Guiana',
    'GG'=>'Guernsey',
    'GH'=>'Ghana',
    'GI'=>'Gibraltar',
    'GL'=>'Greenland',
    'GM'=>'Gambia',
    'GN'=>'Guinea',
    'GP'=>'Guadeloupe',
    'GQ'=>'Equatorial Guinea',
    'GR'=>'Greece',
    'GS'=>'South Georgia And The South Sandwich Islands',
    'GT'=>'Guatemala',
    'GU'=>'Guam',
    'GW'=>'Guinea-Bissau',
    'GY'=>'Guyana',
    'HK'=>'Hong Kong',
    'HM'=>'Heard And Mc Donald Islands',
    'HN'=>'Honduras',
    'HR'=>'Croatia (local name: Hrvatska)',
    'HT'=>'Haiti',
    'HU'=>'Hungary',
    'ID'=>'Indonesia',
    'IE'=>'Ireland',
    'IL'=>'Israel',
    'IM'=>'Isle of Man',
    'IN'=>'India',
    'IO'=>'British Indian Ocean Territory',
    'IQ'=>'Iraq',
    'IR'=>'Iran, Islamic Republic Of',
    'IS'=>'Iceland',
    'IT'=>'Italy',
    'JE'=>'Jersey',
    'JM'=>'Jamaica',
    'JO'=>'Jordan',
    'JP'=>'Japan',
    'KE'=>'Kenya',
    'KG'=>'Kyrgyzstan',
    'KH'=>'Cambodia',
    'KI'=>'Kiribati',
    'KM'=>'Comoros',
    'KN'=>'Saint Kitts And Nevis',
    'KR'=>'Korea, Republic Of',
    'KW'=>'Kuwait',
    'KY'=>'Cayman Islands',
    'KZ'=>'Kazakhstan',
    'LA'=>'Lao People\'s Democratic Republic',
    'LB'=>'Lebanon',
    'LC'=>'Saint Lucia',
    'LI'=>'Liechtenstein',
    'LK'=>'Sri Lanka',
    'LR'=>'Liberia',
    'LS'=>'Lesotho',
    'LT'=>'Lithuania',
    'LU'=>'Luxembourg',
    'LV'=>'Latvia',
    'LY'=>'Libyan Arab Jamahiriya',
    'MA'=>'Morocco',
    'MC'=>'Monaco',
    'MD'=>'Moldova, Republic Of',
    'ME'=>'Montenegro',
    'MG'=>'Madagascar',
    'MH'=>'Marshall Islands',
    'MK'=>'Macedonia, The Former Yugoslav Republic Of',
    'ML'=>'Mali',
    'MM'=>'Myanmar',
    'MN'=>'Mongolia',
    'MO'=>'Macau',
    'MP'=>'Northern Mariana Islands',
    'MQ'=>'Martinique',
    'MR'=>'Mauritania',
    'MS'=>'Montserrat',
    'MT'=>'Malta',
    'MU'=>'Mauritius',
    'MV'=>'Maldives',
    'MW'=>'Malawi',
    'MX'=>'Mexico',
    'MY'=>'Malaysia',
    'MZ'=>'Mozambique',
    'NA'=>'Namibia',
    'NC'=>'New Caledonia',
    'NE'=>'Niger',
    'NF'=>'Norfolk Island',
    'NG'=>'Nigeria',
    'NI'=>'Nicaragua',
    'NL'=>'Netherlands',
    'NO'=>'Norway',
    'NP'=>'Nepal',
    'NR'=>'Nauru',
    'NU'=>'Niue',
    'NZ'=>'New Zealand',
    'OM'=>'Oman',
    'PA'=>'Panama',
    'PE'=>'Peru',
    'PF'=>'French Polynesia',
    'PG'=>'Papua New Guinea',
    'PH'=>'Philippines, Republic of the',
    'PK'=>'Pakistan',
    'PL'=>'Poland',
    'PM'=>'St. Pierre And Miquelon',
    'PN'=>'Pitcairn',
    'PR'=>'Puerto Rico',
    'PS'=>'Palestine',
    'PT'=>'Portugal',
    'PW'=>'Palau',
    'PY'=>'Paraguay',
    'QA'=>'Qatar',
    'RE'=>'Reunion',
    'RO'=>'Romania',
    'RS'=>'Serbia',
    'RU'=>'Russian Federation',
    'RW'=>'Rwanda',
    'SA'=>'Saudi Arabia',
    'UK'=>'Scotland',
    'SB'=>'Solomon Islands',
    'SC'=>'Seychelles',
    'SD'=>'Sudan',
    'SE'=>'Sweden',
    'SG'=>'Singapore',
    'SH'=>'St. Helena',
    'SI'=>'Slovenia',
    'SJ'=>'Svalbard And Jan Mayen Islands',
    'SK'=>'Slovakia (Slovak Republic)',
    'SL'=>'Sierra Leone',
    'SM'=>'San Marino',
    'SN'=>'Senegal',
    'SO'=>'Somalia',
    'SR'=>'Suriname',
    'ST'=>'Sao Tome And Principe',
    'SU'=>'Soviet Union',
    'SV'=>'El Salvador',
    'SY'=>'Syrian Arab Republic',
    'SZ'=>'Swaziland',
    'TC'=>'Turks And Caicos Islands',
    'TD'=>'Chad',
    'TF'=>'French Southern Territories',
    'TG'=>'Togo',
    'TH'=>'Thailand',
    'TJ'=>'Tajikistan',
    'TK'=>'Tokelau',
    'TI'=>'East Timor',
    'TM'=>'Turkmenistan',
    'TN'=>'Tunisia',
    'TO'=>'Tonga',
    'TP'=>'East Timor (old code)',
    'TR'=>'Turkey',
    'TT'=>'Trinidad And Tobago',
    'TV'=>'Tuvalu',
    'TW'=>'Taiwan',
    'TZ'=>'Tanzania, United Republic Of',
    'UA'=>'Ukraine',
    'UG'=>'Uganda',
    'UK'=>'United Kingdom',
    'US'=>'United States',
    'UM'=>'United States Minor Outlying Islands',
    'UY'=>'Uruguay',
    'UZ'=>'Uzbekistan',
    'VA'=>'Vatican City State (Holy See)',
    'VC'=>'Saint Vincent And The Grenadines',
    'VE'=>'Venezuela',
    'VG'=>'Virgin Islands (British)',
    'VI'=>'Virgin Islands (U.S.)',
    'VN'=>'Viet Nam',
    'VU'=>'Vanuatu',
    'WF'=>'Wallis And Futuna Islands',
    'WS'=>'Samoa',
    'YE'=>'Yemen',
    'YT'=>'Mayotte',
    'ZA'=>'South Africa',
    'ZM'=>'Zambia',
    'ZW'=>'Zimbabwe'
    );

    $idclause='';
    if($id) {
      $idclause=" id='$id'";
    }
    $select = '<select name="'.$name.'" class="'.$class.'" style="min-width:350px"'.$idclause.'>';

    foreach ($countries as $abbr => $country) {
        $select .= '<option value="'.strtoupper($abbr).'"'.(strtoupper($selected)== strtoupper($abbr) ? ' selected="selected"' : '').'>'.$country.'</option> ';
    }

    $select .= '</select>';

    return $select;

});


/**
* Barcode macro
* Generates the dropdown menu of available barcodes
*/
Form::macro('barcode_types', function ($name = "barcode_type", $selected = null, $class = null) {

    $barcode_types = array(
    'QRCODE'=>"QR Code",
    'PDF417'=>'PDF417',
    'DATAMATRIX'=>'DATAMATRIX',
    'C128'=>'Code 128'
    );

    $select = '<select name="'.$name.'" class="'.$class.'">';

    foreach ($barcode_types as $code => $codename) {
        $select .= '<option value="'.$code.'"'.($selected == $code ? ' selected="selected"' : '').'>'.$codename.'</option> ';
    }

    $select .= '</select>';

    return $select;

});


/**
* Currency macro
* Generates the dropdown menu of world currencies
*/
Form::macro('currencies', function ($name = "currency", $selected = null, $class = null) {

      $currencies =  array(
        'USD' => array('name'=>'US/Canadian/etc Dollar', 'symbol'=>'$','symbol_html'=>'$'),
        'GBP' => array('name'=>'GBP - British Pounds', 'symbol'=>'£','symbol_html'=>'&pound;'),
        'EUR' => array('name'=>'EUR - Euros', 'symbol'=>'€','symbol_html'=>'&euro;'),
        'BGN' => array('name'=>'BGN - Bulgarian lev', 'symbol'=>'лв.','symbol_html'=>'лв.'),
        'BRL' => array('name'=>'BRL - Brazilian Real', 'symbol'=>'R$','symbol_html'=>'R$'),
        'CZK' => array('name'=>'CZK - Czech koruny', 'symbol'=>'Kč','symbol_html'=>'CZK'),
        'DKK' => array('name'=>'DKK - Danish Kroner', 'symbol'=>'kr','symbol_html'=>'kr'),
        'HUF' => array('name'=>'HUF - Hungarian Forints', 'symbol'=>'Ft','symbol_html'=>'Ft'),
        'ILS' => array('name'=>'ILS - Israeli Shekels', 'symbol'=>'₪','symbol_html'=>'&#8362;'),
        'JPY' => array('name'=>'JPY - Japanese Yen', 'symbol'=>'¥','symbol_html'=>'&#165;'),
        'MYR' => array('name'=>'MYR - Malaysian Ringgits', 'symbol'=>'RM','symbol_html'=>'RM'),
        'NOK' => array('name'=>'NOK - Norwegian Kroner', 'symbol'=>'kr','symbol_html'=>'kr'),
        'PHP' => array('name'=>'PHP - Philippine Pesos', 'symbol'=>'Php','symbol_html'=>'Php'),
        'PLN' => array('name'=>'PLN - Polish zloty', 'symbol'=>'zł','symbol_html'=>'PLN'),
        'INR' => array('name'=>'INR - Indian Rupee', 'symbol'=>'Rs','symbol_html'=>'&#8360;'),
        'RUB' => array('name'=>'RUB - Russian Rubles', 'symbol'=>'₽','symbol_html'=>'&#8381;'),
        'SEK' => array('name'=>'SEK - Swedish Kronor', 'symbol'=>'kr','symbol_html'=>'kr'),
        'CHF' => array('name'=>'CHF - Swiss Francs', 'symbol'=>'CHF','symbol_html'=>'CHF'),
        'THB' => array('name'=>'THB - Thai Baht', 'symbol'=>'฿','symbol_html'=>' &#3647;'),
        'TRY' => array('name'=>'TRY - Turkish Liras', 'symbol'=>'TL','symbol_html'=>' &#3647;'),
        'UAH' => array('name'=>'UAH - Ukrainian Hryvnias', 'symbol'=>'₴','symbol_html'=>'&#8372;'),
        'ZAR' => array('name'=>'ZAR - South African Rand', 'symbol'=>'R','symbol_html'=>'R'),
        'AED' => array('name'=>'AED - United Arab Emirates Dirham', 'symbol'=>'AED','symbol_html'=>'AED'),
        'CNY' => array('name'=>'CNY - Chinese Yuan', 'symbol'=>'¥','symbol_html'=>'&#165;'),
  	);

    $select = '<select name="'.$name.'" class="'.$class.'">';
    foreach ($currencies as $currency) {
        $select .= '<option value="'.$currency['symbol'].'"'.($selected == $currency['symbol'] ? ' selected="selected"' : '').'>'.$currency['name'].' ('.$currency['symbol'].')</option> ';
    }

    $select .= '</select>';

    return $select;

});



Form::macro('alt_barcode_types', function ($name = "alt_barcode", $selected = null, $class = null) {

    $barcode_types = array(
        'C128',
        'C39',
        'PDF417',
        'EAN5',

    );

    $select = '<select name="'.$name.'" class="'.$class.'">';
    foreach ($barcode_types as $barcode_type) {
        $select .= '<option value="'.$barcode_type.'"'.($selected == $barcode_type ? ' selected="selected"' : '').'>'.$barcode_type.'</option> ';
    }

    $select .= '</select>';

    return $select;

});


Form::macro('barcode_types', function ($name = "barcode_type", $selected = null, $class = null) {

    $barcode_types = array(
        'QRCODE',
        'DATAMATRIX',

    );

    $select = '<select name="'.$name.'" class="'.$class.'">';
    foreach ($barcode_types as $barcode_type) {
        $select .= '<option value="'.$barcode_type.'"'.($selected == $barcode_type ? ' selected="selected"' : '').'>'.$barcode_type.'</option> ';
    }

    $select .= '</select>';

    return $select;

});

Form::macro('username_format', function ($name = "username_format", $selected = null, $class = null) {

    $formats = array(
        'firstname.lastname' => trans('general.firstname_lastname_format'),
        'firstname' => trans('general.first_name_format'),
        'filastname' => trans('general.filastname_format'),

    );

    $select = '<select name="'.$name.'" class="'.$class.'" style="width: 100%">';
    foreach ($formats as $format => $label) {
        $select .= '<option value="'.$format.'"'.($selected == $format ? ' selected="selected"' : '').'>'.$label.'</option> '."\n";
    }

    $select .= '</select>';

    return $select;

});

Form::macro('two_factor_options', function ($name = "two_factor_enabled", $selected = null, $class = null) {

    $formats = array(
        '' => trans('admin/settings/general.two_factor_disabled'),
        '1' => trans('admin/settings/general.two_factor_optional'),
        '2' => trans('admin/settings/general.two_factor_required'),

    );

    $select = '<select name="'.$name.'" class="'.$class.'" style="width: 500px">';
    foreach ($formats as $format => $label) {
        $select .= '<option value="'.$format.'"'.($selected == $format ? ' selected="selected"' : '').'>'.$label.'</option> '."\n";
    }

    $select .= '</select>';

    return $select;

});


Form::macro('customfield_elements', function ($name = "customfield_elements", $selected = null, $class = null) {

    $formats = array(
        'text' => 'Text Box',
        'listbox' => 'List Box',
     //   'checkbox' => 'Checkbox',
     //   'radio' => 'Radio Buttons',
    );

    $select = '<select name="'.$name.'" class="'.$class.'" style="width: 100%">';
    foreach ($formats as $format => $label) {
        $select .= '<option value="'.$format.'"'.($selected == $format ? ' selected="selected"' : '').'>'.$label.'</option> '."\n";
    }

    $select .= '</select>';

    return $select;

});
