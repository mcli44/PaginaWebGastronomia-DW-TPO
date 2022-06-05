function creadorNAV(){
    const borrar = document.getElementById("desplegable");
    borrar.remove();
    

    let menu = document.createElement("NAV");
    let produc = document.createElement("a");
    produc.innerHTML = "PRODUCTOS";
    produc.href = "menu.html";

    let direc = document.createElement("a");
    direc.innerHTML = "DONDE ENCONTRARNOS";
    direc.href = "direcion.html";

    let presu = document.createElement("a");
    presu.innerHTML = "PRESUPUESTO";
    produc.href = "presupuesto.html";

    menu.appendChild(produc);
    menu.appendChild(direc);
    menu.appendChild(presu);
    document.getElementById("cabecera").appendChild(menu);

   /*document.body.appendChild(x);

    var anchorElmnt = document.createElement("A");
    anchorElmnt .setAttribute("href", "/html");
    var txt1 = document.createTextNode("HTML");
    anchorElmnt .appendChild(txt1);

    x.appendChild(anchorElmnt);*/
}

function borrarBotones(){
    const borrar1 = document.getElementById("botonesIndex");
    borrar1.remove();
}