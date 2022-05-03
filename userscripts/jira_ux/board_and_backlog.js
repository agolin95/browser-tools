// ==UserScript==
// @name         Jira Backlog & Board UX Enhancements
// @namespace    https://alexandergolin.com/
// @version      0.3
// @description  UX enhancements for MongoDB's Jira backlog and board views.
// @author       Alexander Golin
// @match        https://jira.mongodb.org/*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @require      http://code.jquery.com/jquery-3.x-git.min.js
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/jira_ux/board_and_backlog.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/jira_ux/board_and_backlog.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function () {
    'use strict';
    addCSS();
    toggleExtraFields();
    setInterval(function () {
        cleanUpBacklog();
        cleanUpBoard();
    }, 500);
})();

function cleanUpBacklog() {
    $(".ghx-plan-extra-fields").each(function () {
        let fields = $(this);
        let emptyFields = true;
        fields.find(".ghx-extra-field").each(function () {
            let field = $(this);
            if (field.text() != "None") {
                emptyFields = false;
                field.addClass(getFieldNameAsClass(field));
            } else {
                field.hide();
            }
        })
        if (emptyFields) fields.hide();
    });
}

function cleanUpBoard() {
    $(".ghx-extra-fields").each(function () {
        let fields = $(this);
        let emptyFields = true;
        fields.find(".ghx-extra-field").each(function () {
            let field = $(this);
            if (field.text() != "None") {
                emptyFields = false;
                field.addClass(getFieldNameAsClass(field));
            } else {
                field.hide();
            }
        })
        if (emptyFields) fields.hide();
    });
}

function getFieldNameAsClass(extraField) {
    let fieldName = extraField.attr('title').split(":")[0];
    fieldName = fieldName.replace('/', '').replace(' ', '').toLowerCase();
    return "extra-field-" + fieldName;
}

function toggleExtraFields() {
    $("#ghx-modes-tools").prepend(`
	<div id="toggle-extra-fields" class="custom-button aui-button">
		<p>Toggle Extra Fields</p>
	</div>
	`)
    $("#toggle-extra-fields").click(function () {
        $(".ghx-plan-extra-fields").each(function () {
            $(this).toggle();
        })
        $(".ghx-extra-fields").each(function () {
            $(this).toggle();
        })
        cleanUpBacklog();
    });
}

function addCSS() {
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    let css = `

    .ghx-grabber {
        width: 5px;
    }

    .saved-search-selector {
        padding: 10px 10px 0 10px;
    }

    .navigator-search {
        padding: 10px 10px 10px 10px;
        margin-top: 0px;
    }

    .ajs-layer.box-shadow {
        width: 500px!important;
    }

    .custom-button {
        background: #111;
        color: white;
    }

    .collapsed-epic {
        border: solid purple 2px;
        background: #f1c7fc;
        padding: 5px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 3px;
        border-radius: 2px;
        box-shadow: 0 0 1px 0 rgba(9,30,66,0.31),0 2px 4px -1px rgba(9,30,66,0.25);
    }

    .collapsed-epic div {
        margin-left: 10px;
    }

    .ghx-extra-field-seperator {
        display: none!important;
    }

    .ghx-agile .aui-label.ghx-label {
        max-width: 20em;
    }

    .ghx-issue-compact .ghx-plan-extra-fields.ghx-plan-extra-fields.ghx-row {
        margin-left: 62px;
    }

    .ghx-statistic-badge {
        display: none;
    }

    .ghx-extra-field  {
        background: #eee;
        margin-right: 10px!important;
        padding-right: 5px!important;
        padding-left: 5px!important;
        border-radius: 5px!important;
        min-width: 0px!important;
    }

    .extra-field-servercompat {
        background: #fc03c2;
        color: white;
    }

    .extra-field-components {
        background: #70a7d4;
        color: white;
    }

    .extra-field-quarter {
        background: #9100ff;
        color: white;
    }

    .ghx-extra-field-row {
        display: inline-block;
    }

    .ghx-summary {
        font-weight: 600;
    }
    `
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

}
