window.onload = function(){     


 let days = document.querySelector(".days")
 let h = document.querySelector(".hours")
 let m = document.querySelector(".minutes");
 let s = document.querySelector(".seconds");
 let limite = document.querySelector(".limite");
 

 let futuredate = new Date(2021,5,22,21,42,0,) 
 //añade tu fecha futura aquí,empezando por este orden :año,mes,fecha,hora,minutos,segundos

 let diafuturo = futuredate.getTime() //obtiene la fecha futuro en milisegundos

 let cuenta = setInterval(() => {
    let today = new Date().getTime(); //obtenemos la fecha actual en milisegundos

    let tiempo = diafuturo-today;
    
    let segundosenms = 1000;
    let horasenms = 3600000;
    let minutosenms = 60000;
    let diasenms = 86400000;
    let oneday = Math.floor((tiempo / diasenms));
     //dias

    let horasres = Math.floor(tiempo / horasenms);
     //horas
    let minutosres = Math.floor(tiempo / minutosenms);
    //minutos
    let segundosres = Math.floor(tiempo / segundosenms);
    //segundos
    days.textContent = oneday;
    h.textContent = horasres;
    m.textContent = minutosres;
    s.textContent = segundosres;
    if (tiempo<0 ) {
        limite.innerHTML = "SE ACABO EL TIEMPO DE ESPERA"
        clearInterval(cuenta); 
    }
 }, 1000)
 

 
}
