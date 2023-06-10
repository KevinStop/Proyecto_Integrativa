class Estrella extends HTMLElement {
    //Aqui iria el codigo del elemento
    constructor() {
      super();
    }
    connectedCallback() {//Nuevo elememto
      let shadowRoot = this.attachShadow({ mode: 'open' });  //Para establecer el ShadowDom
      const t = document.querySelector('#Estrella');
      const instancia = t.content.cloneNode(true);
      shadowRoot.appendChild(instancia); //Nodo raiz le añade un hijo (template añade a la instancia)
    }
  }
  window.customElements.define('producto-estrella', Estrella);
  
  var datosEstudiantes = [{
    nombre: 'Jhon Zambrano',
  },
  {
    nombre: 'Raymond Davila',
  },
  {
    nombre: 'Oscar Avellan',
  }];
  
  posActual = 0;
  
  function cargarRegistro() {
  
    var plantilla = document.getElementById('plantillaestudiante'),
      datosEstudiante = datosEstudiantes[posActual],
      clone = plantilla.content.cloneNode(true),
      fields = clone.querySelectorAll('span');
    fields[0].textContent = datosEstudiante.nombre;
    plantilla.parentNode.appendChild(clone);
    posActual++;
    if (posActual >= datosEstudiantes.length)
      document.getElementById('botoncargar').style.display = 'none';
  
  }