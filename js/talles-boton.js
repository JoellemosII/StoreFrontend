document.querySelectorAll(".interruptor").forEach(function(button) {
    button.addEventListener("click", function() {
        
        document.querySelectorAll(".interruptor").forEach(function(btn) {
            btn.classList.remove("seleccionado");
        });
        
        this.classList.add("seleccionado");
    });
});

