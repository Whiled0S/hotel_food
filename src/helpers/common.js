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

/**
 * @param date {String}
 * @returns {Number}
 */
export const date = function (date) {
  // const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };

  return Date.parse(date);
  // return new Date(Date.parse(date)).toLocaleDateString('en-us', options);
};
