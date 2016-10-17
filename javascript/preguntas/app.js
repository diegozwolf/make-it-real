var puntaje = 0;

var preguntas = [
{ n1: 1, n2: 1 },
{ n1: 2, n2: 3 }, 
{ n1: 3, n2: 4 }
];

for (var i=0; i < preguntas.length; i++) {
    var pregunta = preguntas[i];
    var respuesta = prompt("Cuanto es " + pregunta.n1 + "+" + pregunta.n2 + "?");
    if (respuesta == pregunta.n1 + pregunta.n2) {
        puntaje++;
        alert("Muy bien, tu puntaje es: " + puntaje);
    }
        else {
            alert("!Incorrecto¡");
        }    
}

alert("Tu puntaje final es: " + puntaje);