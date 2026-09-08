$(window).on('load', function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});


$(document).ready(function () {

    var vw;

    /* =====================================================
       PERSONALIZATION
       Reads data-name="..." from <body>. Change it once in
       index.html and every "Kavya" on the page updates.
       ===================================================== */

    var CONFIG = {
        name: $('body').data('name') || 'Friend'
    };

    $('.user-name').text(CONFIG.name);


    /* =====================================================
       WINDOW RESIZE
       ===================================================== */

    $(window).resize(function () {

        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();

        /*
         * Only reposition balloons after they have been
         * converted to b11-b88.
         */
        if ($('#b11').length) {

            if ($(window).width() <= 480) {

                // MOBILE
                $('#b11').animate({ top: 180, left: vw - 152 }, 300);
                $('#b22').animate({ top: 180, left: vw - 114 }, 300);
                $('#b33').animate({ top: 180, left: vw - 76 }, 300);
                $('#b44').animate({ top: 180, left: vw - 38 }, 300);

                $('#b55').animate({ top: 180, left: vw }, 300);
                $('#b66').animate({ top: 180, left: vw + 38 }, 300);
                $('#b77').animate({ top: 180, left: vw + 76 }, 300);
                $('#b88').animate({ top: 180, left: vw + 114 }, 300);

            } else {

                // DESKTOP
                $('#b11').animate({ top: 180, left: vw - 400 }, 300);
                $('#b22').animate({ top: 180, left: vw - 300 }, 300);
                $('#b33').animate({ top: 180, left: vw - 200 }, 300);
                $('#b44').animate({ top: 180, left: vw - 100 }, 300);

                $('#b55').animate({ top: 180, left: vw }, 300);
                $('#b66').animate({ top: 180, left: vw + 100 }, 300);
                $('#b77').animate({ top: 180, left: vw + 200 }, 300);
                $('#b88').animate({ top: 180, left: vw + 300 }, 300);
            }
        }
    });


    /* =====================================================
       TURN ON LIGHTS
       ===================================================== */

    $('#turn_on').click(function () {

        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');

        $('body').addClass('peach');

        $(this)
            .fadeOut('fast')
            .delay(2000)
            .promise()
            .done(function () {
                $('#play').fadeIn('fast');
            });
    });


    /* =====================================================
       PLAY MUSIC
       ===================================================== */

    $('#play').click(function () {

        var audio = $('.song')[0];

        if (audio) {
            audio.play();
        }

        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');

        $('body').css('background-color', '#FFF');
        $('body').addClass('peach-after');

        $(this)
            .fadeOut('fast')
            .delay(2000)
            .promise()
            .done(function () {
                $('#bannar_coming').fadeIn('fast');
            });
    });


    /* =====================================================
       BANNER
       ===================================================== */

    $('#bannar_coming').click(function () {

        $('.bannar').addClass('bannar-come');

        $(this)
            .fadeOut('fast')
            .delay(2500)
            .promise()
            .done(function () {
                $('#balloons_flying').fadeIn('fast');
            });
    });


    /* =====================================================
       BALLOON RANDOM MOVEMENT
       ===================================================== */

    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () { loopOne(); });
    }

    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () { loopTwo(); });
    }

    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () { loopThree(); });
    }

    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () { loopFour(); });
    }

    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () { loopFive(); });
    }

    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () { loopSix(); });
    }

    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () { loopSeven(); });
    }

    function loopEight() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b8').animate({ left: randleft, bottom: randtop }, 10000, function () { loopEight(); });
    }


    /* =====================================================
       BALLOONS FLYING
       ===================================================== */

    $('#balloons_flying').click(function () {

        $('.balloon-border').animate({ top: -500 }, 6000);

        $('#b1,#b4,#b5,#b7,#b8').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        loopEight();

        $(this)
            .fadeOut('fast')
            .delay(2000)
            .promise()
            .done(function () {
                $('#cake_fadein').fadeIn('fast');
            });
    });


    /* =====================================================
       SHOW CAKE
       ===================================================== */

    $('#cake_fadein').click(function () {

        $('.cake').fadeIn('fast');

        $(this)
            .fadeOut('fast')
            .delay(2000)
            .promise()
            .done(function () {
                $('#light_candle').fadeIn('fast');
            });
    });


    /* =====================================================
       LIGHT CANDLE
       ===================================================== */

    $('#light_candle').click(function () {

        $('.fuego').fadeIn('fast');

        $(this)
            .fadeOut('fast')
            .promise()
            .done(function () {
                $('#cake_cut').fadeIn('fast');
            });
    });


    /* =====================================================
       CONFETTI BURST
       Lightweight, dependency-free confetti made of small
       colored divs that fall + spin across the screen.
       ===================================================== */

    function spawnConfetti(count) {

        var colors = ['#ff5252', '#ffd740', '#69f0ae', '#40c4ff', '#e040fb', '#ff6e40', '#ffffff'];
        var $wrap = $('<div class="confetti-wrap"></div>').appendTo('body');

        for (var i = 0; i < count; i++) {

            var left = Math.random() * 100;
            var drift = Math.round(Math.random() * 240 - 120) + 'px';
            var spin = Math.round(Math.random() * 720 - 360) + 'deg';
            var duration = (1.8 + Math.random() * 1.6).toFixed(2) + 's';
            var delay = (Math.random() * 0.5).toFixed(2) + 's';
            var color = colors[Math.floor(Math.random() * colors.length)];
            var round = Math.random() > 0.5;

            var $piece = $('<div class="confetti-piece"></div>').css({
                left: left + '%',
                background: color,
                borderRadius: round ? '50%' : '2px',
                animationDuration: duration,
                animationDelay: delay
            });

            $piece[0].style.setProperty('--x-drift', drift);
            $piece[0].style.setProperty('--spin', spin);

            $wrap.append($piece);
        }

        setTimeout(function () {
            $wrap.remove();
        }, 4200);
    }


    /* =====================================================
       CUT CAKE — knife swipe, cake splits in two,
       confetti bursts, "Happy Birthday <name>" pops up
       ===================================================== */

    $('#cake_cut').click(function () {

        var $btn = $(this).fadeOut('fast');
        var $knife = $('#knife');

        // 1. Knife swipes down through the cake
        $knife.addClass('knife-slice');

        setTimeout(function () {

            var $cake = $('.cake');
            var offset = $cake.offset();
            var w = $cake.outerWidth();
            var h = $cake.outerHeight();

            // 2. Clone the cake into a left half and a right half,
            //    clipped so together they look like the whole cake,
            //    then animate them apart like a fresh slice.
            var $left = $cake.clone()
                .removeClass('cake')
                .addClass('cake cake-half cake-half-left')
                .css({ position: 'absolute', top: offset.top, left: offset.left, width: w, height: h, margin: 0, display: 'block' });

            var $right = $cake.clone()
                .removeClass('cake')
                .addClass('cake cake-half cake-half-right')
                .css({ position: 'absolute', top: offset.top, left: offset.left, width: w, height: h, margin: 0, display: 'block' });

            $('body').append($left).append($right);
            $cake.css('visibility', 'hidden');

            // Force reflow so the transition below actually animates
            $left[0].offsetHeight;

            requestAnimationFrame(function () {
                $left.addClass('cake-half-animate-left');
                $right.addClass('cake-half-animate-right');
            });

            // 3. Confetti + birthday shout-out
            spawnConfetti(90);

            var $popup = $('#bday_popup').addClass('show');
            setTimeout(function () {
                $popup.removeClass('show');
            }, 2400);

            // 4. Clean up the slice illusion and continue the flow
            setTimeout(function () {

                $knife.removeClass('knife-slice');
                $left.remove();
                $right.remove();

                $cake.css('visibility', 'visible').addClass('cake-cutting');
                setTimeout(function () {
                    $cake.removeClass('cake-cutting');
                }, 900);

                $('#wish_message').fadeIn('fast');

            }, 2000);

        }, 750);
    });


    /* =====================================================
       WISH MESSAGE
       ===================================================== */

    $('#wish_message').click(function () {

        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();

        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22');
        $('#b3').attr('id', 'b33');
        $('#b4').attr('id', 'b44');
        $('#b5').attr('id', 'b55');
        $('#b6').attr('id', 'b66');
        $('#b7').attr('id', 'b77');
        $('#b8').attr('id', 'b88');

        if ($(window).width() <= 480) {

            $('#b11').animate({ top: 240, left: vw - 152 }, 500);
            $('#b22').animate({ top: 240, left: vw - 114 }, 500);
            $('#b33').animate({ top: 240, left: vw - 76 }, 500);
            $('#b44').animate({ top: 240, left: vw - 38 }, 500);
            $('#b55').animate({ top: 240, left: vw }, 500);
            $('#b66').animate({ top: 240, left: vw + 38 }, 500);
            $('#b77').animate({ top: 240, left: vw + 76 }, 500);
            $('#b88').animate({ top: 240, left: vw + 114 }, 500);

        } else {

            $('#b11').animate({ top: 240, left: vw - 400 }, 500);
            $('#b22').animate({ top: 240, left: vw - 300 }, 500);
            $('#b33').animate({ top: 240, left: vw - 200 }, 500);
            $('#b44').animate({ top: 240, left: vw - 100 }, 500);
            $('#b55').animate({ top: 240, left: vw }, 500);
            $('#b66').animate({ top: 240, left: vw + 100 }, 500);
            $('#b77').animate({ top: 240, left: vw + 200 }, 500);
            $('#b88').animate({ top: 240, left: vw + 300 }, 500);
        }

        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(2000);

        $(this)
            .fadeOut('fast')
            .delay(800)
            .promise()
            .done(function () {
                $('#story').fadeIn('fast');
            });

    });


    /* =====================================================
       LETTER SCENE
       "Open Your Letter" reveals a sealed envelope. Tapping
       the envelope folds the flap open and the letter slides
       out, with each line inside gently staggering into view.
       Closing folds everything back and returns to the cake.
       ===================================================== */

    $('#story').click(function () {

        $(this).fadeOut('fast');

        $('.cake')
            .fadeOut('fast')
            .promise()
            .done(function () {
                $('#letter_scene').fadeIn('fast');
            });
    });

    function openLetter() {

        if ($('#letter_scene').hasClass('open')) {
            return;
        }

        $('#letter_scene').addClass('open');

        // Stagger each line of the letter into view.
        $('.letter-body p').each(function (i) {
            $(this)
                .css('animation-delay', Math.min(i * 45, 900) + 'ms')
                .addClass('letter-line-in');
        });
    }

    function closeLetter() {

        if (!$('#letter_scene').hasClass('open')) {
            return;
        }

        $('#letter_scene').removeClass('open');

        $('.letter-body p')
            .removeClass('letter-line-in')
            .css({ 'animation-delay': '', opacity: 0, transform: 'translateY(8px)' });

        // Give the fold-shut animation a moment, then head back to the cake.
        setTimeout(function () {
            $('#letter_scene').fadeOut('fast');
            $('.cake').fadeIn('fast');
        }, 750);
    }

    $('#envelope').click(function () {
        openLetter();
    });

    $('#letter_close').click(function (e) {
        e.stopPropagation();
        closeLetter();
    });

    $('#letter_overlay').click(function () {
        closeLetter();
    });

});
