
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
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date);
    }
}