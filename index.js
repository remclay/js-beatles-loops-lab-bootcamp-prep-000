var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments){
  var theBeatlesPlay = [];
  for (var i = 0; i <= 3; i++){
    theBeatlesPlay.push(musicians[i] + " plays " + instruments[i]);
  } return theBeatlesPlay;
}

function johnLennonFacts (array){
  var johnLennonFacts = [];
  var i = 0;
  while (i <= 3) {
    johnLennonFacts.push(array[i] + "!!!");
    i++;
  } return johnLennonFacts;
}

function iLoveTheBeatles (i){
  var iLoveTheBeatles = [];
  do {
    iLoveTheBeatles.push("I love the Beatles!");
    i++;
  } while (i < 15);
return iLoveTheBeatles
}
