
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const btnLimpar = document.querySelector('#refresh')

function copiar() {
    var copiado = document.querySelector('.mensagem').value;
    var copy = "";
    if (copiado != "") {
        navigator.clipboard.writeText(copiado);
        document.querySelector('.mensagem').value = copy
        console.log(copy);
        alert('Seu Texto foi Copiado.')
    }
    
}


function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }


    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    

}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }


    return stringDesencriptada;
}

btnLimpar.addEventListener('click', () => {
    location.reload()
})
