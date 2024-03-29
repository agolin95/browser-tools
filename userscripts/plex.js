// ==UserScript==
// @name         Plex Cleanup
// @namespace    https://alexandergolin.com/
// @version      0.5
// @description  Visual Tweaks for Plex
// @author       Alexander Golin
// @match        https://app.plex.tv/*
// @icon         https://alexandergolin.com/img/logo.png
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/plex.js
// @updateURL    https://raw.githubusercontent.com/agolin95/browser-tools/main/userscripts/plex.js
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
		--custom-highlight: red;
		--custom-buffer: rgba(255, 0, 0, 0.3);
		}

		.react-chroma-dark
		{
		--color-background-accent: var(--custom-highlight);
		--color-brand-accent: var(--custom-highlight);
		--color-static-yellow: var(--custom-highlight);
		--color-text-accent: var(--custom-highlight);
		--color-background-accent-focus: var(--custom-highlight);
		}

		.TabButton-selected-wnNjlr,
		.SourceSidebarLink-isSelected-rPGiHo .SourceSidebarLink-iconContainer-xQGX4C,
		.SourceSidebarLink-isSelected-rPGiHo .SourceSidebarLink-title-C2NvGy,
        .IconButton-isActive-SPVM7e,
        .IconButton-isActive-SPVM7e:hover,
        .Link-isSelected-x0P_By
		{
		color: var(--custom-highlight);
		}

		.SeekBar-seekBarFill-TestC_,
		.VolumeSlider-fill-m0PeVk,
		.MetadataPosterCard-legacyUnwatchedTag-xCeVKK,
		.SourceSidebarLink-isSelected-rPGiHo::before,
		.TabButton-selected-wnNjlr::after,
		.MetadataPosterCardProgressBar-bar-xA7ztj,
		.MetadataPosterCard-legacyUnwatchedEpisodesBadge-MElNvq,
		.PlayButton-playButton-vS1WII:hover .PlayButton-playCircle-fK1f_v,
		.PlayPauseOverlay-playCircle-AOIb5b
		{
		background-color: var(--custom-highlight);
		}

		.EqualizerIcon-bar-dkJpMG
		{
		background-color: var(--custom-highlight)!important;
		}

		.Spinner-medium-CSDGzv,
		.Spinner-spinner-XTaskc,
		.spin-spin-H8VRGl
		{
		border-top-color: var(--custom-highlight)!important;
		border-left-color: var(--custom-highlight)!important;
		}

		.PosterCardLink-hoveredLink-H5OMFC
		{
		box-shadow: 0 0 0 1px var(--custom-highlight),0 0 4px rgba(0,0,0,.3);
		}

		.PlayButton-playButton-vS1WII:hover .PlayButton-playCircle-fK1f_v,
		.PlayPauseOverlay-playCircle-AOIb5b,
        .DisclosureArrow-isSelected-GKTZnd
		{
		border-color: var(--custom-highlight);
		}


		.Spinner-spinner-Q4B7Qw
		{
		border-color: var(--custom-highlight) transparent transparent var(--custom-highlight);
		}


		.NavBar-logoContainer-bFQ9Af > button:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > path:nth-child(3)
		{
		fill: var(--custom-highlight);
		}

		.SeekBar-seekBarBuffer-pao2Od
		{
		background-color: var(--custom-buffer);
		}

        .FullPageBackground-backgroundContainer-mKhZ21 {
            display: none;
        }

        html, .BottomBar-bottomBar-hnsKzI {
            background: var(--black);
        }
	`;
}
