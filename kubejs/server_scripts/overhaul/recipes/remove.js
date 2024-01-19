// priority: 99
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe removals for Valhelsia 5's Recipe Overhaul Mode.
 * 
 * If intending to replace the recipe with a new one (be it differing input or output), 
 * it is preferable to use replace instead of remove, if practical.
 * @see replace.js
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.overhaul) {
    return;
  }

  // Remove recipes by recipe ID.
  [
    'ars_nouveau:mob_jar',
    'botania:redstone_root',
    'caveenhancements:amethyst_flute',
    'mekanism:teleportation_core',
    'moreminecarts:silica_steel_mix',
    'moreminecarts:silica_steel_blasting',
    'moreminecarts:silica_steel_smelting',
    'storagedrawers:diamond_storage_upgrade',
    'storagedrawers:emerald_storage_upgrade',
    'supplementaries:globe_sepia',
    'xercamusic:lyre',
    'xercamusic:xylophone',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // Note: Should generally use recipe IDs instead of input ingredient.

  ].forEach((ingredientID) => event.remove({input: ingredientID}));
  
  // Remove recipes by output.
  [
    // Note: Should generally use recipe IDs instead of output item.
    
  ].forEach((itemID) => event.remove({output: itemID}));

});