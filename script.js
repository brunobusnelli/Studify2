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
// ========================================
// FILTRO DE APUNTES
// ========================================

const filtroMateria = document.querySelector("#filtro-materia");
const apuntes = document.querySelectorAll(".apunte-card");
const contadorApuntes = document.querySelector("#contador-apuntes");
const mensajeSinResultados = document.querySelector("#sin-resultados");

filtroMateria.addEventListener("change", () => {

    const materiaSeleccionada = filtroMateria.value;
    let cantidadVisible = 0;

    apuntes.forEach((apunte) => {

        const materiaApunte = apunte.dataset.materia;

        if (
            materiaSeleccionada === "todos" ||
            materiaSeleccionada === materiaApunte
        ) {
            apunte.classList.remove("d-none");
            cantidadVisible++;
        } else {
            apunte.classList.add("d-none");
        }

    });

    contadorApuntes.textContent =
        `${cantidadVisible} apuntes encontrados`;

  if (cantidadVisible === 0) {
    mensajeSinResultados.classList.remove("d-none");
} else {
    mensajeSinResultados.classList.add("d-none");
}

});

// ========================================
// REGISTRO MANUAL DE SESIONES
// ========================================

const formSesion = document.querySelector("#form-sesion");
const sesionMateria = document.querySelector("#sesion-materia");
const sesionMinutos = document.querySelector("#sesion-minutos");
const sesionFecha = document.querySelector("#sesion-fecha");
const mensajeSesion = document.querySelector("#mensaje-sesion");

formSesion.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const materiaElegida = sesionMateria.value;
    const minutos = sesionMinutos.value;
    const fecha = sesionFecha.value;

    mensajeSesion.textContent =
        `Sesión guardada: ${materiaElegida} - ${minutos} minutos`;

    if (fecha !== "") {
        mensajeSesion.textContent += ` - ${fecha}`;
    }

    mensajeSesion.classList.remove("d-none");

});
// ========================================
// NAVEGACION ACTIVA
// ========================================

/* ========================================
   NAVEGACION ACTIVA SEGUN LA SECCION
   ======================================== */

const enlacesMenu = document.querySelectorAll(".nav-link");

const seccionesMenu = Array.from(enlacesMenu)
  .map((enlace) => {
    const destino = enlace.getAttribute("href");

    if (!destino || !destino.startsWith("#")) {
      return null;
    }

    return document.querySelector(destino);
  })
  .filter(Boolean);


function activarEnlace(idSeccion) {

  enlacesMenu.forEach((enlace) => {

    enlace.classList.remove("active");

    if (enlace.getAttribute("href") === `#${idSeccion}`) {
      enlace.classList.add("active");
    }

  });

}


const observadorSecciones = new IntersectionObserver(
  (entradas) => {

    const seccionesVisibles = entradas
      .filter((entrada) => entrada.isIntersecting)
      .sort(
        (a, b) =>
          b.intersectionRatio - a.intersectionRatio
      );

    if (seccionesVisibles.length > 0) {

      const seccionActual =
        seccionesVisibles[0].target.id;

      activarEnlace(seccionActual);

    }

  },
  {
    rootMargin: "-25% 0px -55% 0px",
    threshold: [
      0,
      0.1,
      0.25,
      0.5
    ]
  }
);


seccionesMenu.forEach((seccion) => {
  observadorSecciones.observe(seccion);
});
});