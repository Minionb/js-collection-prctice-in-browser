'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [];
  let uniqueEle = [];
  collectionA.forEach((ele1)=>{
    if (!uniqueEle.includes(ele1)){
      uniqueEle.push(ele1);
    }
  });
    
    uniqueEle.forEach((ele2) =>{
      let count = 0;
      collectionA.forEach((ele3) => {
      if(ele3 == ele2){
      count ++;
      }
      
    })
    collectionC.push({"key": ele2, "count": count});
  }),
 
  collectionC.forEach((element1) => objectB.value.forEach((element2)=>
  {if(element1.key == element2)
  {
    element1["count"] = element1.count - (parseInt(element1.count/3));
  }
    
  }
   
  ));
  
    return collectionC;
}
const collectionA = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd', 'd', 'd', 'd', 'd'
];


const objectB = {value: ['a', 'd', 'e', 'f']};
document.write(createUpdatedCollection(collectionA, objectB));