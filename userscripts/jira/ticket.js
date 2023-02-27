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
var $ = window.jQuery;

(function () {
    'use strict';
    console.log("Jira Ticket Cleanup Running");
    addCSS();
    toggleOffEmptyFields();
    watchCleanup();
})();

function toggleOffEmptyFields() {
    toggleOffIfEmpty("#resolution-val", "li.item:nth-child(4)", "Unresolved");
    toggleOffIfEmpty("#versions-val", "li.item:nth-child(5)", "None");
    toggleOffIfEmpty("#fixfor-val", "li.item:nth-child(6)", "None");
    toggleOffIfEmpty("#labels-2259688-value", "li.item:nth-child(8)", "None");
}


function watchCleanup() {
    var watchText = $("#watching-toggle").html().trim()
    if (watchText == "Stop watching this issue") {
        $("#watching-toggle").html("Unwatch")
    }
    else if (watchText == "Start watching this issue") {
        $("#watching-toggle").html("Watch")
    }
}


function toggleOffIfEmpty(fieldValueSelector, fieldSelector, emptyVal) {
    if ($(fieldValueSelector).html().trim() == emptyVal) {
        $(fieldSelector).hide();
    }
}

function addCSS() {
    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles();
    document.body.appendChild(styleSheet);
}

function styles() {
    return `
        /* Assign to Me Button */
        #assign-to-me {
            display: none;
        }

        /* Agile Panel */
        #greenhopper-agile-issue-web-panel {
            display: none;
        }

        /*Reporter Panel*/
        #reporter {
            display: none;
        }

        /* Attachment Module*/
        #attachmentmodule {
            display: none;
        }
    `;
}
