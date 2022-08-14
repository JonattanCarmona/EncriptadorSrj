
function botonEncriptar(){
    let texto = document.getElementById("input").value;
    let textoCifrado = texto.replaceAll("e", "enter").replaceAll("o", "ober").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("u", "ufat");
    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningunmensaje").style.display = "none";
    document.getElementById("mensajesintexto").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function botonDesencriptar(){
    let texto = document.getElementById("input").value;
    let textoCifrado = texto.replaceAll("ufat","u").replaceAll("ai", "a").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("enter", "e");
    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningunmensaje").style.display = "none";
    document.getElementById("mensajesintexto").innerHTML = textoCifrado;
    document.getElementById("mensajesintexto").style.marginTop = "3em";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copiar(){
    var copiado = document.getElementById('mensajesintexto').innerHTML;
    navigator.clipboard.writeText(copiado)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}