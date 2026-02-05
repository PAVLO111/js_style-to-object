'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const temp = sourceString.split(';');

  const spaces = temp.filter((line) => line.trim());

  const one = spaces.map((item) => {
    const [key, value] = item.split(':');

    return [key.trim(), value.trim()];
  });

  const obj = Object.fromEntries(one);

  return obj;
}

module.exports = convertToObject;
