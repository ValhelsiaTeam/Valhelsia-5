// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Stonecutter recipe additions for Valhelsia 5.
 * Includes functions for frequently used recipe templates.
 * 
 * @copyright Valhelsia Inc 2022
 */

/**
 * Stonecutting Recipe Event Handler
 */
ServerEvents.recipes(event => {

  /**
   * Creates multiple stonecutting recipes to convert items between each other.
   * Typically used to convert between equivalent stones from different mods.
   * 
   * @example scConvert(['create:limestone', 'quark:limestone']);
   * 
   * @param {(string[]|Item[])} items An array of items (or item IDs), usually types of raw stone.
   */
  const scConvert = (items) => {
    if (!Array.isArray(items)) {
      console.error('scConvert requires an array as input.');
      return;
    }

    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items.length; j++) {
        if (i != j) {
          event.stonecutting(items[i], items[j]);
        }
      }
    }
  };

  // TODO: Add stonecutter recipes here.
  

});
