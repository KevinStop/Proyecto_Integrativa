class Texto extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
        <style>
        
            .Iam {
                padding: 1em 0 5em 12em;
                font: normal 40px/50px Montserrat, sans-serif;
                color: black;
                margin: 0 auto; 
            }
            .Iam p {
                height: 50px;
                float: left;
                margin-top: 30px;
                margin-right: 0.3em;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            }
            .Iam b {
                float: left;
                overflow: hidden;
                position: relative;
                height: 50px;
                top: 40px;
            }
            .Iam .innerIam {
                display: inline-block;
                color: #FF0000;
                position: relative;
                white-space: nowrap;
                top: 0;
                left: 5px;
            
            
            /*animation*/
            -webkit-animation:move 5s;
                -moz-animation:move 5s;
                -ms-animation:move 5s;
                -o-animation:move 5s;
                    animation:move 5s;
            /*animation-iteration-count*/
            -webkit-animation-iteration-count:infinite;
                -moz-animation-iteration-count:infinite;
                -ms-animation-iteration-count:infinite;
                -o-animation-iteration-count:infinite;
                    animation-iteration-count:infinite;
            /*animation-delay*/
            -webkit-animation-delay:1s;
                -moz-animation-delay:1s;
                -ms-animation-delay:1s;
                -o-animation-delay:1s;
                    animation-delay:1s;
            }
            @keyframes move{
            0%  { top: 0px; }
            20% { top: -50px; }
            40% { top: -100px; }
            60% { top: -150px; }
            80% { top: -200px; }
            }
            
            @-webkit-keyframes move {
                0%  { top: 0px; }
                20% { top: -50px; }
                40% { top: -100px; }
                60% { top: -150px; }
                80% { top: -200px; }
            }
            @-moz-keyframes move {
                0%  { top: 0px; }
                20% { top: -50px; }
                40% { top: -100px; }
                60% { top: -150px; }
                80% { top: -200px; }
            }
            @-o-keyframes move {
                0%  { top: 0px; }
                20% { top: -50px; }
                40% { top: -100px; }
                60% { top: -150px; }
                80% { top: -200px; }
            }
            @keyframes move {
                0%  { top: 0px; }
                20% { top: -50px; }
                40% { top: -100px; }
                60% { top: -150px; }
                80% { top: -200px; }
            }
        </style>

        <center>
            <div class="Iam">

                <p>Tenemos</p>
                <b>
                <div class="innerIam">
                    Hamburguesas<br /> 
                    Papas Francesas<br />
                    Tacos<br />
                    Pizza<br />
                    y Más
                    </div>
                </b>

            </div>
   
        </center>
        
        
        `
    }

}

class Imagen extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
        <style>
            .contenedor1{
                background-color: white;
                width: 30%;
                height: 50%;
                align-items: center;
                padding: 10px;
                border-radius: 10px;
            }
            .imagen{
                width: 300px;
                height: 280px;
            }
        </style>

        <div class="contenedor1">
            <img class="imagen" src="../images/plantas.png">
        </div>

        `
    }
}

class Separador extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                hr {
                    border-width: 4px;
                    border-style: dotted;
                    border-color:black;
                    width: 80%;
                }

            </style>

            <hr>
            `
    }
}
window.customElements.define('texto-animado', Texto);
window.customElements.define('imagen-centro', Imagen);
window.customElements.define('hr-separador', Separador);