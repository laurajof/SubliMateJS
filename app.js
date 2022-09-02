let suma = ""
let stickerx1 = ""
let stickerx10 = ""
let stickerx20 = ""
let resultado = ""

//Bienvenida
function solicitarNombre (){
    let nombre = prompt("Ingrese su nombre");
    alert("Bienvenido a SubliMate, " + nombre);
  } 
  
  solicitarNombre();
  
  //comprar stickers
  function comprarsticker(){
      let sticker = Number (prompt("Qué desea comprar? \n 1: Sticker por unidad \n 2: Pack de Stickers x10 \n 3: Pack de Stickers x20"));
  
      if (sticker === 1) {
        stickerx1 ++
        valor = 70
        alert("Excelente opción! Elegiste Sticker por unidad por un valor de $70");
      } else if (sticker === 2) {
        stickerx10 ++
        valor = 500
        alert("Excelente opción! Elegiste el pack de Sticker por 10 unidades por un valor de $500");
      } else if (sticker === 3) {
        stickerx20 ++
        valor = 900
        alert("Excelente opción! Elegiste el pack de Sticker por 20 unidades por un valor de $900");   
      } else {
        alert ("La opción ingresada no es correcta.");
        alert ("Volvamos a empezar!");
        comprarsticker()
      }
  }

comprarsticker()

masopciones = Number (prompt("Como deseas continuar? \n 1: Seguir comprando \n 2: Finalizar compra \n 3: Salir"));

while (masopciones === 1){
    comprarsticker()
    masopciones = Number (prompt("Como deseas continuar? \n 1: Seguir comprando \n 2: Finalizar compra \n 3: Salir"));
} if (masopciones === 2){
    let suma1 = stickerx1 * 70
    let suma2 = stickerx10 * 500
    let suma3 = stickerx20 * 900
    resultado = (suma1+suma2+suma3)
    alert ("Tu compra es por un total de $" + resultado + " ¡Pronto nos pondremos en contacto para realizar la entrega!");
}else if (masopciones === 3){
    alert ("Gracias por tu visita!");
}


