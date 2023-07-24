function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar1.png")
    img.setAttribute(
      "alt",
      "Foto de Matheus Garcia, usando camisa branca e o cabelo longo, com fundo em sua casa."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar1.png")
    img.setAttribute(
      "alt",
      "Foto de Matheus Garcia, usando camisa branca e o cabelo longo, com fundo em sua casa."
    )
  }
}
