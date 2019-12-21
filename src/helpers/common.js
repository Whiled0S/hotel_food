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
 * @param timezone {String}
 * @returns {String}
 */
export const date = function (date, timezone) {
  const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timezone, hour12: false };

  return new Date(date).toLocaleDateString('en-us', options);
};
