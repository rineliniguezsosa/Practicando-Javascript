window.onload = function(){

    let increment = document.getElementById("incrementar");
    let decrement = document.getElementById("decrementar");
    let start = document.getElementById("reiniciar");
    let cuenta = document.getElementById("cuenta");
    
    cuenta.textContent = 0;

    let num = 0;
    increment.addEventListener("click",()=>{
        num++;
        cuenta.textContent = num;
        if (num == 1) {
            cuenta.style.color = "red";
        }
        if(num == 0){
            cuenta.style.color = "#000"
        }
    })

    decrement.addEventListener("click",()=>{
        num --;
        cuenta.textContent = num;
        if (num == -1) {
            cuenta.style.color = "blue";
        }
        if(num == 0){
            cuenta.style.color = "#000"
        }
    })

    start.addEventListener("click",()=>{
        num = 0;
        cuenta.textContent = num;
        if(num == 0){
            cuenta.style.color = "#000"
        }
       
    })
}