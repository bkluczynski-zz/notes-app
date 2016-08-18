(function canDisplayNotes(){
  resetAllIds();
  var note = new Note('happy dog');
  var note_view = new NoteView(note);
  assert.isTrue(note_view.displayNote() === '<div>happy dog</div>');
})(this);
