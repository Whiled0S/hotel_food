/**
 * @param stringArray {Array<String>}
 * @returns {String}
 */
export const commaSeparated = function (stringArray) {
  return stringArray.join(', ');
};

/**
 * @param string {String}
 * @returns {String}
 */
export const upper = function (string) {
  return string.toUpperCase();
};

/**
 * @param number {Number}
 * @returns {Number}
 */
export const price = function (number) {
  return number / 100;
};
