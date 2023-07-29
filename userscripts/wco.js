// ==UserScript==
// @name         WCO Cleanup
// @namespace    https://alexandergolin.com/
// @version      0.2
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
        #content,
        #content > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1),
        #content > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > table:nth-child(1),
        .mansetlisteleme li,
        .shadetabs li,
        .recent-release,
        .rr_header_bar ul,
        .bartitle,
        #content > div:nth-child(6) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1),
        .menu li,
        #sidebar_right,
        .katcont,
        div.cat-listview li,
        #sidebar > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)
        {
            background: var(--black)!important;
        }

        #searchbox
        {
            background: var(--white)!important;
        }

        .iltext > div:nth-child(1),
        .iltext > div:nth-child(2),
        .ilxbaslik8 h1 a,
        .vsbaslik > h2:nth-child(1),
        .menulast a, .menu a:visited,
        a, a:visited
        {
            color: var(--custom-highlight)!important;
        }

        .iltext,
        .menu a,
        div.cat-listview li a
        {
            color: var(--white)!important;
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
        .searchboxtop > select:nth-child(1),
        .searchboxtop > input:nth-child(2),
        #content > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > img:nth-child(1),
        .message,
        #d-ackapa,
        #sidebar > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > img:nth-child(1),
        #div-3-2064453551,
        .topb > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1)
        {
            display: none!important;
        }

        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1),
        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1),
        html body div#wrap div#content table tbody tr td div.katcont div#cat-img-desc div
        {
            width: 100%!important;
        }

        .iltext,
        .ilxbaslik8 h1,
        #cat-img-desc > div:nth-child(1),
        .vsbaslik > h2:nth-child(1)
        {
            text-align: center;
        }

        .ilxbaslik8,
        .topb
        {
            height: auto!important;
        }

        #sidebar_right,
        .katcont.katcont
        {
            border: none;
        }

        #content > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > a:nth-child(1)
        {
            position: fixed;
            top: 15px;
            left: 70%;
            background: white;
            padding: 10px;
            border-radius: 5px;
        }

	`;
}
