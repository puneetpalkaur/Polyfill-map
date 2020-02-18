// define custom map()
if (!Array.prototype.map) {
Array.prototype.map = function(cb) {
    let newArray = [];
    for(let item of this) {
        newArray.push(cb(item));
    }
    return newArray;
}
}
// declare an array
const arr = [10,20,30,40];
// call custom map() on array
const squaredArray = arr.map((i) => i * i);
// prints [100,400,900,1600]
console.log(squaredArray);
