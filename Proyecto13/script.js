window.addEventListener("load",()=>{
  
   document.getElementById("cinco").addEventListener("click",(e)=>{
      Proceso(e.target.value)
   })
   document.getElementById("diez").addEventListener("click",(e)=>{
      Proceso(e.target.value)
   })
   document.getElementById("quince").addEventListener("click",(e)=>{
      Proceso(e.target.value)
   })
   document.getElementById("vcinco").addEventListener("click",(e)=>{
      Proceso(e.target.value)
   })
   document.getElementById("cincuenta").addEventListener("click",(e)=>{
      Proceso(e.target.value)
   })
    
  const Proceso = (num) => {
     Clock(num)
  }
  const Clock = (per) => {
   let cantidadtotal = document.getElementById("cantidadtotal").value
   let cantidadtotalcopy = parseFloat(cantidadtotal)
   let percopy = parseFloat(per)
   let personas = document.getElementById("personas").value
   let personascopy = parseInt(personas)
   let result = (cantidadtotalcopy*percopy)/personascopy
   console.log(result.toFixed(2));
   //console.log(typeof personascopy);
   //console.log(typeof percopy);
   //console.log(typeof cantidadtotalcopy);//number
   totaltip.textContent = result.toString()
  }
  let time = setInterval(Clock, 1000)
  
  clearInterval(time)
  
  
  
 
})



