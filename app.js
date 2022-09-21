/* //constantes botones
const button = document.querySelector("#x1");
const para = document.createElement("p");
const valor = document.createElement("p");
para.innerHTML = "Sticker x unidad";
valor.innerHTML = "Valor $70"; 

const button10 = document.querySelector("#x10");
const para10 = document.createElement("p");
const valor10 = document.createElement("p");
para10.innerHTML = "Stickers x10 unidades";
valor10.innerHTML = "Valor $500";

const button20 = document.querySelector("#x20");
const para20 = document.createElement("p");
const valor20 = document.createElement("p");
para20.innerHTML = "Stickers x20 unidades";
valor20.innerHTML = "Valor $900";

//carrito
button.onclick = function(){
    document.getElementById("comprar").appendChild(para);
    document.getElementById("valor").appendChild(valor);
}

button10.onclick = function(){
    document.getElementById("comprar").appendChild(para10);
    document.getElementById("valor").appendChild(valor10);
}

button20.onclick = function(){
    document.getElementById("comprar").appendChild(para20);
    document.getElementById("valor").appendChild(valor20);
} */
const datosStickers = [
  {
      id: 1,
      nombre: "Stickers x1",
      descripcion: "1 Sticker a elección",     precio: 70,
  },
  {
      id: 10,
      nombre: "Stickers x10",
      descripcion: "Pack 10 Stickers a elección",
      precio: 500,
  },
  {
      id: 20,
      nombre: "Stickers x20",
      descripcion: "Pack 20 Stickers a elección",
      precio: 900,
  },
];

const mostrarStickers = ()=>{
  let contenedor = document.querySelector
  ("#sticker");
  datosStickers.forEach((stick)=> {
      let sticker = document.createElement("div");
      sticker.classList.add("botones")
      sticker.innerHTML=`<div class="card" style="width: 10rem;">
      <div class="card-body">
        <h5 class="card-title">${stick.nombre}</h5>
        <p class="card-text">${stick.descripcion}</p>
        <a href="#" id=${stick.id} class="btn btn-primary">Elegir</a>
      </div>
    </div>`;
      contenedor.appendChild(sticker)
  });
}
mostrarStickers();

const mostrarprecio = () =>{
    datosStickers.forEach((stick) => {
        document.getElementById(`${stick.id}`).addEventListener(`click`, () => {
            let precioStickers = (stick.precio)
            console.log(precioStickers) 
        })
    })
}
mostrarprecio();


//formulario
class Cliente {
  constructor(nombre, mail, celular){
      this.nombre = nombre;
      this.mail = mail;
      this.celular = celular;
  }
}

let boton = document.getElementById("enviar");
boton.addEventListener("click",validarFormulario);

function validarFormulario(){
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("mail").value;
  let celular = document.getElementById("celular").value;
  let cliente1 = new Cliente(nombre, email, celular);
  console.log(cliente1);
  mostrar(cliente1);
}

function mostrar(cliente){
  let formulario = document.getElementById("usuario");
  formulario.innerHTML = "";
//Nuevo Cliente
  let nuevoCliente = document.createElement("div")
  nuevoCliente.innerHTML = `<h1>Gracias ${cliente.nombre} por contactarnos! En breve recibiras un email en: ${cliente.mail}</h1>`;
  
  nuevoCliente.className = "datos";
  formulario.appendChild(nuevoCliente);
}
const guardarcliente = JSON.stringify(nuevoCliente);