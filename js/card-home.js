const products = [
    { id: 1, name: 'Remera React', precio: 120.000 , img: './img/Inicio/react.jpg' },
    { id: 2, name: 'Remera JS', precio: 120.000, img: './img/Inicio/js.jpg' },
    { id: 3, name: 'Remera HTML', precio: 120.000, img: './img/Inicio/html.jpg' },
    { id: 4, name: 'Remera Git' , precio: 120.000, img: './img/Inicio/git.jpg'},
    { id: 5, name: 'Remera TS' , precio: 120.000, img: './img/Inicio/ts.jpg'},
    { id: 6, name: 'Remera Vue' , precio: 120.000, img: './img/Inicio/vue.jpg'},
    { id: 7, name: 'Remera Node' , precio: 120.000, img: './img/Inicio/node.jpg'},
    { id: 8, name: 'Remera Sass' , precio: 120.000, img: './img/Inicio/sass.jpg'},
    { id: 9, name: 'Remera Drupal' , precio: 120.000, img: './img/Inicio/drupal.jpg'},
];



const productosHome = document.getElementById('lista-producto');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <h3>${product.name}</h3>
        <a href="./html/${product.name.toLowerCase().replace(' ', '-')}.html">
            <img class="imagenes" src="${product.img}" alt="${product.name}">
        </a>
        <p class="price">$${product.precio.toFixed(3)}</p>
        <button class="agregar-carrito" data-id="${product.id}">Agregar Al Carrito</button>
    `;

    productosHome.appendChild(card);
});


