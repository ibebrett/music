$(function() {
    var context = new webkitAudioContext();

    var gainNode = context.createGainNode();
    gainNode.gain.value = 1;
    gainNode.connect(context.destination);

    var root = 440;
    $('#root').val(root);

    $('#root').change(function(e) {
        root = 1.0*$('#root').val();
    });

    var intervals = {
        "do": 1.0,
        "so": 3.0 / 2.0,
        "me": 5.0 / 2.0,
        "re": 9.0 / 2.0,
        "fi": 45.0 / 8.0,
    };
    

    $.each(intervals, function(k, v) {
        var button = $(
            '<span class="btn btn-primary" id="root-'+k+'">'+k+"</span>"
        );

        $('#intervals').append(button);

        var oscillator = context.createOscillator();
        var running = false;
        oscillator.type = 1;
        $(button).click(function(e) {
            oscillator.frequency.value = v*root;
            if(running) {
                oscillator.disconnect(gainNode);
                oscillator.noteOff(0);
            }
            else {
                oscillator.connect(gainNode);
                oscillator.noteOn(0);
            }
            running = !running;
        });
    });
});
