const htmlTemplate = `
        <style>

            button { 
              display: block;
            }          

            /* The Modal (background) */
            .modal {
                text-align: left;
                color: black;
                display: none; 
                position: fixed; 
                z-index: 1; 
                padding-top: 35vh;
                padding-left: 7vw;  
                left: 0;
                top: 0;
                width: 100%; 
                height: 100%; 
                overflow: auto; 
                background-color: rgba(0,0,0,0.4); 
            }

            /* Modal Content */
            .modal-content {
                position: absolute;
                background-color: #fefefe;
                margin: auto;
                padding: 0;
                border: 1px solid #888;
                width: 80%;
                font-size: 1.5em;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
                -webkit-animation-name: animatetop;
                -webkit-animation-duration: 0.4s;
                animation-name: animatetop;
                animation-duration: 0.4s;
                margin: 0 0 50px 0;
            }
            .space {
                heigth: 50px;
            }

            /* Add Animation */
            @-webkit-keyframes animatetop {
                from {top:0; opacity:0} 
                to {top:35vh; opacity:1}
            }

            @keyframes animatetop {
                from {top:0; opacity:0}
                to {top:35vh; opacity:1}
            }

            /* The Close Button */
            .close {
                color: white;
                float: right;
                font-size: 28px;
                font-weight: bold;
                transition: .5s
            }

            .close:hover,
            .close:focus {
            color: #bfbfbf;
            text-decoration: none;
            cursor: pointer;
            }

            .modal-header {
            padding: 2px 16px;
            background-color: #000066;
            color: white;
            }

            .modal-body {padding: 2px 16px; margin: 20px 2px}

        </style>
        <goyes-boton modal-trigger text='+'></goyes-boton>

        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <slot name="header"><h1>Default text</h1></slot>
                </div>
                <div class="modal-body">
                    <slot name="text"><p></p><slot>
                </div>
            </div>
        </div>
`;

class Modal extends HTMLElement {
  
  /* 
    Initializing state, setting up event listeners, or creating a shadow dom. Refer to the spec.
    @see: https://html.spec.whatwg.org/multipage/scripting.html#custom-element-conformance
  */
  constructor() {
    super(); // always call super() first in the constructor.
    this._modal;
    this.attachShadow({mode: 'open'}).innerHTML = htmlTemplate;
  }
  
  /* 
    Called every time the element is inserted into the DOM. 
    For running setup code, such as fetching resources or rendering. 
    Generally, try to delay work until this time. 
    */
  connectedCallback() {
    this._modal = this.shadowRoot.querySelector(".modal");
    this.shadowRoot
      .querySelector("[modal-trigger]")
      .addEventListener("click", this._showModal.bind(this));
    this.shadowRoot
      .querySelector(".close")
      .addEventListener("click", this._hideModal.bind(this));
    this.addEventListener('change', e => console.log(e.detail));
    this.shadowRoot
      .firstElementChild
      .addEventListener('click', e => console.log("Inner target: ", e.target.tagName));
  }
  
  /* 
    Called every time the element is removed from the DOM. 
    Useful for running clean up code.
    */
  disconnectedCallback() {
    this.shadowRoot
      .querySelector("goyes-boton")
      .removeEventListener("click", this._showModal);
    this.shadowRoot
      .querySelector(".close")
      .removeEventListener("click", this._hideModal);
  }
  
  /* 
    Called when an observed attribute has been added, removed, updated, or replaced. 
    Also called for initial values when an element is created by the parser, or upgraded.
    Do not use to reflect state to an underlying property, instead use to handle side effects like applying ARIA states in response to state changes.
    Note: only attributes listed in the observedAttributes property will receive this callback. 
  */
  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log('attribute change callback: ', attrName, newVal);
  }
  
  /* 
    Called when a custom element has been moved into a new document
    (e.g. someone called document.adoptNode(el)).
    */
  adoptedCallback() {}
  
  static get observedAttributes() {
    return ['disabled', 'visible'];
  }
  
  // A getter/setter for an open property.
  get visible() {
    return this.hasAttribute('visible');
  }

  set visible(val) {
    // Reflect the value of the visible property as an HTML attribute.
    if (val) {
      this.setAttribute('visible', '');
    } else {
      this.removeAttribute('visible');
    }
  }  
  
  get disabled() {
    return this.hasAttribute('disabled');
  }
  
  set disabled(val) {
    // Reflect the value of the disabled property as an HTML attribute.    
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }
  
  _toggleModal() {
    if (this.disabled) {
      return;
    }
    if (this.visible) { 
      this._hideModal();
    } else {
      this._showModal();
    }
  }
  
  _showModal() {
    if (this.disabled) {
      return;
    }
    this.visible = true;
    this.dispatchEvent(new CustomEvent('change', {
        detail: {
          visible: this.visible,
        },
        bubbles: true,
    }));
    this._modal.style.display = "block";
  }
  
  _hideModal() {
    this.visible = false;
    this.dispatchEvent(new CustomEvent('change', {
        detail: {
          visible: this.visible,
        },
        bubbles: true,
    }));    
    this._modal.style.display = "none";
  }
  
}
customElements.define("goyes-modal", Modal);
