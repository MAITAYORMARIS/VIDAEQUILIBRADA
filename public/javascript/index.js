const coleccionProductos = firebase.firestore().collection("productos");

let dataProductos = []
let suplementosNaturales = []
let hogar = []
let alimentosOrganicos = []
let productosSinLactosa=[]
let arrayBusqueda=[]

async function getDB() {
    await coleccionProductos.get()
        .then((results) => {
            console.log(results)
            const data = results.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            dataProductos.push(...data)


            console.log("Toda data en la colección 'productos' ", dataProductos);

            for (var i = 0; i < dataProductos.length; i++) {
                if (dataProductos[i].categoria == "Suplemento Natural") {
                    suplementosNaturales.push(dataProductos[i])
                }
                else if (dataProductos[i].categoria == "Hogar") {
                    hogar.push(dataProductos[i])
                }
                else if (dataProductos[i].categoria == "Alimentos Organicos") {
                    alimentosOrganicos.push(dataProductos[i])

                }
                else {
                    productosSinLactosa.push(dataProductos[i])
                }
            }

        })
        navegacion(inicio)
}; getDB()
console.log(suplementosNaturales)

var botones = document.getElementsByClassName("nav-link")

for (var i = 0; i < botones.length; i++) {
    const elementos = botones[i];

    elementos.addEventListener("click", function (e) {
        navegacion(e.target.id);

    })
}
document.getElementById("enlaceContacto").addEventListener("click", function(e){
    navegacion("contact")
    console.log("llame a contacto desde footer")
})
document.getElementById("enlaceCompras").addEventListener("click", function(e){
    compras()
})
function navegacion(id) {
    switch (id) {
        case "alimentosOrganicos":
            imprimir(alimentosOrganicos)
            arrayBusqueda=alimentosOrganicos
            document.getElementsByClassName("headerSeccion")[0].style.display="flex"
            document.getElementById("textoSeccion").style.display="flex"
            document.getElementById("tituloSec").innerHTML="ALIMENTOS ORGANICOS"
            document.getElementById("seccionProductos").style.display = "flex"
            document.getElementById("carouselExampleFade").style.display="none"
            document.getElementById("mapau").style.display="none"
            document.getElementById("detalleProducto").style.display="none"
            document.getElementById("seccionCompras").style.display="none"
            document.getElementById("contacto").style.display="none"
            document.getElementById("elementoBusqueda").style.display="flex"
            document.getElementsByClassName("circulo")[0].innerHTML=`<div class="contenedorImgCategoria"><img src="./images/alimentosorganicos.jpg" alt="imagen categoria alimentos"></div>`
            break;
        case "productosSinLactosa":
            imprimir(productosSinLactosa)
            arrayBusqueda=productosSinLactosa
            document.getElementsByClassName("headerSeccion")[0].style.display="flex"
            document.getElementById("textoSeccion").style.display="flex"
            document.getElementById("tituloSec").innerHTML="PRODUCTOS SIN LACTOSA"
            document.getElementsByClassName("circulo")[0].innerHTML=`<div class="contenedorImgCategoria"><img src="./images/sinLactosa.jpg" alt="imagen productos sin Lactosa"></div>`
            document.getElementById("seccionProductos").style.display = "flex"
            document.getElementById("carouselExampleFade").style.display="none"
            document.getElementById("mapau").style.display="none"
            document.getElementById("detalleProducto").style.display="none"
            document.getElementById("seccionCompras").style.display="none"
            document.getElementById("contacto").style.display="none"
            document.getElementById("elementoBusqueda").style.display="flex"
            break;
        case "suplementosNaturales":
            imprimir(suplementosNaturales)
            arrayBusqueda=suplementosNaturales
            document.getElementById("seccionProductos").style.display = "flex"
            document.getElementById("carouselExampleFade").style.display="none"
            document.getElementById("mapau").style.display="none"
            document.getElementsByClassName("headerSeccion")[0].style.display="flex"
            document.getElementById("textoSeccion").style.display="flex"
            document.getElementById("tituloSec").innerHTML="SUPLEMENTOS NATURALES"
            document.getElementsByClassName("circulo")[0].innerHTML=`<div class="contenedorImgCategoria"><img src="./images/suplementosNaturales.jpg" alt="imagen suplementos Naturales"></div>`
            document.getElementById("detalleProducto").style.display="none"
            document.getElementById("seccionCompras").style.display="none"
            document.getElementById("contacto").style.display="none"
            document.getElementById("elementoBusqueda").style.display="flex"
            break;
        case "hogar":
            imprimir(hogar)
            arrayBusqueda=hogar
            document.getElementById("tituloSec").innerHTML="HOGAR"
            document.getElementsByClassName("circulo")[0].innerHTML=`<div class="contenedorImgCategoria"><img src="./images/Hogar.jpg" alt="imagen categoria hogar"></div>`
            document.getElementById("textoSeccion").style.display="flex"
            document.getElementById("seccionProductos").style.display = "flex"
            document.getElementsByClassName("headerSeccion")[0].style.display="flex"
            document.getElementById("carouselExampleFade").style.display="none"
            document.getElementById("mapau").style.display="none"
            document.getElementById("detalleProducto").style.display="none"
            document.getElementById("seccionCompras").style.display="none"
            document.getElementById("contacto").style.display="none"
            document.getElementById("elementoBusqueda").style.display="flex"
            break;
        case "contact":
            console.log("form de contactos")
            formulario() 
            document.getElementById("carouselExampleFade").style.display="none"
            document.getElementById("mapau").style.display="none"
            document.getElementById("detalleProducto").style.display="none"
            document.getElementById("seccionCompras").style.display="none"
            document.getElementById("contacto").style.display="flex"
            document.getElementsByClassName("headerSeccion")[0].style.display="flex"
            document.getElementById("tituloSec").innerHTML="CONTACTANOS"
            document.getElementsByClassName("circulo")[0].innerHTML=`<i class="fa-solid fa-envelopes-bulk" style="color: #fafcff;"></i>`
            document.getElementById("textoSeccion").style.display="none"
            document.getElementById("elementoBusqueda").style.display="none"
            break;
        default:
            document.getElementById("carouselExampleFade").style.display = "flex"
            document.getElementById("mapau").style.display="flex"
            document.getElementById("seccionProductos").style.display = "none"
            document.getElementById("detalleProducto").style.display="none"
            document.getElementById("seccionCompras").style.display="none"
            document.getElementById("contacto").style.display="none"
            document.getElementsByClassName("headerSeccion")[0].style.display="none"
           
    }
}

function imprimir(array) {

    var html = "";
    for (var i = 0; i < array.length; i++) {
        html +=
            `
    <div class="card cardProducto">
        <div class="imageProducContent"><img src="${array[i].image}" alt="foto ${array[i].nombre}"></div>
        <div class="card-body bodyProducto">
          <p class="card-title tituloProducto">${array[i].nombre}</p>
          <p class="card-text">Presentacion: ${array[i].presentacion}</p>
          <p class="card-text">Precio:$${array[i].precio} </p>
        </div>
        <div class="card-body footProducto">
        <button id=${array[i].id} class="btn btnInfo"><i class="fa-solid fa-plus">Mas info</i></button>
          <a href="#" class="btn btnShop"><i class="fa-solid fa-cart-shopping">Comprar</i></a>
        
        </div>
      </div>
    `
    }
    document.getElementById("productosDietetica").innerHTML = html;
      var botonesInfo = document.querySelectorAll(".btnInfo")
      console.log(botonesInfo)
      for (var m = 0; m < botonesInfo.length; m++) {
        botonesInfo[m].addEventListener("click", function (e) {
        //   console.log(e.target.parentElement.id)
     imprimirDetalle(e.target.parentElement.id)

        })
      }

      var botonesCompra = document.getElementsByClassName("btnShop")
      for (var u = 0; u < botonesCompra.length; u++) {
        botonesCompra[u].addEventListener("click", function (e) {

          compras()

        })
      }
}

var busquedaInput = document.getElementById("busqueda")
busquedaInput.addEventListener("keyup", (producto) => busquedaSearch(producto))

let datosIngresados

function busquedaSearch(producto) {
  datosIngresados = producto.target.value.trim().toLowerCase()
  console.log(datosIngresados)

  filtroDeBusqueda = arrayBusqueda.filter(producto => producto.nombre.toLowerCase().includes(datosIngresados))
  if (filtroDeBusqueda.length > 0) {
    imprimir(filtroDeBusqueda)

  }
  else {
    document.getElementById("seccionProductos").innerHTML = `<h1>No se encontraron resultados</h1>`
  }
}
