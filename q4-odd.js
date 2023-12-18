var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter a limit. '));
if(a % 2 == 0){
    console.log('Sum of odd numbers =',(a/2) **2);

}
else if(a % 2 == 1){
    console.log('Sum of odd numbers =',((a+1)/2) ** 2);
}
else{
    console.log('invalid input');
}