'use strict';

var stuff = ['pencil', 'fish', 'popcorn', 'comb', 'box'];
var answer = prompt('what is one of my fav things?');
var flag;

for (var i=0; i < stuff.length; i++) {
  console.log('current thing:', stuff[i]);

  if (answer === stuff[i]) {
    alert('nice job!  you know what my fav thing is!');
    flag = true;
    break;
  }
}

if (!flag) {
  alert('nope - you are wrong!');
}
