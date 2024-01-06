// priority: 120
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//                       

/**
 * @file Item Tag Removal for Valhelsia 5's Recipe Overhaul Mode.
 * @copyright Valhelsia Inc 2024
 */

/**
 * Item Tag Event Handler (to be used for tag removal only).
 */
ServerEvents.tags('item', event => {
  if (!global.config.overhaul) {
    return;
  }

  event.remove('valhelsia:wax', [
    'minecraft:honeycomb', // Actual wax is now needed in overhaul mode.
  ]);
});