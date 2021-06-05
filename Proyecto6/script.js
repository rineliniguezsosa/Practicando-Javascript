window.onload = function(){
    
    const mes =[
        "Enero", 
        "Febreroy", 
        "Marzo", 
        "Abril",
        "Mayo", 
        "Junio", 
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Deciembre",
    ];
    const dias =[
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ];

    let date2 = new Date();
    let diasemana = date2.getDay();
    let dia = date2.getDate();
    let Mes = date2.getMonth()
    let Año = date2.getFullYear();
    Mes = mes[Mes];
    diasemana = dias[diasemana];

    let fulldate = document.getElementById("date");
    fulldate.textContent = `${diasemana},${dia} de ${Mes} del ${Año}`
    
    setInterval(() => {
        let date = new Date();
        let horas = date.getHours();
        let minutos = date.getMinutes();
        let segundos = date.getSeconds();

        let hora = document.getElementById("hora");
        let minuto = document.getElementById("minuto");
        let segundo = document.getElementById("segundo");
       
        hora.textContent = horas+":";
        minuto.textContent = minutos+":";
        segundo.textContent = segundos;
    }, 1000)    
}
