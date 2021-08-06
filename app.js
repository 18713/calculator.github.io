

function clear(){
    var acha =  document.getElementById('clr')
    acha.value = ""
 }
 
 
 function num(a){
     //console.log(a)
     document.getElementById('clr').value += a
 }
 
 function result(){
     var acha = document.getElementById('clr')
     acha.value = eval(acha.value)
 }
 
 function empty(){
     document.getElementById('clr').value = ""
 }
 
 