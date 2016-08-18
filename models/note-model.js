(function(exports) {

  id_counter = -1;
  function Note(string) {
    this.text = string;
    id_counter += 1;
    this.id = id_counter;
  }

  Note.prototype.getText = function () {
    return(this.text);
  };

  Note.prototype.getId = function () {
    return(this.id);
  };

  Note.prototype.resetIds = function() {
    id_counter = -1;

  };


  exports.Note = Note;

})(this);
