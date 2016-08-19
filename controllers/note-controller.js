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

  var singleNoteView = new SingleNoteView(this.view.note_list.notes.getNoteById(id));

  document.getElementById("app").innerHTML = singleNoteView.displayNote();
};

exports.NoteController = NoteController;

})(this);
