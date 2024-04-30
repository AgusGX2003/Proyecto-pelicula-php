// class Carousel {
//     constructor() {
//         this.carouselCont = document.querySelectorAll('.carouselInfo');
//         this.template = document.querySelector('carouselTemplate').textContent;
//         this.fragment = new DocumentFragment()
//     }

//     showCarouselInfo() {
//         this.carouselCont.forEach((img) => {
//             this.clone = this.template.cloneNode(true);
//             this.fragment.appendChild(this.clone)
//             img.appendChild(this.fragment);

//         })
//     }
// }

// export default Carousel;