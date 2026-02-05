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
    if (item.trim() === '') {
      continue;
    }

    const [key, value] = item.split(':');

    keys[key.trim()] = value.trim();
  }

  return keys;
}

module.exports = convertToObject;
