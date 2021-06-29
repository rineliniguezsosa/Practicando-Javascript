window.onload = function(){     
    
    let boton = document.querySelector(".btn")
    let sidebar = document.querySelector(".sidebar")
    let cerrar = document.querySelector(".close")

    boton.addEventListener("click",()=>{
        sidebar.classList.toggle("show")
    })

    cerrar.addEventListener("click",()=>{
        sidebar.classList.remove("show")
    })


}

