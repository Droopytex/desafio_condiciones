const resultado = document.getElementById("resultado");

const verificar = document.getElementById("ingresar");

verificar.addEventListener("click", function (e) {
  const cant1 = document.getElementById("digito1").value;
  const cant2 = document.getElementById("digito2").value;
  const cant3 = document.getElementById("digito3").value;

  if (cant1 == 9 && cant2 == 1 && cant3 == 1) {
    resultado.innerHTML = "Pasword 1 correcto";
  } else if (cant1 == 7 && cant2 == 1 && cant3 == 4) {
    resultado.innerHTML = "Pasword 2 correcto";
  } else {
    resultado.innerHTML = "Password incorrecto";
  }
});
