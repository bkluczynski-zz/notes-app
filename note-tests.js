function testTextIsBeingTakenOfNoteUponInstantiation(){
  var note = new Note('Hello');
  if (note.txt === undefined ){
    throw new Error('There is no text in the note');
  }
};
testTextIsBeingTakenOfNoteUponInstantiation();


function testTextIsReturnedWhenCallingGetTxt(){
  var note = new Note('Hello');
  if (note.getTxt() !== 'Hello' ){
    throw new Error('Text has not been returnd');
  }
};
testTextIsReturnedWhenCallingGetTxt();
