// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Sawing recipes for Valhelsia 5.
 * 
 * Includes a function to add sawing recipes to multiple mods at the same time.
 * Also replaces some existing sawing recipes in order to unify them between mods.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Sawing Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:sawing/';

  /**
   * Creates a sawing recipe for multiple mods.
   * @param {(string|Item)} output The resulting item(s).
   * @param {(string|InputItem)} input A single ingredient to saw.
   * @param {(string|Item|Array)} secondary An optional secondary output.
   */
  const saw = (output, input, secondary) => {
    let recipeIDLocal = `${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`;

    if (typeof secondary != 'undefined') {
      if (Array.isArray(secondary)) {
        event.recipes.immersiveengineering.sawmill(output, input, secondary).id(`${ID_PREFIX}immersiveengineering/${recipeIDLocal}`);
        event.recipes.create.cutting(output.concat(secondary), input).processingTime(50).id(`${ID_PREFIX}create/${recipeIDLocal}`);
      } else {
        event.recipes.immersiveengineering.sawmill(output, input, [secondary]).id(`${ID_PREFIX}immersiveengineering/${recipeIDLocal}`);
        event.recipes.create.cutting([output, secondary], input).processingTime(50).id(`${ID_PREFIX}create/${recipeIDLocal}`);
      }
    } else {
      event.recipes.immersiveengineering.sawmill(output, input).id(`${ID_PREFIX}immersiveengineering/${recipeIDLocal}`);
      event.recipes.create.cutting(output, input).processingTime(50).id(`${ID_PREFIX}create/${recipeIDLocal}`);
    }

    // TODO: Expand this to allow stripping.
    // For future reference:
    // event.recipes.immersiveengineeringSawmill(output, input, [secondaries]) // Secondary output format: {stripping: true, output: 'item:id'}
    // event.recipes.immersiveengineeringSawmill(output, input, [secondaries], stripped)

    // TODO: Add other mods.
  };

  // Remove unused sawing recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of sawing recipes with no replacement, use remove.js instead.
  [
    // TODO: Remove unused sawing recipes here.
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // TODO: Add sawing recipes here.
  //       To start with, look at existing IE sawmill recipes and add any missing mods.
});