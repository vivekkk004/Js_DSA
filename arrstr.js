//  reverce arr 
// Input ="hello"
// Output ="olleh"

let str ="hello";
let strArr = str.split("");

let start = 0;
let end = strArr.length - 1;

while(start<end){
    let temp =strArr[start];
    strArr[start] = strArr[end];
      strArr[end] = temp;

      start++;
      end--;

}

console.log(strArr.join(""));

// Reverse an Array using Two Pointers 

let arr =[1,2,3,4]
let Rstart =0;
let Rend = arr.length-1;

while (Rstart < Rend ){
  let tempp = arr[Rstart];
  arr[Rstart]= arr[Rend];
  arr[Rend]=tempp;

  Rstart++;
  Rend--;
}

console.log("Reverse an Array",arr);

// Second Largest Element in Array

let arrr = [10,5,20,8];

let largest = -Infinity;
let secondLagrest = -Infinity;

for (let i = 0; i< arrr.length; i++){
  if (arrr[i]>largest){
    secondLagrest = largest;
   largest = arrr[i];
    }else if (arrr[i]>secondLagrest&& arrr[i]!==largest);
  }
if(secondLagrest === -Infinity){
  console.log("No second largest elment in arr",largest)
}else{
  console.log("Second Largest",secondLagrest);

}

// Remove Duplicates from Array 

