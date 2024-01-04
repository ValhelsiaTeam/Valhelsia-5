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

  /**
   * Replaces a given input ingredient in all KubeJS-compatible recipes.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInput = (from, to) => {
    event.replaceInput({}, from, to);
  };

  /**
   * Replaces a given output item in all KubeJS-compatible recipes.
   * @param {*} from Original output item.
   * @param {*} to New output item.
   */
  const replaceOutput = (from, to) => {
    event.replaceOutput({}, from, to);
  };

  /**
   * Replaces input ingredients in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace ingredients in.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceInput({id: recipeID}, from, to));
    } else {
      event.replaceInput({id: recipes}, from, to);
    }
  };

  /**
   * Replaces output items in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace items in.
   * @param {*} from Original item.
   * @param {*} to New item.
   */
  const replaceOutputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceOutput({id: recipeID}, from, to));
    } else {
      event.replaceOutput({id: recipes}, from, to);
    }
  };

  // Replace inputs / outputs by recipe type.
  const replaceInputType = (recipeType, from, to) => {
    event.replaceInput({type: recipeType}, from, to);
  };

  const replaceOutputType = (recipeType, from, to) => {
    event.replaceOutput({type: recipeType}, from, to);
  };

  // ----- Fixes -----
  replaceOutputID('enlightened_end:regleam_iridescent_bismuth_sheets', 'enlightened_end:dazzling_bismuth_sheets', 'enlightened_end:iridescent_bismuth_sheets');
  replaceInputID('minecraft:beacon', 'enlightened_end:xenon_jar', '#forge:obsidian');
  replaceInputID('minecraft:ender_chest', 'enlightened_end:malachite', '#forge:obsidian');

  // ----- Compatibility -----
  // Use tags instead of items for all dye colours.
  COLORS.forEach((color) => replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`));

  // Ingot Compatibility
  replaceInput('ad_astra:calorite_ingot', '#forge:ingots/calorite');
  replaceInput('ad_astra:desh_ingot', '#forge:ingots/desh');
  replaceInput('ad_astra:steel_ingot', '#forge:ingots/steel');
  replaceInput('forbidden_arcanus:deorum_ingot', '#forge:ingots/deorum');
  replaceInput('forbidden_arcanus:obsidian_ingot', '#forge:ingots/obsidian');
  replaceInput('galosphere:silver_ingot', '#forge:ingots/silver');
  replaceInput('immersiveengineering:ingot_silver', '#forge:ingots/silver');

  // Plate Compatibility
  replaceInput('ad_astra:calorite_plate', '#forge:plates/calorite');
  replaceInput('ad_astra:desh_plate', '#forge:plates/desh');
  replaceInput('ad_astra:steel_plate', '#forge:plates/steel');

  // Nugget Compatibility
  replaceInput('galosphere:silver_nugget', '#forge:nuggets/silver');
  replaceInput('immersiveengineering:nugget_silver', '#forge:nuggets/silver');

  // Raw Material Compatibility
  replaceInput('galosphere:raw_silver', '#forge:raw_materials/silver');
  replaceInput('immersiveengineering:raw_silver', '#forge:raw_materials/silver');

  // Storage Block Compatibility
  replaceInput('galosphere:silver_block', '#forge:storage_blocks/silver');
  replaceInput('immersiveengineering:storage_silver', '#forge:storage_blocks/silver');
  replaceInput('immersiveengineering:raw_block_silver', '#forge:storage_blocks/raw_silver');
  replaceInput('immersiveengineering:storage_uranium', '#forge:storage_blocks/uranium');

  // Capacitor Compatibility
  replaceInput('createaddition:capacitor', '#valhelsia:capacitors');
  replaceInput('pneumaticcraft:capacitor', '#valhelsia:capacitors');

  // Cheese Compatibility
  replaceInput('ad_astra:cheese', '#valhelsia:cheese');
  replaceInput('brewinandchewin:flaxen_cheese_wedge', '#valhelsia:cheese');

  // Cherry Compatibility
  replaceInput('blue_skies:cherry', '#forge:fruits/cherry');
  replaceInput('environmental:cherries', '#forge:fruits/cherry');
  replaceInput('forbidden_arcanus:cherry_peach', '#forge:fruits/cherry');

  // Electron Tube Compatibility
  replaceInput('create:electron_tube', '#valhelsia:electron_tubes');
  replaceInput('immersiveengineering:electron_tube', '#valhelsia:electron_tubes');

  // Flour Compatibility
  replaceInput('create:wheat_flour', '#forge:flour/wheat');
  replaceInput('pneumaticcraft:wheat_flour', '#forge:flour/wheat');

  // Rope Compatibility
  replaceInput('farmersdelight:rope', '#valhelsia:ropes');
  replaceInput('supplementaries:rope', '#valhelsia:ropes');

  // Rose Quartz Compatibility
  replaceInput('biomesoplenty:rose_quartz_shard', '#valhelsia:rose_quartz');
  replaceInput('cave_enhancements:rose_quartz', '#valhelsia:rose_quartz');
  replaceInput('create:rose_quartz', '#valhelsia:rose_quartz');

  // Dough Compatibility
  replaceInput('create:dough', '#forge:dough/wheat');
  replaceInput('farmersdelight:wheat_dough', '#forge:dough/wheat');

  // Feather Compatibility
  replaceInputID([
    'minecraft:writable_book',
    'ars_elemental:flight_alt',
    'ars_nouveau:orange_sbed',
    'ars_nouveau:ritual_cloudshaping',
    'botania:flighttiara_0',
    'botania:tornado_rod',
    'botania:runic_altar/air',
    'darkutils:crafting/levitation_plate',
    'darkutils:crafting/slowfall_plate',
    'enlightened_end:helium_dart',
    'enlightened_end:xenon_dart',
    'forbidden_arcanus:corrupted_pixie',
    'minecolonies:blockhutschool',
    'pneumaticcraft:jet_boots_upgrade_2',
    'xercamusic:music_sheet',
  ], 'minecraft:feather', '#forge:feathers');
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers');

  // Glass Compatibility
  replaceInputID([
    'minecraft:beacon',
    'minecraft:end_crystal',
    'ad_astra:recipes/desh_fluid_pipe',
    'ad_astra:recipes/fluid_pipe_duct',
    'ad_astra:recipes/jet_suit_helmet',
    'ad_astra:recipes/ostrum_fluid_pipe',
    'botania:glass_pickaxe',
    'botania:lens_normal',
    'botania:prism',
    'darkutils:crafting/shielded_redstone',
    'engineersdecor:independent/panzerglass_block_recipe',
    'enlightened_end:gas_jar',
    'enlightened_end:xenon_laser',
    'littlelogistics:fluid_barge',
    'littlelogistics:fluid_car',
    'littlelogistics:fluid_hopper',
    'minecolonies:blockhutglassblower',
    'moreminecarts:chunk_loader',
    'moreminecarts:ender_pearl_stasis_chamber',
    'moreminecarts:filter_unloader',
    'moreminecarts:piston_lifter_rail',
    'quark:building/crafting/stone_brick_lamp',
    'shoppy:shaped_bartering_station',
    'shoppy:shaped_shop_block',
    'starbunclemania:fluid_jar',
    'supplementaries:hourglass',
    'supplementaries:jar',
  ], 'minecraft:glass', '#forge:glass/colorless');

  COLORS.forEach((color) => replaceInputID(`moreminecarts:color_detector_rail_${color}`, 'minecraft:glass', '#forge:glass/colorless'));
  
  // Obsidian Compatibility
  replaceInputID([
    'minecraft:beacon',
    'minecraft:enchanting_table',
    'minecraft:ender_chest',
    'ad_astra:reinforced_door',
    'alexsmobs:transmutation_table',
    'blue_skies:enchanting_table_compat',
    'botania:corporea_index',
    'botania:ender_hand',
    'botania:ender_eye_block',
    'botania:mana_void',
    'botania:starfield',
    'fluxnetworks:fluxconfigurator',
    'fluxnetworks:fluxcore',
    'mekanism:module_gyroscopic_stabilization_unit',
    'minecolonies:blockhutnetherworker',
    'quark:automation/crafting/ender_watcher',
    'waystones:mossy_waystone',
    'waystones:sandy_waystone',
    'waystones:sharestone',
    'waystones:waystone',
  ],'minecraft:obsidian','#forge:obsidian');

  // Obsidian Dust Compatibility
  // Note: Not sure if the following will work, as replace doesn't always handle all recipe types.
  replaceInputID('create:sequenced_assembly/sturdy_sheet', 'create:powdered_obsidian', '#forge:dusts/obsidian');

  // Quartz Dust Compatibility
  replaceInputID('ae2:blasting/silicon_from_certus_quartz_dust', 'ae2:certus_quartz_dust', '#ae2:all_quartz_dust');
  replaceInputID('ae2:smelting/silicon_from_certus_quartz_dust', 'ae2:certus_quartz_dust', '#ae2:all_quartz_dust');
  
  // Slime Compatibility
  replaceInputID([
    'minecraft:lead',
    'minecraft:sticky_piston',
    'botania:runic_altar/summer',
    'forbidden_arcanus:wax',
    'moreminecarts:coupler',
    'supplementaries:item_lore_display',
    'supplementaries:slingshot',
  ], 'minecraft:slime_ball', '#forge:slimeballs');

  
  // Spool (or Coil) Compatibility
  replaceInput('createaddition:copper_spool', '#valhelsia:spools/copper');
  replaceInput('immersiveengineering:wirecoil_copper', '#valhelsia:spools/copper');
  replaceInput('immersiveengineering:wirecoil_electrum', '#valhelsia:spools/electrum');

  // Stick / Rod Compatibility
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:stick', '#forge:rods/wooden');
  replaceInputID([
    'galosphere_delight:silver_kitchen_hammer',
    // TODO: Check which other recipes need sticks changed to use tags.
  ], 'minecraft:stick', '#forge:rods/wooden');

  ALL_VANILLA_WOOD_TYPES.forEach((wood_type) => {
    // Allow balanced crates to use any wooden chest, not just vanilla chests.
    replaceInputID(`balanced_crates:${wood_type}_crate_recipe`, 'minecraft:chest', '#forge:chests/wooden');
  });
  
  // ----- Output Unification -----

  // Note: Priority for metals is Create > Mekanism > Immersive Engineering > Darker Depths

  // Nuggets
  replaceOutput('createaddition:electrum_nugget', 'immersiveengineering:nugget_electrum');
  replaceOutput('galosphere:silver_nugget', 'immersiveengineering:nugget_silver');
  replaceOutput('immersiveengineering:nugget_copper', 'create:copper_nugget');
  replaceOutput('immersiveengineering:nugget_lead', 'mekanism:nugget_lead');
  replaceOutput('immersiveengineering:nugget_steel', 'mekanism:nugget_steel');
  replaceOutput('immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium');

  // Ingots
  replaceOutput('darkerdepths:silver_ingot', 'immersiveengineering:ingot_silver');
  replaceOutput('galosphere:silver_ingot', 'immersiveengineering:ingot_silver');
  replaceOutput('immersiveengineering:ingot_lead', 'mekanism:ingot_lead');
  replaceOutput('immersiveengineering:ingot_steel', 'mekanism:ingot_steel');
  replaceOutput('immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium');

  // Raw Ore
  replaceOutput('darkerdepths:raw_silver', 'immersiveengineering:raw_silver');
  replaceOutput('galosphere:raw_silver', 'immersiveengineering:raw_silver');
  replaceOutput('immersiveengineering:raw_lead', 'mekanism:raw_lead');
  replaceOutput('immersiveengineering:raw_uranium', 'mekanism:raw_uranium');

  // Storage Blocks
  replaceOutput('darkerdepths:raw_silver_block', 'immersiveengineering:raw_block_silver');
  replaceOutput('darkerdepths:silver_block', 'immersiveengineering:storage_silver');
  replaceOutput('galosphere:silver_block', 'immersiveengineering:block_silver');
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
  replaceInputID('waystones:warp_dust', 'minecraft:ender_pearl', '#forge:dusts/ender_pearl'); // Makes more sense to use the dust form.
  replaceInputID('forbidden_arcanus:silver_dragon_scale', 'minecraft:iron_ingot', '#forge:ingots/silver'); // Silver Dragon Scales are now actually silver.
  replaceInputID('ars_nouveau:warp_scroll', 'minecraft:lapis_lazuli', '#forge:dusts/warp'); // Now even warpier!
  replaceInputID('forbidden_arcanus:wax', 'minecraft:honey_bottle', 'minecraft:honeycomb'); // Follows vanilla precedent.
});
