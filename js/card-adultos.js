const productosAdultos =[
    {id: 19, name:'Remera Jordan',precio: 85.000, img:'../img/Adultos/images.jpg'},
    {id: 20 ,name:'Remera Pico',precio: 85.000, img:'../img/Adultos/pico.jpg'},
    {id: 21 ,name:'Remera Adidas',precio: 85.000, img:'../img/Adultos/addidas.jpg'},
    {id: 22 ,name:'Remera Mountain',precio: 85.000, img:'../img/Adultos/mountain.jpg'},
    {id: 23 ,name:'Remera Nordic',precio: 85.000, img:'../img/Adultos/nordic.jpg'},
    {id: 24 ,name:'Remera Fish',precio: 85.000, img:'../img/Adultos/fish.jpg'},
    {id: 25 ,name:'Remera Auto',precio: 85.000, img:'../img/Adultos/auto.jpg'},
    {id: 26 ,name:'Remera Versace',precio: 85.000, img:'../img/Adultos/versace.jpg'},
    {id: 27 ,name:'Remera Puma',precio: 85.000, img:'../img/Adultos/puma.jpg'},
];


const listAdultos =document.getElementById('lista-producto');

productosAdultos.forEach(productos => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <h3>${productos.name}</h3>
        <img class="imagenes" src="${productos.img}" alt="${productos.name}">
        <p class="price">$${productos.precio.toFixed(3)}</p>
        <button class="agregar-carrito" data-id="${productos.id}">Agregar Al Carrito</button>
    `;

    listAdultos.appendChild(card);
});

async function obtenerProductos(){
    const archivo = '/productos.json';
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos)
}
obtenerProductos();