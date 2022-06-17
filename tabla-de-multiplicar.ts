// Tabla de multiplicar //
console.log("Ejercicio 1")
let multi = 10
console.log("Tabla de multiplicar del: " + multi)
for (let i = 1; i <= 10; i++) {
  console.log(multi + "x" + i + "=" + multi * i);
}

console.log("")


// Sumar todos los elementos de un arreglo de números //
console.log("Ejercicio 2")
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var suma = 0
for (var i = 0; i < array.length; i++) {
  suma += array[i];
}
console.log("la suma total del arreglo es de: " + suma);