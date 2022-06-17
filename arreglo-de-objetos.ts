console.log("Ejercicio 6")
var personas = [{ Name: 'Camilo', Sexo: 'M' }, { Name: 'Yuliana', Sexo: 'F' }]

var arregloNuevo = [];
for (var i = 0; i < personas.length; i++) {
    if (personas[i].Sexo == 'M') {
        arregloNuevo.push({ Name: 'Sr. ' + personas[i].Name })
    } else {
        arregloNuevo.push({ Name: 'Srta. ' + personas[i].Name });
    }
}
console.log("Estos son los nombres, con el sexo", personas)
console.log("Este es el nuevo arreglo", arregloNuevo)