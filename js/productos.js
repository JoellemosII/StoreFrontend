import lista1 from './card-home.js';
import lista2 from './card-kids.js';
import lista3 from './card-adultos.js';
// import lista4 from './gift-card.js';

// lista1();
// lista2();
// lista3();
// lista4();

const todosLosProductos = [].concat(lista1,lista2,lista3);

function buscadorProductos(termino) {
    return todosLosProductos.filter(producto => {
        return producto.nombre.includes(termino);
    });
}

export default buscadorProductos;