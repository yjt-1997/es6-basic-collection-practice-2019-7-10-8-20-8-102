'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.map(element => element.key).filter(i => objectB['value'].includes(i));
}
