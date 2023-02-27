// ==UserScript==
// @name         Jira Ticket Cleanup
// @namespace    https://alexandergolin.com/
// @version      0.4
// @description  UX enhancements for MongoDB's Jira ticket view.
// @author       Alexander Golin
// @match        https://jira.mongodb.org/browse/*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/jira/ticket.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/jira/ticket.js
// ==/UserScript==

(function () {
    'use strict';
    console.log("Jira Ticket Cleanup Running")
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

        /* Sidebar Tweaking */
        #peopledetails dt {
            width: 75px!important;
            display: inline-block;
        }
        #peopledetails dd {
            width: calc(100% - 75px)!important;
            display: inline-block;
        }


        /********************/
        /* Sidebar Clean Up */
        /********************/
        /* Assign to Me Button */
        #assign-to-me {
            display: none;
        }

        /* Last Commenter */
        #peopledetails>dl:nth-child(4) {
            display: none;
        }

        /* Votes */
        .mod-content>.item-details:nth-child(2)>dl:nth-child(1) {
            display: none;
        }

        /* Days Since Reply */
        #datesmodule .dates:nth-child(3) {
            display: none;
        }

        /* Date of First Reply */
        #datesmodule .dates:nth-child(4) {
            display: none;
        }

        /* Agile Panel */
        #greenhopper-agile-issue-web-panel {
            display: none;
        }

        /*************************/
        /* Custom Field Clean Up */
        /*************************/
        /* Number of Replies */
        #rowForcustomfield_10050 {
            display: none;
        }

        /* Last Comment by Customer */
        #rowForcustomfield_10057 {
            display: none;
        }
    `;
}
