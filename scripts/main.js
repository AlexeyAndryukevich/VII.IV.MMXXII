const countDownDate = new Date("Apr 7, 2022 14:00:00").getTime();

const x = setInterval(function() {
    render();
}, 10000);

function render() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Юхууу🥳";
    }
};

render();
