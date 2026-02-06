// console.log(a);
// var a = 20 in var it is undefined because not declared before but in let it will give error
//-let dont allow hoisting

//1-var allows hoisting 
//2-let and var are mutable where as cont is not mutable 
//3-var has a functional scope or global scope depending on where it is declared, it means they are accessible in a function where it is declared 
// where as let has blocked scope

let a= 10//number
let str = "Hello";//string
let isok = true;//boolean
let arr = [1,2,3];//object
let obj = {naem:"Dennis",age:20};//object
let empty = null;//object
let b;//undefined

console.log(typeof(a));
console.log(typeof(str));
console.log(typeof(isok));
console.log(typeof(arr));
console.log(typeof(obj));
console.log(typeof(empty));
console.log(typeof(b));

console.log(5=='5');//in js there is no predefined datatypes so here it can be compared but if use === it will check type then return the ans
console.log(5==='5');

