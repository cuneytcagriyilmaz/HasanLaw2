$(document).ready(function () {
    var d = new Date();

    document.getElementById("ic-hours").innerHTML = d.getHours();
    document.getElementById("ic-minutes").innerHTML = d.getMinutes();
    document.getElementById("ic-seond").innerHTML = d.getSeconds();


    setInterval(icTimer, 1000);

    function icTimer() {
        var d = new Date();

        document.getElementById("ic-hours").innerHTML = d.getHours();
        document.getElementById("ic-minutes").innerHTML = d.getMinutes();

        document.getElementById("ic-seond").innerHTML = d.getSeconds();
    }
})