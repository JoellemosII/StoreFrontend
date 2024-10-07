// Función para mostrar/ocultar el input de búsqueda
function toggleBuscador() {
    const buscadorInput = document.getElementById('buscador-input');
    buscadorInput.style.display = buscadorInput.style.display === 'none' ? 'inline-block' : 'none';
    if (buscadorInput.style.display === 'inline-block') {
        buscadorInput.focus();
    }
}

// Función para buscar productos
// async function buscarProductos(query) {
//     try {
//         const response = await fetch('/productos.json');
//         const productos = await response.json();
//         return productos.filter(producto => 
//             producto.titulo.toLowerCase().includes(query.toLowerCase()) ||
//             producto.imagen.toLowerCase().includes(query.toLowerCase())
//         );
//     } catch (error) {
//         console.error('Error al buscar productos:', error);
//         return [];
//     }
// }
async function buscarProductos(query) {
    try {
        console.log("Query:", query); // Log del query
        const response = await fetch('./productos.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const productos = await response.json();
        console.log("Productos recibidos:", productos); // Log de los productos recibidos
        const resultados = productos.filter(producto => 
            producto.titulo.toLowerCase().includes(query.toLowerCase()) ||
            producto.imagen.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Resultados de búsqueda:", resultados); // Log de los resultados
        return resultados;
    } catch (error) {
        console.error('Error al buscar productos:', error);
        return [];
    }
}



// Función para mostrar resultados
function mostrarResultados(resultados) {
    const resultadosBusqueda = document.getElementById('resultados-busqueda');
    resultadosBusqueda.innerHTML = '';

    if (resultados.length === 0) {
        resultadosBusqueda.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }

    const lista = document.createElement('ul');
    resultados.forEach(producto => {
        const item = document.createElement('li');
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}" width="50">
            <span>${producto.titulo}</span>
            <span>$${producto.precio}</span>
        `;
        lista.appendChild(item);
    });

    resultadosBusqueda.appendChild(lista);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const botonBuscador = document.getElementById('buscador');
    const inputBuscador = document.getElementById('buscador-input');

    botonBuscador.addEventListener('click', toggleBuscador);

    inputBuscador.addEventListener('input', async (e) => {
        const query = e.target.value;
        if (query.length > 2) {
            const resultados = await buscarProductos(query);
            mostrarResultados(resultados);
        } else {
            document.getElementById('resultados-busqueda').innerHTML = '';
        }
    });
});
