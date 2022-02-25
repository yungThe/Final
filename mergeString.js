function merge2String(a,b){
    const c = a.split('')
    const d = b.split('')
    let i=0;
    let j=0;
    const k = [];
    let n =0;
    while(i<c.length && j<d.length){
        k[n++] = c[i++]
        k[n++] = d[j++]
    }
    while(j<d.length){
        k[n++]=d[j++]
    }
    while(i<c.length){
        k[n++]=c[i++]
    }
    k.toString()
    console.log(k.join(''))
}
merge2String("abc","fdf")
merge2String("abcd","123")
merge2String("abc","1234")


