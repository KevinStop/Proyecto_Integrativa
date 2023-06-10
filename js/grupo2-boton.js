class BotonEstandar extends HTMLElement {
    constructor() {
        super();
        
    }

    connectedCallback() {
        this.content = this.getAttribute("text");
        // init the component
        const shadowDom = this.attachShadow({ mode: "open" });

        //add content from the node into the button
        const nodeContent = this.innerHTML

        //determine what type of html node this is based on the attributes
        let htmlNode = 'button';
        let href = false
        if (this.hasAttribute('href')) {
            htmlNode = 'a'
            href = this.getAttribute('href')
        }

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .button{
                    color: white;
                    min-width: 3em;
                    min-height: 3em;
                    font-size: 1rem;
                    margin: 0 auto;
                    font-weight: bold;
                    border: .175em solid white;
                    border-radius: .5em;
                    background: rgba(0,0,0,.2);
                    cursor: pointer;
                    transition: transform .075s ease-in-out;
                    position: relative;
                    pointer-events: all;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                }
                
                .button:hover,
                .button:focus{
                    transform: scale(1.05);
                    transition: transform .15s cubic-bezier(.47,.56,.17,3);
                    outline: none;
                }
                .button:active,
                .button.is-pressed{
                    transform: scale(.975);
                    transition: transform .025s ease-in-out;
                }
                .button::-moz-focus-inner {
                    border: 0;
                }
                .button-content {
                    height: .9em;
                }
            
                .confetti-group{
                    position: absolute;
                    height: 100%;
                    top: 0;
                    opacity: 0;
                }
                .confetti-group.left{
                    left: 0;
                }
                .confetti-group.right{
                    right: 0;
                }
                .confetti{
                    background-color: white;
                    --thickness: .175em;
                    position: absolute;
                }
                .confetti-group.left .confetti{
                    right: 0;
                }
                .confetti.top{
                    top: 0;
                }
                .confetti.middle{
                    top: calc(50% - calc(var(--thickness) / 2));
                }
                .confetti.bottom{
                    bottom: 0;
                }
                .confetti::after{
                    content: '';
                    display: block;
                    height: var(--thickness); 
                    width: 1em;
                    background-color: black;
                    border-radius: 2em;
                }
                .confetti-group.left .confetti.top::after,
                .confetti-group.right .confetti.bottom::after{
                    transform: rotate(25deg);
                }
                .confetti-group.right .confetti.top::after,
                .confetti-group.left .confetti.bottom::after{
                    transform: rotate(-25deg);
                }
            
            
                /*PRESSED CONFETTI ANIMATIONN*/
                .is-shooting-confetti .confetti-group.left{
                    animation: pop-out-left .15s ease-in;
                }
                .is-shooting-confetti .confetti-group.right{
                    animation: pop-out-right .15s ease-in;
                }
                .is-shooting-confetti .confetti.top{
                    animation: pop-up-slightly .15s ease-in;
                }
                .is-shooting-confetti .confetti.bottom{
                    animation: pop-down-slightly .15s ease-in;
                }
            
                @keyframes pop-out-left {
                    0%{
                        opacity: 0;
                        transform: translateX(0);
                    }
                    15%{
                        opcaity: 1;  
                    }
                    75%{
                        opacity: .5;
                    }
                    100%{
                        opacity: 0;
                        transform: translateX(-1.5em);
                    }
                }
                @keyframes pop-out-right {
                    0%{
                        opacity: 0;
                        transform: translateX(0);
                    }
                    15%{
                        opcaity: 1;  
                    }
                    75%{
                        opacity: .5;
                    }
                    100%{
                        opacity: 0;
                        transform: translateX(1.5em);
                    }
                }
                @keyframes pop-up-slightly{
                    0%{
                        transform: translateY(0);
                    }
                    100%{
                        transform: translateY(-.75em);
                    }
                }
                @keyframes pop-down-slightly{
                    0%{
                        transform: translateY(0);
                    }
                    100%{
                        transform: translateY(.75em);
                    }
                }
            
            </style>

            <${htmlNode} class="button" id="button" ${href ? `href="${href}"` : ''}>

                <div class="confetti-group left">
                    <div class="confetti top"></div>
                    <div class="confetti middle"></div>
                    <div class="confetti bottom"></div>
                </div>

                <div class="button-content" id="content">
                    <span>${this.content}</span>
                </div>

                <div class="confetti-group right">
                    <div class="confetti top"></div>
                    <div class="confetti middle"></div>
                    <div class="confetti bottom"></div>
                </div>
            
            </${htmlNode}>
        `;
        const templateHtml = template.content.cloneNode(true);
        shadowDom.appendChild(templateHtml);


        const button = shadowDom.getElementById('button');

        //add content to button
        button.querySelector('#content').append(nodeContent);


        //shoot confetti
        const shootConfetti = () => {
            button.classList.add('is-shooting-confetti');

            setTimeout(
                () => {
                    button.classList.remove('is-shooting-confetti')
                },
                200
            )
        }

        //keyboard controls
        button.addEventListener("keydown", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                event.target.classList.add('is-pressed');
            }
        });
        button.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                shootConfetti(event);
                event.target.classList.remove('is-pressed');
                event.target.click();
            }
        });

        button.addEventListener("mouseup", function (event) {
            shootConfetti(event)
        });
    }
}

customElements.define('goyes-boton', BotonEstandar);