// priority: 0

//   __   ___   _    _  _ ___ _    ___ ___   _       ___ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | __|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |__ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |___/
//

/**
 * @file JEI Recipe Removal for Valhelsia 5
 * 
 * For consistency, recipe IDs should be in the order of Minecraft entries first, then by mod in alphabetical order.
 *  
 * @copyright Valhelsia Inc 2023
 */

/**
 * JEI Recipe Hiding Event Handler
 */
JEIEvents.removeRecipes(event => {
  //console.log(event.categoryIds);

  // Remove Automatic Shapeless Crafting Recipes
  event.remove('create:automatic_shapeless', [
    'integrateddynamics:special/facade', // Facades are hidden as normal crafting recipes anyway.
  ]);
});