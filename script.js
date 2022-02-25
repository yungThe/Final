var btn = document.getElementById('btn')
var input = document.getElementById('input')
var winNoti = document.querySelector('.win')
var lostNoti = document.querySelector('.lost')
var outNoti = document.querySelector('.out')
function check(){
    if(input.value % 4 == 0){
        winNoti.style.display='block'
        setTimeout(function(){
            winNoti.style.display = 'none'
        },3000)
    }
    else{
        lostNoti.style.display='block'
        setTimeout(function(){
            lostNoti.style.display = 'none'
        },3000)
    }
}
input.addEventListener('click',function(e){
    input.value=''
})
let i=0
btn.addEventListener('click', function (e){
    i++
    if(i>3){
        outNoti.style.display='block'
    }
    if(i<=3){
        check()
    }

})