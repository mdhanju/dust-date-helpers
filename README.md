# dust-date-helpers

This repository holds date helpers for Dust.

npm install dust-date-helpers --save

bower install dust-date-helpers --save


Usage

{@formatDate format="DD MMM YYYY" value="{endDate}"/}

Formats supported

"MMMM Do YYYY, h:mm:ss a"	// January 7th 2016, 12:47:16 pm

"dddd"                   	// Thursday 

"MMM Do YY"               	// Jan 7th 16

"YYYY [escaped] YYYY"    	// 2016 escaped 2016

"DD MMM YYYY"				// 07 Jan 2016


kraken.js setting

config.json
"dust": {
    "helpers": [
		"dustjs-helpers", "dust-date-helpers"
    ]
}