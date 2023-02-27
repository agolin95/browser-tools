// ==UserScript==
// @name         GitHub Cleanup
// @namespace    https://alexandergolin.com/
// @version      0.1
// @description  Visual Tweaks for GitHub
// @author       Alexander Golin
// @match        https://github.com/*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/github.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/github.js
// ==/UserScript==

(function () {
    'use strict';
    console.log("GitHub Style Cleanup Running")
    var styleSheet = document.createElement("style");
    styleSheet.innerText = getStyles();
    document.body.appendChild(styleSheet);
})();

function getStyles() {
    return `
        :root
        {
        --custom-highlight: red;
        --custom-buffer: rgba(255, 0, 0, 0.3);
        }
    
        /* Compact Code Review View */
        .timeline-comment-header-text {
            padding: 0px;
        }

        .timeline-comment-action {
            padding: 0px;
            padding-right: 5px;
            padding-bottom: 2px;
        }

        .comment-body {
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .TimelineItem {
            padding: 2px;
        }

        .js-minimizable-comment-group {
            padding: 2px;
        }

        .review-comment {
            padding: 2px 2px;
        }

        .review-comment:last-child {
            padding-bottom: 2px;
        }

        .review-comment:first-child {
            padding-top: 2px;
        }

        .m-3 {
            margin: 2px !important;
            padding: 2px;
        }

        .file-header {
            padding: 2px 2px;
        }

        .diff-table>tbody>tr[data-position="0"] {
            display: none;
        }
    `;
}
