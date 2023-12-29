function checkEvenOrOdd(numbers) {
    for (i in numbers) {
        const n = numbers[i];
        if (n === 0) break;
        console.log(n % 2 === 0 ? "even" : "odd");
    }
}
