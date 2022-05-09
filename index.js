window.onload = function () {
    
    
    
    let quien = [' Mi suegra ', ' Mi perro ', ' El gato ', ' El carro ', ' El cajero ', ' El mecánico '];
    let hizo = [' se perdio', ' se accidentó ', ' se enfermó ', ' se le olvidó ', ' no tiene dinero ', ' rompio el forro de la silla '];
    let donde = [' en la montaña ', ' en la reunion ', ' en la autopista ', ' en la playa ', ' en el trabajo ', ' en mi casa '];
    
    
    let excuse = quien[Math.floor(Math.random()*6)] + hizo[Math.floor(Math.random()*6)] + donde[Math.floor(Math.random()*6)];
    
document.querySelector("#excusa").innerHTML = excuse
}