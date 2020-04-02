'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let cloneCollectionA = collectionA.slice();
 
  cloneCollectionA.forEach((element1) => objectB.value.forEach((element2)=>
  {if(element1.key == element2)
  {
    
    element1["count"] = element1.count - 1;
  
  }
}
   
  ));
  
  return cloneCollectionA;
}

const collectionA = [
  {key: 'a', count: 2},
  {key: 'e', count: 2},
  {key: 'h', count: 2},
  {key: 't', count: 2},
  {key: 'f', count: 2},
  {key: 'c', count: 2},
  {key: 'g', count: 2},
  {key: 'b', count: 2},
  {key: 'd', count: 2}
];

const objectB = {value: ['a', 'd', 'e', 'f']};

document.write(createUpdatedCollection(collectionA, objectB));