function testTextIsBeingTakenOfNoteUponInstantiation(){
  var note = new Notes('Hello');
  if (note.txt === undefined ){
    throw new Error('There is no text in the note');
  }
};
testTextIsBeingTakenOfNoteUponInstantiation();


function testTextIsReturnedWhenCallingGetTxt(){
  var note = new Notes('Hello');
  if (note.getTxt() !== 'Hello' ){
    throw new Error('Text has not been returnd');
  }
};
testTextIsReturnedWhenCallingGetTxt();

function testStoresAllNotesInAnArray(){
var note = new Notes('Hello');
var note1 = new Notes('Bye');
var note2 = new Notes('Good morning');

if(note.notesArray === undefined ){
  throw new Error('There is no such thing as an array for your notes! Go make one!')
}  
};
