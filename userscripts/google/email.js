// ==UserScript==
// @name         Email Cleanup
// @namespace    https://alexandergolin.com/
// @version      0.1
// @description  Visual Tweaks for Google Email
// @author       Alexander Golin
// @match        https://mail.google.com/*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/google/email.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/google/email.js
// @require https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

var $ = window.jQuery;

(function () {
    'use strict';
    console.log("Discord Style Cleanup Running")
    var styleSheet = document.createElement("style");
    styleSheet.innerText = getStyles();
    document.body.appendChild(styleSheet);

})();

function getStyles() {
    return `
		:root
		{
        --black: black;
		--custom-highlight: red;
		--custom-buffer: rgba(255, 0, 0, 0.3);
		}

        body,
        header#gb,
        .v83gc,
        .J2aUD.T8M5bd .sx5BGe::before,
        .SGFqbe.T8M5bd .sx5BGe::before,
        .W0m3G::before,
        .W0m3G:hover .r4nke,
        .W0m3G .r4nke,
        .Gk2izd,
        .GENA3c,
        .ULpymb,
        .eADW5d,
        .buGMKc,
        .z0 > .L3,
        .bkL,
        .gb_Ic .gb_Ze,
        .bkK > .nH {
            background: var(--black)!important;
        }


	`;
}


