 let counter=document.getElementById("count-el")
 let saved=document.getElementById("saved")
 let increase=0
 

function increment(){
    
    increase++
    counter.innerHTML=increase
    
}

function decrement(){
  increase--
   counter.innerHTML=increase
    
}

function  save() {
      let save=increase+" , "
      saved.textContent+=save
    
    counter.innerHTML=0
    increase =0
}


