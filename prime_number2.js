function checkprime(number){
    for(let x=1;x<=number;x++){
    if(number%x==0){
        factor++;}
        if(factor==2){
    return true;}
        }}
    let ans=checkprime(13)
    if(ans==true){
    console.log("it a prime number")}
    else{
        console.log("not a prime number")
    }
