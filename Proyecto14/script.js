window.addEventListener("load",()=>{

  let ocho = document.getElementById("eight");
  let seven = document.getElementById("seven");
  let nine = document.getElementById("nine");
  let dot = document.getElementById("dot");
  let display = document.getElementById("display");
  let mas = document.getElementById("mas");
  let menos = document.getElementById("menos");
  let eliminar = document.querySelector(".eliminar")
  let misdatos = [];
  
  setInterval(() => {
    console.log(misdatos);
  }, 1000)
  
  
  eliminar.addEventListener("click",()=>{
    display.value = ""
  })
  ocho.addEventListener("click",(e)=>{
    misdatos.push(e.target.value) 
  })
  seven.addEventListener("click",(e)=>{
    misdatos.push(e.target.value)
  })
  nine.addEventListener("click",(e)=>{
    misdatos.push(e.target.value)
  })
  dot.addEventListener("click",(e)=>{
    misdatos.push(e.target.value)
  })
  menos.addEventListener("click",(e)=>{
    misdatos.push(e.target.value)
  })
  mas.addEventListener("click",(e)=>{
    misdatos.push(e.target.value)
  })
  
  
  
  
  

  
  
  


  
 


})


