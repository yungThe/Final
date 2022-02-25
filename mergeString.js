function merge2String(a,b){
    let c = a.split('')
    let d = b.split('')
    var k = [];
    if(c.length==d.length){
        let index =0;
        for(i=0;i<c.length;i++){
            k[index] = c[i];
            k[index++] = d[i];
            index++; 
        }
    }
    if(c.length>d.length){
        let index =0;
        let i=0;
        for(i=0;i<c.length;i++){
            k[index] = c[i];
            k[index++] = d[i];
            index++; 
        }
        while(i<d.length){
            k[index] = c[i]
            index++
        }
    }
    if(c.length<d.length){
        let index =0;
        let i=0;
        for(i=0;i<c.length;i++){
            k[index] = c[i];
            k[index++] = d[i];
            index++; 
        }
        while(i<d.length){
            k[index] = d[i]
            index++
        }
    }
    k.toString();
    console.log(k.join(''));
}
merge2String("abc","123")
merge2String("abcd","123")
merge2String("abc","1234")


