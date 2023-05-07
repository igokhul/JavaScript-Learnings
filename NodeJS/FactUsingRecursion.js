function recursion(n) {
    if (n == 0)
        return 1;
    else
        return n * recursion(n - 1);
}
let n = 5;
console.log(recursion(n)); 