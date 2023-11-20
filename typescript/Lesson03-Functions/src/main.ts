Lesson01-Basic Types
//Type Aliases
type stringOrNumer = string | number

type stringOrNumerArray = (string | number)[]

type Guitarist = {
    name?: string,
    active?: boolean,
    album: stringOrNumerArray
}

type userId = stringOrNumer;

// literal types
let myName: 'Dave'

let username: 'Dave' | 'John' | 'Amy' | 'Otis'

username = 'Otis'


//Functions
const add = (a: number, b: number): number=> {
    return a + b
}

const subtract = function(c: number, d: number): number{
    return c - d
}

const logMsg = (message: any): void => {
    console.log(message);
    
}

//Mathfunction 
type Mathfunction = (a: number, b: number) => number

//interfaces
// interface Mathfunction2 {
//  (a: number, b: number): number 
// }

let multiply: Mathfunction = function(c,d) {
    return c * d
}


//optional parameters

let addAll = (a: number, b: number, c?: number): number =>{
     if(typeof c!== 'undefined'){
        return a + b + c
     }
     return a + b
}

let sumAll = (a: number, b: number, c: number = 6): number =>{
     
     return a + b + c
}

// logMsg("hello devs!!");
// logMsg(add(2,5));
// logMsg("Happy diwali..!!");
// logMsg(add(4,6));
// logMsg(subtract(9,4));
// logMsg(multiply(2,7))



logMsg(addAll(2,3,2))
logMsg(addAll(2,3))

logMsg(sumAll(2,3,undefined))
logMsg(sumAll(2,3,8))

//Rest Parameters
const total = (a: number,...nums: number[]): number =>{
    return a + nums.reduce((pre, curr) => pre + curr)
}

logMsg(total(47,6,3))


//never Type

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

// const infinite = () => {
//       let i: number = 1
//       while(true){
//         i++
//         if(i > 100) break
//       }
// }


// custom type gaurd

const isNumber = (value: any): boolean => {
    return typeof value === 'number'
    ? true : false
}


// use of the never type
const numberOrString = (value: stringOrNumer): string =>{
           
    if(typeof value === 'string') return "string"
    if(isNumber(value)) return "number"
    return createError("this should never happen!")
}

logMsg(numberOrString("hello"))
// logMsg(isNumber(45))