// this is called annotation

let number:number;
let names:string;

names = "rohit";
number = 34;


console.log(names +" " + number);

// this is called inference

let n = 20;
let j = "jk"



console.log(n +" " + j);


// union


let items: Array<string | number> = [1,"rohit",];


// tupels

let locations : [number,number] = [440.45,-45.5];

// object types

let user : {
    name:string,
    email:string,
    age:number,
}

user = {
    name:"rohit",
    email:"rohiy@gmail.comn",
    age:30,
}


// type aliases

type U = {
    name:string,
    email:string,
    age:number,
}

let users:U = {
    name:"rohit",
    email:"rohiy@gmail.comn",
    age:30,
}