var min = prompt("min","");
var max = prompt("max","");

min = +min;
max = +max;

alert( min + Math.random() * (max - min) );