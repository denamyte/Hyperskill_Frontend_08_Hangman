function sum(numbers) {
    let sum = 0;
    for (let n of numbers) {
        if (n === 0) {
            break;
        }
        sum += n;
    }
    return sum;
}