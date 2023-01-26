//1) object destructuring
//2) ArrayMatching
// let details ={
//     name: "Alex",
//     age : 20,
//     address : {
//         street : "Somethings",
//         city : "ny",
//         state : "NYU",
//         country : "USA",
//         passportDetails : {
//             passportNumber : "ABCDE12345",
//         },
//         },
//     };
// let passportNumber = details.address.passportDetails.passportNumber;
// console.log(passportNumber);
// //or
// console.log(details.address.passportDetails.passportNumber);

// let myName ="Ss";
// let age = details.age;

// let {name : myName, age} = details;
// console.log(myName, age);

// |
// |
// |
// |
// _________________________________________

//2) Array Matching
//to check if they are the same array, i.e , same elements
// if(array1 === array2)

//3) Object matching

let obj1 = {name : "something"};
let obj2 = {name : "something"};

function isEqual(obj1, obj2) {
    if(obj1==obj2){
        return true;
    }
    //object.keys gives set of all keys inside the object. here it gives set of the names.
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    for(let key of Object.keys(obj1)){
        if(typeof obj2[key]=="undefined"){ //typeof tells the type of key(object)
            return false;
        }
       if( obj2[key] != obj1[key]){
        return false;
       }
    }
    return true;
}
console.log(isEqual(obj1, obj2));