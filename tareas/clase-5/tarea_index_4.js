const listaNumeros = document.querySelectorAll("#listaNumeros li");
const numeros = Array.from(listaNumeros).map(item => parseInt(item.textContent));

const promedio = numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
document.getElementById('resultadoPromedio').textContent = `El promedio es ${promedio}`;

const pequeno = Math.min(...numeros);
document.getElementById('resultadoPequeno').textContent = `El número más pequeño es ${pequeno}`;

const mayor = Math.max(...numeros);
document.getElementById('resultadoGrande').textContent = `El número más grande es ${mayor}`;

const encontrarFrecuente = numeros.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
const masFrecuente = Object.keys(encontrarFrecuente).reduce((a, b) => encontrarFrecuente[a] > encontrarFrecuente[b] ? a : b);
document.getElementById('resultadoFrecuente').textContent = `El número más frecuente es ${masFrecuente}`;