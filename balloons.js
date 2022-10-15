const releaseBalloons = (function () {
    document.getElementById("balloonsButton").style.transition = '2s';
    document.getElementById("balloonsButton").style.opacity = 0;

    document.getElementById("modal-image").style.transition = '8s';
    document.getElementById("modal-image").style.opacity = 1;

    const audio = new Audio('./assets/musicao.mp3');
    audio.play();

    const density = 40;
    const stringElement = document.createElement("div");

    let numbers = getRandomPositions();
    let positionIndex = 0;

    for (let i = 0; i < density; i++) {

        if (positionIndex + 1 == 10) {
            numbers = getRandomPositions();
            positionIndex = 0;
        }

        const element = document.createElement("div");

        element.classList.add("balloon");
        element.classList.add("pink-style");
        element.style.left = numbers[positionIndex] + "vw";

        element.append(stringElement.cloneNode());
        document.body.append(element);

        setTimeout(() => {
            releaseBalloon(element);
        }, (i * 500) + random(500, 1000));

        positionIndex++;
    }

    function getRandomPositions() {
        const numbers = [];
        var min, max, r, n, p;

        min = 0.2;
        max = 6.5;
        r = 10;

        for (let i = 0; i < r; i++) {
            do {
                n = Math.floor(Math.random() * (max - min + 1)) + min;
                p = numbers.includes(n);
                if (!p) {
                    numbers.push(n * 10);
                }
            }
            while (p);
        }

        return numbers;
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function releaseBalloon(balloon) {
        balloon.style.display = "block";
        const sequence = [];

        sequence.push({
            transform: `translate(0, -190vh)`
        });

        const balloonAnimation = balloon.animate(sequence, {
            duration: 9000,
            iterations: 1
        });

        balloonAnimation.onfinish = () => {
            balloon.style.bottom = "-500px";
            releaseBalloon(balloon);
        }
    }
});