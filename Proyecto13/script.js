window.addEventListener("load",()=>{

    setInterval(() => {

      let personas = document.getElementById("personas").value
      let cantidadtotal = document.getElementById("cantidadtotal").value
      let totalbwperson = document.getElementById("totalbwperson")
      let reset = document.getElementById("reset")
      let tipxpersona = document.getElementById("tipxpersona")
      let owntip = document.getElementById("owntip").value
      let boton = document.querySelectorAll(".btn")
      let text = document.querySelector(".text")
      let cantidad = parseFloat(cantidadtotal);
      let numpersonas = parseInt(personas);

      
      if(personas == 0){
         text.classList.add("show-text");
      } 
      if(personas > 0) {
         
         text.classList.remove("show-text");

         boton.forEach(function(item){
         item.addEventListener("click",(e)=>{
            Recibe(e.target.value);
              document.getElementById("owntip").value = null;
            })
         })

         function Recibe(val) {
            let porcentaje = parseInt(val);
            console.log(porcentaje / 100);
            let resultado = ((cantidad * (porcentaje / 100))/numpersonas);
            totalbwperson.textContent = resultado.toFixed(2)+""
            let monto2 = (cantidad * (1 + porcentaje / 100))
            let cantidadxpersona = monto2 / personas
            tipxpersona.textContent = cantidadxpersona.toFixed(2)+""
            
         }
         if(owntip != 0) {
            let resultado2 = ((cantidad * (owntip / 100))/numpersonas);
            totalbwperson.textContent = resultado2.toFixed(2)+""
            let monto3 = (cantidad * (1 + owntip / 100))
            let cantidadxpersona2 = monto3 / personas
            tipxpersona.textContent = cantidadxpersona2.toFixed(2)+""
         }

         reset.addEventListener("click",()=>{
            totalbwperson.textContent = ""
            tipxpersona.textContent = ""
         })
         
      }
      
   },1000)
   
})


