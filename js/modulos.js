//Importar dos funciones
import { registrar, crearTabla } from "./codigo.js";

//importar una funcion
import { mostrarModal} from "./codigo.js";
//Poner un alias
import { cerrarModal as cierremodal} from "./codigo.js";
// registrar();
crearTabla();
// mostrarModal();
// cerrarModal();
  //Mostrar el modal
  let mostrarModal1=document.getElementById("mostrar1")
  mostrarModal1.addEventListener("click",mostrarModal)
  //Registrarse
  let registro=document.getElementById("enviar1")
  registro.addEventListener("click",registrar)
  //Cerrar el modal
   let cierre=document.getElementById("cerrar")
   cierre.addEventListener("click",cierremodal)