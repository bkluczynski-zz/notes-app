(function(exports){
  var SingleNoteView = function(note){
    this.note = note;
  };

  SingleNoteView.prototype.displayNote = function () {
    return "<div>" + this.note.getText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
