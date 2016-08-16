function testANoteListModleIsBeingTakenOfUponInstantiation(){
  var list           = new ListOfNotes();
  var listToBeViewed = new NoteListView(list);
  if (listToBeViewed.list === undefined ){
    throw new Error('There is no list to view');
  }
};
testANoteListModleIsBeingTakenOfUponInstantiation();


function testAnHtmlStringIsReturnedWhenCallingGetView(){
  var list           = new ListOfNotes();
  list.createNote('Hey');
  list.createNote('Helloe');
  var listToBeViewed = new NoteListView(list);
  var htmlString;
  htmlString = "<ul><li><div>Hey<li><div> <li><div>Helloe<li><div></ul>"
  if (listToBeViewed.getView() !== htmlString){
    throw new Error('There is no list to view');
  }
};
testAnHtmlStringIsReturnedWhenCallingGetView();
