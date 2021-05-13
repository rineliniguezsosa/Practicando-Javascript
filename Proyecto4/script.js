window.onload = function(){
    
    let boton = document.getElementById("btnmodal");
    let modal = document.getElementById("modal")
    
    boton.addEventListener("click",()=>{
       modal.classList.add("showmodal")
       modal.style.display = "block" 
    })

    modal.addEventListener("click",()=>{
        modal.classList.remove("showmodal")
        modal.style.display = "none"
    })

}
