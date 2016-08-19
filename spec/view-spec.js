(function canDisplayNotes(){
  resetAllIds();
  var note = new Note('happy dog');
  var note_view = new SingleNoteView(note);
  assert.isTrue(note_view.singleNoteHtml() === '<div>happy dog</div>');
})(this);
