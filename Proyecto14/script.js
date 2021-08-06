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
     /* Puede obtener el enésimo carácter, o letra, de una cadena escribiendo "cadena" [N]. El valor devuelto será una cadena que contiene solo un carácter (por ejemplo, "b"). El primer carácter tiene la posición 0, lo que hace que el último se encuentre en la posición string.length - 1. En otras palabras, una cadena de dos caracteres tiene la longitud 2 y sus caracteres tienen las posiciones 0 y 1. Escriba una función countBs que toma una cadena como único argumento y devuelve un número que indica cuántos caracteres "B" en mayúscula hay en la cadena. A continuación, escriba una función llamada countChar que se comporte como countBs, excepto que necesita un segundo argumento que indica el carácter que se va a contar (en lugar de contar solo los caracteres "B" en mayúscula). Vuelva a escribir countBs para hacer uso de esta nueva función. */
})


