// NODO RAIZ
DOM = document;


//---colores--
const rootStyles = `
:root{
    --color-border: #907ad6;
    --color-fondo: #f7ebfd;
    --color-fondo-oscuro: #6F2DBD;
    --color-primario: #757bc8;
    --color-secundario: #757bc8;
    --color-terciario: #757bc8;
    --color-cuaternario: #bbadff;
    --color-chat: #9fa0ff;
    --fuente-x: 'Times New Roman', Times, serif;
}
`;
const colorFondo= 'var(--color-fondo)';
const colorFondoOscuro = 'var(--color-fondo-oscuro)';
const colorBorder = 'var(--color-border)';
const color1 = 'var(--color-primario)';
const color4 = 'var(--color-cuaternario)';
const colorChat = 'var(--color-chat)';




const styleElement = DOM.createElement("style");
styleElement.innerHTML = rootStyles;
DOM.head.appendChild(styleElement); 

document.body.style.backgroundColor = colorFondo;


//elementos
const divContenedor = DOM.createElement("div");
let divListadoChats = DOM.createElement("div");
const divContenidoPerfil = DOM.createElement("div");
const divMensaje = DOM.createElement("div");
const divListadoMensajes = DOM.createElement("div");
const divContenidoChat = DOM.createElement("div");
let divChat = DOM.createElement("div");
const divArribaUsers = DOM.createElement("div");



//--para el perfil -------

let imgPerfil = document.createElement("img");
imgPerfil.width = "65";
imgPerfil.height = "65";
imgPerfil.className = "imagen-perfil";
imgPerfil.style.borderRadius = "50%";
imgPerfil.src = "https://th.bing.com/th/id/OIP.d-zNWc9hB05nn0sO6_42EgHaHa?rs=1&pid=ImgDetMain";


//--Entry --------------------------------
let mensajeChat = document.createElement("textarea");
mensajeChat.style.width = "99%";
mensajeChat.style.height = "95%";
mensajeChat.style.marginLeft = "0";
mensajeChat.style.backgroundColor = "transparent";
mensajeChat.style.border = "1px 'var(--color-border)";
//mensajeChat.style.borderRadius = "10px";
mensajeChat.style.fontSize = "17px";

//maxinmo de 140 caracteres
mensajeChat.setAttribute("maxlength","140");
mensajeChat.setAttribute("placeholder"," Escribe tu mensaje aquí...");


//--Boton ----------------------------------------------------
const Boton = document.createElement("button");
const icono=document.createElement("i");
icono.classList.add("fas");
icono.classList.add("fa-paper-plane");//icono de enviar
Boton.appendChild(icono);

Boton.style.backgroundColor = colorFondo;
//Boton.style.fontFamily = "var(--fuente-x)";
Boton.style.border="1px solid var(--color-border)"
Boton.style.fontSize= "20px";
Boton.style.width="13%";
//Boton.textContent = "Enviar";

//Boton.style.transitionDuration = "all 0.3s ease";
Boton.addEventListener("mouseover", function() {
    Boton.style.backgroundColor = color1;
});
Boton.addEventListener("mouseout", function() {
    Boton.style.backgroundColor = colorFondo;
});

//-funcion del boton-----------
Boton.addEventListener("click", function(){
    MandarMensaje();
    mensajeChat.value = "";
});

mensajeChat.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        MandarMensaje(); 
        mensajeChat.value = "";
    }

});

//--Boton modo--------------------------------
const BotonModo = document.createElement("button");
const icono2=document.createElement("i");
icono2.classList.add("fas");
icono2.classList.add("fa-sun");//icono de sol
BotonModo.appendChild(icono2);

BotonModo.style.backgroundColor = color4;
BotonModo.style.border="1px solid var(--color-border)"
BotonModo.style.fontSize= "20px";
BotonModo.style.width="13%";
BotonModo.style.borderRadius="40%";



BotonModo.addEventListener("mouseover", function() {
    BotonModo.style.backgroundColor = color1;
});
BotonModo.addEventListener("mouseout", function() {
    BotonModo.style.backgroundColor = color4;
});

BotonModo.addEventListener('click', () => {
  // Cambiar el color de fondo al color opuesto
  if (document.body.style.backgroundColor === colorFondo) {
    document.body.style.backgroundColor = colorFondoOscuro;
  } else {
    document.body.style.backgroundColor = colorFondo;
  }
});


//-userName-------------------------------------
const userName = document.createElement("h4");
userName.style.fontFamily = "var(--fuente-x)";
userName.style.color="black";
userName.style.textAlign="center";
userName.innerHTML = "Pan";


//----agregar elementos a la estructura------
divContenidoPerfil.appendChild(imgPerfil);
DOM.body.appendChild(divContenedor);

divContenedor.appendChild(divListadoChats);
divContenedor.appendChild(divMensaje);
divContenedor.appendChild(divContenidoPerfil);


divContenidoPerfil.appendChild(userName);
divContenedor.appendChild(divContenidoChat);
divContenidoChat.appendChild(mensajeChat);
divContenidoChat.appendChild(Boton);
divListadoChats.appendChild(divArribaUsers);
divContenidoPerfil.appendChild(BotonModo)



//cambio de las propiedades
//--contenedor --------------------------------
divContenedor.style.backgroundColor= colorFondo;
divContenedor.style.height="calc(95vh - 0px)";
divContenedor.style.display="grid";
divContenedor.style.fontFamily="var(--fuente-x)";
divContenedor.style.gridTemplateColumns="20% 80%";
divContenedor.style.gridTemplateRows="85% 15%";


//--listadoChats --------------------------------

divListadoChats.style.backgroundColor = color1;
divListadoChats.style.padding = "8px";
divListadoChats.style.display = "flex";
divListadoChats.style.flexDirection = "column";
divListadoChats.style.overflow = "scroll";


///
divArribaUsers.style.backgroundColor = colorChat;
divArribaUsers.style.marginBottom = "15px";
divArribaUsers.style.display = "flex";
divArribaUsers.style.flexDirection = "column";
divArribaUsers.height = "20%";
divArribaUsers.width = "80%";
divArribaUsers.style.border = "1px solid 'var(--color-border)";
divArribaUsers.innerHTML = "<center><h4 style='color: white;'>Usuarios</h4>";

//--ContenidoPerfil --------------------------------

divContenidoPerfil.style.backgroundColor = color1;
divContenidoPerfil.style.display = "flex";
divContenidoPerfil.style.alignItems = "center";
divContenidoPerfil.style.justifyContent = "space-around";

//--mensaje --------------------------------
divMensaje.style.backgroundColor = color1;

//--contenidoChat --------------------------------

divContenidoChat.style.backgroundColor = "var(--color-cuaternario)";
divContenidoChat.style.display = "flex";
divContenidoChat.style.justifyContent = "space-evenly";

//--ids/ classnames --------------------------------
divContenedor.id="contenedor"
divContenidoPerfil.id="contenido-perfil"
divMensaje.id="mensaje"
divMensaje.style.overflow = "scroll";
divListadoMensajes.id="listado-mensajes"
divContenidoChat.id="contenido-chat"
divChat.className="chatt"
mensajeChat.id="mensaje-chat"
Boton.id="boton-chat"
divArribaUsers.id="arribaUsers"

// ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA
async function optenerPosts(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })    
    console.log("await", data);
    let posts = await data.json();
    console.log(posts);

    return posts;
}

function crearChat(texto, id){
    let nuevoChat = document.createElement("div");
    nuevoChat.className = "chat";
    nuevoChat.id = id;
    nuevoChat.innerText = texto;
    return nuevoChat;
}


async function crearListoDeChats(){
    // mando a traer los post dummys a una api con get
    let misPosts =  await optenerPosts()
    
    // mando a traer el div donde quiero poner los chats
    //let divListados = DOM.getElementById("listado-chats");
    if(divListadoChats != null){
        // transformamos los dicccionarios a un div de chat
        misPosts.map(post=>{
            let nuevoChat = crearChat(post.title, post.id);
            return nuevoChat
        })
        // recorremos los nuevos chats y los agremos al div de listados
        .forEach(element => {
            let divChatContenedor = DOM.createElement('div');
            divChatContenedor.style.backgroundColor = colorChat;
            divChatContenedor.style.width = "95%";
            divChatContenedor.style.minHeight = "60px";
            divChatContenedor.style.borderRadius = "7px";
            divChatContenedor.style.border = "1px solid 'var(--color-border)";
            divChatContenedor.style.marginBottom = "8px";
            divChatContenedor.style.padding = "5px";
            
            divChatContenedor.appendChild(element);
            divListadoChats.appendChild(divChatContenedor);
            //divListadoChats.appendChild(element);
        });
    }

}


function MandarMensaje(){
    let mensajeValue = document.getElementById("mensaje-chat").value;
    ///console.log(mensajeValue);
    let divMensajeContenedor = DOM.createElement("div");
    divMensajeContenedor.style.backgroundColor = color4;
    divMensajeContenedor.style.width = "97.6%";
    divMensajeContenedor.style.minHeight = "60px";
    divMensajeContenedor.style.borderRadius = "2px";
    divMensajeContenedor.style.border = "1px solid 'var(--color-border)";
    divMensajeContenedor.style.marginBottom = "8px";
    divMensajeContenedor.style.flexDirection = "column";


    let info = document.createElement("h4");
    divMensajeContenedor.innerHTML = mensajeValue;
    info.style.alignItems = "right";
    divMensajeContenedor.style.padding = "10px";
    info.style.fontSize= "20px" ;
    //divMensajeContenedor.appendChild(userName);
    divMensaje.appendChild(divMensajeContenedor);

    

}

crearListoDeChats();
