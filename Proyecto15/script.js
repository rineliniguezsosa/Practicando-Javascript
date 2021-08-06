window.addEventListener("load",()=>{
  
  let boton = document.getElementById("btn");

  boton.addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value;
    if(nombre.length == 0){
      document.formulario.nombre.focus();
      alert("Ingresa nombre obligatorio !")
      return 0
    }
    if(apellido.length == 0){
      document.formulario.apellido.focus();
      alert("Ingresa apellido obligatorio !")
      return 0
    }
    if(edad.length == 0){
      document.formulario.edad.focus();
      alert("Ingresa edad obligatorio !")
      return 0
    }
    if(email.length == 0){
      document.formulario.email.focus();
      alert("Ingresa e-mail obligatorio !")
      return 0
    }
    document.formulario.submit();
  })
   
  
})


