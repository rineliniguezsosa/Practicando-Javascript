window.addEventListener("load",()=>{
  
  let boton = document.getElementById("btn");

  boton.addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value;
    if(nombre.length == 0){
      document.formulario.nombre.focus();
      return 0
    }
    if(apellido.length == 0){
      document.formulario.apellido.focus();
      return 0
    }
    if(edad.length == 0){
      document.formulario.edad.focus();
      return 0
    }
    if(email.length == 0){
      document.formulario.email.focus();
      return 0
    }
    document.formulario.submit();
  })
   
  
})


