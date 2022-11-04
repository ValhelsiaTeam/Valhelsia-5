// priority: 100
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe input / output replacements for Valhelsia 5.
 * 
 * Contains several convenience functions for frequently used removal approaches.
 * The majority of the recipe changes in this script are to convert recipe inputs to
 * use tags instead of specific items, or adjusting the output where we have a prefered mod to use.
 * 
 * @copyright Valhelsia Inc 2022
 */

/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {

  // Convenience Functions:
  const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to, true)};
  const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to, true)};
  const replaceInput = (from, to) => {event.replaceInput({}, from, to, true)};
  const replaceOutput = (from, to) => {event.replaceOutput({}, from, to, true)};

  // ----- Compatibility -----
  // Use tags instead of items for all dye colours.
  COLORS.forEach((color) => replaceInput(`minecraft:${color}_dye` `#forge:dyes/${color}`));

  // ----- Output Unification -----

  // ----- Gameplay Changes / Fixes -----
  replaceInput('#forge:chests', '#forge:chests/wooden'); // Prevent using Personal Chests and similar in chest recipes.
  replaceInputID('create:crafting/kinetics/rope_pulley', '#minecraft:wool', '#valhelsia:ropes'); // Use rope instead of wool.
});
