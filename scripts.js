"use strict"

const productos = [
    {nombre : "Peugeot", Valor: 10},
    {nombre : "Renault", Valor: 10},
    {nombre : "Ford", Valor: 10},
    {nombre : "Chevrolet", Valor: 10},
    {nombre : "BMW", Valor: 10},
]

const formulario= document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado= document.querySelector("#resultado");

const filtrar = () =>{
    resultado.innerHTML = "";
  //console.log(formulario.value);
  const texto = formulario.value.toLowerCase();
  for(let producto of productos){
      let nombre = producto.nombre.toLowerCase();
      if(nombre.indexOf(texto) !== -1){
          resultado.innerHTML += `
          <li>${producto.nombre} - Valor:${producto.Valor}</li>

          ` 
      }
  }

  if(resultado.innerHTML === ""){
      resultado.innerHTML += `
      <li>Producto no encontrado...</li>
      
      `
  }

}

boton.addEventListener("click", filtrar)
formulario.addEventListener("keyup", filtrar)

filtrar();
