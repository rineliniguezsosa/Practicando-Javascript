window.onload = function(){

    const usuarios = [
        {
            urlimg:"https://randomuser.me/api/portraits/women/0.jpg",
            nombre:"Lissa",
            comentario:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/17.jpg",
            nombre:"Valeria",
            comentario: "when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/90.jpg",
            nombre:"Maria",
            comentario:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/54.jpg",
            nombre:"Julieta",
            comentario:"omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/43.jpg",
            nombre:"Rosalia",
            comentario:" he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/33.jpg",
            nombre:"Patricia",
            comentario:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, ",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/77.jpg",
            nombre:"Katia",
            comentario:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/55.jpg",
            nombre:"Luisa",
            comentario:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/88.jpg",
            nombre:"Susan",
            comentario:"commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/44.jpg",
            nombre:"Karen",
            comentario:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        },
        {
            urlimg:"https://randomuser.me/api/portraits/women/2.jpg",
            nombre:"Fernanda",
            comentario:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
        },
    ]
    let boton = document.getElementById("btncomentarios");
    let name = document.getElementById("nombre")
    let coment = document.getElementById("comentario")
    let imguser = document.getElementById("usuario");
    
    name.textContent = "Fernanda";
    coment.textContent = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system";
    imguser.setAttribute("src","https://randomuser.me/api/portraits/women/2.jpg")

    boton.addEventListener("click",()=>{
        let usuarioaleatorio = usuarios[Math.floor(Math.random()* usuarios.length )]
        name.textContent = usuarioaleatorio.nombre;
        coment.textContent = usuarioaleatorio.comentario;
        imguser.setAttribute("src",usuarioaleatorio.urlimg.toString());

    })
}