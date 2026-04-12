// find max in array
// input =[3,7,2,9,1] 
// output =9
let arr  =[3,7,2,9,1] ;
let max = arr[0]; 
 
for (let i=1; i<arr.length; i++ ){
    if(arr [i] > max){
        max = arr[i]
    }
}
console.log("max value :"+max);

//  if find mi value
let arr2  =[3,7,2,9,1] ;
let min = arr2[0]; 
 
for (let i=1; i<arr.length; i++ ){
    if(arr2 [i] < min){
        min = arr[i]
    }
}
console.log("min value :"+min);

// cal of string no 
// Inpunt 45678
// Outhput =5

 
let num = 45678
let count = 0;

while (num>0){
    num = Math.floor(num/10);
    count++
}
console.log(count);


// Revrece the numb
let number = 1234;
let reverse = 0;

while (number > 0) {
    let lastDigit = number % 10;
    reverse = reverse * 10 + lastDigit;
    number = Math.floor(number / 10);
}

console.log("reverse " + reverse);

// GCS , LCM 
// Gcs
let a = 12;
let b = 18;

 while(b  !== 0){
  let remainder = a%b;
   a = b;
   b =remainder
 
 }
 console.log("GCD IS :",a)


 //LCM

 let x =12;
 let y = 18;

 let a1 = x;
 let b1 = y;

 while(b1 !== 0 ){
    let rem = a1 % b1;
    a1 = b1 ;
    b1 = rem;

 }
let gcd  = a1;

let lcm = (x*y)/gcd;
 console.log("lCM IS :", lcm);

// Factorial
//  Iterative 

function fcIterative(n){
    let result = 1;

    for(let i=1; i<=n; i++){
        result = result*i;
    }
     return result ;
}
console.log("Factorial(Iterative):",fcIterative(5));

// Recarsive

function fcRecarsive(n){
    if (n == 1){
        return 1;
    }
  return n*fcRecarsive(n-1);
}
console.log("Factorial(Recarsive)",fcRecarsive(5));


// Fibonacci – Recursive

function fibonacci(n){
    if(n===0) return 0;
    if (n===1) return 1;

    return fibonacci(n-1)+fibonacci(n-2);
}

console.log("Fibonacci:",fibonacci(5));

// 1 to n-print

function printNumers(m){
   if (m===0) return;

   printNumers(m-1);
   console.log(m);
}

printNumers(3);

// sumdig

function sumDigit(n){
    if(n===0)return 0;

    return (n%10)+sumDigit(Math.floor(n/10))
}
console.log("sumDigit");
console.log(sumDigit(1234))


//  power of n 

function power(a,b){
 if (b===0)return 1;
 return a*power(a,b-1);
}

console.log("power :",power(2,3)
);



let str = "vivek";
let reversed ="";
 for ( let i =str.length -1 ; i>=0; i--){
    reversed += str[i]
 }
 
console.log(reversed); 
