var min = prompt("min","");
var max = prompt("max","");

min = +min;
max = +max;

rand = +(min + Math.random() * (max - min));


alert( rand.toFixed(0) );