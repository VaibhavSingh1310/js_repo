/*
arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach((x) => {
    if (x % 2 === 0) {
        console.log(x);
    }
});
*/
    

   /*
   const obj = {name:"Denis"}
   console.log(obj.name);
   obj.name="vaibhav"
   console.log(obj.name);
   //const variable are immutable till they are not object, const variables can 
   */

   const factorial = function(n)//this is expression function prevetns hoisting
   {
    if(n==1||n==0)
        return 1;
    else return n*(n-1);
   }
   console.log(factorial(3));


/*
   const fibbonacci = function(n){
    if(n==0) return 0;
    if(n==1) return 1;
    else return fibbonacci(n-1)+fibbonacci(n-2);
   }
   console.log(fibbonacci(10));
   */

/*
   const sales = "Toyota";
   function Types(name){
    return name ==="Honda"?name:"Sorry";
   }
   const car = {mycar : "saturn",getcar:Types("Honda"),special:sales};
   console.log(car.mycar);
   console.log(car.getcar);
   console.log(car.special);
*/

/*-----For in loop there is for of loop also 
arr=[1,2,3,4,5,6,7,8,9];
for(const i in arr){
    console.log(i,arr[i]);
    
}
    */
   
for(const char of "javascipt"){
    console.log(char);
    
}
let cnt = 0;
const vowels = new Set(['a', 'e', 'i', 'o', 'u','A','E','O','I','U']);
for (const char of "javascript") {
    if (vowels.has(char)) {
        cnt++;
    }
}
console.log(cnt);
