'use strict';

function collectSameElements(collectionA, collectionB) {
  const result = [];
  const collectionANew = [];
  collectionA.forEach((ele1) => {
  collectionANew.push(ele1.key);
  }
  );
  collectionANew.forEach((element1) => collectionB.value.forEach((element2)=>
  {if(element1 == element2)
  {
    result.push(element1);
  }}
    
  ));
  
  return result;
}
const collectionA = [
  {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
];
const collectionB = {value: ['a', 'd', 'e', 'f']};
document.write(collectSameElements(collectionA, collectionB));