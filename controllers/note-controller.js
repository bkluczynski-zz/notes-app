
(function(exports) {

  function NoteController(view) {
    this._view = view;
  }

  NoteController.prototype._getAppDiv = function() {
    return document.getElementById("app");
  };

  NoteController.prototype.updateHTML = function() {
    this._getAppDiv().innerHTML = this._view.turnInHtml();
  };

  NoteController.prototype.getNoteFromUrl = function(location){
    return location.hash.split('#')[1];
  };

  NoteController.prototype.showNote = function(id){
    var singleView = new SingleNoteView(this._view.note_list.notes[id]);
    document
      .getElementById("notes")
      .innerHTML = singleView.singleNoteHtml();
  };


  exports.NoteController = NoteController;
})(this);
