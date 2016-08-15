function testStoresAllNotesInAnArray(){
var listOfNotes = new ListOfNotes();

if(listOfNotes.notes === undefined ){
  throw new Error('There is no such thing as an array for your notes! Go make one!')
}
};

testStoresAllNotesInAnArray();
