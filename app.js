let sticker = ""
let precio = ""
let cantidad = ""
let articuloIngresado = ""

//Bienvenida
function solicitarNombre (){
  let nombre = prompt("Ingrese su nombre");
  alert("Bienvenido a la tienda de Stckers de SubliMate, " + nombre.toUpperCase() + "!" + "\nTenemos: \nStickers por unidad a $70 \nPack x 10 Stickers a $500 \nPack x 20 Stickers a $900.");
}
solicitarNombre();

class Stickers {
  constructor(sticker, precio, cantidad) {
    this.sticker = sticker;
    this.precio = parseFloat (precio);
    this.cantidad = cantidad;
  }
}
const arrayStickers= [];
let navegar = prompt("Que desea hacer? \n 1: Comprar Stickers \n 2: Finalizar compra \n 3: Salir ");

while (navegar === "1"){
  sticker = prompt("ingrese el producto que desea comprar ");
  precio = prompt("ingrese el precio del producto");
  cantidad = prompt("ingrese cuantos quiere");
  articuloIngresado = new Stickers (sticker, precio, cantidad);
  arrayStickers.push(articuloIngresado);
  console.log(arrayStickers);
navegar = prompt("Elija una opcion: \n 1: Seguir comprando \n 2: Finalizar compra \n 3: Salir");
} if (navegar === "3"){
  alert ("Gracias por tu visita!")

}

let totalCompra = 0;

for (i = 0; i < arrayStickers.length; i++) {
  console.log(arrayStickers[i]);
  totalCompra =
    totalCompra + arrayStickers[i].precio * arrayStickers[i].cantidad;
}
alert("Gracias por su compra! El monto a abonar es de $  " + totalCompra);