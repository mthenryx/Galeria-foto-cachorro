"use strict"

async function getUrlFotos(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()
    return data.message
}

function criarFoto(urlFoto){
    const foto = document.createElement("img")
    foto.src = urlFoto
    foto.className = "foto"
    return foto
}

async function preencherGaleria(){
    const galeria = document.getElementById("container-galeria")
    const raca = document.getElementById("raca").value
    const urlFotos = await getUrlFotos(raca)

    const fotos = urlFotos.map(criarFoto)
    galeria.replaceChildren(...fotos)
}

document.getElementById("pesquisar").addEventListener("click", preencherGaleria)