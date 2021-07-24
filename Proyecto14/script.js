window.addEventListener("load",()=>{

    let form = document.getElementById("boxform");
    let valorinput = document.getElementById("dato")
    let lista = document.getElementById("list-item")
    let alerta = document.querySelector(".alerta")

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let dato = valorinput.value;
        if(dato == ""){
            Showmensaje("Lo sentimos no aceptamos valores vacios :(","cuidado");
        }
        else{
            let element = document.createElement("div")
        
            element.classList.add("item") 
            element.innerHTML = `
            <span class="texto">${dato}</span> <button>Eliminar</button>
            `
            lista.appendChild(element);

            Showmensaje("Añadiste un nuevo elemento","exito");
        }
        
    })
    function Showmensaje(mensaje,clase){
        alerta.textContent = mensaje;
        alerta.classList.add(`alert-${clase}`)
        setTimeout(()=>{
            alerta.textContent = ""
            alerta.classList.remove(`alert-${clase}`)
        },3000)   
    }
})


