const image = document.querySelector("#hero-img");
const button = document.querySelector("#btn");
let identifier = 1;

const changeImage = (element) => {
    identifier = 2;
    element.setAttribute("src", "pexels-pixabay-54602.jpg");
}

const changeAgain = (element) => {
    identifier = 3;
    element.setAttribute("src", "pexels-davidohboy-7516689.jpg");
}

const changeBack = (element) => {
    identifier = 1;
    element.setAttribute("src", "pexels-anneddesch-634255.jpg");
}

button.addEventListener("click", () => {
    if (identifier == 1) {
        changeImage(image);
    } else if (identifier == 2) {
        changeAgain(image);
    } else if (identifier == 3) {
        changeBack(image);
    }
});