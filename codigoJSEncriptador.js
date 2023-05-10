
let buttonEncrypt = document.getElementById("encrypt");
let buttondesEncrypt = document.getElementById("des-encrypt");
let encryptedMsg = document.querySelector(".cont-encryptedt-lorem__lorem-msg");
let copyButton = document.getElementById("copy-button");

const ecryptText = ()=> {
    
    const contNOEncryptedMsg = document.querySelector(".cont-no-encrypted-msg");
    let contEncryptedMsg = document.querySelector(".cont-encrypted-msg");
    let contMsgTextarea  = document.getElementById("textarea").value.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
        
    if (contMsgTextarea.length === 0 || /^\s+$/.test(contMsgTextarea)) {
        alert("CAMPO DE TEXTO ESTA VACIO");
        location.reload();
    } else if (/[^a-z ]/.test(contMsgTextarea)){
        alert("POR FAVOR SOLO INGRESAR LETRAS MINUSCULAS, NO ESTA PERMITIDO EL USO DE CARACTERES ESPECIALES");
        location.reload();
    }
    
    encryptedMsg.textContent = contMsgTextarea;


    contNOEncryptedMsg.style.display = "none";
    contEncryptedMsg.style.display = "flex";

    // contNOEncryptedMsg.classList.toggle("contNOEncryptedMsg--off");
    // contNOEncryptedMsg.classList.add("contNOEncryptedMsg--off");
    // contEncryptedMsg.classList.toggle("contEncryptedMsg--on");
}
buttonEncrypt.addEventListener("click", ecryptText);


const decryptText = ()=> {
    
    const contNOEncryptedMsg = document.querySelector(".cont-no-encrypted-msg");
    let contEncryptedMsg = document.querySelector(".cont-encrypted-msg");
    let contMsgTextarea  = document.getElementById("textarea").value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    if (contMsgTextarea.length === 0 || /^\s+$/.test(contMsgTextarea)) {
        alert("CAMPO DE TEXTO ESTA VACIO");
        location.reload();
    } else if (/[^a-z ]/.test(contMsgTextarea)){
        alert("POR FAVOR SOLO INGRESAR LETRAS MINUSCULAS, NO ESTA PERMITIDO EL USO DE CARACTERES ESPECIALES");
        location.reload();
    }
    
    encryptedMsg.textContent = contMsgTextarea;
    contNOEncryptedMsg.style.display = "none";
    contEncryptedMsg.style.display = "flex";
}

buttondesEncrypt.addEventListener("click", decryptText);

const copy = ()=> {
    let encryptedMsgCopy = document.querySelector(".cont-encryptedt-lorem__lorem-msg");
    encryptedMsgCopy.select();
    encryptedMsgCopy.setSelectionRange(0,99999);
    navigator.clipboard.writeText(encryptedMsgCopy.value); 
    window.getSelection().removeAllRanges();
    
}
copyButton.addEventListener("click", copy);