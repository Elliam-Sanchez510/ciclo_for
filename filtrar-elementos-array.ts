// Filtrar los elementos de un arreglo de números //
console.log("Ejercicio 3")

let numeros = [1, 2, 3, 4, 5, 6]
let parametro = numeros.filter(element => element > 3)

console.log("Arreglo original: ", numeros)
console.log("Arreglo despues del filtrado: ", parametro)

console.log("")

// Filtrar los elementos de un arreglo de números cuyo valor sean menor que el numero recibido //
console.log("Ejercicio 4")

let numer = [1, 2, 3, 4, 5, 6]
let parameter = numer.filter(element => element < 4)

console.log("Arreglo original: ", numer)
console.log("Arreglo despues del filtrado: ", parameter)