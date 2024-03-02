// NODO RAIZ
DOM = document;


//----------variables--------------
let usuarios={} //para validar queno se repitan los usuarios
let usuario= "Pan";

//---colores--
const rootStyles = `
:root{
    --color-border: #907ad6;
    --color-fondo: #f7ebfd;
    --color-fondo-oscuro: #6F2DBD;
    --color-primario: #757bc8;
    --color-secundario: #bbadff44;
    --color-terciario: #757bc8;
    --color-cuaternario: #bbadff;
    --color-chat: #9fa0ff;
    --fuente-x: 'Arial', sans-serif;
}
`;
//--fuente-x: 'Verdana', sans-serif;
const colorFondo= 'var(--color-fondo)';
const colorFondoOscuro = 'var(--color-fondo-oscuro)';
const colorBorder = 'var(--color-border)';
const color1 = 'var(--color-primario)';
const color2 = 'var(--color-secundario)';
const color4 = 'var(--color-cuaternario)';
const colorChat = 'var(--color-chat)';




const styleElement = DOM.createElement("style");
styleElement.innerHTML = rootStyles;
DOM.head.appendChild(styleElement); 

document.body.style.backgroundColor = colorFondoOscuro;


//elementos
const divContenedor = DOM.createElement("div");
let divListadoUsers = DOM.createElement("div");
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
    divMensaje.lastChild.scrollIntoView({behavior: "smooth", block: "end",inline: "end"});

});

mensajeChat.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        MandarMensaje(); 
        mensajeChat.value = "";
        divMensaje.lastChild.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});

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
  if (document.body.style.backgroundColor === colorFondoOscuro) {
    document.body.style.backgroundColor = colorFondo;
  } else {
    document.body.style.backgroundColor = colorFondoOscuro;
  }
});


//-userName-------------------------------------
const userName = document.createElement("h4");
userName.style.fontFamily = "var(--fuente-x)";
userName.style.color="white";
userName.style.textAlign="center";
userName.innerHTML = usuario;


//----agregar elementos a la estructura------
divContenidoPerfil.appendChild(imgPerfil);
DOM.body.appendChild(divContenedor);

divContenedor.appendChild(divListadoUsers);
divContenedor.appendChild(divMensaje);
divContenedor.appendChild(divContenidoPerfil);


divContenidoPerfil.appendChild(userName);
divContenedor.appendChild(divContenidoChat);
divContenidoChat.appendChild(mensajeChat);
divContenidoChat.appendChild(Boton);
divListadoUsers.appendChild(divArribaUsers);
divContenidoPerfil.appendChild(BotonModo)




//cambio de las propiedades
//--contenedor --------------------------------
divContenedor.style.backgroundColor= colorFondoOscuro;
divContenedor.style.height="calc(95vh - 0px)";
divContenedor.style.display="grid";
divContenedor.style.fontFamily="var(--fuente-x)";
divContenedor.style.gridTemplateColumns="20% 80%";
divContenedor.style.gridTemplateRows="85% 15%";
divContenedor.scrollTop= divContenedor.scrollHeight;


//--divListadoUsers --------------------------------

divListadoUsers.style.backgroundColor = color1;
divListadoUsers.style.padding = "8px";
divListadoUsers.style.display = "flex";
divListadoUsers.style.flexDirection = "column";
divListadoUsers.style.overflow = "scroll";


///
divArribaUsers.style.backgroundColor = colorChat;
divArribaUsers.style.marginBottom = "15px";
divArribaUsers.style.display = "flex";
divArribaUsers.style.flexDirection = "column";
divArribaUsers.height = "20%";
divArribaUsers.width = "80%";
divArribaUsers.style.border = "1px solid 'var(--color-border)";
divArribaUsers.innerHTML = "<center><h4 style='color: #420888fa;'>Usuarios</h4>";

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

//------------------funciones--------------------------------

//---obtener posts--------------------------------
async function obtenerPosts(){ // ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA
    let data = await fetch('http://uwu-guate.site:3000/messages',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })    
    //console.log("await", data);
    let posts = await data.json();
    console.log(posts);

    return posts;
}


//---Post posts--------------------------------
async function enviarPosts(mensaje){ // ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA
    try{
        let data = await fetch('http://uwu-guate.site:3000/messages',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(mensaje)
        })    
        
        if(!data.ok){
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        //console.log("await", data);
        let posts = await data.json();
        console.log(posts);
    
        return posts;
    }catch(error){
        console.error('Error:', error);
    }
    
}

//---Usuarios--------------------------------
function Usuarios(id,nombre){
    //valida si ya esta el nombre y si no retorna null
    if (usuarios[nombre]){
        return null;
    }
    else{
        let nuevoUser = document.createElement("div");
        nuevoUser.className = "user";
        nuevoUser.id = id;
        nuevoUser.innerHTML = '<center><span style="color: #ffffffcb"> '+ nombre+ '</span>';

        //agregar el nombre al objeto de usuarios de hasta arriba
        usuarios[nombre] = true;
        return nuevoUser;

    }
    
}


//---Lista de chats--------------------------------
async function ListaUsuarios(){ // ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA
    // mando a traer los post dummys a una api con get
    let misPosts =  await obtenerPosts()
    // mando a traer el div donde quiero poner los chats
    //let divListados = DOM.getElementById("listado-chats");
    if(divListadoUsers != null){
        misPosts.map(post=>{
            let nuevoUser = Usuarios(post.id, post.username);
            return nuevoUser
        })
        .forEach(element => {
            if(element!== null){
                let divUsuariosContenedor = DOM.createElement('div');
                divUsuariosContenedor.style.backgroundColor = colorChat;
                divUsuariosContenedor.style.width = "95%";
                divUsuariosContenedor.style.minHeight = "60px";
                divUsuariosContenedor.style.borderRadius = "7px";
                divUsuariosContenedor.style.border = "1px solid 'var(--color-border)";
                divUsuariosContenedor.style.marginBottom = "8px";
                divUsuariosContenedor.style.padding = "5px";
                
                divUsuariosContenedor.appendChild(element);
                divListadoUsers.appendChild(divUsuariosContenedor);
            }        
        });
    }

}


async function vistaPrevia(url){
    //let url = "https://www.youtube.com/watch?v=5qap5aO4i9A";
    const request= `https://api.linkpreview.net/?fields=image_x,icon_type,locale&q=${url}`
    const pagina = await fetch(request, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Linkpreview-Api-Key': '09571309e0964012199d284078e145cf'
        }
    })

    const urlInfo = await pagina.json()
    
    console.log(urlInfo);
    return urlInfo;    

}


async function vistaPrevia(url){
    const request= `https://api.linkpreview.net/?fields=image_x,icon_type,locale&q=${url}`
    const pagina = await fetch(request, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Linkpreview-Api-Key': '09571309e0964012199d284078e145cf'
        }
    })

    const urlInfo = await pagina.json()
    console.log(urlInfo);
}


//---ObtenerChats--------------------------------
function ObtenerChats(id, userName, texto){
    let nuevoChat = document.createElement("div");
    nuevoChat.className = "chat";
    nuevoChat.id = id;
    //nuevoChat.innerHTML = '';
    nuevoChat.style.flexDirection = "column";

    //objetos xd
    let spanUserName = document.createElement('span');
    spanUserName.style.color = 'white';
    spanUserName.textContent = userName;

    let spanTexto = document.createElement('span');
    spanTexto.style.color = 'white';

    let espacio = document.createElement('br');
    let imagen = document.createElement('img');

    let paginas = document.createElement('iframe');
    
    nuevoChat.appendChild(spanUserName);
    nuevoChat.appendChild(espacio);
    nuevoChat.appendChild(espacio);

    //regex
    let urlRegex= /(https?:\/\/[^\s]+)/g; 

    texto = texto.replace(urlRegex, function(url) {
        let imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpeg|jpg|gif|png)/g;

        if(urlRegex.test(url)){
            if (imageRegex.test(url)){
                
                imagen.src = url;
                imagen.alt = "imagen";
                imagen.style.maxWidth = "30%";
                imagen.style.maxHeight = "30%";
                nuevoChat.appendChild(imagen);
                return '';
            }
                    
            else{
                //AQUI con lo de iframe, pero como no se pede xd
                /*     
                paginas.src = url;
                paginas.style.maxWidth = "90%";
                paginas.style.maxHeight = "80%";
                nuevoChat.appendChild(paginas);
                return '';
                */
                //return '<a href="' + url + '" target="_blank">' + url + '</a>';

                ///desdeaca
                fetch('https://api.linkpreview.net/?q=' + url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Linkpreview-Api-Key': '09571309e0964012199d284078e145cf'
                        //llaves
                        /**
                         * 09571309e0964012199d284078e145cf
                         * 45a9a02128558b7b3c1ad75835ad068a
                         * add95786ca6d6b2160d49dcd24163108
                         * 1298ee1976b7c8d404364ccdb9b302ec
                         */

                    }
                })
                .then(response => {
                    if (!response.ok) {
                        console.log("HOLAHOLAHOLA22222");
                        spanTexto.textContent = "URL inválida por linkpreview.net";
                        throw new Error('HTTP error ' + response.status);
                        
                        
                    }
                    //validacion por si sale undefined por que solicite mucho a la api conuna misma key
                    //alert("Too Many Request on the API, try another key (la api no jalo, no jala másde 60 solicitudes por hora)"); 

                    return response.json();
                })
                .then(data => {
                    console.log("HOLAHOLAHOLA1111");
                    if (data && data.title) {
                        let preview = data;
                        console.log("HOLAHOLAHOLA");
                        console.log(preview.title, preview.image);
                        
                        spanTexto.textContent = preview.title;
                        nuevoChat.appendChild(spanTexto);
                        nuevoChat.appendChild(espacio);
                        imagen.src = preview.image;
                        imagen.alt = "imagen";
                        imagen.style.maxWidth = "30%";
                        imagen.style.maxHeight = "30%";
                        nuevoChat.appendChild(imagen);
                    } else {
                        console.log('Title not found');
                    }
                })
                .catch(error => console.error('Error:', error));

            }
        }    

    });    

    spanTexto.textContent = texto;
    nuevoChat.appendChild(spanTexto);
    return nuevoChat;
}

//---Lista de chats--------------------------------
async function ListaChats(){ // ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA
    // mando a traer los post dummys a una api con get
    let misPosts =  await obtenerPosts()
    // mando a traer el div donde quiero poner los chats
    //let divListados = DOM.getElementById("listado-chats");
    if(divListadoUsers != null){
        // transformamos los dicccionarios a un div de chat
        //misPosts = misPosts.reverse();
        misPosts.map(post=>{
            let Chat = ObtenerChats(post.id, post.username, post.content);
            //let Chat = ObtenerChats(post[0], post[1],post[2], post[3]);

            return Chat
        })
        // recorremos los nuevos chats y los agremos al div de listados
        .forEach(element => {
            //verifica que si el usuario es null (repetido)
            if(element!== null){
                let divChatContenedor = DOM.createElement('div');
                divChatContenedor.style.backgroundColor = color2;
                divChatContenedor.style.maxwidth = "97.6%";
                divChatContenedor.style.minHeight = "50px";
                //divChatContenedor.style.maxHeight = "80%";
                divChatContenedor.style.borderRadius = "2px";
                divChatContenedor.style.border = "1px solid 'var(--color-border)";
                divChatContenedor.style.marginBottom = "8px";
                divChatContenedor.style.flexDirection = "column";
                divChatContenedor.style.padding = "10px";
                //divChatContenedor.style.overflow = "clip";
                divChatContenedor.style.overflow = "auto";//??
            

                divChatContenedor.appendChild(element);
                divMensaje.appendChild(divChatContenedor);
                divMensaje.lastChild.scrollIntoView({block: "end"});

            }        
        });
    }

}



async function MandarMensaje(){
    let mensajeValue = document.getElementById("mensaje-chat").value;
    if (mensajeValue !== ""){
        //bjeto mensaje
        let mensaje ={
            "username": usuario,
            "message": mensajeValue
            //fecha: fechaHoraString
        }

        //enviar mensaje a la api
        let post = await enviarPosts(mensaje);
        //console.log(post);
        ListaChats()
        divMensaje.lastChild.scrollIntoView({behavior: "smooth", block: "end",inline: "end"});

    }else{
        alert("no se ingreso ningún mensaje")
    }
    
    

}

ListaUsuarios();
ListaChats();
setInterval(ListaChats, 15000);
setInterval(ListaUsuarios, 90000);