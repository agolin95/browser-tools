// ==UserScript==
// @name         Jira Backlog & Board UX Enhancements
// @namespace    https://alexandergolin.com/
// @version      0.7
// @description  UX enhancements for MongoDB's Jira backlog and board views.
// @author       Alexander Golin
// @match        https://jira.mongodb.org/secure/RapidBoard.jspa*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/jira/board_and_backlog.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/jira/board_and_backlog.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==


(function () {
    'use strict';
    var onoff = "on"
    console.log("Jira Board & Backlog Cleaner Starting Up!");
    $("#ghx-modes-tools").prepend(`
	<div id="toggle-extra-fields" class="custom-button aui-button">
		<p>Toggle Extra Fields</p>
	</div>
	`)
    $("#toggle-extra-fields").click(function () {
        if (onoff == "on") {
            onoff = "off";
        }
        else if (onoff == "off") {
            onoff = "on";
        }
    });
    addCSS();
    setInterval(function () {
        cleanUpBacklog();
        cleanUpBoard();
        toggleFields(onoff);
    }, 500);
})();

function cleanUpBacklog() {
    $(".ghx-plan-extra-fields").each(function () {
        styleFields($(this));
    });
}

function cleanUpBoard() {
    $(".ghx-extra-fields").each(function () {
        styleFields($(this));
    });

    $(".ghx-type").each(function () {
        $(this).parent().find(".ghx-issue-fields").prepend($(this));
    })
}

function styleFields(fields) {
    let emptyFields = true;
    let i = 0
    fields.find(".ghx-extra-field").each(function () {
        let field = $(this);
        let stripped = strip_mothra(field.text());
        field.text(stripped);
        if (field.text() == "None" || field.text() == "") {
            field.addClass("extra-field-hidden");
        } else {
            emptyFields = false;
            field.addClass("extra-field-" + i);
        }
        i += 1;
    })
    if (emptyFields) fields.addClass("extra-field-hidden");
}

function toggleFields(onoff) {
    if (onoff == "on") {
        $(".ghx-plan-extra-fields").each(function () {
            $(this).removeClass("extra-field-hidden");
        })
        $(".ghx-extra-fields").each(function () {
            $(this).removeClass("extra-field-hidden");
        })
        cleanUpBacklog();
    }
    else if (onoff == "off") {
        $(".ghx-plan-extra-fields").each(function () {
            $(this).addClass("extra-field-hidden");
        })
        $(".ghx-extra-fields").each(function () {
            $(this).addClass("extra-field-hidden");
        })
    }
}

function addCSS() {
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    let css = `

    .ghx-grabber {
        width: 5px;
    }

    .custom-button {
        background: #111;
        color: white;
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

    .extra-field-2 {
        background: #00684a;
        color: white;
    }

    .extra-field-1 {
        background: #70a7d4;
        color: white;
    }

    .extra-field-0 {
        background: #9100ff;
        color: white;
    }

    .extra-field-hidden {
        display: none!important;
    }

    .ghx-extra-field-row {
        display: inline-block;
    }

    .ghx-summary {
        font-weight: 600;
    }
    .ghx-type, .ghx-flags {
        position: absolute;
        top:12px;
    }
    .ghx-flags {
     left: 30px;
    }
    .ghx-key {
      padding-left: 40px;
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

function strip_mothra(components) {
    components = strip_substring(components, ", Mothra,");
    components = strip_substring(components, ", Mothra");
    components = strip_substring(components, "Mothra,");
    components = strip_substring(components, "Mothra");
    return components

}

function strip_substring(str, substr) {
    const result = str.replace(substr, '').replace(/\s\s+/g, '');
    const final = result.trim();
    return final;
}
