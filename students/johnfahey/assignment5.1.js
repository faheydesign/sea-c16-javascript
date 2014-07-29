// Given the following data structure
// implement a oldestLivingParent method
// that will return the name of the oldest
// living parent.

var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  }
];


function oldestLivingParent(peeps){
  var living = [];
  for(var i = 0; i < peeps.length; i++){
    if (peeps[i].age){
      for(var j = 0; j < peeps.length; j++){
        if ( peeps[i].name == peeps[j].parent){
          return peeps[i].name;
        }
      }
    }
  }
}


oldestLivingParent(people);
// -> 'Don'
