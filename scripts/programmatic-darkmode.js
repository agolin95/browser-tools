$(function() {
    console.log( "~~~~~~~~~~~~DEBUG~~~~~~~~~~~~" );
    
	darkify(document)
	// Rerun to catch updates to DOM
	setInterval(() => {  
		darkify(document)
	}, 1000);
});

function darkify(doc) {
	doc.querySelectorAll('*').forEach(function(node) {
	    darkBackground(node);
	    darkText(node)
		
		
		
		if (node.nodeName == "IFRAME") {
			var iframeDoc = (node.contentWindow || node.contentDocument);
		}
		
		if (node instanceof SVGElement) {
			console.log("ay");
			node.style.fill = "white";
		}
		
	});
}

function getComputed(elem, property) {
	return window.getComputedStyle(elem, null).getPropertyValue(property)
}

function darkBackground(node) {
    var bgColor = getComputed(node, 'background-color')
	rgb = isRGB(bgColor) ? getChannels(bgColor) : [0,0,100];
	hsl = RGBtoHSL(rgb);
	// If bright, make it dark by inverting
	if (hsl[2] > 30) {
		var offset = 10;
		var newL = 100 - hsl[2] + offset;
		newL = Math.min(newL, 30);
	}
	// If not very colorful, make it grayscale
	if (hsl[1] < 20) {
		var newS = 0;
	}
	node.style.background = `hsl(${hsl[0]},${newS}%,${newL}%)`;
}

function darkText(node) {
	var textColor = getComputed(node, 'color')
	rgb = isRGB(textColor) ? getChannels(textColor) : [0,0,0];
	hsl = RGBtoHSL(rgb);
	// If dark, make it bright by inverting
	if (hsl[2] < 70) {
		var offset = 10;
		var newL = 100 - hsl[2];
		newL = Math.max(newL, 70);
	}
	// If colorful text, tone it down
	if (hsl[1] > 50) {
		var newS = hsl[1] - 30;
		newS = Math.min(newS, 50);
	}
	node.style.color = `hsl(${hsl[0]},${newS}%,${newL}%)`;
}


function isRGB(colorString) {
	if (colorString.substring(0,3) == "rgb") {
		return true
	} else {
		return false
	}
}

function getChannels(colorString) {
	var rgb = colorString.replace(/[^\d,]/g, '').split(',');
	
	rgb.forEach(function(channel, i, rgb) {
		rgb[i] = parseInt(channel);
	});
	
	return rgb;
}

function RGBtoHSL(rgb) {
	r = rgb[0]/255;
	g = rgb[1]/255;
	b = rgb[2]/255;
	cmax = Math.max(r, g, b);
	cmin = Math.min(r, g, b);
	delta   = cmax - cmin;

	// Calculate hue
	// No difference
	if (delta === 0) {
    	h = 0;
	}
	// Red is max
	else if (cmax == r) {
    	h = ((g - b) / delta) % 6;
	}
	// Green is max
	else if (cmax == g) {
    	h = (b - r) / delta + 2;
	}
	// Blue is max
	else {
    	h = (r - g) / delta + 4;
	}
  
	h = Math.round(h * 60);
    
	// Make negative hues positive behind 360°
	if (h < 0) {
		h += 360;
	}
	
	// Calculate lightness
	l = (cmax + cmin) / 2;

	// Calculate saturation
	s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
	// Multiply l and s by 100
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);
	
	return [h,s,l];
}