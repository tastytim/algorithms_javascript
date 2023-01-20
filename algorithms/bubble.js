let array = [3, 6, 4, 1, 8, 9, 0, 2, 5, 7,55,45,77,23];

const bubblesort = (array) => {
   for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
};


bubblesort(array);
console.log(array);

//70 cycles
//   for (let i = 0; i < arr.length; i++) {
//     let sorted = true;
//     for (let j = 1; j < arr.length - i; j++) {
//         count++
//       if (arr[j] < arr[j - 1]) {
//         sorted = false;
//         let temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//     if (sorted) {
//       return;
//     }
//   }