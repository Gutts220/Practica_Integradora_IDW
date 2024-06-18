document.addEventListener('DOMContentLoaded', function () {
    //constantes de navbar
    const marcaBtn = document.querySelector('.marca-btn');
    const containerItems = document.querySelector('.container-items');
    //constantes de carrusel
    const imagenes = document.querySelectorAll('.carrusel-imagen');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalImagen = imagenes.length;
    let imagenActual = 0;

    //constantes de reloj
    
    //función reloj

    function actualizarReloj(){
       let objetoHora = new Date();
       let hora = padNum(objetoHora.getHours());
       let minutos = padNum(objetoHora.getMinutes());
       let  temp = hora + ":" + minutos;
       document.getElementById("tiempo").textContent = temp;
       setTimeout(actualizarReloj, 1000);
    }
    
    
    function padNum(numero){
       return numero < 10 ? "0" + numero : numero;
    }

    actualizarReloj();
    
    // Navbar responsive
    marcaBtn.addEventListener('click', function () {
        containerItems.classList.toggle('active');
    });

    
    //carrusel de imagenes
    function updateCarousel() {
        const offset = -imagenActual * 100;
        document.querySelector('.carrusel-container').style.transform = `translateX(${offset}%)`;
    }

    function anteriorImagen() {
        imagenActual = (imagenActual > 0) ? imagenActual - 1 : totalImagen - 1;
        updateCarousel();
    }

    function siguienteImagen() {
        imagenActual = (imagenActual < totalImagen - 1) ? imagenActual + 1 : 0;
        updateCarousel();
    }

    function clickEnImagen(event) {
        const url = event.currentTarget.getAttribute('data-url');
        window.location.href = url;
    }

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', clickEnImagen);
    });

    prevBtn.addEventListener('click', anteriorImagen);
    nextBtn.addEventListener('click', siguienteImagen);

    // seteamos un intervalo de tiempo para que pase automaticamente a la siguiente imagen
    setInterval(siguienteImagen, 10000);
    //para que se actualice el reloj
    
});