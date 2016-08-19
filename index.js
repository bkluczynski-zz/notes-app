var notelist, noteview, controller;

notelist = new NoteList();
notelist.createNote("my note number 1");
notelist.createNote("my note number 2");
notelist.createNote("my note number 3");
notelist.createNote("my note number 4");
notelist.createNote("this is a very long note");
noteview = new NoteListView(notelist);
controller = new NoteController(noteview);
controller.updateHTML();

function showNoteForCurrentPage(){
  // debugger;
  controller.showNote(controller.getNoteFromUrl(window.location));
};
window.addEventListener("hashchange", showNoteForCurrentPage);
