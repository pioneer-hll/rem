$(window).resize(function(){
	var width = window.innerWidth;
	if(width<=640&&width>=320){
		$("html").css({"fontSize":100*width/640 + "px"});
	}else if(width>640){
		$("html").css({"fontSize":100*640/640 + "px"});
	}else if(width<320){
		$("html").css({"fontSize":100*320/640 + "px"});
	}
}).trigger("resize");
