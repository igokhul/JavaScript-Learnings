// console.log("Hello world")
// console.log(null)
// let x = parseInt("123 Number 456");
// console.log(x);

let alien = {
    name: "Gokhul",
    tech: "JavaScript",
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "HP"
    }
}

// console.log(alien.laptop.brand.length);
// console.log(alien.laptop?.brand1?.length);

// //Delete a object
// delete alien.laptop

// console.log(alien)

for (let key in alien.laptop) {
    console.log(key, alien.laptop[key])
}