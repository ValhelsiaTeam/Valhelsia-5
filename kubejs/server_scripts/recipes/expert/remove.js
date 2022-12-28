// priority: 99
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Expert Mode recipe removals for Valhelsia 5.
 *
 * @copyright Valhelsia Inc 2022
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.expert) {
    return;
  }

  // Remove recipes by recipe ID.
  [
    // Ars Nouveau
    'ars_nouveau:novice_spell_book', // Replaced with a different recipe.
    'ars_nouveau:apprentice_spell_book_upgrade', // Replaced with a different recipe.
    'ars_nouveau:archmage_spell_book_upgrade', // Replaced with a different recipe.
    
    // Sophisticated Backpacks
    'sophisticatedbackpacks:backpack', // Replaced with a different recipe.

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