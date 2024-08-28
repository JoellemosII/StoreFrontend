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