let num = 1221;
let k= num.toString()
    let n=""
for(let i=k.length-1; i>=0; i--){
     n= n+k[i]+"";
}

if(k===n){
    console.log("Yes");
}
else{
    console.log("No");//write code here
}