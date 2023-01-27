// class ListNode {
//     val;
//     next;

//     constructor(val, next = null){
//         this.val = val;
//         this.next = next;
//     }
    
// }

// class TestClass {
//     head;

//     constructor(head = null){
//         this.head = head;
//     }

//     hasLast (){
//         return this.head !== null;
//     }

//     getLast(){
//         if(!this.hasLast()) {
//             return null;
//         }
//         let current = this.head;
//         while(current.next !== null && current.next.next !== null) {
//             current = current.next;
//         }
//         // return current.val;
//         let finalValue = current.val;

//         current = this.head;
//         while(current.next !== null){
//             current = current.next;
//         }

//         current.next.next = null;
//         return finalValue;
//     }


// }

// let myVariable = new TestClass(
//     new ListNode(
//         1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
//     )
    
// )

// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());

// |
// |
// |
// |
// |
// ___________________________________________________________________________________

//PROMISE.JS

// it is like something that can resolve or get rejected.
// class in java
// constructor(function)

let myPromise = new Promise((fulfilled,notFullfilled) =>  {
    let num1 = 10;
    let num2 = 15;
    let sum = num1 + num2;
    if(sum>24){
        fulfilled();
    } else {
        notFullfilled(new Error("Promise not fulfilled"));
    }

});
myPromise.then(()=>{
    console.log("Promise was fulfilled")
}).catch(() =>{
    console.log("promise not fullfilled");
}).finally()//syntax then,catch,finally can be written in any order.
//.then() happens when your promise is fulfilled
//.catch() when promise not fullfilled


function addTwoNumbers(num1, num2){
    //settimeout is used to set a timer 
    setTimeout(() => {
         console.log(num1 + num2);  
         sum = num1 + num2;
    }, 5000);
    console.log("Inside addTwoNumbers");
    return sum;

}
console.log(addTwoNumbers(2,3));