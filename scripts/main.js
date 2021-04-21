
const x = setInterval(function() {
    render();
}, 10000);

function render() {
    const countDownDate = new Date("2022-04-07 14:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = countDownDate + '<br>' + now + '<br>' + distance + '<br>' + days;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Юхууу🥳";
    }
};

render();
