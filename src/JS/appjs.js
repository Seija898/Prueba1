function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex';
}

function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
        sidebar.style.display='none';
    
}
window.addEventListener('resize', function () {
    const sidebar = document.querySelector('.sidebar');
    const widthThreshold = 800; // Ajusta al ancho de tu media query
    if (window.innerWidth > widthThreshold && sidebar.style.display === 'flex') {
        hidesidebar(); // Oculta el sidebar
    }
});

window.onload = function() {
    window.scrollTo(0, 0); // Desplaza el scroll a la parte superior
  };