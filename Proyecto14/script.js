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
            <div style="margin-left:10px;">
                <span style="margin-left:15px; class="texto">${dato}</span>
            </div>
            <div style="margin-right:15px;">
             <button type="button" class="btn-complete">Completado</button>
             <button type="button" class="btn-red">Eliminar</button>
            </div>
            `
            let botoneliminar = element.querySelector(".btn-red")
            botoneliminar.addEventListener("click",Eliminaritem);
            
            
            let botoneditar = element.querySelector(".btn-complete")
            botoneditar.addEventListener("click",Editaritem);

            lista.appendChild(element);

            Showmensaje("Añadiste un nuevo elemento","exito");

            form.reset();

         
        }
        
    })
    
    function Showmensaje(mensaje,clase){
        alerta.textContent = mensaje;
        alerta.classList.add(`alert-${clase}`)
        setTimeout(()=>{
            alerta.textContent = ""
            alerta.classList.remove(`alert-${clase}`)
        },2000)   
    }

    function Eliminaritem(e) {
        lista.removeChild(e.target.parentElement.parentElement);
    }

    function Editaritem(e) {
       let palabra  =  e.target.parentElement.parentElement.firstElementChild.firstElementChild
       let item = e.target.parentElement.parentElement
       palabra.style.textDecoration = "line-through";
       palabra.style.color = "#DD5044"; 
       item.style.backgroundColor = "#E7EAED";
       item.style.border = "none";
       
       
    }
})


