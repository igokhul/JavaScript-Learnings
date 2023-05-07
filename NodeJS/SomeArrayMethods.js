//filter() maps() reduce()

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = nums.filter(n => n % 2 == 0)   //Filters array values which are only even
    .map(n => n * 2)                        //Maps the values by doubling them
    .reduce((a, b) => a + b);               //Reduces all the values by adding those values

console.log(result);