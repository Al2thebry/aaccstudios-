document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.getElementById('current-year').textContent = year;
    
    document.getElementById('start-button').addEventListener('click', function() {
        window.location.href = "page2.html"; // Cambia a la URL de la página que desees
    });
    
    const downloadButtons = document.querySelectorAll('.download-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Descargando aplicación...'); // Aquí puedes implementar la lógica de descarga real
        });
    });
});