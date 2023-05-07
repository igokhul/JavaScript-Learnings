function Aliens(name,technology){
    this.name=name;
    this.technology = technology;

    this.work = () => console.log(`Hello ${name}`);
}

let alien1 = new Aliens("Navin","JavaScript");
let alien2 = new Aliens("Reddy","Java");

console.log(alien1.name);
console.log(alien2.technology);

alien1.work();