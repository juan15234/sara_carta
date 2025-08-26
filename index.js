const boton_corazon = document.getElementById("boton-corazon")
const carta = document.querySelector(".carta")
const apertura_carta = document.querySelector(".apertura_carta")
const texto_container = document.querySelector(".texto")
const informacion = document.querySelector(".INFORMATION")
const hoja = document.querySelector(".hoja")

function abrir_carta(){

    texto_container.style.display = "none"
    informacion.style.display = "none"
    boton_corazon.style.display = "none"

    carta.style.overflow = "visible"

    apertura_carta.style.transform = "rotateX(-180deg) translateY(-100%)";

    

    setTimeout(()=> {
        apertura_carta.style.zIndex = 1
        hoja.style.zIndex = 2
    }, 700)

    setTimeout(() => {

        
        hoja.style.transform = "translateY(-70%)"

    }, 1000);

}