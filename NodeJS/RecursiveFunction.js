function sumOfNNumbers(num) {
    console.log(num);
    if (num > 0)
        sumOfNNumbers(num - 1);
}
sumOfNNumbers(10);
