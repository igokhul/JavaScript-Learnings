function add(num1, num2, num3 = 5) {
    let result = num1 + num2 + num3;
    console.log("3");
    return result;
}

// function add(num1, num2) {
//     let result = num1 + num2;
//     console.log("2");
//     return result;
// }

let result = add(5, 10);
console.log(result)