(function(exports){
  function NoteListView(note_list){
    this.note_list = note_list;
  }

  NoteListView.prototype.getNoteList = function () {
    return this.note_list
  };

  NoteListView.prototype.viewNotes = function () {
    var notes_array = this.getNoteList().getNotes()
    var html_string = "<ul>"
    notes_array.forEach(function(note){
      html_string += ("<li><div>" + "<a href='#" + note.getId() + "'>" +    (note.text).substr(0,20) + "</a></div></li>")
    });
    html_string += "</ul>"
    return html_string;
  };

  exports.NoteListView = NoteListView;

})(this);
