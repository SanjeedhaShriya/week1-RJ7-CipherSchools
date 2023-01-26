// let array = [1,2,3,4,5];
// let newArray = [...array]

// //spread operator : breaking the bounds of the array and taking each element out of its contiguo memory location
// // we can even add a few new Elements by [...array,6,7,8]
//complexity of spread operation : O(n)

// console.log(array);

//____________________________________________________________________

//Rest operator
// let maxOfNumbers = (...numbers) => {
//      let maximum = Number.MIN_VALUE;
//      for(let number of numbers){
//          maximum = Math.max(maximum, number);
//      }
//      //  console.log(numbers);
//      return maximum;
//   };
//  console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));


// let maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
// let maxOfThreeNumbers = (num1, num2, num3) => Math.max(num1, Math.max(num2, num3));

//_____________________________________________________________________________________
//REST AND SPREAD FOR OBJECTS

 let object = {
     name : "John",
     age : 24,
     //HERE BELOW, WE ARE DECLARING AN OBJECT WITHIN AN OBJECT
     address : {
        city :"NewYork",
        state : "NY",
        country :"USA",

     },
 };

 let object2 = {...object};
 object2.address.city = "Newark";
 console.log(object2);
//  let object3 = {...object};//now object3 is a clone of object.
// //  let object4 = {...object, country : "USA", favSong : "Song"} 
//  let object4 ={...object, name : "hi"}
//  console.log(object4)



