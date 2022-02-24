function findOppositeNumber(n, inputNumber){
    let a = (inputNumber + (n/2)) % n;
    console.log(a)
}
console.log("Ham findOppositeNumber:")
findOppositeNumber(10,2);
findOppositeNumber(10,6);
/*function merge2String(a,b){
    let a="abc"
    let b="123"
    
    let i = a.length
    let j = b.length
    if(i>j){
        for(k=0;k<j;k++){
            console.log(a[k]+b[k])
        }
    }
}
merge2String("abc","123")*/
