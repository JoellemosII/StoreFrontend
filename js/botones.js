/**Botones de Talles */
document.querySelectorAll(".interruptor").forEach(function(button) {
    button.addEventListener("click", function() {
        
        document.querySelectorAll(".interruptor").forEach(function(btn) {
            btn.classList.remove("seleccionado");
        });
        
        this.classList.add("seleccionado");
    });
});

/** Contador */
document.querySelector("#resta").addEventListener("click",restarUno);
document.querySelector("#suma").addEventListener("click",sumarUno);
let contador=0;

function sumarUno(){
    contador=contador+1;
    document.querySelector("#msgcontador").innerHTML=contador;
}
function restarUno(){
    if (contador > 0){
    contador=contador-1;
    }
    document.querySelector("#msgcontador").innerHTML=contador;
}

/** Radio de Colores */
function resetBorders() {
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.style.borderColor = 'transparent';
    });
}

document.querySelectorAll('.color-swatch input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        resetBorders(); 
        this.parentElement.style.borderColor = this.parentElement.style.backgroundColor; 
    });
});

resetBorders();


