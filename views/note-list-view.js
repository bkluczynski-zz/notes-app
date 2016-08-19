
(function(exports){
  function NoteListView(list){
    this.note_list = list;
  }

  NoteListView.prototype.getNoteList = function () {
    return this.note_list
  };

  NoteListView.prototype.turnInHtml = function(){
    var html_string = "<ul>" + this.viewNotes(this.note_list) + "</ul>";
    return html_string;
  };

  NoteListView.prototype.viewNotes = function (somelist) {
    var notes_array = [];
    somelist.getNotes().forEach(function(note){

      notes_array.push("<li><a href=\"#" + note.id + "\"><div>" + note.text.substr(0,20) + "</div></a></li>");
    
  });
  return notes_array.join("");
};
  exports.NoteListView = NoteListView;

})(this);
