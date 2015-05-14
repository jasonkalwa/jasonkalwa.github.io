$(window).load(function(){
//  $("#beginning").css({"margin-top": ($(window).height()/2)-($("#beginning").height()/2)},0).delay(1000).animate({opacity: 1},1000);

  $(document).mousemove(function(e){
  	x = Math.round((e.pageX-$(window).width()/2)/$(window).width()*200);
  	y = Math.round((e.pageY-$(window).height()/2)/$(window).height()*200);

    $("#beginning ul li a").css('left',(-50+x/10) + "px");
    $("#beginning ul li a").css('top',(-50+y/10) + "px");
  });
});