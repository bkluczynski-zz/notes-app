function testTextIsBeingTakenOfNoteUponInstantiation(){
  var note = new Notes();
  if (note.text === undefined ){
    throw new Error('There is no text in the note');
  }
};
testTextIsBeingTakenOfNoteUponInstantiation();
