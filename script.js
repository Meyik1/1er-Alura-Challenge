const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



function btnEncriptar(){
    const primerTexto = textArea.value.trim();

    const regex = /^[a-z\s]+$/;
    if (!regex.test(primerTexto)) {
      alert("Ingrese solo letras minúsculas y sin acentos.");
      return;
    }

    const textoEncriptable = encriptar(primerTexto);
    mensaje.value = textoEncriptable
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o",  "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptado
}

function btnDesencriptar(){
    const primerTexto = textArea.value.trim();

    const regex = /^[a-z\s]+$/;
    if (!regex.test(primerTexto)) {
      alert("Ingrese solo letras minúsculas y sin acentos.");
      return;
    }
    const textoDesencriptable = desencriptar(primerTexto)
    mensaje.value = textoDesencriptable
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o",  "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptado
}


function btnCopiar(){
    const segundoTexto = mensaje.value;
    navigator.clipboard.writeText(segundoTexto)
    alert("Mensaje copiado.")
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('Imagenes/Muñeco.png')";
}

