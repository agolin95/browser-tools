// ==UserScript==
// @name         Jira Base Cleanup
// @namespace    https://alexandergolin.com/
// @version      0.1
// @description  UX enhancements for MongoDB's Jira base view.
// @author       Alexander Golin
// @match        https://jira.mongodb.org/*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/jira/base.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/jira/base.js
// ==/UserScript==
var $ = window.jQuery;

(function () {
    'use strict';
    console.log("Jira Base Cleanup Running");
    addCSS();
})();

function addCSS() {
    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles();
    document.body.appendChild(styleSheet);
}

function styles() {
    return `
        #system-help-menu {
            display: none;
    `;
}
