window.onload = function(){
    
    let historia = document.getElementById("historia");
    let vision = document.getElementById("vision");
    let metas = document.getElementById("metas");

    let h = document.getElementById("H");
    let v = document.getElementById("V");
    let m = document.getElementById("M");

    historia.addEventListener("click",()=>{
        h.style.display = "block"
        v.style.display = "none"
        m.style.display = "none"
    })
    vision.addEventListener("click",()=>{
        v.style.display = "block"
        h.style.display = "none"
        m.style.display = "none"
    })
    metas.addEventListener("click",()=>{
        m.style.display = "block"
        v.style.display = "none"
        h.style.display = "none"
    })
   

   

    

      
}
