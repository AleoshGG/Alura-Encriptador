function cambiarVista() {
    let imagen = document.getElementById('vistaMuneco');
    imagen.style.display = 'none';

    let textoSalida = document.getElementById('textoSalida');
    textoSalida.style.display = 'block';
    document.getElementById('textoSalida').disabled = true;

    let bCopiar = document.getElementById('b-copiar');
    bCopiar.style.display = 'block';
}

function encriptarTexto() {
    let textoEC = document.getElementById('textoEntrada').value;

    let caracteres = textoEC.split("");

    // Usar forEach para iterar sobre cada caracter
    for (var i = 0; i < caracteres.length; i++) {
        if (caracteres[i] === "a"){
            caracteres[i] = "ai";
        } else if (caracteres[i] === "e"){
            caracteres[i] = "enter";
        } else if (caracteres[i] === "i"){
            caracteres[i] = "imes";
        } else if (caracteres[i] === "o"){
            caracteres[i] = "ober";
        } else if (caracteres[i] === "u"){
            caracteres[i] = "ufat";
        } 
        
    }

    return caracteres.join("");
}

function imprimirTexto(textoEC){
    let textoSalida = document.getElementById('textoSalida');
    textoSalida.innerHTML = `${textoEC.replace(/\s/g, "")}`;
}

function encriptar() {
    let textoEC = encriptarTexto();
    cambiarVista();
    imprimirTexto(textoEC);
}

function copiar() {
    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById('textoSalida').innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);
}

