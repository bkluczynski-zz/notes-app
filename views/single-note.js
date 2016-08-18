(function(exports){
  function SingleNoteView(note){
    this.note = note;
  };

  SingleNoteView.prototype.displayNote = function () {
    return "<div>" + this.note.getText() + "</div>";
  };


  exports.SingleNoteView = SingleNoteView;
})(this);


var note = new Note('note');
var new_view = new SingleNoteView(note);
