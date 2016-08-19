(function noteListViewInstantiatedWithNoteList(){
  resetAllIds();
  var note = new Note("hello");
  var note_list = new NoteList();
  note_list.pushNote(note);
  var note_list_view = new NoteListView(note_list);
  console.log(note_list_view.turnInHtml());
  assert.isTrue(note_list_view.turnInHtml() === '<ul><li><a href="#0"><div>hello</div></a></li></ul>');

})(this);


(function listShowsOnly20CharsOfNote(){
  resetAllIds();
  var note = new Note("Please remind me that i have to buy a gallon of milk tomorrow");
  var note_list = new NoteList();
  note_list.pushNote(note);
  var note_list_view = new NoteListView(note_list);
  console.log(note_list_view.turnInHtml());
  assert.isTrue(note_list_view.turnInHtml() === '<ul><li><a href="#0"><div>Please remind me tha</div></a></li></ul>');

})(this);
