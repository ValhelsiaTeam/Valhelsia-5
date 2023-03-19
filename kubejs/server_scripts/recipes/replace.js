// priority: 90
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe input / output replacements for Valhelsia 5.
 * 
 * Contains several convenience functions for frequently used replacement approaches.
 * The majority of the recipe changes in this script are to convert recipe inputs to
 * use tags instead of specific items, or adjusting the output where we have a prefered mod to use.
 * 
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {

  // ----- Convenience Functions -----
  // Replace inputs and outputs across all recipes that use the given ingredient / item.
  const replaceInput = (from, to) => {event.replaceInput({}, from, to)};
  const replaceOutput = (from, to) => {event.replaceOutput({}, from, to)};

  // Replace inputs / outputs by recipe ID.
  const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)};
  const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to)};

  // Replace inputs / outputs by recipe type.
  const replaceInputType = (recipeType, from, to) => {event.replaceInput({type: recipeType}, from, to)};
  const replaceOutputType = (recipeType, from, to) => {event.replaceOutput({type: recipeType}, from, to)};

  // ----- Compatibility -----
  // Use tags instead of items for all dye colours.
  COLORS.forEach((color) => replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`));

  replaceInput('forbidden_arcanus:deorum_ingot', '#forge:ingots/deorum');
  replaceInput('forbidden_arcanus:obsidian_ingot', '#forge:ingots/obsidian');
  replaceInput('immersiveengineering:storage_uranium', '#forge:storage_blocks/uranium');

  // Rose Quartz Unification
  replaceInput('biomesoplenty:rose_quartz_shard', '#valhelsia:rose_quartz');
  replaceInput('cave_enhancements:rose_quartz', '#valhelsia:rose_quartz');
  replaceInput('create:rose_quartz', '#valhelsia:rose_quartz');
  
  
  // Rope Unification
  replaceInput('farmersdelight:rope', '#valhelsia:ropes');
  replaceInput('supplementaries:rope', '#valhelsia:ropes');
  
  // Going to add this later, needs some changes elsewhere.
  //replaceInput('minecraft:slime_ball', '#forge:slimeballs');

  replaceInputID('minecraft:writable_book', 'minecraft:feather', '#forge:feathers');
  replaceInputID('xercamusic:music_sheet', 'minecraft:feather', '#forge:feathers');
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers');
  // TODO: Check which other recipes need feathers changed to use tags.

  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:stick', '#forge:rods/wooden');
  // TODO: Check which other recipes need sticks changed to use tags.

  ALL_VANILLA_WOOD_TYPES.forEach((wood_type) => {
    // Allow balanced crates to use any wooden chest, not just vanilla chests.
    replaceInputID(`balanced_crates:${wood_type}_crate_recipe`, 'minecraft:chest', '#forge:chests/wooden');
  });
  
  // ----- Output Unification -----

  // Note: Priority for metals is Create > Mekanism > Immersive Engineering > Darker Depths

  // Nuggets
  replaceOutput('immersiveengineering:nugget_copper', 'create:copper_nugget');
  replaceOutput('immersiveengineering:nugget_lead', 'mekanism:nugget_lead');
  replaceOutput('immersiveengineering:nugget_steel', 'mekanism:nugget_steel');
  replaceOutput('immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium');

  // Ingots
  replaceOutput('darkerdepths:silver_ingot', 'immersiveengineering:ingot_silver');
  replaceOutput('immersiveengineering:ingot_lead', 'mekanism:ingot_lead');
  replaceOutput('immersiveengineering:ingot_steel', 'mekanism:ingot_steel');
  replaceOutput('immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium');

  // Raw Ore
  replaceOutput('darkerdepths:raw_silver', 'immersiveengineering:raw_silver');
  replaceOutput('immersiveengineering:raw_lead', 'mekanism:raw_lead');
  replaceOutput('immersiveengineering:raw_uranium', 'mekanism:raw_uranium');

  // Storage Blocks
  replaceOutput('darkerdepths:raw_silver_block', 'immersiveengineering:raw_block_silver');
  replaceOutput('darkerdepths:silver_block', 'immersiveengineering:storage_silver');
  replaceOutput('immersiveengineering:storage_lead', 'mekanism:block_lead');
  replaceOutput('immersiveengineering:raw_block_lead', 'mekanism:block_raw_lead');
  replaceOutput('immersiveengineering:raw_block_uranium', 'mekanism:block_raw_uranium');
  replaceOutput('immersiveengineering:storage_steel', 'mekanism:block_steel');
  replaceOutput('immersiveengineering:storage_uranium', 'mekanism:block_uranium');
  replaceOutput('mekanism:block_charcoal', 'quark:charcoal_block');

  // Misc
  replaceOutput('farmersdelight:rope', 'supplementaries:rope');

  // ----- Gameplay Changes / Fixes -----
  // No idea why this is replacing a bunch of things that *aren't* in the '#forge:chests' tag.
  //replaceInput('#forge:chests', '#forge:chests/wooden'); // Prevent using Personal Chests and similar in chest recipes.
  replaceInputID('create:crafting/kinetics/rope_pulley', '#minecraft:wool', '#valhelsia:ropes'); // Use rope instead of wool.
  replaceInputID('tetra:modular_toolbelt', 'minecraft:string', '#valhelsia:ropes'); // Tetra Rope Toolbelt - now with rope!
  replaceInputID('waystones:warp_dust', 'minecraft:ender_pearl', '#forge:dusts/ender_pearl');
});
