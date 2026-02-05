'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const temp = sourceString.split(';');

  const keys = {};

  for (const item of temp) {
    const [key, value] = item.split(':');

    keys[key.trim()] = value;
  }

  return keys;
}


module.exports = convertToObject;
