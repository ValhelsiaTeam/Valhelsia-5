// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Shapeless recipe additions for Valhelsia 5's Recipe Overhaul Mode.
 * @copyright Valhelsia Inc 2024
 * @see shaped.js
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.overhaul) {
    return;
  }

  const ID_PREFIX = 'valhelsia:overhaul/crafting/';

  // Supplementaries
  event.shapeless('supplementaries:globe_sepia', ['supplementaries:globe', 'supplementaries:antique_ink', '#forge:dyes/brown']).id(`${ID_PREFIX}sepia_globe`);
});
