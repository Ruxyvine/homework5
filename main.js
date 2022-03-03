const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ]

const test = (ab) => {
	for (let i = 2; i < ab.length; i+=3){
			
			ab.splice(i, 1)
			i--
		
		

	}
	console.log(ab)

}
(test(arr))


		//asdasd
// 3)	Дан массив arr с именами, напишите функцию которая будет принимать массив и сможет отобразить самое короткое имя и самое длинное имя
// const arr = [
//     "Иван",
//     "Игнат",
//     "Александр",
//     "Ира",
//     "Света",
//     "Настя",
//   ]

// 	let minIndex = 0;
// 	let maxIndex = 0;



// const compare = (qwe) => {
// 	for ( i = 1; i < qwe.length; i++){
// 		if (qwe[i].length > qwe[maxIndex].length) {
// 			maxIndex = i;
// 		}
// 		if (qwe[i].length < qwe[minIndex].length) {
// 			minIndex = i;
// 		}
// 	}

// 	console.log(qwe[minIndex]);
// 	console.log(qwe[maxIndex]);
// }

// compare(arr);



			//1 asdasdad
// const arr = []
// function test(){
// 	let a = prompt('name')
// 	arr.push(a)
// 	let b = prompt('age')
// 	arr.push(b)
// 	let c = prompt('Job')
// 	arr.push(c)
// 	let d = prompt('sex')
// 	arr.push(d)
// 	console.log(arr)
// }
// test()