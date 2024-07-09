function calcularTiempoTotal() {
  let horas1 = parseInt(document.getElementById('horas1').value) || 0;
  let horas2 = parseInt(document.getElementById('horas2').value) || 0;
  let horas3 = parseInt(document.getElementById('horas3').value) || 0;
  let horas4 = parseInt(document.getElementById('horas4').value) || 0;
  let horas5 = parseInt(document.getElementById('horas5').value) || 0;
  let minutos1 = parseInt(document.getElementById('minutos1').value) || 0;
  let minutos2 = parseInt(document.getElementById('minutos2').value) || 0;
  let minutos3 = parseInt(document.getElementById('minutos3').value) || 0;
  let minutos4 = parseInt(document.getElementById('minutos4').value) || 0;
  let minutos5 = parseInt(document.getElementById('minutos5').value) || 0;
  let segundos1 = parseInt(document.getElementById('segundos1').value) || 0;
  let segundos2 = parseInt(document.getElementById('segundos2').value) || 0;
  let segundos3 = parseInt(document.getElementById('segundos3').value) || 0;
  let segundos4 = parseInt(document.getElementById('segundos4').value) || 0;
  let segundos5 = parseInt(document.getElementById('segundos5').value) || 0;

  let horasTotales = horas1 + horas2 + horas3 + horas4 + horas5;
  let minutosTotales = minutos1 + minutos2 + minutos3 + minutos4 + minutos5;
  let segundosTotales = segundos1 + segundos2 + segundos3 + segundos4 + segundos5;

  if (segundosTotales >= 60) {
    minutosTotales += Math.floor(segundosTotales / 60);
    segundosTotales = segundosTotales % 60;
  }

  if (minutosTotales >= 60) {
    horasTotales += Math.floor(minutosTotales / 60);
    minutosTotales = minutostotales % 60;
  }

  document.getElementById("resultado").innerText = "Tiempo total:" + horasTotales + ":" + minutosTotales + ":" + segundosTotales;
  return false;
}