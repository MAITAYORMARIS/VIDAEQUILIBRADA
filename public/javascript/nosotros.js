function nosotros() {

  var nosotrosSection;
  nosotrosSection = `

    <section class="video-section">
    <video autoplay loop muted>
    <source src="./images/1-fondo.mp4" type="video/mp4">
    </video>
    <div class="content">
      <h1 class="animate-text">Nuestra Misión</h1>
      <p class="animate-text p-2">Nos encontramos continuamente en que la búsqueda de mejorar la atención, buscando los mejores productos, de la más alta calidad y el mejor precio para ofrecer en nuestro comercio. Es por esto que no ofrecemos productos, lo que ofrecemos en Vida Equilibrada es un servicio. Hemos creado este espacio para continuar brindándote los mejores productos, acercarte nuestra experiencia, contestar todas tus dudas e intentar hacerte llegar toda la información que necesites. Hoy en día trasladamos toda nuestra experiencia a nuestra web, brindando las mismas ventajas sin importar en donde se encuentre.</p>
    </div>
  </section>

  <section class="location-section">
  <img src="./images/habitos_img.webp" alt="imagen de Vida Equilibrada">
    
    <div class="content">
      <h2 class="animate-text" >Conoce nuestra tienda</h2>
      <p class="animate-tex p-2">Situada en el vibrante corazón de la ciudad, Vida Equilibrada no es solo una tienda, sino un destino de bienestar para aquellos que buscan una vida más saludable y equilibrada. Nuestro establecimiento es un espacio acogedor y amigable, diseñado pensando en nuestros clientes.</p>
      <p class="animate-text p-2">En Vida Equilibrada, creemos que la verdadera salud y bienestar proviene del equilibrio, y nos enorgullece ofrecer productos de la más alta calidad para ayudarte a encontrar ese equilibrio en tu vida. Nuestro equipo de expertos está siempre disponible para guiar y asesorar, asegurando que cada visita sea una experiencia enriquecedora y gratificante.</p>
      <p class="animate-text p-2">Creemos en la importancia de sentirse bien y vivir plenamente. Por ello, en Vida Equilibrada, nos esforzamos por ayudarte a lograr precisamente eso. Te invitamos a visitarnos y descubrir el camino hacia una vida más saludable y equilibrada.</p>
    </div>
  </section>
  <div class="map-overlay">
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8642497583137!2d-58.387166925130195!3d-34.607594057701455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac5466ccb9b%3A0x57419e9c86945b8f!2sBartolom%C3%A9%20Mitre%201280%2C%20C1036AAX%20CABA!5e0!3m2!1ses!2sar!4v1685136060146!5m2!1ses!2sar"
      style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>  
  </div>
    `

  var sectionNosotros = document.getElementById("sobreNosotros");
  sectionNosotros.style.display = "flex";
  sectionNosotros.innerHTML = nosotrosSection;
  document.getElementById("actividades").style.display = "none"
  document.getElementById("carouselExampleFade").style.display = "none"
  document.getElementById("seccionProductos").style.display = "none"
  document.getElementById("contacto").style.display = "none"
  document.getElementById("fondoLogos").style.display = "none"
  document.getElementById("cardsInicio").style.display = "none"
  ocument.getElementById("detalleProducto").style.display = "none"
  document.getElementById("seccionCompras").style.display = "none"
  document.getElementById("mapau").style.display = "none"
  document.getElementsByClassName("headerSeccion")[0].style.display="none"

  // $(window).scroll(function () {
  //   $('.animate-text').each(function () {
  //     var top_of_element = $(this).offset().top;
  //     var bottom_of_element = $(this).offset().top + $(this).outerHeight();
  //     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  //     var top_of_screen = $(window).scrollTop();

  //     if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
  //       // The element is visible, add the class.
  //       $(this).css({ opacity: 1, transform: 'translateY(0)' });
  //     } else {
  //       // The element is not visible, remove the class.
  //       $(this).css({ opacity: 0, transform: 'translateY(20px)' });
  //     }
  //   });
  // });
}