//1) object destructuring
let myObject ={
    name: "Alex",
    age : 20,
    address : {
        street : "Somethings",
        city : "ny",
        state : "NYU",
        country : "USA",
        passportDetails : {
            passportNumber : "ABCDE12345",
        },
        },
    };
console.log(details.address.passportDetails.passportNumber);