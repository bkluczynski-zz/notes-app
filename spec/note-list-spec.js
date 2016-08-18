(function listHasNotes() {
  resetAllIds();
  var note = new Note("tester");
  var note_list = new NoteList();
  note_list.pushNote(note);
  console.log("listHasNotes");
  assert.isTrue(note_list.notes.includes(note));
})(this);

(function canGetNotes(){
  resetAllIds();
  var note = new Note("hello");
  var note_list = new NoteList();
  note_list.pushNote(note);
  console.log("canGetNotes");
  assert.isTrue(note_list.getNotes()[0] === note);
})(this);

(function canCreateNote(){
  resetAllIds();
  var note_list = new NoteList();
  note_list.createNote("Text");
  var note_element = note_list.notes[0];
  console.log("canCreateNotes");
  assert.isTrue(note_element.text === "Text");
})(this);
