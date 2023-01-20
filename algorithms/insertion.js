// let array = [3, 6, 4, 1, 8, 9, 0, 2, 5, 7];
// const sort = (arr) => {
//   //30 cycles
//     for (let i = 1; i < arr.length; i++) {
//       let cur = arr[i];
//       let j = i - 1;
//       while (j >= 0 && arr[j] > cur) {
//         arr[j + 1] = arr[j];
//         --j;
//       }
//       arr[j + 1] = cur;
//     }


let array1 = [3, 6, 4, 1, 8, 9, 0, 2, 5, 7];

const insertionsort =(arr)=>{
   for(let i = 1; i< arr.length;i++){
       while(arr[i] < arr[i-1] && i >= 0){
          let temp = arr[i]
          arr[i] = arr[i-1]
          arr[i-1] = temp
          --i
       }
   }
   return arr
}

console.log(insertionsort(array1))
console.log(count)



