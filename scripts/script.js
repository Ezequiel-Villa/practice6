// Escuchar el evento "DOMContentLoaded" para asegurarse de que el DOM esté completamente cargado antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", function() {

    // Obtener referencias a los elementos del DOM:
    // - noteForm: El formulario para agregar notas.
    // - notesList: El contenedor donde se mostrarán las notas.
    const noteForm = document.getElementById("noteForm");
    const notesList = document.getElementById("notesList");

    // Escuchar el evento "submit" del formulario para agregar una nueva nota.
    noteForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de la manera tradicional (recargando la página).

        // Obtener los valores del título y el contenido ingresados por el usuario.
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Validar que ambos campos (título y contenido) estén llenos.
        if (title && content) {
            // Crear un objeto "note" con el título y el contenido.
            const note = { title, content };

            // Guardar la nota (función "saveNotes" no está definida en este fragmento, pero probablemente guarda en localStorage).
            saveNotes(note);

            // Mostrar las notas actualizadas en la interfaz.
            displayNotes();

            // Limpiar el formulario después de agregar la nota.
            noteForm.reset();
        } else {
            // Mostrar una alerta si el usuario no ha llenado ambos campos.
            alert("Please fill in both title and content.");
        }
    });

    // Función para mostrar las notas en la interfaz.
    function displayNotes() {
        // Obtener las notas guardadas (función "getNotes" no está definida aquí, pero probablemente las obtiene de localStorage).
        const notes = getNotes();

        // Limpiar el contenido actual de la lista de notas para evitar duplicados.
        notesList.innerHTML = "";

        // Iterar sobre cada nota y crear un elemento HTML para mostrarla.
        notes.forEach((note, index) => {
            // Crear un nuevo elemento "div" para la nota.
            const noteElement = document.createElement("div");

            // Agregar la clase "note" al elemento para aplicar estilos CSS.
            noteElement.classList.add("note");

            // Crear el contenido HTML de la nota, incluyendo el título, el contenido y un botón para eliminar.
            noteElement.innerHTML = `
                <h3>${note.title}</h3> <!-- Mostrar el título de la nota -->
                <p>${note.content}</p> <!-- Mostrar el contenido de la nota -->
                <button onclick="deleteNote(${index})">Delete</button> <!-- Botón para eliminar la nota -->
            `;

            // Agregar la nota al contenedor de notas en la interfaz.
            notesList.appendChild(noteElement);
        });
    }

    // Función global para eliminar una nota.
    window.deleteNote = function(index) {
        // Obtener las notas guardadas.
        const notes = getNotes();

        // Eliminar la nota en la posición "index" del array.
        notes.splice(index, 1);

        // Actualizar las notas en el localStorage.
        localStorage.setItem("notes", JSON.stringify(notes));

        // Mostrar las notas actualizadas en la interfaz.
        displayNotes();
    };

    // Mostrar las notas al cargar la página por primera vez.
    displayNotes();
});