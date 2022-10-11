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

    // Create
    'create:crafting/kinetics/rope_pulley', // Replaced with a different recipe.
    
    // Darker Depths
    'darkerdepths:aridrock_gold_ore_from_blasting',
    'darkerdepths:limestone_gold_ore_from_blasting',
    'darkerdepths:aridrock_gold_ore',
    'darkerdepths:limestone_gold_ore',
    'darkerdepths:aridrock_iron_ore_from_blasting',
    'darkerdepths:limestone_iron_ore_from_blasting',
    'darkerdepths:aridrock_iron_ore',
    'darkerdepths:limestone_iron_ore',
    'darkerdepths:rope',

    // Decorative Blocks
    'decorative_blocks:chain', // Replaced with a different recipe.
    'decorative_blocks:dirt_from_rocky_dirt', // Removed entirely, no neat way to uncraft with the new recipe.
    'decorative_blocks:rocky_dirt', // Replaced with a different recipe.

    // Immersive Engineering
    'immersiveengineering:crafting/paper_from_sawdust', // Removed since Mekanism method made this redundant.
    'immersiveengineering:crafting/gold_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/gold_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crafting/ingot_silver_to_storage_silver', // Replaced with a different recipe.
    'immersiveengineering:crusher/nether_gold', // Duplicate recipe.
    'immersiveengineering:crusher/nether_wart', // Default recipe leads to dupe exploit.

    // Mekanism
    'mekanismtools:steel/tools/sword',
    'mekanismtools:steel/tools/pickaxe',
    'mekanismtools:steel/tools/axe',
    'mekanismtools:steel/tools/shovel',
    'mekanismtools:steel/tools/hoe',
    'mekanismtools:steel/armor/helmet',
    'mekanismtools:steel/armor/chestplate',
    'mekanismtools:steel/armor/leggings',
    'mekanismtools:steel/armor/boots',
    'mekanismtools:lapis_lazuli/tools/sword',
    'mekanismtools:lapis_lazuli/tools/pickaxe',
    'mekanismtools:lapis_lazuli/tools/axe',
    'mekanismtools:lapis_lazuli/tools/shovel',
    'mekanismtools:lapis_lazuli/tools/hoe',
    'mekanismtools:lapis_lazuli/tools/paxel',
    'mekanismtools:lapis_lazuli/shield',
    'mekanismtools:lapis_lazuli/armor/helmet',
    'mekanismtools:lapis_lazuli/armor/chestplate', 
    'mekanismtools:lapis_lazuli/armor/leggings',
    'mekanismtools:lapis_lazuli/armor/boots',

    // MineColonies
    'minecolonies:chainmailhelmet', // Replaced with a different recipe.
    'minecolonies:chainmailchestplate', // Replaced with a different recipe.
    'minecolonies:chainmailleggings', // Replaced with a different recipe.
    'minecolonies:chainmailboots', // Replaced with a different recipe.

    // Minecraft
    'minecraft:cake', // Duplicate Recipe.
    'minecraft:dark_prismarine', // Replaced with a different recipe.
    'minecraft:ladder',

    // Quark
    'quark:building/crafting/oak_bookshelf', // Duplicate recipe.
    'quark:building/crafting/oak_ladder', // Duplicate recipe.

    // Quark Oddities
    'quark:oddities/crafting/backpack', // Removed entirely.

    // Sophisticated Backpacks
    'sophisticatedbackpacks:backpack', // Replaced with a different recipe.

    // Twilight Forest
    'twilightforest:uncrafting_table', // Removed entirely.
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // TODO: Add item IDs here.
  ].forEach((ingredientID) => event.remove({input: ingredientID}));
  
  // Remove recipes by output.
  [
    // Darker Depths
    'darkerdepths:raw_silver',
    'darkerdepths:raw_silver_block',
    'darkerdepths:silver_ingot',
    'darkerdepths:silver_block',

    // Immersive Engineering
    'immersiveengineering:raw_lead',
    'immersiveengineering:raw_block_lead',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:storage_lead',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:raw_uranium',
    'immersiveengineering:raw_block_uranium',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:storage_uranium',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:storage_steel',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:nugget_copper',

    // Mekanism
    'mekanism:block_charcoal', // Duplicate recipe.
  ].forEach((itemID) => event.remove({output: itemID}));

});