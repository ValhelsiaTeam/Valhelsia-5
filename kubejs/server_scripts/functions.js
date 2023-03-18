// priority: 9002
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Functions that have general purpose use throughout other server scripts.
 * @copyright Valhelsia Inc 2022
 */

/**
 * Checks if a string can be parsed as a number.
 * 
 * @param {string} str The input string to check.
 * @returns True for strings that can be parsed as floats (except NaN), false otherwise.
 */
function isNumeric(str) {
  // Although we expect a string here, it's robust enough to return false for non-strings rather than break.
  if (typeof str != 'string') {
    return false;
  }

  return !isNaN(str) && !isNaN(parseFloat(str));
}