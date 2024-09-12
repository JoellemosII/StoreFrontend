import buscarProductos from './productos.js';

const inputBusqueda = document.getElementById('input-busqueda');
const resultadosBusqueda = document.getElementById('resultado-busqueda');

inputBusqueda.addEventListener('input' , (e) => {
    const termino = e.target.value;
    const resultados = buscarProductos(termino);
    renderizarResultados(resultados);
});

function renderizarResultados(resultados) {
    resultadosBusqueda.innerHTML = '';
    resultados.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.innerHTML = `
        <h3>${producto.name}</h3>
        <img src="${producto.img}" alt="${producto.name}"></img>
        <p class="price">$${producto.precio.toFixed(3)}</p>
        `;
        resultadosBusqueda.appendChild(tarjeta);
    });
}