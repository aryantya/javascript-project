let input = document.querySelector("#contry")
 let btn = document.querySelector("#button")
 let ul = document.querySelector("#ul")
let url ="http://universities.hipolabs.com/search?country="

 let  country = ""
 
 btn.addEventListener("click",async()=>{

        ul.innerHTML="";

     le =  await country + input.value
              
     getcollage()

     return le
 })

  
async function getcollage() {
    try{
    let response =  await axios.get(url+le)
      
      response.data.forEach(collage=>{

    let li = document.createElement("li");

    li.innerText=collage.name;

    ul.appendChild(li);

    console.log(collage.name)
     });
         }catch (err){
         console.log(err)
    }
}
