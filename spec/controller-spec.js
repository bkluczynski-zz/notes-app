(function notesHaveIds(){
  resetAllIds();
  var note = new Note('Yo!');
  console.log("notesHaveIds");
  assert.isTrue(note.id === note.getId());
})();
