"use strict";

const elemento = {
  input: document.querySelector("input"),
  botao: document.querySelector("button"),
  container: document.querySelector("#container"),
};

let listaRacas;

async function buscarImagens(raca) {
  const url = `https://dog.ceo/api/breed/${raca}/images`;

  const response = (await fetch(url)).json();

  const imagens = await response;

  // return imagens.message;
  return criarElementoIMG(imagens.message);
}

elemento.botao.addEventListener("click", function (evento) {
  evento.preventDefault();
  elemento.container.replaceChildren();
  buscarImagens(elemento.input.value);
});

function criarElementoIMG(imagens) {
  imagens.forEach((item) => {
    const img = document.createElement("img");
    img.src = item;
    elemento.container.appendChild(img);
  });
}
