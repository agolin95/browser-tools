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
    textCleanup();
    arrangeBars();
})();

function arrangeBars() {
    $(".command-bar").insertBefore("#issue-content .aui-page-header")

    $(".jira-issue-status-lozenge").insertAfter("ol.aui-nav > li:nth-child(2)");
    $("#priority-val > img:nth-child(1)").insertAfter("ol.aui-nav > li:nth-child(2)");
    $("#type-val > img:nth-child(1)").insertAfter("ol.aui-nav > li:nth-child(2)");

    $("#viewissuesidebar").prepend("<div id='categorymodule'><ul class='property-list'></ul></div>");
    $("#categorymodule>.property-list").prepend($("li.item:nth-child(7)"));
    $("#categorymodule>.property-list").prepend($("#rowForcustomfield_10857"));
}


function textCleanup() {
    var summary = $("#summary-val").html().replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
    $("#summary-val").html(summary);

    var watchText = $("#watching-toggle").html().trim();
    if (watchText == "Stop watching this issue") {
        $("#watching-toggle").html("Unwatch");
    }
    else if (watchText == "Start watching this issue") {
        $("#watching-toggle").html("Watch");
    }

    $("#categorymodule > ul:nth-child(1) > li:nth-child(2) > div:nth-child(1) > strong:nth-child(1)").html("Components:");
}

function toggleOffEmptyFields() {
    toggleOffIfEmpty("#resolution-val", "li.item:nth-child(4)", "Unresolved");
    toggleOffIfEmpty("#versions-val", "li.item:nth-child(5)", "None");
    toggleOffIfEmpty("#fixfor-val", "li.item:nth-child(6)", "None");
    toggleOffIfEmpty("#labels-2259688-value", "li.item:nth-child(8)", "None");
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
        #assign-to-me,
        #greenhopper-agile-issue-web-panel,
        #reporter,
        #attachmentmodule,
        .aui-toolbar2-secondary,
        #opsbar-comment-issue_container,
        #assign-issue,
        .issue-header-content .aui-nav-breadcrumbs > li + li::before,
        div.aui-page-header:nth-child(2) > div:nth-child(1) > div:nth-child(1),
        .aui-button.toggle-title,
        #details-module_heading,
        #descriptionmodule-label,
        #peoplemodule-label,
        #datesmodule-label,
        #issuedetails > li:nth-child(1),
        li.item-right:nth-child(2),
        li.item:nth-child(3){
            display: none;
        }

        .issue-header .issue-header-content > .command-bar {
            padding-bottom: 0px;
        }

        #summary-val {
            font-weight: 600;
        }

        .issue-header-content .aui-nav-breadcrumbs > li + li {
            padding-left: 0px;
        }

        #key-val {
            font-size: 16px;
            font-weight: 500;
        }

        #descriptionmodule {
            margin-top: 0px;
            padding-top: 0px;
        }

        #categorymodule>.property-list {
            padding-left: 20px;
        }

        .issue.view {
            max-width: 2000px;
            margin-right: auto;
            margin-left: auto;
        }

        .item-details dl > dt,
        .property-list .item .name{
            width: 100px;
        }

    `;
}
