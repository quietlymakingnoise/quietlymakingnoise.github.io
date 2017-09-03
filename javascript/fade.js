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

var feed = new Instafeed({
    get: 'user',
    userId: '4039901141',
    limit:'30',
    resolution: 'standard_resolution',
    target: 'instafeed',
    accessToken: '5882151769.ba6ff2c.b9c1c4afc5c44086bf93ed026854c1d0',
    clientId: '	ba6ff2c31594481286faf391dfa76eba'
});
feed.run();

var feed2 = new Instafeed({
    get: 'user',
    userId: '5881343163',
    limit:'30',
    resolution: 'standard_resolution',
    target: 'instafeed2',
    accessToken: '5882151769.ba6ff2c.b9c1c4afc5c44086bf93ed026854c1d0',
    clientId: '	ba6ff2c31594481286faf391dfa76eba'
});
feed2.run();
