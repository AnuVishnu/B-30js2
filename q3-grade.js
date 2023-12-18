var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter the marks '));

if(a>90){
    console.log("A");

}
else if(a>80){
    console.log("B");
}
else if(a>70){
    console.log("C");
}
else if(a>60){
    console.log("D");
}
else if(a>50){
    console.log("E");
}
else if(a>=0){
    console.log("Failed.");
}
else{
    console.log("Invalid input.");
}
