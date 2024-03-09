let bordeAgregado = false;
const img = document.getElementById("imagenConBorde");

img.addEventListener("click", () => {
  if (!bordeAgregado) {
    img.style.border = "solid red 2px";
    bordeAgregado = true;
  } else {
    img.style.border = "none";
    bordeAgregado = false;
  }
});
