function digPow(n, p) {
    // 1a
    let myFunc = num => Number(num);
    let intArr = Array.from(String(n), myFunc);

    // console.log(intArr)

    // 1b
    let newArray = []

    let sum = 0

    for (let i = 0; i < intArr.length; i++) {

        newArray[i] = intArr[i] ** (p + i);

        // console.log(intArr[i], "**", (p + i), '=', intArr[i] ** (p + i));
        // 1c
        sum += newArray[i]
    }
    // console.log(newArray);
    // return newArray;
    // return sum;

    // 2

    // console.log(sum)
    for (let i = 0; i < 100; i++) {
        // console.log("i ",n*i);
        if (sum == n * i) {
            return i;
        }
    }
    return -1;

}