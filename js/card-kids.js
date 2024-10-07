const productosKids =[
    {id: 10, name:'Remera Sonic',precio: 65.000, img:'../img/Kids/sonic.jpg'},
    {id: 11 ,name:'Remera Goku',precio: 65.000, img:'../img/Kids/goku.jpg'},
    {id: 12 ,name:'Remera Spiderman',precio: 65.000, img:'../img/Kids/spiderman.jpg'},
    {id: 13 ,name:'Remera Ajedrez',precio: 65.000, img:'../img/Kids/ajedrez.jpg'},
    {id: 14 ,name:'Remera Astronauta',precio: 65.000, img:'../img/Kids/astronauta.jpg'},
    {id: 15 ,name:'Remera Classic',precio: 65.000, img:'../img/Kids/classic.jpg'},
    {id: 16 ,name:'Remera Cube',precio: 65.000, img:'../img/Kids/cube.jpg'},
    {id: 17 ,name:'Remera Stark',precio: 65.000, img:'../img/Kids/stark.jpg'},
    {id: 18 ,name:'Remera Rock',precio: 65.000, img:'../img/Kids/rock.png'},
];

const listaKids =document.getElementById('lista-producto');

productosKids.forEach(productos => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <h3>${productos.name}</h3>
        <img class="imagenes" src="${productos.img}" alt="${productos.name}">
        <p class="price">$${productos.precio.toFixed(3)}</p>
        <button class="agregar-carrito" data-id="${productos.id}">Agregar Al Carrito</button>
    `;

    listaKids.appendChild(card);
    
});

