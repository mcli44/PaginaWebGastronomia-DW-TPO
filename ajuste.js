function creadorNAV(){
    const borrar = document.getElementById("botonnav");
    borrar.style.display = "none";
    
    

    let menu = document.createElement("NAV");
    menu.id = "navbar";

    /*var imgIni = document.createElement("img");
    imgIni.classList.add("imgIni")
    imgIni.setAttribute("src", "Imagenes/hogar.png");
    imgIni.setAttribute("height", "20");
    imgIni.setAttribute("width", "20");
    imgIni.setAttribute("alt", "Imghome");*/
    let inicio = document.createElement("a");
    inicio.innerHTML = "Inicio";
    inicio.href = "index.html";
    /*inicio.prepend(imgIni);*/
    
    /*var imgSer = document.createElement("img");
    imgSer.classList.add("imgIni2")
    imgSer.setAttribute("src", "Imagenes/wedding-arch-negra.png");
    imgSer.setAttribute("height", "20");
    imgSer.setAttribute("width", "20");
    imgSer.setAttribute("alt", "ImgServ");*/
    let servicios = document.createElement("a");
    servicios.innerHTML = "Servicios";
    servicios.href = "servicios.html";
    /*servicios.prepend(imgSer);*/

    let galeria = document.createElement("a");
    galeria.innerHTML = "Galeria";
    galeria.href = "galeria.html";

    let contacto = document.createElement("a");
    contacto.innerHTML = "Contactos";
    contacto.href = "contacto.html";

    menu.appendChild(inicio);
    menu.appendChild(servicios);
    menu.appendChild(galeria);
    menu.appendChild(contacto);
    document.getElementById("cabecera").appendChild(menu);
}


function reactivarMenu(){
    const des = document.getElementById("botonnav");
    des.style.display = "none";
    const menu = document.getElementById("navbar");
    menu.style.display = "flex";
    
}

function reactivarDes(){
    const des = document.getElementById("botonnav");
    des.style.display = "inline-block"; 
    
    const menu = document.getElementById("navbar");
    menu.style.display = "none";
}


