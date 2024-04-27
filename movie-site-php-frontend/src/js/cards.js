// class Cards {
//     async getMovies() {
//         const response = await fetch("./../db/ejemploBD.json");
//         const json = await response.json();

//         this.getImages(json)
//     }

//     getImages(json) {
//         const values = Object.values(json);
//         const imgArray = []
//         while(imgArray.length <= 11) {
//             let item = this.newItem(values)
//             imgArray.push(item);
//         }
//         console.log(imgArray);
//     }

//     newItem(values) {
//         const item = values[Math.floor(Math.random() * values.length)]
//         return item;
//     }
// }

// export default Cards;