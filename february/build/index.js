"use strict";
console.log("learning typescript");
let fruits = [];
const add = (a, b) => a + b;
console.log(add(3, 8));
const shoppingItem = ["rice", "pepper", "milk", "noodles"];
const arr = [2, 4, 5, 7, 9, 12, 2];
function checkEven(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
        return result;
    }
}
