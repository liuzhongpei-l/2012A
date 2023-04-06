let arr = []      // 2437651     2567341   7256341
setTimeout(() => {
    console.log(1);// 7
    // js代码
}, 1000)
new Promise((resolve, reject) => {  // 1 
    console.log(2);
})
let res = async () => {
    await console.log(5)
    console.log(6);
}
function test() {
    console.log(3);
}
res()// 2 5

setTimeout(() => {
    console.log(7);// 6
})

test();// 3 
(function () {
    console.log(4); // 4
})()


// 2431 a
// 2143 b
// 2413 c
// 1342 d