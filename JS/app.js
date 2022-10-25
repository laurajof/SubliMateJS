const carrito = [];
const totalFinal = [];

const cargarProductos = () => {
    fetch("./productos.json")
        .then(response => response.json())
        .then(json => {
            const contendor = document.querySelector("#productos")
            json.forEach((p, indice) => {
                let pepe = document.createElement("div");
                pepe.classList.add("dibujoProd");
                pepe.innerHTML = `<p>${p.nombre}</p>
                            <p>${p.descripcion}</p>
                            <img src="${p.imagen}" alt="Imagen producto">
                            <p>$ ${p.precio}</p>
                            <button class="btnComprar" id="${indice}">Comprar</button>`
                contendor.appendChild(pepe);
            })
        })
}

cargarProductos();

function sumarProd() {
    fetch("./productos.json")
        .then(response => response.json())
        .then(json => {
            json.forEach((p, indice) => {
                document.getElementById(`${indice}`).addEventListener(`click`, () => {
                    contador = p.cantidad++
                    agregarAlCarrito(json, indice);
                })
            })
        })
}

sumarProd();

const agregarAlCarrito = (productos, indiceDelArrayProducto) => {
    const indiceEncontrado = carrito.findIndex((e) => {
        return e.id === productos[indiceDelArrayProducto].id;
    });
    if (indiceEncontrado === -1) {
        let productoAgregar = productos[indiceDelArrayProducto];
        productoAgregar.cantidad = 1
        carrito.push(productoAgregar);
        console.log(carrito)
        dibujarCarrito();
        total2();
        contador2();
    } else {
        total2();
        contador2();
    }
}

const dibujarCarrito = () => {
    const contenedor = document.querySelector("#dibujoCarritos")
    contenedor.innerHTML = ``
    carrito.forEach((p) => {
        let hijo = document.createElement("div")
        hijo.classList.add("sticker")
        hijo.innerHTML = `<section class="compraCar">
                            <div id="pruebaBorrar">
                                ${p.nombre} Precio: $ ${p.precio} Cantidad: ${p.cantidad}
                            </div>
                        </section>`
        contenedor.appendChild(hijo);
    })
}

const total2 = () => {
    let suma = 0 
    for (const p of carrito){
        suma = suma + p.precio * p.cantidad
    }
    totalFinal.push(suma)
    dibujarTotal(suma);
    dibujarCarrito(); 
}

const dibujarTotal = (suma) => {
    const compras = document.querySelector("#total")
    compras.innerHTML = ``
    let comprasticker = document.createElement("div")
    comprasticker.innerHTML = `<div class="total">
                                $ ${suma}
                            </div>`
    compras.appendChild(comprasticker)
}

const borrarProd = () => {
    document.getElementById("borrarProd").addEventListener(`click`, () => {
        carrito.length = 0
        totalFinal.length = 0
        const contenedor = document.querySelector("#dibujoCarritos")
        contenedor.innerHTML = ``
        const compras = document.querySelector("#total")
        compras.innerHTML = ``
        const contando = document.querySelector("#contador")
        contando.innerHTML = ``
        contenedor.append
    })
}

borrarProd();

const contador2 = () => {
    const cant = totalFinal.length
    const contando = document.querySelector("#contador")
    contando.innerHTML = `${cant}`
    let cont = document.createElement("div")
    cont.innerHTML = `    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
  </svg>`
    contando.appendChild(cont)
}

const compra = () => {
    document.getElementById(`compra`).addEventListener(`click`, () => {
        document.querySelector("#cart").style.opacity = "100%"
        document.querySelector("#productos").style.display = "none"
    })
}

compra();

const inicio2 = () => {
    document.getElementById(`inicio`).addEventListener(`click`, () => {
        document.querySelector("#cart").style.opacity = "0"
        document.querySelector("#productos").style.display = "flex"
    })
}

inicio2();


//FORMULARIO

const form = document.querySelector("#form");

form.addEventListener("submit", event => {
    event.preventDefault ();
    validarFormulario();
});

function validarFormulario() {
    console.log("formulario")
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("mail").value;
    let celular = document.getElementById("celular").value; 

    const nombreCliente = JSON.stringify(nombre);
    sessionStorage.setItem("datonombre", nombreCliente);
    const emailCliente = JSON.stringify(email);
    sessionStorage.setItem("datomail", emailCliente);
    const celularCliente = JSON.stringify(celular);
    sessionStorage.setItem("datocel", celularCliente); 
    mostrar(); 
}

function mostrar() {
    nombrebaja = sessionStorage.getItem(`datonombre`);
    emailbaja = sessionStorage.getItem(`datomail`);
    celbaja = sessionStorage.getItem(`datocel`);
    Swal.fire({
        icon: 'success',
        title: 'Ingreso sus datos correctamente',
        titleText: `Nos contactaremos a la brevedad a:`,
        text: emailbaja,
    })  
}
