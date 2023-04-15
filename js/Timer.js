var timers = [
    [new Date("April 30, 2023 15:37:25").getTime(), 'Timer1'],
    [new Date("May 31, 2023 15:37:25").getTime(), 'Timer2'],
    [new Date("April 30, 2023 15:37:25").getTime(), 'Timer3'],
    [new Date("May 31, 2023 15:37:25").getTime(), 'Timer4']
    ];
var x = setInterval(function () {
    timers.forEach(function (element) {
        var now = new Date().getTime();
        var distance = element[0] - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById(element[1]).innerHTML = ' <p id="days" class="float_left">' + days + '<br><span>DAGE</span></p> <p id="hours" class="float_left">' + hours + '<br><span>TIMER</span></p> <p id="minutes" class="float_left">' + minutes + '<br><span>MINUTER</span></p> <p id="seconds" class="float_left">' + seconds + '<br><span>SEKONDER</span></p>';
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(element[1]).innerHTML = "EXPIRED";
        }
    });
});