// Parmar Anandkumar K
// B12021
// CSE, 4th year

var b = require('bonescript');

var state = b.LOW;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("P9_12", b.OUTPUT);
b.pinMode("P9_13", b.OUTPUT);
b.pinMode("P9_16", b.INPUT);

setInterval(check, 100);

function check(){
    b.digitalRead("P9_16",checkButton);
}

function checkButton(x) {
  if(x.value == 1){
    b.digitalWrite("P9_12", b.HIGH);
    b.digitalWrite("P9_13", b.LOW);
  }
  else {
    b.digitalWrite("P9_12", b.LOW);
    b.digitalWrite("P9_13", b.HIGH);
  }
}