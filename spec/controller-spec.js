
(function displayingNotesAsHtml(){
resetAllIds();
  var list = new NoteList();
  list.createNote('whatever');
  var controller = new NoteController(list);
  var element = document.createElement('div');
  element.id = 'app';
  document.getElementById = function(){
    return element;
  }

  assert.isTrue(document.getElementById('app').innerHTML == '<ul><li><div><a href="#0">whatever</a></div></li></ul>')

})(this);

function testNoteController() {
  console.log('Test Note Controller');
  var newList = new NoteList();
  newList.createNote("winter is coming");
  newList.createNote("hear me roar");
  var newView = new NoteListView(newList);
  var noteController = new NoteController(newView);
  assert.isTrue(noteController._view === newView);
  var element = document.createElement("div", {id: "app"});
  noteController._getAppDiv = function() {
    return element;
  };
  noteController.updateHTML();
  assert.isTrue(noteController._getAppDiv().innerHTML === newView.turnInHtml());
}

function testDisplaySingleNoteOnClick() {
  console.log("Test Display Single Note on Click");
  var note;
  var noteList;
  var noteController;
  var view;

  list = new NoteList();
  list.createNote('This is just a test');
  view = new NoteListView(list);

  note = new SingleNoteView(list.getNotes()[0]);

  var appDiv = document.createElement('div', {id: 'app'});
  document.getElementById = function() {
    return appDiv;
  };

  noteController = new NoteController(view);
  noteController.updateHTML();
  function showNoteForCurrentPage(){
    noteController.showNote(noteController.getNoteFromUrl(window.location));
  }
  window.addEventListener("hashchange", showNoteForCurrentPage);

  appDiv.getElementsByTagName('a')[0].click();

  window.setTimeout(function(){
    var htmlOutput = "<ul><li><a href=\"#" + list.viewNotes()[0].noteID + "\">" + note.singleNoteHtml() + "</a></li></ul>";
    var element = appDiv;

    console.log("expected: ",  htmlOutput);
    console.log("got: ", element.innerHTML);

    assert.isTrue(htmlOutput === element.innerHTML);
    document.getElementById = document.__proto__.getElementById;
  }, 500);

}

testNoteController();
testDisplaySingleNoteOnClick();
