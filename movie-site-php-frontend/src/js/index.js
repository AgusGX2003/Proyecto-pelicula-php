import Checker from "./checker";
import Carousel from "./carousel";
import Cards from "./cards";

window.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector('.buttonSearch');
    const cards = new Cards();
    const carousel = new Carousel();
    carousel.showCarouselInfo();
    cards.getMovies();

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const checker = new Checker()
        checker.verifyInput();
    })
})