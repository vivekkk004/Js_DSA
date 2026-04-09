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