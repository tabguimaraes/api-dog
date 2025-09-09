"use strict";

const elemento = {
  input: document.querySelector("input").value,
  botao: document.querySelector("button"),
  container: document.querySelector("#container"),
};

console.log(elemento.container);

// async function buscarImagens(raca) {
//   const url = `https://dog.ceo/api/breed/${raca}/images`;

//   const response = (await fetch(url)).json();

//   const imagens = await response;

//   console.log(imagens.message);

//   return imagens.message;
// }
// buscarImagens("beagle");
