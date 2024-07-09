const botonIngreso = document.querySelector("#ingresar-datos");

botonIngreso.onclick = function () {
  const primerNombreUsuario = (document.querySelector("#primerNombre").value);
  const segundoNombreUsuario = (document.querySelector("#segundoNombre").value);
  const apellidoNombreUsuario = (document.querySelector("#apellido").value);
  const edadUsuario = Number(document.querySelector("#edad").value);
  let resultado = primerNombreUsuario + " " + segundoNombreUsuario + " " + apellidoNombreUsuario + " " + edadUsuario; 
  document.querySelector("#datos-ingresados").value = resultado;
  document.querySelector("#titulo").innerText = "Bienvenido," + " " + primerNombreUsuario + "!";
  return false;
}