var exclaim = require("./exclaim").exclaim;

if (exclaim("bye") !== "bye!!!!!") {
  throw new Error("Exclaiming hi should equal hi!!!!!");
} else {
  console.log(".");
}
