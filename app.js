
document.querySelector('.main__section__2').style.display = 'none';

/*  */


/////////////////////Boton de Encriptar///////////////////////
function boton_Encriptar_Texto() {
    reinicio_Boton();
    let texto_base = document.querySelector("#texto_base").value;
    
    let textoEncriptado=encriptar(texto_base);
    
    document.querySelector("#texto_copiado").value=textoEncriptado;

}


function encriptar(texto){
    texto=texto.toLowerCase();
    document.querySelector('.main__section__3').style.display = 'none';
    document.querySelector('.main__section__2').style.display = 'flex';
    let textoEncritado=texto
        .replace(/[aeiou]/g,vocales)
    return textoEncritado
}

function vocales(vocal){
    switch(vocal){
        case "a":
            return "ai";
        case "e":
            return "enter";
        case "i":
            return "imes";
        case "o":
            return "ober";    
        case "u":
            return "ufat"
        default:
            return vocal; 
    }
}

//////////////////////Boton de Desencriptar//////////////////////////
function boton_Desencriptar_Texto(){
    reinicio_Boton();
    let texto_base = document.querySelector("#texto_base").value;
    let textoDesencriptado=desencriptador(texto_base);

    document.querySelector("#texto_copiado").value=textoDesencriptado;
}

function desencriptador(text){
    text=text.toLowerCase();
    document.querySelector('.main__section__3').style.display = 'none';
    document.querySelector('.main__section__2').style.display = 'flex';
    let texto_Desencriptado=text
        .replace(/ai|enter|imes|ober|ufat/g,palabras)
        return texto_Desencriptado
}

function palabras(palabra){
    switch(palabra){
        case "ai":
            return "a";
        case "enter":
            return "e";
        case "imes":
            return "i";
        case "ober":
            return "o";    
        case "ufat":
            return "u"
        default:
            return palabra; 
    }
}

function copiar_Texto(){
    let textoCopiado = document.querySelector("#texto_copiado").value;
    let button=document.getElementById('copiar');

    navigator.clipboard.writeText(textoCopiado);
    button.textContent='Copiado'

}
////////////////////Boton de Reinicio de Copiar//////////////////
function reinicio_Boton(){
    
    let button=document.getElementById('copiar');

    button.textContent='Copiar'

}


//texto2.innerHTML=texto1;
//document.getElementById("myDIV").style.display = "none";