(function(exports) {

  var id_counter = 0;
  function Note(string) {
    this.id = id_counter++;
    this.text = string;

  }

  Note.prototype.getText = function () {
    return(this.text);
  };

  Note.prototype.getId = function () {
    return(this.id);
  };

  Note.prototype.resetIds = function() {
    id_counter = 0;

  };

  exports.Note = Note;

})(this);
