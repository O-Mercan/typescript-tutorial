
// Any Type
// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level;

// function render(document: any) {
//     console.log(document);
// }


// Arrays
//The elements of the array must be of the same type
// let numbers: number[] = []
// numbers.forEach(n => n.toExponential)

// Tuples
//tuple can contain different types of variable
// let user: [number, string] = [1, "Mosh"]
// user.push(1);


// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// //PascalCase
// enum Size {
//     Small = 1,
//     Medium = 2,
//     Large = 3
// };
// let mySize: Size = Size.Medium;
// console.log(mySize);


//functions
// function calculateTax(income: number, taxYear= 2022): number {
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000);


//Objects
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: "Mosh",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }


//Type alias
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: "Mosh",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }


//Union Types
// function kgToLbs(weight: number | string): number {
//     //Narrowing
//     if (typeof weight === "number")
//         return weight * 2.2;
//     else
//     return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs("10kg");


// Intersection
// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }


// Literal types
// Literal (exact, specifix)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";


//Nullable Types
// function greet(name: string | null | undefined) {
//     if (name) {
//         console.log(name.toUpperCase())
//     } else {
//         console.log("Hola")
//     }
// }

// greet(undefined);

//Optional Chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date() };
}

let customer = getCustomer(1);

//Optional property access operator
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
//customers?.[0]

//Optional call
let log: any = null;
log?.("a");