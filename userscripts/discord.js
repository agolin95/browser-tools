// ==UserScript==
// @name         Discord Cleanup
// @namespace    https://alexandergolin.com/
// @version      0.1
// @description  Visual Tweaks for Discord
// @author       Alexander Golin
// @match        https://discord.com/*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/discord.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/discord.js
// @require https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

var $ = window.jQuery;

(function () {
    'use strict';
    console.log("Discord Style Cleanup Running")
    var styleSheet = document.createElement("style");
    styleSheet.innerText = getStyles();
    document.body.appendChild(styleSheet);

    $(".wrapper-1_HaEi").each(function () {
        $(this).addClass("tamper-hidden");
    })

    $(document).on("mousemove", function (event) {
        if (event.pageX <= 72) {
            $(".wrapper-1_HaEi").each(function () {
                $(this).removeClass("tamper-hidden");
            })
        }
        else {
            $(".wrapper-1_HaEi").each(function () {
                $(this).addClass("tamper-hidden");
            })
        }
    });


})();

function getStyles() {
    return `
		:root
		{
        --black: black;
		--custom-highlight: red;
		--custom-buffer: rgba(255, 0, 0, 0.3);
		}

        .theme-dark .themed-Hp1KC_,
        .theme-dark .scroller-3X7KbA,
        .theme-dark .container-1NXEtd,
        .chatContent-3KubbW,
        .scrollableContainer-15eg7h,
        .container-1oAagU,
        .theme-dark .themed-Hp1KC_,
        .theme-dark .scroller-3X7KbA,
        .theme-dark .container-1NXEtd,
        .chatContent-3KubbW,
        .scrollableContainer-15eg7h,
        .container-2cd8Mz,
        .privateChannels-oVe7HL,
        .theme-dark .scroller-WSmht3,
        .theme-dark .container-YkUktl,
        .container-2o3qEW,
        .member-48YF_l, .members-3WRCEx{
            background: var(--black);
        }

        .modeSelected-3DmyhH .content-1gYQeQ, .modeSelected-3DmyhH:hover .content-1gYQeQ {
            background: var(--custom-highlight);
        }

        .tamper-hidden {
            display: none;
        }

        :-moz-any(#content,#appcontent) browser{
            margin-right:-14px!important;
            overflow-y:scroll;
            margin-bottom:-14px!important;
            overflow-x:scroll;
        }

        .scroller-kQBbkU,
        #channels {
            scrollbar-width: none;
        }

	`;
}
