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
]


function oldestLivingParent(test){
  // console.log( Math.max.apply( Math, test) ); //find the largest amount in an array
  for(var i = 0; i < test.length; i++){
    console.log(test[i]);
  }
}

oldestLivingParent(people);
// -> 'Don'



