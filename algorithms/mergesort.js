let array = [3, 6, 4, 1, 8, 9, 0, 2, 5, 7, 55, 45, 77, 23];
let array1 = [33, 3, 54, 3, 1, 4, 5, 2, 5, 4, 66, 32, 23];

function mergedSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let n = Math.floor(arr.length / 2);
  let left = arr.slice(0, n);
  let right = arr.slice(n, arr.length);
  return merge(mergedSort(left), mergedSort(right));
}

function merge(l, r) {
  let merged = [];
  while (l.length && r.length) {
    merged.push(l[0] < r[0] ? l.shift() : r.shift())
  }
  while (l.length) {
    merged.push(l.shift());
  }
  while (r.length) {
    merged.push(r.shift());
  }
  return merged;
}

console.log(mergedSort(array1));
