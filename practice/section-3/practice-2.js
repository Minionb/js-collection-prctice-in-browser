'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let cloneCollectionA = collectionA.slice();
 
  cloneCollectionA.forEach((element1) => objectB.value.forEach((element2)=>
  {if(element1.key == element2)
  {
    element1["count"] = element1.count - (parseInt(element1.count/3));
  }
    
  }

   
  ));
  
  return cloneCollectionA;
}
const collectionA = [
  {key: 'a', count: 3},
  {key: 'e', count: 7},
  {key: 'h', count: 11},
  {key: 't', count: 20},
  {key: 'f', count: 9},
  {key: 'c', count: 8},
  {key: 'g', count: 7},
  {key: 'b', count: 6},
  {key: 'd', count: 5}
];

const objectB = {value: ['a', 'd', 'e', 'f']};



document.write(createUpdatedCollection(collectionA, objectB));