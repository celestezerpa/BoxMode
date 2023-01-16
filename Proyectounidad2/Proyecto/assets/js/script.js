var audio = document.getElementById("audio");
var source = document.getElementById("srcaudio");
source.src = "assets/audio/temperate.mp3";
//funcion de caracteres 
//function password() {
  //const pass= document.getElementbyId("select").value;
  //const mensaje = document.getElementById("mensaje").value;
  //const decocodi =document.getElementById("mensaje_codificado"").value}

function contar()
{
  var mensaje = document.getElementById("mensaje").value
  var cantidad = mensaje.length
  document.getElementById("conteo").textContent = cantidad + "/600"
}

//Codificado--------------------------------------------------------

var contenido2 = "Su mensaje codificado es:"

//Decodificado--------------------------------------------------------------
var contenido = "Su mensaje decodificado es:"

function decodificar()
{
  document.getElementById("contenedor2").style.display = "block"
  document.getElementById("titulobox").textContent = contenido
 
  document.getElementById("contenedor2").className = "final" 

  document.getElementById("bloquee").style.display = "block" 

  document.getElementById("cerrar").style.display = "block" 
}



//Cierre del cifrado y decifrado box + animacion----------------------------------------------
function cierre()
{

  document.getElementById("contenedor2").className = "final2"
  setTimeout(desparecer,700)
  
  document.getElementById("bloquee").style.display = "none" 
  document.getElementById("bloquee").className = "bloque_final"
  document.getElementById("cerrar").className = "cerrando" 

}

function desparecer()
{
  document.getElementById("contenedor2").style.display = "none"
  document.getElementById("bloquee").className = "bloque" 
  document.getElementById("cerrar").className = "cerrar2"
}
}

