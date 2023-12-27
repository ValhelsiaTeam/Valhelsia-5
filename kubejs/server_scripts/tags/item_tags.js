// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//                       

/**
 * @file Item Tag Additions for Valhelsia 5.
 * 
 * These are mostly for recipe input unification, but sometimes have other uses.
 * 
 * @see item_tags_remove.js
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Item Tag Event Handler
 */
ServerEvents.tags('item', event => {

  // ----- Valhelsia Tags -----
  event.add('valhelsia:ropes', [
    'farmersdelight:rope',
    'immersiveengineering:wirecoil_structure_rope',
    'supplementaries:rope',
  ]);

  event.add('valhelsia:ash', [
    'supplementaries:ash',
    'darkerdepths:ash',
  ]);

  event.add('valhelsia:rose_quartz', [
    'biomesoplenty:rose_quartz_shard',
    'cave_enhancements:rose_quartz',
    'create:rose_quartz',
  ]);

  event.add('valhelsia:electron_tubes', [
    'create:electron_tube',
    'immersiveengineering:electron_tube',
  ]);

  event.add('valhelsia:cheese', [
    'ad_astra:cheese',
    'brewinandchewin:flaxen_cheese_wedge',
  ]);

  event.add('valhelsia:capacitors', [
    'createaddition:capacitor',
    'pneumaticcraft:capacitor',
  ]);

  // ----- Ores -----
  event.add('forge:ores', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore',
    'enlightened_end:bismuth_ore',
    'enlightened_end:irradium_ore',
    'enlightened_end:malachite_ore',
  ]);

  event.add('forge:ores/bismuth', [
    'enlightened_end:bismuth_ore',
  ]);

  event.add('forge:ores/irradium', [
    'enlightened_end:irradium_ore',
  ]);

  event.add('forge:ores/malachite', [
    'enlightened_end:malachite_ore',
  ]);

  event.add('forge:ores/silver', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore',
  ]);

  // ----- Raw Ores -----
  event.add('forge:raw_materials', [
    'enlightened_end:raw_bismuth',
    'enlightened_end:raw_irradium',
  ]);

  event.add('forge:raw_materials/bismuth', [
    'enlightened_end:raw_bismuth',
  ]);

  event.add('forge:raw_materials/irradium', [
    'enlightened_end:raw_irradium',
  ]);

  // ----- Ingots -----
  event.add('forge:ingots', [
    'createdeco:cast_iron_ingot',
    'enlightened_end:bismuth_ingot',
    'enlightened_end:starsteel_ingot',
    'moreminecarts:silica_steel',
  ]);

  event.add('forge:ingots/bismuth', [
    'enlightened_end:bismuth_ingot',
  ]);

  event.add('forge:ingots/starsteel', [
    'enlightened_end:starsteel_ingot',
  ]);

  event.add('forge:ingots/silica_steel', [
    'moreminecarts:silica_steel',
  ]);

  // ----- Storage Blocks -----
  event.add('forge:storage_blocks', [
    'enlightened_end:adamantite_block',
    'enlightened_end:bismuth_block',
    'enlightened_end:depleted_irradium_block',
    'enlightened_end:glacium_block',
    'enlightened_end:irradium_block',
    'enlightened_end:raw_bismuth_block',
    'enlightened_end:raw_irradium_block',
    'enlightened_end:stardust_block',
    'enlightened_end:starsteel_block',
    'moreminecarts:silica_steel_block',
  ]);

  event.add('forge:storage_blocks/adamantite', [
    'enlightened_end:adamantite_block',
  ]);

  event.add('forge:storage_blocks/bismuth', [
    'enlightened_end:bismuth_block',
  ]);

  event.add('forge:storage_blocks/depleted_irradium', [
    'enlightened_end:depleted_irradium_block',
  ]);

  event.add('forge:storage_blocks/glacium', [
    'enlightened_end:glacium_block',
  ]);

  event.add('forge:storage_blocks/irradium', [
    'enlightened_end:irradium_block',
  ]);

  event.add('forge:storage_blocks/raw_bismuth', [
    'enlightened_end:raw_bismuth_block',
  ]);

  event.add('forge:storage_blocks/raw_irradium', [
    'enlightened_end:raw_irradium_block',
  ]);

  event.add('forge:storage_blocks/stardust', [
    'enlightened_end:stardust_block',
  ]);

  event.add('forge:storage_blocks/starsteel', [
    'enlightened_end:starsteel_block',
  ]);

  event.add('forge:storage_blocks/silica_steel', [
    'moreminecarts:silica_steel_block',
  ]);

  // ----- Nuggets -----
  event.add('forge:nuggets', [
    'enlightened_end:bismuth_nugget',
    'enlightened_end:starsteel_nugget',
  ]);

  event.add('forge:nuggets/bismuth', [
    'enlightened_end:bismuth_nugget',
  ]);

  event.add('forge:nuggets/starsteel', [
    'enlightened_end:starsteel_nugget',
  ]);

  // ----- Dusts -----
  event.add('forge:dusts', [
    'botania:pixie_dust',
    'create:wheat_flour',
    'enlightened_end:stardust',
    'galosphere_delight:allurite_shiny_powder',
    'galosphere_delight:lumiere_shiny_powder',
    'waystones:warp_dust',
  ]);

  event.add('forge:dusts/allurite', [
    'galosphere_delight:allurite_shiny_powder',
  ]);

  event.add('forge:dusts/lumiere', [
    'galosphere_delight:lumiere_shiny_powder',
  ]);

  event.add('forge:dusts/pixie', [
    'botania:pixie_dust',
  ]);

  event.add('forge:dusts/stardust', [
    'enlightened_end:stardust',
  ]);

  event.add('forge:dusts/warp', [
    'waystones:warp_dust',
  ]);

  event.add('forge:dusts/wheat', [
    'create:wheat_flour',
  ]);

  // ----- Plates -----
  event.add('forge:plates', [
    'createdeco:cast_iron_sheet',
  ]);

  // ----- Gems -----
  event.add('forge:gems', [
    'enlightened_end:glacium',
    'enlightened_end:malachite',
  ]);
  
  event.add('forge:gems/glacium', [
    'enlightened_end:glacium',
  ]);

  event.add('forge:gems/malachite', [
    'enlightened_end:malachite',
  ]);

  // ----- Logs / Wood -----
  event.add('forge:stripped_logs', [
    'forbidden_arcanus:stripped_cherry_log',
    'forbidden_arcanus:stripped_aurum_log',
    'upgrade_aquatic:stripped_driftwood_log',
  ]);

  event.add('forge:stripped_wood', [
    'forbidden_arcanus:stripped_cherry_wood',
    'forbidden_arcanus:stripped_aurum_wood',
    'upgrade_aquatic:stripped_driftwood',
  ]);

  event.add('minecraft:logs_that_burn', [
    'forbidden_arcanus:aurum_log',
    'forbidden_arcanus:stripped_aurum_log',
    'forbidden_arcanus:cherry_log',
    'forbidden_arcanus:thin_cherry_log',
    'forbidden_arcanus:stripped_cherry_log',
  ]);

  event.add('minecraft:planks', [
    'aether:skyroot_planks',
  ]);

  // ----- Flour -----
  event.add('forge:flour', [
    'pneumaticcraft:wheat_flour',
  ]);

  event.add('forge:flour/wheat', [
    'pneumaticcraft:wheat_flour',
  ]);

  // ----- Dough -----
  event.add('forge:dough', [
    'farmersrespite:nether_wart_sourdough',
    'minecolonies:cookie_dough',
    'minecolonies:bread_dough',
    'pneumaticcraft:sourdough',
  ]);

  event.add('forge:dough/wheat', [
    'minecolonies:bread_dough',
    'pneumaticcraft:sourdough',
  ]);

  // ----- Netherrack -----
  event.add('forge:netherrack', [
    'rechiseled:netherrack_beams',
    'rechiseled:netherrack_beams_connecting',
    'rechiseled:netherrack_brick_pattern',
    'rechiseled:netherrack_brick_pattern_connecting',
    'rechiseled:netherrack_brick_paving',
    'rechiseled:netherrack_brick_paving_connecting',
    'rechiseled:netherrack_bricks',
    'rechiseled:netherrack_bricks_connecting',
    'rechiseled:netherrack_dented',
    'rechiseled:netherrack_dented_connecting',
    'rechiseled:netherrack_rotated_bricks',
    'rechiseled:netherrack_rotated_bricks_connecting',
    'rechiseled:netherrack_small_tiles',
    'rechiseled:netherrack_small_tiles_connecting',
    'rechiseled:netherrack_stripes',
    'rechiseled:netherrack_stripes_connecting',
    'rechiseled:netherrack_tiles',
    'rechiseled:netherrack_tiles_connecting',
  ]);

  // ----- Sandstone -----
  event.add('forge:sandstone/colorless', [
    'quark:sandstone_bricks',
  ]);

  event.add('forge:sandstone/red', [
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/arid', [
    'atmospheric:arid_sandstone',
    'atmospheric:smooth_arid_sandstone',
    'atmospheric:cut_arid_sandstone',
    'atmospheric:chiseled_arid_sandstone',
    'atmospheric:arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/red_arid', [
    'atmospheric:red_arid_sandstone',
    'atmospheric:smooth_red_arid_sandstone',
    'atmospheric:cut_red_arid_sandstone',
    'atmospheric:chiseled_red_arid_sandstone',
    'atmospheric:red_arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/orange', [
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:cut_orange_sandstone',
    'biomesoplenty:chiseled_orange_sandstone',
  ]);

  event.add('forge:sandstone/white', [
    'biomesoplenty:white_sandstone',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:cut_white_sandstone',
    'biomesoplenty:chiseled_white_sandstone',
  ]);

  event.add('forge:sandstone/black', [
    'biomesoplenty:black_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'biomesoplenty:cut_black_sandstone',
    'biomesoplenty:chiseled_black_sandstone',
  ]);

  event.add('forge:sandstone/soul', [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone',
  ]);

  event.add('forge:sandstone/soulless', [
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone',
  ]);

  event.add('forge:sandstone/crystal', [
    'blue_skies:crystal_sandstone',
    'blue_skies:chiseled_crystal_sandstone',
    'blue_skies:cut_crystal_sandstone',
    'blue_skies:smooth_crystal_sandstone',
    'blue_skies:crystal_sandstone_pillar',
  ]);
  
  event.add('forge:sandstone/midnight', [
    'blue_skies:midnight_sandstone',
    'blue_skies:chiseled_midnight_sandstone',
    'blue_skies:cut_midnight_sandstone',
    'blue_skies:smooth_midnight_sandstone',
    'blue_skies:midnight_sandstone_pillar',
  ]);

  // ----- Seeds -----
  event.add('forge:seeds', [
    'enlightened_end:elevibloom_seeds',
    'farmersrespite:tea_seeds',
  ]);

  event.add('forge:seeds/elevibloom', [
    'enlightened_end:elevibloom_seeds',
  ]);

  event.add('forge:seeds/fiery_bean', [
    'blue_skies:fiery_bean_seeds',
  ]);

  event.add('forge:seeds/hemp', [
    'immersiveengineering:seed',
  ]);

  event.add('forge:seeds/magebloom', [
    'ars_nouveau:magebloom_crop',
  ]);

  event.add('forge:seeds/pine_fruit', [
    'blue_skies:pine_fruit_seeds',
  ]);

  event.add('forge:seeds/scalebloom', [
    'blue_skies:scalebloom_seeds',
  ]);

  event.add('forge:seeds/tea', [
    'farmersrespite:tea_seeds',
  ]);

  event.add('forge:seeds/winter_leaf', [
    'blue_skies:winter_leaf_seeds',
  ]);


  // ----- Slimeballs -----
  event.add('forge:slimeballs', [
    'aether:swet_ball',
    'alexsmobs:banana_slug_slime',
    'autumnity:snail_goo',
  ]);

  // ----- Mod-specific Tags -----

  // Applied Energistics 2
  event.add('ae2:can_remove_color', [
    'supplementaries:soap',
  ]);

  // Create Slice & Dice
  event.add('sliceanddice:allowed_tools', [
    'galosphere_delight:silver_kitchen_hammer',
  ]);

  // Immersive Engineering
  // Valid Tools for the Toolbox
  event.add('immersiveengineering:toolbox/tools', [
    'akashictome:tome',
  ]);

  // Valid Wiring for the Toolbox
  event.add('immersiveengineering:toolbox/wiring', [
    'createaddition:connector',
    'createaddition:large_connector',
    'createaddition:redstone_relay',
    'createaddition:copper_spool',
    'createaddition:gold_spool',
    'createaddition:electrum_spool',
    'createaddition:festive_spool',
  ]);

});