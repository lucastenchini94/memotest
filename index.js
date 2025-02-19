const colores = ["rojo", "rojo", "amarillo", "amarillo", "verde", "verde", "negro", "negro", "blanco", "blanco"];
const $cuadros = document.querySelectorAll(".cuadro");
const $tablero = document.querySelector(".container")
function configurarJuego() {
    ordenarCuadrosAleat($cuadros, colores)
}
function ordenarCuadrosAleat ($cuadros, colores){
    const coloresAleatorios = colores.sort(function(){
        return 0.5 - Math.random();
    })
    console.log(coloresAleatorios);
    
    //coloresAleatorios.forEach(function(color, i){
    //    $cuadros[i].classList.add(color);
    //});

    for (let i = 0; i < $cuadros.length; i++) {
        $cuadros[i].classList.add(coloresAleatorios[i]);
        
    }
}
