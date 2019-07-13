'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(i => objectB['value'].includes(i));
}
