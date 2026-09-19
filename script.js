document.addEventListener("DOMContentLoaded", () => {

    // Elementos del Pomodoro
    const tiempoPantalla = document.querySelector("#pomodoro-tiempo");
    const estadoPantalla = document.querySelector("#pomodoro-estado");
    const materia = document.querySelector("#pomodoro-materia");

    const botonIniciar = document.querySelector("#pomodoro-iniciar");
    const botonPausar = document.querySelector("#pomodoro-pausar");
    const botonReiniciar = document.querySelector("#pomodoro-reiniciar");

    // 25 minutos expresados en segundos
    const tiempoInicial = 25 * 60;

    let tiempoRestante = tiempoInicial;
    let intervalo = null;


    // Muestra el tiempo con formato MM:SS
    function actualizarPantalla() {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;

        const minutosFormateados = String(minutos).padStart(2, "0");
        const segundosFormateados = String(segundos).padStart(2, "0");

        tiempoPantalla.textContent =
            `${minutosFormateados}:${segundosFormateados}`;
    }


    // Iniciar temporizador
    botonIniciar.addEventListener("click", () => {

        // Evita crear más de un intervalo
        if (intervalo !== null) {
            return;
        }

        estadoPantalla.textContent =
            `Estudiando ${materia.value}`;

        intervalo = setInterval(() => {

            tiempoRestante--;

            actualizarPantalla();

            if (tiempoRestante <= 0) {
                clearInterval(intervalo);
                intervalo = null;

                estadoPantalla.textContent =
                    `¡Sesión de ${materia.value} completada!`;
            }

        }, 1000);
    });


    // Pausar temporizador
    botonPausar.addEventListener("click", () => {

        clearInterval(intervalo);
        intervalo = null;

        estadoPantalla.textContent = "Sesión pausada";
    });


    // Reiniciar temporizador
    botonReiniciar.addEventListener("click", () => {

        clearInterval(intervalo);
        intervalo = null;

        tiempoRestante = tiempoInicial;

        actualizarPantalla();

        estadoPantalla.textContent =
            "Listo para comenzar";
    });


    // Mostrar tiempo inicial
    actualizarPantalla();

});