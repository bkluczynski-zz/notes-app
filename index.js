
var notelist,noteview,notecontroller;
notelist = new NoteList();
noteview = new NoteListView(notelist);
notecontroller = new NoteController(noteview);
notelist.createNote("first note");
notelist.createNote("second note");
notelist.createNote("third note");
notelist.createNote("this is the fourth and final note, and there is a lot more to this note");
notecontroller.updateHTML();

function showNoteForCurrentPage(){
  notecontroller.showNote(notecontroller.getNoteFromUrl(window.location));
}
window.addEventListener("hashchange", showNoteForCurrentPage);
