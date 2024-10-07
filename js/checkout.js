// Función para generar el checkout
function generarCheckout() {
    const contenedor = document.querySelector('main');
    contenedor.innerHTML = `
        <div class="checkout-container">
            <h2>Finalizar Compra</h2>
            <form id="checkout-form">
                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" required>
                </div>
                <div class="form-group">
                    <label for="apellido">Apellido:</label>
                    <input type="text" id="apellido" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="direccion">Dirección de envío:</label>
                    <input type="text" id="direccion" required>
                </div>
                <div class="form-group">
                    <label for="tarjeta">Número de tarjeta:</label>
                    <input type="text" id="tarjeta" maxlength="16" required>
                    <img id="logo-tarjeta" src="" alt="Logo tarjeta" style="display: none; width: 50px;">
                </div>
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    `;

    const inputTarjeta = document.getElementById('tarjeta');
    const logoTarjeta = document.getElementById('logo-tarjeta');

    inputTarjeta.addEventListener('input', (e) => {
        const primerDigito = e.target.value.charAt(0);
        logoTarjeta.style.display = 'inline';
        logoTarjeta.src = primerDigito === '4' ? '../img/medios-de-pago/visa.png' :
        primerDigito === '5' ? '../img/medios-de-pago/mastercard.png' : '';
        logoTarjeta.style.display = logoTarjeta.src ? 'inline' : 'none';
    });

    document.getElementById('checkout-form').addEventListener('submit', finalizarCompra);
}

// Función para finalizar la compra
function finalizarCompra(e) {
    e.preventDefault();
    alert('¡Gracias por tu compra!');
    setTimeout(() => {
        window.location.href = '/index.html';
    }, 4000);
}

// Inicializar el checkout
document.addEventListener('DOMContentLoaded', generarCheckout);
