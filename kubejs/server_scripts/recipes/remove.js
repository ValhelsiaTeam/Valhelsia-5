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
 * The Alloying, Crushing, Sawing, and Smelting scripts also remove relevant recipes in the same script
 * if immediately creating a new recipe that is intended to replace that recipe
 * (typically to add multi-mod support for a recipe).
 * @see alloying.js
 * @see crushing.js
 * @see sawing.js
 * @see smelting.js
 * 
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {
  // Remove recipes by recipe ID.
  [
    // Ars Nouveau
    'ars_nouveau:archwood_to_chest', // Duplicate Recipe.
    'ars_nouveau:novice_spell_book', // Replaced with a different recipe.
    'ars_nouveau:apprentice_spell_book_upgrade', // Replaced with a different recipe.
    'ars_nouveau:archmage_spell_book_upgrade', // Replaced with a different recipe.

    // Botania
    'botania:pure_daisy/sand', // Now made from Soulless Sand, which is made from Soul Sand.

    // Blue Skies
    'blue_skies:cake_compat', // Replaced with a different recipe.
    'blue_skies:furnace_compat', // Quark provides an alternative.

    // Create

    // Darker Depths
    'darkerdepths:rope', // Replaced with Supplementaries Rope
    'darkerdepths:silver_block', // Redundant
    'darkerdepths:silver_ingot', // Redundant
    'darkerdepths:raw_silver',

    // Decorative Blocks
    'decorative_blocks:chain', // Replaced with a different recipe.
    'decorative_blocks:dirt_from_rocky_dirt', // Removed entirely, no neat way to uncraft with the new recipe.
    'decorative_blocks:rocky_dirt', // Replaced with a different recipe.

    // Ecologics
    'ecologics:surface_moss',
    'ecologics:moss_block',

    // Galosphere
    'galosphere:raw_silver',
    'galosphere:raw_silver_block',
    'galosphere:silver_ingot_from_nuggets',
    'galosphere:silver_ingot',
    'galosphere:silver_nugget',

    // Immersive Engineering
    'immersiveengineering:crafting/paper_from_sawdust', // Removed since Mekanism method made this redundant.
    'immersiveengineering:metalpress/blaze_rod', // Replaced to avoid blaze powder duping - changed from 4 dust to 6.
    
    // Redundant IE Metal Recipes (either duplicate or replaced)
    'immersiveengineering:crafting/ingot_lead_to_storage_lead',
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
    'immersiveengineering:crafting/ingot_silver_to_storage_silver',
    'immersiveengineering:crafting/ingot_steel_to_storage_steel',

    'immersiveengineering:crafting/storage_lead_to_ingot_lead',
    'immersiveengineering:crafting/storage_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/storage_steel_to_ingot_steel',

    'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
    'immersiveengineering:crafting/nugget_lead_to_ingot_lead',
    'immersiveengineering:crafting/nugget_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
    'immersiveengineering:crafting/nugget_steel_to_ingot_steel',

    'immersiveengineering:crafting/copper_ingot_to_nugget_copper',
    'immersiveengineering:crafting/ingot_lead_to_nugget_lead',
    'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium',
    'immersiveengineering:crafting/ingot_steel_to_nugget_steel',

    'immersiveengineering:crafting/raw_block_lead_to_raw_lead',
    'immersiveengineering:crafting/raw_block_uranium_to_raw_uranium',

    'immersiveengineering:crafting/raw_lead_to_raw_block_lead',
    'immersiveengineering:crafting/raw_uranium_to_raw_block_uranium',

    // Mekanism
    'mekanism:charcoal',
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
    'minecraft:ladder',
    'minecraft:furnace', // Quark provides an alternative.

    // Quark
    'quark:building/crafting/oak_bookshelf', // Duplicate recipe.
    'quark:building/crafting/oak_ladder', // Duplicate recipe.
    'quark:building/crafting/compressed/carrot_crate', // Duplicate recipe.
    'quark:building/crafting/compressed/potato_crate', // Duplicate recipe.
    'quark:building/crafting/compressed/beetroot_crate', // Duplicate recipe.

    // Quark Oddities
    'quark:oddities/crafting/backpack', // Removed entirely.

    // Sophisticated Backpacks
    'sophisticatedbackpacks:backpack', // Replaced with a different recipe.

    // Twilight Forest
    'twilightforest:uncrafting_table', // Removed entirely.

    // Waystones
    'waystones:warp_scroll', // Replaced with a different recipe.
    'waystones:warp_stone', // Replaced with a different recipe.
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