// ==UserScript==
// @name         Google Docs Cleanup
// @namespace    https://alexandergolin.com/
// @version      0.1
// @description  Visual Tweaks for Google Docs
// @author       Alexander Golin
// @match        https://docs.google.com/*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/google/docs.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/google/docs.js
'use strict';
console.log("Google Docs Cleanup Running")
var styles = `
:root 
{
--custom-highlight: red;
--custom-buffer: rgba(255, 0, 0, 0.3);
}

/* Responsive Width Comment Threads */
.docs-gm .docos-layout-anchored-auto-resize .docos-anchoreddocoview {
    width: 90%;
    min-width: 300px;
    max-width: 800px;
}

/* Responsive Height & Width Comment History Panel */
div.docos-streampane-container div.docos-stream-view-height {
    max-height: calc(90vh - 100px);
}

div.docos-streampanesize {
    width: 40vw;
    min-width: 400px;
}
`;
var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.body.appendChild(styleSheet);
