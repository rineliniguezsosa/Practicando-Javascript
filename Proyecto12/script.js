window.onload = function(){

let alert = document.querySelector(".alert");
let form = document.querySelector(".grocery-form");
let grocery = document.getElementById("grocery")
let submitbtn = document.querySelector(".submit-btn");
let container = document.querySelector(".grocery-container");
let list = document.querySelector(".grocery-list");
let clearbtn = document.querySelector(".clear-btn");

let editelement;
let editflag = false;
let editId = "";

clearbtn.addEventListener("click",()=>{
  const items = document.querySelectorAll(".grocery-item")
  if(items.length > 0){
  items.forEach(function(item){
      list.removeChild(item)
  })
  }
  container.classList.remove("show-container")
  displayalert("elementos eliminados","danger")
  setBackToDefault()
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let valor = grocery.value
    let id = new Date().getTime().toString()
    
    if(valor !="" && editflag == false){
        let element = document.createElement("article")
        element.classList.add('grocery-item')
        let attr = document.createAttribute("data-id")
        attr.value = id
        element.setAttributeNode(attr)
        element.innerHTML = `
        <p class="title">${valor}</p>
        <div class="btn-container">
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
        </div>
        `
        list.appendChild(element)
        displayalert("se agrego correctamente","exitoso")
        container.classList.add("show-container")

        addToLocalStorage(id,valor)
        setBackToDefault()
    }
    else if(valor != "" && editflag == true){
        console.log("editing");
    }
    else{
        displayalert("agrega items","danger")
    }
})

const displayalert = (text,action) => {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    setInterval(() => {
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    }, 2000)
}


const setBackToDefault = () => {
    grocery.value = ""
    editflag = false
    editId = ""
    submitbtn.textContent = "submit"
}
const addToLocalStorage = (id,valor) => {
    console.log(id,valor);
}

}