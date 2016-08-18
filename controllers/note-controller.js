(function(exports){

function NoteController(view){
  this.view = view;
};

NoteController.prototype.getAppDiv = function(){
  return document.getElementById("app");
};

NoteController.prototype.updateHTML = function(){
  this.getAppDiv().innerHTML = this.view.turnInHtml();
};

NoteController.prototype.getNoteFromUrl = function(location) {
  return location.hash.split("#")[1];
};


NoteController.prototype.showNote = function(id) {
  console.log(this.view);
  console.log(this.view.note_list);
  console.log(this.view.note_list.notes[id]);
  var singleNoteView = new SingleNoteView(this.view.note_list.notes[id]);

  document.getElementById("app").innerHTML = singleNoteView.displayNote();
};

exports.NoteController = NoteController;

})(this);
