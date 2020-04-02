'use strict';

function collectSameElements(collectionA, collectionB) {
  const result = [];
  collectionA.forEach((element1) => collectionB.forEach((element2)=>
  {if(element1 == element2)
  {
    result.push(element1);
  }}
    
  ));
  document.write(result);
  return result;
}
const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
const collectionB = ['a', 'd', 'e', 'f'];
document.write(collectSameElements(collectionA, collectionB));
