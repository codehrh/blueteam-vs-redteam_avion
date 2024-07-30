function blueOrRed() {
  var people = 58;

  for (i = 1; i <= people; i++){
      if (i % 2 == 0){
          //console.log('Person ' + i + ' is on the Red team.');
        console.log('red team');
      } else {
          //console.log('Person ' + i + ' is on the Blue team.');
        console.log('blue team');
      }
  }
}

blueOrRed();

module.exports = {
  blueOrRed,
};