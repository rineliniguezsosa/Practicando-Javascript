window.onload = function(){     

 let botones = document.querySelectorAll(".botones")

 botones.forEach(function(btn){
     btn.addEventListener("click",(e)=>{
        let muestra = e.target.parentElement.parentElement.parentElement

        muestra.classList.toggle("respuesta")
     })
 })

 
}
