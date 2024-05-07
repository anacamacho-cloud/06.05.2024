var movimento = {   
        
    constructor(){  
        
    var posicaoSuperior = 250;
    var posicaoEsquerda = 350;
    var anguloAvatar = 0;
    
    const posicaoSuperiorInicial = 70,
    posicaoEsquerdaInicial = 70,
    posicaoSuperiorFinal = 100,
    posicaoEsquerdaFinal = 400,
    anguloInicial = 0,
    anguloFinal = 500,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar),
    txtPixel = document.getElementById("txtPixel");
    txtMoverMouseX = document.getElementById("txtMoverX");
    txtMoverMouseY = document.getElementById("txtMoverY");

    imgAvatar.style.position = "absolute";
    imgAvatar.style.top = posicaoSuperior + "px";
    imgAvatar.style.left = posicaoEsquerda + "px";
    imgAvatar.style.transform = "rotate("+ anguloAvatar +")";},
    

    moverParaEsquerda: function() {
            posicaoEsquerda = getLeftStyle(imgAvatar);
            if (posicaoEsquerda > posicaoEsquerdaInicial) {
                posicaoEsquerda -= parseInt(txtPixel.value);
                if (posicaoEsquerda < posicaoEsquerdaInicial) {
                    posicaoEsquerda = posicaoEsquerdaInicial;
                }
                imgAvatar.style.left = posicaoEsquerda + "px";
            } else {
                console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.");
            }
    }}
    var button = document.getElementById("bntEsquerda");
    button.addEventListener("click", movimento.moverParaEsquerda);



