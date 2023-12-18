var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter a number '));
for(let i=1 ; i<=10 ; i++){
    console.log(a,"*",i, "=",a*i);
}