$(window).load(function(){
//  $("#beginning").css({"margin-top": ($(window).height()/2)-($("#beginning").height()/2)},0).delay(1000).animate({opacity: 1},1000);

  $(document).mousemove(function(e){
  	x = Math.round((e.pageX-$(window).width()/2)/$(window).width()*200);
  	y = Math.round(($(window).height()/2-e.pageY)/$(window).height()*200);

    console.log( x + ", " + y );

    $("#beginning ul li a span").css('background-position',x/10 + "px " + y/10 + "px");
  });
});