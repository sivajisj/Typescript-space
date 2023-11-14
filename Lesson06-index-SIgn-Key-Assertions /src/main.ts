//Index Signature

interface TranscObj {
    readonly [index: string]: number
    Pizza :number,
    Books: number,
    Job: number
}

// interface TranscObj {
//         [ index: string]:number 
// }

const todaysTransaction: TranscObj = {
    Pizza :-10,
    Books: -5,
    Job: 50  
}

// console.log(todaysTransaction.Pizza);
// console.log(todaysTransaction['Pizza']);


let prop: string = 'Pizza'

// console.log(todaysTransaction[prop]);

const todatsNet = (transactions: TranscObj): number =>{
    let total = 0
    for(const transaction in transactions){
            total += transactions[transaction]
    }
    return total
}
// console.log(todatsNet(todaysTransaction));

// todaysTransaction.Pizza = 40
// console.log(todaysTransaction['Books']);

/////////////////////////////////////////////////////////

interface Student {
    // [key: string]: string | number[] | number | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Aimee",
    GPA: 3.6,
    classes: [100,200]
}

// console.log(student.test);

// console.log(student.GPA);

for(const key in student){
 console.log(`${key}: ${student[key as keyof Student]}`);
 
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
    
})


const logStudentKeys = (student: Student, key: keyof Student):
void =>{
    console.log(` student ${key}: ${student[key]}`);
      
}

logStudentKeys(student,'GPA')
logStudentKeys(student,'name')

/////////////////////////////

// interface Incomes {
//         [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams,number>

const monthlyIncomes: Incomes = {
    salary :500,
    bonus: 100,
    sidehustle : 250
}

for(const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
    
}