$(window).load(function(){
  $("#beginning").css({"margin-top": ($(window).height()/2)-120},0).delay(1000).animate({opacity: 1},1000);
  $(document).mousemove(function(e){
    $("#beginning").css('background-position',10-(((e.pageX-($(window).width()/2))/$(window).width())*6));
    $("#middle").css('background-position',((e.pageX-($(window).width()/2))/$(window).width())*5);
  });
});