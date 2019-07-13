'use strict';

module.exports = function countSameElements(collection) {
  let result = [{ key: 'a', count: 0 }];
  let index = 0;
  collection.reduce((pre, cur) => {
    if (pre != cur) {
      result.push({ key: cur, count: 1 });
      index++;
    } else {
      result[index].count++;
    }
    return cur;
  }, 'a');
  return result;
}
