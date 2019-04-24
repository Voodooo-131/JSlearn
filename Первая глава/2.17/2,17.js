var a = prompt("a =","");
var b = prompt("b =","");
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
alert(min(a, b));