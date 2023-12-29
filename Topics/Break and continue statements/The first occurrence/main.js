function find5(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 5) return i;
    }
    return -1;
}