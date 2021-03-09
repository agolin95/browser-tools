$(function() {
	setTimeout(() => {  
		$('#show-more-links-link').click()
	}, 5000);
	
    var firstUrl = window.location.href
	document.addEventListener('click', function() {
		var newUrl = window.location.href;
		if (firstUrl != newUrl) {
			setTimeout(() => {  
				$('#show-more-links-link').click()
			}, 1000);
		}
	});
});