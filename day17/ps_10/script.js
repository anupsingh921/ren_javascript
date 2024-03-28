document.addEventListener('DOMContentLoaded', function() {
  const noteInput = document.getElementById('noteInput');
  const saveButton = document.getElementById('saveButton');
  const fetchButton = document.getElementById('fetchButton');
  const deleteButton = document.getElementById('deleteButton');
  const noteOutput = document.getElementById('noteOutput');

  saveButton.addEventListener('click', saveNote);
  fetchButton.addEventListener('click', fetchNote);
  deleteButton.addEventListener('click', deleteNote);

  function saveNote() {
    const note = noteInput.value;
    localStorage.setItem('note', note);
    fetchNote();
  }

  const apiUrl = 'https://kontests.net/api/v1/all';

  function fetchNotesFromAPI() {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming the API response contains an array of notes
        const notes = data.notes;
        // Process the fetched notes as required, e.g., display them on the page
        displayNotes(notes);
      })
      .catch(error => console.error('Error fetching notes from API:', error.message));
  }

  function displayNotes(notes) {
    const noteOutput = document.getElementById('noteOutput');
    noteOutput.innerHTML = ''; // Clear existing notes
    if (notes.length > 0) {
      notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.textContent = note.content;
        noteOutput.appendChild(noteElement);
      });
    } else {
      noteOutput.textContent = 'No notes found.';
    }
  }

  // Call the fetchNotesFromAPI function when the page loads or as needed
  fetchNotesFromAPI();

  function fetchNote() {
    const note = localStorage.getItem('note');
    if (note) {
      noteOutput.textContent = note;
    } else {
      noteOutput.textContent = 'No note found';
    }
  }

  function deleteNote() {
    localStorage.removeItem('note');
    noteOutput.textContent = 'Note deleted';
  }

  // Fetch note on page load
  fetchNote();
});
