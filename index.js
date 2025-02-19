const colores = ["rojo", "rojo", "amarillo", "amarillo", "verde", "verde", "negro", "negro", "blanco", "blanco"];
const $cuadros = document.querySelectorAll(".cuadro");
const $tablero = document.querySelector(".container")
let $primerCuadro = null;
function configurarJuego() {
    ordenarCuadrosAleat($cuadros, colores)
    manejarEvento()
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
function manejarEvento(){
    $tablero.onclick = function(e){
        const $elemento = e.target;
        if($elemento.classList.contains("cuadro")){
            mostrarCuadro($elemento);
            if ($primerCuadro === null){
                $primerCuadro = $elemento;
            } else {
                if($primerCuadro === $elemento){
                    return;
                }

                if(cuadrosSonIguales($primerCuadro, $elemento)){
                    eliminarCuadro($primerCuadro)
                    eliminarCuadro($elemento)
                } else {
                    ocultarCuadro($primerCuadro);
                    ocultarCuadro($elemento);
                }
                $primerCuadro = null;
            }
            ocultarCuadro($elemento);
        }
    }
}


function mostrarCuadro($cuadro) {
    $cuadro.style.opacity = 1;
  }
  
  function ocultarCuadro($cuadro) {
function ocultarCuadro($cuadro) {
    setTimeout(function() {
      $cuadro.style.opacity = 0;
    }, 500);
  
}
function cuadrosSonIguales($cuadro1, $cuadro2) {
    return $cuadro1.className === $cuadro2.className;
}
function eliminarCuadro($cuadro) {
    setTimeout(function() {
      $cuadro.parentElement.classList.add('completo');
      $cuadro.remove();
    }, 500);
  }
configurarJuego();
