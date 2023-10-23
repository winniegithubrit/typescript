let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published = true;


// function render(document: any){
//   console.log("Rendering document");
// }
// arrays in typescript
// use type annotations in typescript

let numbers: number[] = [1,2,3,4];
// numbers[1] = 1;

// tuples

// let user: [number, string] = [1,"Winnie"];
// // restrict your tuple to only 2 values

// enums a list of related  constants
enum Color {Red, Green, Blue}; // enum has its own scope
// as a best practice always annotate your functions
function calculateTax(income: number): number{
if(income < 50000)
return income * 1.2;
return income * 1.3;
}
calculateTax(20000);
// objects

let employee = {id:1};

let employer: {
  id: number;
  name: string;
} = {id:1, name:"Jomo"};
// best practice to write objects
type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;

}
// narrowing 
// literal types
//nullable types
// intersection types

type Dragg = {
  drag:() => void
};
type Resizable = {
  resize: () => void
};

type Together = Dragg & Resizable;

let together : Together = {drag: function(){},resize: function (){}};


