$(function() {
	$(".accessibility").click(function() {
		var background = $("<div/>").css({
			width:   "100%",
			height:  "100%",
			padding: "0",
			margin:  "0",
			"background-color": "rgba(128, 128, 128, 0.6)",
			"z-index": 1000,
			left: 0,
			top: 0,
			position: "fixed"
		}).attr("id", "video");
		
		var video = $("<div/>").css({
			width: 560, 
			height: 339, 
			margin: "auto", 
			position: "absolute",
			top: 0, 
			left: 0,
			bottom: 0,
			right: 0
		});
		
		var videoFrame = $('<iframe width="560" height="315" ' +
						   'src="https://www.youtube.com/embed/1aPL9RNFSoM?autoplay=1" ' + 
						   'frameborder="0" allowfullscreen></iframe>');
		
		$(videoFrame).css({display: "block", margin: "0% auto 0 auto"});
		
		var a = $("<a href='#'/>").addClass("boxclose");
		
		$(a).click(function() {
			$("#video").remove();
		});
		
		$(video).append(a);
		$(video).append(videoFrame);
		
		$(background).append(video);
		
		$("body").append(background)
		
		return false;
	});
	
//	$('#fullpage').fullpage({
//        anchors:['about', 'event'],
//        sectionSelector: 'section',
//        navigation: true
//    });
	
});