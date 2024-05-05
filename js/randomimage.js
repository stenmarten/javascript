const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {

    let randomIndex = Math.floor(Math.random() *  images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex]

}