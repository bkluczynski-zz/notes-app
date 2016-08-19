(function(exports){
  function isTrue(assertionToCheck){
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy!");
    } else {
      console.log("Assertion passed: " + assertionToCheck + " GREAT SUCCESS!");
    }
  };

  // exports.isTrue = isTrue;
  exports.assert = {isTrue: isTrue};
})(this);
