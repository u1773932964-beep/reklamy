const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
];

let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
}, 10000); // 10 sekund
