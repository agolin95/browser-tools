$(function() {
	setTimeout(() => {  
		$('#show-more-links-link').click()
	}, 1000);
	
	document.addEventListener('click', function(e) {
		elem = e.target
		for (i = 0;i < 10; i++) {
			if ($(elem).hasClass("ghx-issue")) {
				setTimeout(() => {  
					$('#show-more-links-link').click()
				}, 1000);
			}
			elem = elem.parentNode
		}
	});
});