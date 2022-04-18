const images = [
    "wallpaperbetter.jpg",
    "wallpaperbetter (1).jpg",
    "wallpaperbetter (2).jpg",
    "wallpaperbetter (3).jpg",
    "wallpaperbetter (4).jpg",
    "wallpaperbetter (5).jpg",
    "wallpaperbetter (6).jpg",
    "wallpaperbetter (7).jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);