const imgs = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const chosenImg = imgs[Math.floor(Math.random()*imgs.length)];

// const bgImage = document.createElement("img");

// bgImage.src =  `img/${chosenImg}`;

document.body.style.backgroundImage = `url('img/${chosenImg}')`;