"use strict";

async function buscarImagens(raca) {
  //
  //

  const url = `https://dog.ceo/api/breed/${raca}/images`;

  const response = (await fetch(url)).json();

  const imagens = await response;

  console.log(imagens.message);

  return imagens.message;
}
buscarImagens("beagle");
