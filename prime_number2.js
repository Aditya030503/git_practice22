function checkprime(num){
    let factor =0

    for(let x=1;x<=num;x++){
    if(num%x==0){
     factor++;}
      if(factor===2){
    
        retrun true;}
    else{
    retrun false}}
     let ans = checkprime(11)
    if(ans = true){
     console.log("prime")}else {
      console.log("NA")}






