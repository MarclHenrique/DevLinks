function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //}

  // Pegar a tag img
  const img = document.querySelector("  #profile img")

  //Substituir a imagem

  if (html.classList.contains("light")) {
    //Se tiver light mode

    img.setAttribute("src", "./assets/foto_darkn.png")
  } else {
    //Se tiver sem light mode

    img.setAttribute("src", "./assets/foto_lightnn.png")
  }
}
