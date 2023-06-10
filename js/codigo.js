var datos = [];

export function registrar() {

   var nombre1 = document.getElementById('nombre1').value;
   var email1 = document.getElementById('email1').value;
   var mensaje1 = document.getElementById('mensaje1').value;



   datos.push({
       'nombre1': nombre1,
       'email1': email1,
       'mensaje1': mensaje1,

   });

   document.getElementById('Datos1').reset();
   alert('Datos guardados')
   crearTabla();
   cerrarModal();
}
export function crearTabla(){
         var fila='';

         datos.forEach((item,i) => {
             fila += `<tr>
                         <td>${item.nombre1}</td>
                         <td>${item.email1}</td>
                         <td>${item.mensaje1}</td>
                         
             
                   
                      </tr>`
        document.getElementById('filas').innerHTML=fila;
           
       });
     }

export function mostrarModal() {
   document.getElementById('modal-registro').classList.add('active');

}
export function cerrarModal() {
   document.getElementById('modal-registro').classList.remove('active');
}