window.onload = function(){

      document.getElementById("papel").addEventListener("click",()=>{
          recibeelemento("papel")
          aleatorio();
      })
      document.getElementById("roca").addEventListener("click",()=>{
         recibeelemento("roca")
         aleatorio();
      })
      document.getElementById("tijeras").addEventListener("click",()=>{
          recibeelemento("tijeras")
          aleatorio(); 
      })

      let recibeelemento = (elemento) => {
        let opcionaleatoria = aleatorio();
        let tipo = elemento;
        validarelementos(opcionaleatoria,tipo)
      }
      let aleatorio = () => {
        let elementos = ["roca","papel","tijeras"]
        let opcionRamdom;
        opcionRamdom = elementos[Math.floor(Math.random()* elementos.length)];
        return opcionRamdom
      }
      let ganaste = (tipo,opcionaleatoria) => {
          contador++;
          puntosj1.textContent = contador;
          info.textContent = `El jugador 1 uso ${tipo} y la PC uso ${opcionaleatoria}:Ganaste`;
      }
      let perdiste = (tipo,opcionaleatoria) => {
          contador2++;
          puntospc.textContent = contador2;
          info.textContent = `El jugador 1 uso ${tipo} y la PC uso ${opcionaleatoria}:Perdiste :(`;
      }
      const empate = (tipo,opcionaleatoria) => {
        info.innerHTML = "Empate";
        info.textContent = `El jugador 1 uso ${tipo} y la PC uso ${opcionaleatoria}:Es un empate`;
      }

      let puntosj1 = document.getElementById("puntosj1");
      let puntospc = document.getElementById("puntospc");
      let info = document.getElementById("info")
      
      let contador = 0;
      let contador2 =0;

      let validarelementos = (opcionaleatoria,tipo) => {
        switch (tipo+opcionaleatoria) {
            case "roca"+"tijeras":
            case "papel"+"roca":
            case "tijeras"+"papel":
                ganaste(tipo,opcionaleatoria);
                break;
            case "roca"+"papel":
            case "papel"+"tijeras":
            case "tijeras"+"roca":
                perdiste(tipo,opcionaleatoria);
                break;
            case "roca"+"roca":
            case "papel"+"papel":
            case "tijeras"+"tijeras":
                empate(tipo,opcionaleatoria);
                break;
        }
       
     }
    
      
      
      
      
      
}
