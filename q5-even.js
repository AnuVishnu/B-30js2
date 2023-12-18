var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('Enter the size of an array : '));
let array=[]
for(let i=0;i<a;i++){
    array[i]=parseInt(readlineSync.question('Enter the ' +i+ 'th element of array : '));
}
console.log("Then your array is ",array);
let n=0;
for(i=0;i<=a;i++){
    if(array[i]%2===0){
        n++;
    }
}
console.log("Number of even numbers in the given array is",n);