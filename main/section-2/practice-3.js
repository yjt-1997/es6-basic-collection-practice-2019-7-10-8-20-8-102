'use strict';

module.exports = function countSameElements(collection) {
  let result = [{ name: 'a', summary: 0 }];
  let index = 0;
  collection.reduce((pre, cur) => {
    let number = 1;
    let letter = cur;
    if(cur.length!=1){
      number = parseInt(cur.replace(/[^\d]/g,""));
      letter = cur.replace(/[^a-z]/g,"");
    }
    if (pre != letter) {
      result.push({ name: letter, summary: number });
      index++;
    } else {
      result[index].summary+=number;
    }
    return letter;
  }, 'a');
  return result;
}
