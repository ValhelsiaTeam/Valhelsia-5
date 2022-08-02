// priority: 100

//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe removals for Valhelsia 5.
 * 
 * If intending to replace the recipe with a new one (be it differing input or output), 
 * it is preferable to use replace instead of remove, if practical.
 * @see replace.js
 * 
 * The Alloying, Crushing, and Sawing scripts also remove relevant recipes in the same script
 * only if immediately creating a new recipe that is intended to replace that recipe
 * (typically to add multi-mod support for a recipe).
 * @see alloying.js
 * @see crushing.js
 * @see sawing.js
 * 
 */

/**
 * Recipe Removal Event Handler
 */
onEvent('recipes', event => {

  // Remove recipes by recipe ID.
  [
    // TODO: Add recipe IDs here.
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // TODO: Add item IDs here.
  ].forEach((ingredientID) => event.remove({input: ingredientID}));

  
  // Remove recipes by output.
  [
    // TODO: Add item IDs here.
  ].forEach((itemID) => event.remove({output: itemID}));

})
