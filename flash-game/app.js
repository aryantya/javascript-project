let ueerrequst= ['']
  let gamelaval=[]
let idx =[]
let p = document.getElementsByTagName("p");
let body = document.getElementsByTagName("body");

let red= document.querySelector(".red");
let green= document.querySelector("#green");
let blue= document.querySelector("#blue");
let yellow= document.querySelector("#yellow");

let btn =[red, green,blue,yellow];

let lavel= 0

document.addEventListener("keypress",function(){
  
  
  document.all[8].innerText="lavel"
  document.all[9].innerText=lavel
     
      setTimeout(()=>{
        fles()
      }, 2000)  
    
      
} );
function rest(){
  document.all[8].innerText="your game is over try now  enter  eaney key start game"
    
  document.all[9].innerText=""

     lavel=0
}

function fles(){
  let ix = Math.floor(Math.random()*4)
  idx = ix
    btn[idx].classList.add("fless");
 console.log(btn[idx])
       
  
 setTimeout(()=>{
  btn[idx].classList.remove("fless")
   lavel++
   console.log(lavel)
   document.all[9].innerText=lavel
 },500); 
 
return btn[idx]
}
let btnu =btn[idx]
   
      
 red.addEventListener("click",()=>{
  if(btn[idx]==red){
    console.log("yes")
    fles()
  }else{
    rest()
    alert(" you are wrong try now")
}
 }
 )
blue.addEventListener("click",()=>{
  if(btn[idx]==blue){
    
    console.log("yes")
    fles()
  }else{
    rest()
    alert(" you are wrong try now")
}
 } 
 )
 green.addEventListener("click",()=>{
  if(btn[idx]==green){
    console.log("yes")
    fles()
  }else{
    rest()
    alert(" you are wrong try now")
}
 }
)
 yellow.addEventListener("click",()=>{
  if(btn[idx]==yellow){
    console.log("yes")
    fles()
  }else{
    rest()
    alert(" you are wrong try now")
}
 }
)
