function NoteListView(list) {
  this.list = list;
};

NoteListView.prototype.getView = function() {
  var arr = [];
  var str;
  var htmlString;
  this.list.notes.forEach(function(note){
    arr.push('<li><div>'+note.getTxt()+'</li></div>')
  });
  str = arr.join(' ');
  htmlString = ('<ul>' + str + '</ul>');
  return htmlString;
};
