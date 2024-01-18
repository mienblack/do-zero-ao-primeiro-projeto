function compareTriplets(a, b) {
    let counterA = 0
    let counterB = 0
    if (a.length == b.length) {
        for (let i in a) {
            if (a[i] > b[i]) { counterA++ }
            if (b[i] > a[i]) { counterB++ }
        }
        return ([counterA, counterB])
    }
}
console.log(compareTriplets([1, 2, 3], [3, 2, 1]))