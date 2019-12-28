import moment from "moment";

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
 * @returns {String}
 */
export const date = function (date) {
  return moment(date).format('MMMM, D kk:mm');
};

export const capitalize = function (str) {
  if (!str.length) return str;
  return str[0].toUpperCase() + str.slice(1);
};
