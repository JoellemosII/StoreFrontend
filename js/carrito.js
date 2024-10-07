const carrito = document.getElementById("carrito"),
    listaProducto =document.getElementById("lista-producto"),
    contenedorCarrito = document.querySelector('.buy-card .lista-de-productos'),
    vaciarcarritoBtn = document.querySelector("#vaciar-carrito"),
    finalizarCompraBtn = document.querySelector("#finalizar-compra");
let articulosCarrito=[];

registrarEventsListeners()

function registrarEventsListeners(){
    listaProducto.addEventListener("click", agregarProducto);

    carrito.addEventListener("click" , eliminarProducto);

    document.addEventListener("DOMContentLoaded", () =>{
        articulosCarrito = JSON.parse(localStorage.getItem("carrito"))  || [];
        carritoHTML()
    })

    vaciarcarritoBtn.addEventListener("click" , e=>{
        articulosCarrito =[];
        limpiarHTML()
    })

    finalizarCompraBtn.addEventListener("click", finalizarCompra);
}

function agregarProducto(e){
if(e.target.classList.contains("agregar-carrito")){
    const productoSeleccionado = e.target.parentElement;
    leerInfo(productoSeleccionado);
}
}

function finalizarCompra(e){
    e.preventDefault();
    window.location.href = "../html/formulario.html";
}

function eliminarProducto(e) {
    if(e.target.classList.contains("borrar-producto")){
        const productoId = e.target.getAttribute("data-id");

        articulosCarrito=articulosCarrito.filter(producto => producto.id !== productoId);
        carritoHTML()
    }
}

function leerInfo(producto){
    const infoProducto ={
        imagen : producto.querySelector("img").src,
        titulo : producto.querySelector('h3').textContent,
        precio : producto.querySelector('.price').textContent,
        id : producto.querySelector("button").getAttribute("data-id"),
        cantidad:1
    }
    const existe=articulosCarrito.some(producto=> producto.id === infoProducto.id)
    if(existe){
        const productos = articulosCarrito.map(producto =>{
            if(producto.id === infoProducto.id){
                producto.cantidad++;
                return producto
            } else{
                return producto;
            }
        });
        [...articulosCarrito,infoProducto]
    } else{
        articulosCarrito=[...articulosCarrito,infoProducto]
    }
    
    carritoHTML()
}

function carritoHTML(){
    limpiarHTML()
    articulosCarrito.forEach(producto=>{
        const fila =document.createElement("div");
        fila.innerHTML =`
        <img src="${producto.imagen}">
        <p>${producto.titulo}</p>
        <p>${producto.precio}</p>
        <p>${producto.cantidad}</p>
        <p><span class="borrar-producto" data-id="${producto.id}">X</span></p>
        `;
        contenedorCarrito.appendChild(fila)
    });

    sincronizarStorage()
}

function sincronizarStorage() {
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito))
}

function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }sincronizarStorage()
}
