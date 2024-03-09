document.getElementById("verificar").addEventListener("click", () => {
  const n1 = Number(document.getElementById("cont1").value);
  const n2 = Number(document.getElementById("cont2").value);
  const n3 = Number(document.getElementById("cont3").value);
  const total = n1 + n2 + n3;
  const resultado = document.getElementById("resultado");

  if (total <= 10) {
    resultado.innerHTML = "Llevas " + total + " de stickers";
  } else {
    resultado.innerHTML = "Llevas demasiados stickers";
  }
});
