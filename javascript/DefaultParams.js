 //arrow funcion in functions
//immediately returning
//  function addTwoNumbers(num1, num2) => {
//      return num1 + num2;
    
//  }
//  console.log(addTwoNumbers(1,2));


 //normal function 
 function addTwoNumbers(num1, num2=5){
    console.log(num1);
    console.log(num2);
    return num1 + num2;
};
console.log(addTwoNumbers(2));

//outputs
// 2
// underfined - if we dont assign a value, it returnd undefined.
//to overcome this, we can provide a default value to num2. THIS IS DEFAULT PARAMETER PASSING. 
// nan - not a number