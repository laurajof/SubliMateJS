let sticker = ""
let precio = ""
let cantidad = ""
let articuloIngresado = ""

let resultado = ""
let totalCompra = 0;

//Bienvenida
function solicitarNombre (){
  let nombre = prompt("Ingrese su nombre");
  alert("Bienvenido a la tienda de Stickers de SubliMate, " + nombre.toUpperCase() + "!" + "\nTenemos: \nStickers por unidad a $70 \nPack x 10 Stickers a $500 \nPack x 20 Stickers a $900.");
}

class Stickers {
  constructor(sticker, precio, cantidad) {
    this.sticker = sticker;
    this.precio = parseFloat (precio);
    this.cantidad = cantidad;
  }
}

// ARRAYS
const arrayStickers= [];

const productos = [{
    nombre: "Sticker x1",
    precio: 70,
    },
    {nombre: "Sticker x10",
    precio: 500,
    },
    {nombre: "Sticker x20",
    precio: 900,
    },
];

const carrito = [];

solicitarNombre();

let navegar = prompt("Que desea hacer? \n 1: Comprar Stickers \n 3: Mostrar producto destacado \n 4: Salir ");

while (navegar !== "4"){
    if (navegar == "1"){
        sticker = prompt("ingrese el producto que desea comprar \n 1: Sticker x1 \n 2: Stickers x10 \n 3: Stickers x20");
        if (sticker == "1") {
            alert(`Excelente opción! Elegiste: ${productos[0].nombre} por un valor de $ ${productos[0].precio} `);
            precioCompra = productos[0].precio
        } else if (sticker == "2") {
          alert(`Excelente opción! Elegiste: ${productos[1].nombre} por un valor de $ ${productos[1].precio} `);
          precioCompra = productos[1].precio
        } else if (sticker ==="3") {
          alert(`Excelente opción! Elegiste: ${productos[2].nombre} por un valor de $ ${productos[2].precio} `);
          precioCompra = productos[2].precio
        } else {
            alert ("ingrese una opción válida")
            sticker = prompt("1: Sticker x1 \n 2: Stickers x10 \n 3: Stickers x20");
        }
        alert ("El precio del producto elejido es de $" + " " + precioCompra);

        cantidad = prompt("ingrese cuantos quiere");

        resultado = precioCompra * cantidad
        totalCompra = resultado + totalCompra

        articuloIngresado = new Stickers (sticker, precio, cantidad);
      
        arrayStickers.push(articuloIngresado);
      
        console.log(arrayStickers);
    }
    if (navegar == "2"){
        alert ("Finalizó su compra con un total de $:" + " " + totalCompra + ". Nos contactaremos con usted a la brevedad.")
    }
    //Producto destacado
    if (navegar === "3"){
        productoDestacado = (productos.filter((e)=> e.precio < 100));
        console.log(productoDestacado)
        for (var i =0; i < productoDestacado.length; i++){
            alert (`Nuestro producto destacado del mes es: ${productos[i].nombre} a un precio de $ ${productos[i].precio}`)
        }
    }
    navegar = prompt("Elija una opcion: \n 1: Seguir comprando \n 2: Finalizar compra \n 3: Mostrar producto destacado \n 4: Salir");
}
 
alert ("Gracias por tu visita!")