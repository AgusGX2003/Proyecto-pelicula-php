// class Checker {
//     verifyInput() {
//         const inputValue = document.querySelector('.myInput');

//         if (inputValue.value === "") {
//             this.getErrorContainer("You must fill in all of the fields")
//         }
//     }

//     getErrorContainer(errorMsg) {
//         const fragment = new DocumentFragment();
//         const errorContainer = document.querySelector(".errorContainer");
//         const errorTemplate = document.querySelector(".errorTemplate").content;

//         const clone = errorTemplate.cloneNode(true)
//         fragment.appendChild(clone);

//         errorContainer.appendChild(fragment);
//         document.querySelector(".alertError").innerText = errorMsg;
//         this.displayError(errorContainer);
//     }

//     displayError(errorContainer) {
//         errorContainer.style.display = "block"

//         setTimeout(() => {
//             errorContainer.style.display = "none";

//             while(errorContainer.firstChild) {
//                 errorContainer.firstChild.remove();
//             }
//         }, 1500)
//     }
// }

// export default Checker;