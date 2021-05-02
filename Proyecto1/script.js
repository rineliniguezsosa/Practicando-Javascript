window.onload = function(){
    let colores = ["red","gray","blue","green","orange","pink","purple","#DD5145","#1BA160","#E7EAED","#00D1B2","#00324B","#FF2351","#E24329","#FFEA00","#BCED09","#4C5B5C","#0496FF","#FFBC42","#499F68","#157A6E"]
    
    let boton = document.getElementById("btncolor");
    
    boton.addEventListener("click",function(){
        let coloraleatorio = colores[Math.floor(Math.random()* colores.length)]

        let caja = document.getElementById("cajapaleta");
        caja.style.backgroundColor= coloraleatorio;
        
        let cualcolor = document.getElementById("quecolor");
        cualcolor.textContent = coloraleatorio;
    })
}