window.onload = function(){

  let monto = 142.55
  let porcentaje = 0.15

  let montotal = monto * (1+porcentaje)
  let cantidadxpersona = (montotal/5)
  console.log(cantidadxpersona.toFixed(2))

}