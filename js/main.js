$(function() {
	$(".header menu li a").each(function() {
		$(this).click(function() {

			var page = $(this).attr("accesskey");
			page = page + ".html";

			$.ajax({
				url : "./" + page,
				method : "GET",
				xhrFields : {
					withCredentials : true
				}

			}).done(function(data) {
				$(".content").html(data);
			});
			
			$(".header menu li a.active").removeClass("active");
			
			$(this).addClass("active");
		})
	});
	
	var url = "about.html";

	var section = window.location.hash.substr(1);
	
	if (section.startsWith("ecsl")) {
		url = "ecsl/" + section.substring(section.indexOf("/") + 1) + "/ecsl.html";
		section = "ecsl";
	} else if (section != "") {
		url = section + ".html";
	} else {
		section = "about";
	}
	
	$.ajax({
		url : url,
		method : "GET"
	}).done(function(data) {
		$("a[accesskey=" + section + "]").addClass("active");
		$(".content").html(data);
	});
});

function event_start($) {
	// Create the links to the ECSL pages
	$(".box-container menu ul li a").each(function() {
		$(this).click(function() {
			var attr = $(this).attr("href");
			attr = attr.substring(1);
			var page = attr + "/ecsl.html";
			
			$.ajax({
				url : "./" + page,
				method : "GET",
				xhrFields : {
					withCredentials : true
				}

			}).done(function(data) {
				$(".content").html(data);
			});
		
		});
	});
	
	// Start event in page 1
	ulEvent = $('.event ul');
	loadPage(ulEvent, 0);
	verifyEventsButton();
}

function ecsl_start($) {
	// Start gallery in page 1
	ulGallery = $('.gallery ul');
	loadPage(ulGallery, 0);
	verifyGalleryButton();
	
	// Update the image's path
	var section = window.location.hash.substr(1);
	var ecsl = section.substr(section.indexOf("/") + 1);
	$(".gallery ul li a").each(function() {
		var href = $(this).attr("href").substr(1);
		$(this).attr("href", "../gallery/" + ecsl + "/" + href);
	});
	
	// Start the plugin responsible for showing the image 
	$(".gallery").magnificPopup({
		delegate: 'a',
		type: "image",
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [1, 3]
		}
	});
}