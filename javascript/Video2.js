//1 _ .MAP
// 2 _ .forEach
//3) .filter()
//4) .sort()

// |
// |
// |
// |
// |
// |
//.map() - gives you a new array on the basis of the old array 
// you need to tell it the computational logic

// let array = [5,10,15,20,25];
// let newArray =[];

// for(let i =0; i<array.length;i++){
//     newArray[i] = array[i] * array[i];
//     //simply multiplying the elements after iterating the array from left to right and by increasong the index. 
// }
// console.log(newArray);

//____________________________________________________________________________________________

// // USING .map()
// let array = [5,10,15,20,25];

// function functionForMap(element) {
//     return element * element;
// }
// let newArray = array.map(functionForMap);
// console.log(newArray);
// //this gives the same op as the above snippet

// //in js, functions and objects are same 

// //but the above action does the sam ething as a arrow function
// let addTwoNumbers = (a,b) => a+b;
// console.log(addTwoNumbers(4,5));


//HENCE WE FOLLOW ANOTHER WAY OF DOING THIS
// let array = [5,10,15,20,25]
// let newArray = array.map((element,index) => {
//     console.log(index);
//     return element*element;
    
// });
// console.log(newArray);


// _________________________________________________________________
// // 2)  .forEach()
// let array = [1,2,3,4,5];
// array.forEach((element,index) => {
//     element *= element;
//     console.log(element);
// });
// console.log("Array is :", array);

// _________________________________________________________________
//3) .filter() - returns a new array of the condition is true 

// let array = [10,20,30,40,50];
// let newArray = array.filter((element)=> element >= 30);
// console.log(newArray);
// array.filter((element) => {
//    return element >=30

// let array = [10,20,30,40,50];
// let temp = array.find((value) => {
//     return value >20;
// });

// console.log(temp);


// __________________________________________________________________
//4) .sort()
// let array = [50,40,30,60,10];
let array = [20,50,60,90,111];
//throws error - so we use comparative similar to comparator in java.
//helps you create a comparision to any linear data structure
//comparator :  helps yo
let sortedArray = array.sort();
console.log(sortedArray);
//in js, vlues are sorted in string lexographical order 1,2,3,...
