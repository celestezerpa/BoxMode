//cifrado--------------------------------------------------------------------

palabra = document.getElementById("mensaje")

numero = document.getElementById("caja_numero")

final = document.getElementById("mensaje_codificado")
    
function codificar()
{ 

    document.getElementById("contenedor2").style.display = "block" 
    document.getElementById("contenedor2").className = "final" 

    document.getElementById("bloquee").style.display = "block" 

    document.getElementById("cerrar").style.display = "block" 
   
    

    final.textContent=""
      
    for(var i=0; i<palabra.value.length; i++)
    {
      var caracter=palabra.value[i]
          caracter = caracter.charCodeAt(0)

      //rango numerico
      if((caracter>=48)&&(caracter<=57))
      {
        caracter = cifrado(caracter, 58, 48)
        caracter = String.fromCharCode(caracter)
        final.textContent = final.textContent + caracter
      }

      //Rango mayusculas
      else if((caracter>=65)&&(caracter<=90))
      {
        caracter = cifrado(caracter, 91, 65)
        caracter = String.fromCharCode(caracter)
        final.textContent = final.textContent + caracter
      }

       //Rango minusculas
       else if((caracter>=97)&&(caracter<=122))
      {
        caracter = cifrado(caracter, 123, 97)
        caracter = String.fromCharCode(caracter)
        final.textContent = final.textContent + caracter
      }

       //Rango sin cifrar

       else
       {
        if(caracter == 32)
        {
          final.innerHTML = final.innerHTML + "&nbsp"
        }

        else
        {
        caracter = String.fromCharCode(caracter)
        final.textContent = final.textContent + caracter
        }
       }
       
    }

    document.getElementById("contenedor2").style.display = "block"
  document.getElementById("titulobox").textContent = contenido2
}

function cifrado(dato, error, reinicio)
{

  var numerico =  numero.value
    numerico = parseInt(numerico) 
  for(var j=0;j<numerico;j++)
   {

    dato++
    if(dato == error)
    {
       dato = reinicio 
    }

   }

  return dato
}

//decifrado------------------------------------------------------------------------------
