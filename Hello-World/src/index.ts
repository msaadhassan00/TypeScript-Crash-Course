// console.log('Hello world!');

// let age: number = 20;
// if (age < 50)
//     age += 10;

//     console.log(age)


// code will give type error in typescript
// age = 'a'


// ----------------------------------------------------------------------------
// hover on variable names to see types

// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;

// best practice is to not use 'any' type variable
// let level;



//Arrays

// let num = [1,2,'3'] //in javascript 
// let num2:number[] = [1,2,'3'] // we'll get error type checking
// let num3 = [] // any type

//Tuples
// id & name : 1,'Ali'

// let user: [number,string] = [1,'Ali']


// Enums

// const small = 1;
// const medium = 2;
// const large = 3;

//Pascal Naming conventions
//  enum Size { Small = 1, Medium, Large} // you can also give string values like Small = 's'
// let mySize:Size = Size.Large;
// console.log(mySize)

// using const we'll get optimized code in index.js file
// const enum Size { Small = 1, Medium, Large} // you can also give string values like Small = 's'
// let mySize:Size = Size.Large;
// console.log(mySize)



// Functions
// it says return type void becuase we didn't tell the return type
// function calcTax(income:number){
    
// }
// annotating return type :number you can use void to for not returing anything
// use question mark for optinal

// function calcTax(income:number) :number {
//    if (income < 50_000)
//         return income * 1.2;
//     return income * 1.3
// }
// calcTax(60_000)



//Objects

// let emp:{
//     id:number,
//     name:string,
//     salary?:number,
// } = { 'id':1, 'name':'Ali'}
// emp.salary = 50_000;


// -------------------- Advance Types -----------------

// type aliase

// type Employee = {
//     id:number,
//         name:string,
//         salary?:number,
// }

// let emp: Employee= { 'id':1, 'name':'Ali'}
//     emp.salary = 50_000;


// Union types

// function kgToLbs(weight:number | string): number{
//     if (typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs('10Kg');


// Intersection Types

// type Dragable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UiWidget = Dragable & Resizable;

// let textBox: UiWidget{
//     drag = () => {},
//     resize = () => {}
// } 


// Literals Types
// literal(exact, specific)
// let quantity:50 = 50; 
// let quantity:50 = 51;
// let quantity:50 | 100 = 100;

// type quantity = 50 | 100;
// let Quantiy:quantity = 50;


// Nullable Values

// function greet(name: string | null){
//     if (name)
//         console.log(name.toUpperCase()); 
//     else    
//         console.log('Hola!')
// }

// greet(null)


// Optional Chaining

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1)
console.log(customer?.birthday)