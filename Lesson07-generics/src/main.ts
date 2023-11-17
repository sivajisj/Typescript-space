const echo = <T>(value: T): T => value;

const isObject = <T>(value: T): boolean =>{
    return typeof value === 'object' && value!== null && !Array.isArray(value)
}

// console.log(isObject(true));
// console.log(isObject('John'));
// console.log(isObject([1,2,3]));
// console.log(isObject({name: "John"}));
// console.log(isObject(null));


const isTrue = <T>(value: T): {value: T, is: boolean} =>{

    if(Array.isArray(value) && !value.length){
        return {value, is: false}
    }
    if(isObject(value) && !Object.keys(value as keyof T).length){
        return {value, is: false}
    }
    return {value, is: !!value}
}

// console.log(isTrue(false))
// console.log(isTrue(0))
// console.log(isTrue(true))
// console.log(isTrue(1))
// console.log(isTrue('Dave'))
// console.log(isTrue(''))
// console.log(isTrue(null))
// console.log(isTrue(undefined))
// console.log(isTrue({})) // modified
// console.log(isTrue({ name: 'Dave' }))
// console.log(isTrue([])) // modified
// console.log(isTrue([1, 2, 3]))
// console.log(isTrue(NaN))
// console.log(isTrue(-0))

interface BoolChecker<T>{
    value: T,
    is: boolean
}

const checkBoolVal = <T>(value: T): BoolChecker<T> =>{

    if(Array.isArray(value) && !value.length){
        return {value : value, is: false}
    }
    if(isObject(value) && !Object.keys(value as keyof T).length){
        return {value : value, is: false}
    }
    return {value : value, is: !!value}
}

interface HasID {
    id : number
}

const processUser = <T extends HasID>(user: T): T =>{
    return user
}

console.log(processUser({id: 1, name: 'Dave'}));
console.log(processUser({id: 1, name: 'Dave'}));

///////////////////////////////////////

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

// console.log(getUsersProperty(usersArray, 'email'));
// console.log(getUsersProperty(usersArray, "id"));

class StateObject <T>{
    private data: T

    constructor(value: T) {
        this.data = value
    }
    get state(): T {
        return this.data
    }
    set state(value: T){
        this.data = value
    }
}


const store = new StateObject("SJ")
console.log(store.state);
store.state = "sai"
console.log(store.state);


const store2 = new StateObject<(string | number | boolean)[]>([15])

store2.state =(['sai',24,true])
console.log(store2.state);

