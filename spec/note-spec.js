

(function testNoteCanStoreText() {
  resetAllIds();
  var note_instance = new Note("My favourite language is JavaScript");
  console.log("testNoteCanStoreText");
  assert.isTrue(note_instance.text === "My favourite language is JavaScript");
})(this);

(function testNoteCanDisplayText() {
  resetAllIds();
  var note_instance = new Note("My favourite language is JavaScript");
  console.log("testNoteCanDisplayText");
  assert.isTrue(note_instance.getText() === "My favourite language is JavaScript");
})(this);

(function notesHaveIds(){
  resetAllIds();
  var note = new Note('Yo!');
  console.log("notesHaveIds");
  assert.isTrue(note.id === note.getId());
})(this);


(function resetsNoteId(){
  resetAllIds();
  var note = new Note("txt");
  note.resetIds();
  var note2 = new Note("something else");
  console.log("resetsNoteId");
  assert.isTrue(note2.getId() === 0);

})(this);
