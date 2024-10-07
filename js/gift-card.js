const giftCard =[
    {id: 19, name:'Giftcard Classic',precio: 35.000, img:'../img/Gift Card/15-.png', description:'Ten siempre a mano un detalle.'},
    {id: 20 ,name:'Giftcard Premium',precio: 45.000, img:'../img/Gift Card/25-.png', description:'Supera todas las espectativas!'},
    {id: 21 ,name:'Giftcard Exclusive',precio: 80.000, img:'../img/Gift Card/50-.png',description:'No hay nada que iguale esta opcion'},
];

const listaGiftCard =document.getElementById('lista-producto');

giftCard.forEach(productos => {
    const card = document.createElement('div');
    card.className = 'carta';

    card.innerHTML = `
        <h3 class="titulo-gc">${productos.name}</h3>
            <img class="giftcard" src="${productos.img}" alt="${productos.name}">
            <p class="description">${productos.description}</p>
        <p class="price">$${productos.precio.toFixed(3)}</p>
        <button class="agregar-carrito"  id ="btn-gc" data-id="${productos.id}">Agregar Al Carrito</button>
    `;

    listaGiftCard.appendChild(card);
    
});