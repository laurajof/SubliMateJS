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
  
  const nombreCliente = JSON.stringify(nombre);
  sessionStorage.setItem("datonombre", nombreCliente);
  const emailCliente = JSON.stringify(email);
  sessionStorage.setItem("datomail", emailCliente);
  const celularCliente = JSON.stringify(celular);
  sessionStorage.setItem("datocel", celularCliente);
  console.log(nombreCliente)
  mostrar(cliente1);
}

function mostrar(cliente){
  nombrebaja = sessionStorage.getItem(`datonombre`);
  emailbaja = sessionStorage.getItem(`datomail`);
  celbaja = sessionStorage.getItem(`datocel`);
  console.log(nombrebaja)
  let formulario = document.getElementById("usuario");
  formulario.innerHTML = "";

  let nuevoCliente = document.createElement("div")
  nuevoCliente.className = "datos";
  nuevoCliente.innerHTML = `<p>Gracias ${nombrebaja} por contactarnos! En breve recibiras un email en: ${emailbaja}</p>`;
  formulario.appendChild(nuevoCliente);
  
}
