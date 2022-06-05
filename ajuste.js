function creadorNAV(){
    const borrar = document.getElementById("desplegable");
    borrar.style.display = "none";
    
    

    let menu = document.createElement("NAV");
    menu.id = "navbar"
    let produc = document.createElement("a");
    produc.innerHTML = "PRODUCTOS";
    produc.href = "menu.html";

    let direc = document.createElement("a");
    direc.innerHTML = "DONDE ENCONTRARNOS";
    direc.href = "direcion.html";

    let presu = document.createElement("a");
    presu.innerHTML = "PRESUPUESTO";
    presu.href = "presupuesto.html";

    menu.appendChild(produc);
    menu.appendChild(direc);
    menu.appendChild(presu);
    document.getElementById("cabecera").appendChild(menu);
}

function borrarBotones(){
    const borrar1 = document.getElementById("botonesIndex");
    borrar1.style.display = "none";
}

function reactivarMenu(){
    const des = document.getElementById("desplegable");
    des.style.display = "none";
    const menu = document.getElementById("navbar");
    menu.style.display = "flex";
    
}

function reactivarDes(){
    const des = document.getElementById("desplegable");
    des.style.display = "inline-block"; 
    
    const menu = document.getElementById("navbar");
    menu.style.display = "none";
}

function reactivarBotones(){
    const borrar1 = document.getElementById("botonesIndex");
    borrar1.style.display = "flex";
}