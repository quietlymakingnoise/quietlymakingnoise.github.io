$(document).ready(function() {
    $('#fade').fadeIn(400);
});

$('#releaseImg').on('hover', function() {
    opacity: 0.5;
});

document.addEventListener('play', function(e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);

$('.mobile-menu-icon').click(function(){
  $('.mobile-menu-links').toggleClass('mobile-menu-open',200);
});
$('li a').click(function(){
  $('.mobile-menu-links').toggleClass('mobile-menu-open',200);
});
