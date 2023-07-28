// ==UserScript==
// @name         WCO Cleanup
// @namespace    https://alexandergolin.com/
// @version      0.1
// @description  Visual Tweaks for WCO
// @author       Alexander Golin
// @match        https://www.wcostream.org/*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/wco.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/wco.js
// ==/UserScript==

(function () {
	'use strict';
	console.log("Plex Style Cleanup Running")
	var styleSheet = document.createElement("style");
	styleSheet.innerText = getStyles();
	document.body.appendChild(styleSheet);
})();

function getStyles() {
	return `
		:root
		{
        --black: black;
        --white: white;
		--custom-highlight: red;
		}

        body,
        .pcat-p-title,
        .vsbaslik,
        .ilxbaslik8,
        .larkax,
        .topb,
        .animesearch,
        #content
        {
        background: var(--black);
        }

        .iltext > div:nth-child(1),
        .iltext > div:nth-child(2),
        .ilxbaslik8 h1 a
        {
        color: var(--custom-highlight)!important;
        }

        #searchbox,
        .iltext
        {
        color: var(--white);
        }

        .topb > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1),
        .topb > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1),
        .bh,
        .alert,
        #cat-sharing,
        #cat-genre,
        #cat-playlist-butons,
        #div-3-198477439 > div:nth-child(1),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(6),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(7),
        #sidebar > table:nth-child(1),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3),
        .iltext > table:nth-child(5),
        #star-watch-on,
        #b-report,
        .anti-ad,
        #footer,
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)
        {
        display: none!important;
        }

        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1)
        {
        width: 100%!important;
        }

        .iltext,
        .ilxbaslik8 h1
        {
        text-align: center;
        }

        .ilxbaslik8
        {
        height: none;
        }

	`;
}
