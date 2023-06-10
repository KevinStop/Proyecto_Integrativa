class ProgressBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    // this.shadow = this.createShadowRoot(); // ShadowDOM
    this._complete = 0;
  }

  get complete() {
    return this._complete;
  }

  set complete(val) {
    this.setAttribute("complete", val);
  }

  static get observedAttributes() {
    return ["complete"];
  }

  createdCallback() {
    // The element was created
    console.log("Elemento Creado");
  }

  attachedCallback() {
    // the element was inserted into the document
    console.log("Elemento insertado en el documento");
  }

  detachedCallback() {
    // The element was removed from the document
    console.log("Elemento eliminado del documento");
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    // Attribute was added, removed, or updated
    console.log("Atributo cambiado:", attr, oldVal, newVal);

    // const innerBar = this.shadow.querySelector(".c-progress-bar__inner"); // ShadowDOM
    const innerBar = this.shadowRoot.querySelector(".c-progress-bar__inner");
    switch (attr) {
      case "complete":
        this._complete = parseInt(newVal, 10) || 0;
        innerBar.style.width = this.complete + "%";
        innerBar.innerHTML = this.complete + "%";
    }
  }

  connectedCallback() {
    const style = document.createElement('style');
    style.innerHTML = `
        html {
            font-size: 14px;
        }
        .contenedor {
            display: flex;
            justify-content: center;
            align-items: center;
            height: -webkit-fill-available;
        }
        .c-progress-bar {
            font-weight: bolder;
            background-color:white;
            border-radius: 1rem;
            color: white;
            height: 2rem;
            padding: 0.2rem;
            width: calc(100vw - 40em);
            
        }
        .c-progress-bar__inner {
            background:red;
            border-radius: .9rem;
            line-height: 2rem;
            text-align: center;
            transition: width 0.45s;
            border-color:black;
            border-style:solid;
        }
    `;
    const funcional = document.createElement('script');
    funcional.innerHTML = `
    // Interval to Set the Complete Value
    (function () {
        const progress = document.querySelector('grupo2-barraprogreso');
        let complete = 0;

        const progressInterval = setInterval(() => {
        complete += 2;

        if(complete <= 100) {
            progress.setAttribute('complete', complete);
        } else {
            clearInterval(progressInterval);
            window.location.href = "./home.html";
        }
        }, 50)
        })();
    `;
    const template = document.createElement('div');
    template.setAttribute('class','contenedor');
    template.innerHTML = `<div class="c-progress-bar">
    <div class="c-progress-bar__inner">${this.complete}%</div>
    </div>`;

    this.shadowRoot.appendChild(style)
    this.shadowRoot.appendChild(template);
    this.appendChild(funcional);
  }
}

window.customElements.define("grupo2-barraprogreso", ProgressBar);
