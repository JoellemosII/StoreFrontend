document.querySelectorAll('.color-swatch input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
      document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.style.borderColor = 'transparent'; // Restablece el borde
      });
      this.parentElement.style.borderColor = this.parentElement.style.backgroundColor; // Cambia el borde al color del fondo
    });
  });
  