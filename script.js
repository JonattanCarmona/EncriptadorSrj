function esMayuscula(letra)
{
    return letra = letra.charCodeAt();
}  
function botonEncriptar(){
    let texto = document.getElementById("input").value;
    let veriEncrip = true;
    labelCancelLoops: for(var index = 0; index < texto.length; index++)
    {
        var letraActual = texto.charAt(index);
        let codigoAscii= esMayuscula(letraActual);
        if(codigoAscii > 64 && codigoAscii < 90)
        {
            alert("La letra " + letraActual + " es mayúscula, solo pueden ser letras minúsculas y sin acentos");
            veriEncrip = false;
        }
        else if (codigoAscii > 122 && codigoAscii < 255)
        {
            alert("La letra " + letraActual + " es un carácter especial, solo pueden ser letras minúsculas y sin acentos");
            veriEncrip = false;
        }
    }
    if(veriEncrip) {
        var textoCifrado = texto.replaceAll("e", "enter").replaceAll("o", "ober").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("u", "ufat");
        document.getElementById("muneco").style.display = "none";
        document.getElementById("ningunmensaje").style.display = "none";
        document.getElementById("mensajesintexto").innerHTML = textoCifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
    }
}
function botonDesencriptar(){
    let texto = document.getElementById("input").value;
    let veriEncrip = true;
    for(var index = 0; index < texto.length; index++)
    {
        var letraActual = texto.charAt(index);
        let codigoAscii=esMayuscula(letraActual);
        if(codigoAscii > 64 && codigoAscii < 90)
        {
            alert("La letra " + letraActual + " es mayúscula, solo pueden ser letras minúsculas y sin acentos");
            veriEncrip = false;
        }
        if(codigoAscii > 122 && codigoAscii < 255)
            {
                alert("La letra " + letraActual + " es un carácter especial, solo pueden ser letras minúsculas y sin acentos");
                veriEncrip = false;
            }
     }
     if(veriEncrip) {
        let textoCifrado = texto.replaceAll("ufat","u").replaceAll("ai", "a").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("enter", "e");
            document.getElementById("muneco").style.display = "none";
            document.getElementById("ningunmensaje").style.display = "none";
            document.getElementById("mensajesintexto").innerHTML = textoCifrado;
            document.getElementById("mensajesintexto").style.marginTop = "3em";
            document.getElementById("copiar").style.display = "show";
            document.getElementById("copiar").style.display = "inherit";
    }
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