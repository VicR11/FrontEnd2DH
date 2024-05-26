/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  
  let nombre = prompt("Ingresa tu nombre");
  datosPersona.nombre = validarEntrada(nombre,"tu nombre","string"); 
  let edad = prompt("Ingresa el año en que naciste")
  datosPersona.edad = 2024 - parseInt(validarEntrada(edad,"el año en que naciste","numero"));
  let ciudad = prompt("Ingresa la ciudad donde vives")
  datosPersona.ciudad = validarEntrada(ciudad,"la ciudad donde vives","string");
  datosPersona.interesPorJs = confirm("Te interesa JavaScript")? "Si" : "No";
 
  
  function validarEntrada(datoPersona,fraseEntrada,flag){
    const soloLetras = /^[A-Za-z\s]+$/;
   
    if(flag == "string"){
        while(datoPersona === null || datoPersona === "" || !soloLetras.test(datoPersona) || datoPersona.length < 3){
          alert(`Debe ingresar una entrada valida`)
          datoPersona = prompt(`Ingresa ${fraseEntrada}`);
      }
    }else{
      while(datoPersona === null || datoPersona === "" || isNaN(Number(datoPersona)) || datoPersona.length < 4){
        alert(`Debe ingresar una entrada valida`)
        datoPersona = prompt(`Ingresa ${fraseEntrada}`);
      }
    }
      return datoPersona;  
  }
   
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  let nombre = document.querySelector("#nombre");
  let edad = document.querySelector("#edad");
  let ciudad = document.querySelector("#ciudad");
  let interesJavascript = document.querySelector("#javascript");

  nombre.textContent = datosPersona.nombre;
  edad.textContent = datosPersona.edad;
  ciudad.textContent = datosPersona.ciudad;
  interesJavascript.textContent = datosPersona.interesPorJs;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    let divMateria = document.querySelector("#fila")
    
    if(divMateria.childElementCount ===0){
      listado.forEach((materia)=>{
        let tarjeta = document.createElement("div");
        let imagen = document.createElement("img");
        let parrafoLenguaje = document.createElement("p");
        let parrafoBimestre = document.createElement("p");
        tarjeta.classList.add("caja")
        parrafoLenguaje.classList.add("lenguajes")
        parrafoBimestre.classList.add("bimestre")
        divMateria.appendChild(tarjeta)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(parrafoLenguaje)
        tarjeta.appendChild(parrafoBimestre)
        imagen.setAttribute("src",materia.imgUrl)
        imagen.setAttribute("alt",materia.lenguajes)
        parrafoLenguaje.textContent = `Lenguajes: ${materia.lenguajes}`
        parrafoBimestre.textContent = `Bimestre: ${materia.bimestre}`
        
      })
    }



}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  container = document.querySelector("#sitio")
  container.classList.toggle("dark")


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
  textoSobreMi =  document.getElementById("sobre-mi");
  document.addEventListener("keypress", (event) => {
    if (event.key === "F" || event.key === "f") {
       textoSobreMi.classList.remove("oculto")
    }
  });