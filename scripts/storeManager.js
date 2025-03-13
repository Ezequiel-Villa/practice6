// Funcion para guardar una nota en localStorage  
function saveNotes(note) {
    let notes = getNotes();  // Obtener las notas existentes
    notes.push(note); // Agregar la nueva nota al array
    localStorage.setItem("notes", JSON.stringify(notes)); // Guardar el array actualizado en localStorage
}

// Funcion para obtener las notas desde localStorage
function getNotes() {
    let notes = localStorage.getItem("notes"); // Obtenr las notas guardadas
    if (!notes) { // si hay notas devolverlas como un array, sino, devolver un array vacio
        return [];
    }
    return JSON.parse(notes);
} 
