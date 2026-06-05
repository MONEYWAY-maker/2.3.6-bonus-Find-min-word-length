function findMinLength(word1, word2)
{    let minLength = Math.min(word1.length, word2.length);
    return minLength;
}

console.log(findMinLength("hlo", "worjcjsbcld")); // Output: 5