$(document).ready(function(){
	// $('body').addClass("index loading");
    $('.button').hover(function(event){
      $(this).children(".dropdown-menu").delay( 300 ).slideToggle();
    });
    $('.dropdown-toggle').dropdown();
    // $('#edit').on('click',function(){
    //   window.open('./editor/editor.html', 'abc',
    //   "channelmode=no,directories=no,fullscreen=no,location=no,menubar=no,resizeable=yes,scrollbars=yes,status=no,toolbar=no,left=400,top=200,width=700,height=450", 'false');
    // });




});
