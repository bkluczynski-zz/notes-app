(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.pushNote = function (note) {
    this.notes.push(note);
  };

  NoteList.prototype.createNote = function (text) {
    this.notes.push(new Note(text));
  };

  NoteList.prototype.getNotes = function () {
    return this.notes;
  };

  NoteList.prototype.getNoteById = function(id){
      var searchedNote;
      this.notes.forEach(function(note){
        if (note.id === id){
          searchedNote = note;
        }
      });
      return searchedNote;
    };

  exports.NoteList = NoteList;
})(this);
