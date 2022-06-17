console.log("Ejercicio 7")

var word = "rayar";

if (word == word.split("").reverse().join("")) {
    console.log("Esta palabra se escribe igual al derecho y al revés");
}
else {
    console.log("No se escribe igual al derecho y al revés");
}