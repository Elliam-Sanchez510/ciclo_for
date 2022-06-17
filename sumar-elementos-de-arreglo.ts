console.log("Ejercicio 5")

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var suma = 0
for (var i = 0; i < array.length; i++) {
  suma += array[i];
}
console.log("arreglo normal", array)
console.log("Suma total del arreglo: ", suma);

let filtr = array.filter(element => element > 5)
console.log("Arreglo filtrado", filtr)

let variable = (suma + i++)
var sum = 0
for (var i = 0; i < filtr.length; i++)
  sum += filtr[i]
console.log("suma total del arreglo mas numeros filtrados: ", suma + sum);