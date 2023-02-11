let number=15;
let factor=0;
for(let i=0;i<=number;i++){
if(number%i==0){
factor++;
}
}
(factor==2) ? console.log("it's a prime number") : console.log("it is not a prime number");