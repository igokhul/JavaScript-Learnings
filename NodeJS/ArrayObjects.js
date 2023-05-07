let data = ['Navin', 5, { technology: "Java" }, function () {
    console.log(`Hello ${data[0]}`);
}];

data.push("Reddy");
console.log(data);
data[3]();