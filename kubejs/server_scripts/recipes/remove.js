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
 * @copyright Valhelsia Inc 2022
 * 
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {

  // Remove recipes by recipe ID.
  [
    // Ars Nouveau
    'ars_nouveau:archwood_to_chest', // Duplicate Recipe.

    // Blue Skies
    'blue_skies:cake_compat', // Replaced with a different recipe.

    // Decorative Blocks
    'decorative_blocks:chain', // Replaced with a different recipe.
    'decorative_blocks:dirt_from_rocky_dirt', // Removed entirely, no neat way to uncraft with the new recipe.
    'decorative_blocks:rocky_dirt', // Replaced with a different recipe.

    // MineColonies
    'minecolonies:chainmailhelmet', // Replaced with a different recipe.
    'minecolonies:chainmailchestplate', // Replaced with a different recipe.
    'minecolonies:chainmailleggings', // Replaced with a different recipe.
    'minecolonies:chainmailboots', // Replaced with a different recipe.

    // Minecraft
    'minecraft:cake', // Duplicate Recipe.
    'minecraft:dark_prismarine', // Replaced with a different recipe.

    // Quark
    'quark:building/crafting/oak_bookshelf', // Duplicate recipe.
    'quark:building/crafting/oak_ladder', // Duplicate recipe.

    // Quark Oddities
    'quark:oddities/crafting/backpack', // Removed entirely.

    // Sophisticated Backpacks
    'sophisticatedbackpacks:backpack' // Replaced with a different recipe.
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // TODO: Add item IDs here.
  ].forEach((ingredientID) => event.remove({input: ingredientID}));
  
  // Remove recipes by output.
  [
    // Mekanism
    'mekanism:block_charcoal', // Duplicate recipe.
  ].forEach((itemID) => event.remove({output: itemID}));

})