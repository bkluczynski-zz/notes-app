(function noteListViewInstantiatedWithNoteList(){
  resetAllIds();
  var note = new Note('hello');
  var note_list = new NoteList();
  note_list.pushNote(note);
  var note_list_view = new NoteListView(note_list);
  console.log("noteListViewInstantiatedWithNoteList");
  assert.isTrue(note_list_view.viewNotes() === "<ul><li><div><a href='#0'>hello</a></div></li></ul>")
})(this);


(function listShowsOnly20CharsOfNote(){
  resetAllIds();
  var note = new Note("Please remind me that i have to buy a gallon of milk tomorrow");
  var note_list = new NoteList();
  note_list.pushNote(note);
  var note_list_view = new NoteListView(note_list);
  console.log("listShowsOnly20CharsOfNote");
  assert.isTrue(note_list_view.viewNotes() === "<ul><li><div><a href='#0'>Please remind me tha</a></div></li></ul>");

})(this);
