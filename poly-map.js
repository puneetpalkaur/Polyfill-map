Array.prototype.map = function(cb) {
  let newArr = [];
  for(let item of this) {
    newArr.push(cb(item));
  }
  return newArr;
}

let arr = [10,20,30,40];

let tripleArr = arr.map((i) => i * 3);

console.log('tripled', tripleArr);
