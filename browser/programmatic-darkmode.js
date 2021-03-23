$(function() {
    console.log( "~~~~~~~~~~~~DEBUG~~~~~~~~~~~~" );
    console.log( "~~~~~~~~~~~~DEBUG~~~~~~~~~~~~" );

	// Higher means more colors will be made grayscale
	TINTTOL = 50
	
	darkifyBackground()
	// Rerun to catch updates to DOM
	setInterval(() => {  
		darkifyBackground()
	}, 1000);
});

function darkifyBackground() {
	document.querySelectorAll('*').forEach(function(node) {
	    bgColor = getComputed(node, 'background-color')
	    switch(whatColor(bgColor)) {
	    	case "invalid":
				break;
	    	case "alpha":
				break;
			case "color":
				node.classList.add("colorTarget");
				node.classList.add("important");
				break;
			case "darkest":
				node.classList.add("darkestTarget");
				node.classList.add("important");
				break;
	    	case "dark":
	    		node.classList.add("darkTarget");
				node.classList.add("important");
				break;
			case "middle":
	    		node.classList.add("middleTarget");
				node.classList.add("important");
				break;
			case "light":
	    		node.classList.add("lightTarget");
				node.classList.add("important");
				break;
			case "lightest":
	    		node.classList.add("lightestTarget");
				node.classList.add("important");
				break;
	    }
	});
}

function getComputed(elem, property) {
	return window.getComputedStyle(elem, null).getPropertyValue(property)
}

function whatColor(colorString) {
	if (isRGBA(colorString)) {
		return "alpha"
	} else if (isRGB(colorString)) {
		r = getChannel(colorString, "red");
		g = getChannel(colorString, "green");
		b = getChannel(colorString, "blue");
		// Gray Range
		if (r <= g + TINTTOL && r >= g - TINTTOL && r <= b + TINTTOL && r >= b - TINTTOL) {
			if (r <= 50) {
				return "darkest";
			} else if (r <= 100) {
				return "dark";
			} else if (r <= 150) {
				return "middle";
			} else if (r <= 200) {
				return "light";
			} else if (r <= 255) {
				return "lightest";
			}
		} else {
			return "color";
		}	
	} else {
		return "invalid"
	}
}

function isRGBA(colorString) {
	if (colorString.substring(0,4) == "rgba") {
		return true
	} else {
		return false
	}
}

function isRGB(colorString) {
	if (colorString.substring(0,3) == "rgb") {
		return true
	} else {
		return false
	}
}

function getChannel(colorString, color) {
	rgb = colorString.replace(/[^\d,]/g, '').split(',');
	
	rgb.forEach(function(channel, i, rgb) {
		rgb[i] = parseInt(channel);
	});
	
	switch(color) {
		case "red":
			return rgb[0];
		case "green":
			return rgb[1];
		case "blue":
			return rgb[2];
	}
}