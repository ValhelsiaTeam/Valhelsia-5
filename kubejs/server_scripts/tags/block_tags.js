// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//                       

/**
 * @file Block Tag Additions for Valhelsia 5.
 * 
 * These tags differ from item tags in that they impact the block form only,
 * and therefore mainly have in-world effects. 
 * 
 * @see block_tags_remove.js
 * 
 * @copyright Valhelsia Inc 2022
 */

/**
 * Block Tag Event Handler
 */
ServerEvents.tags('block', event => {
  
  // Bee Growables
  event.add('minecraft:bee_growables', [
    'blue_skies:fiery_bean_seeds',
    'blue_skies:pine_fruit_seeds',
    'blue_skies:scalefruit_seeds',
    'blue_skies:winter_leaf_seeds',
    'enlightened_end:elevibloom_seeds',
    'farmersrespite:tea_seeds',
    'immersiveengineering:seed',
  ]);

  // Crops
  event.add('minecraft:crops', [
    'blue_skies:fiery_bean_seeds',
    'blue_skies:pine_fruit_seeds',
    'blue_skies:scalefruit_seeds',
    'blue_skies:winter_leaf_seeds',
    'enlightened_end:elevibloom_seeds',
    'farmersrespite:tea_seeds',
    'immersiveengineering:seed',
  ]);

  // Missing Ore Tags
  event.add('forge:ores', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore',
    'enlightened_end:bismuth_ore',
    'enlightened_end:irradium_ore',
    'forbidden_arcanus:arcane_crystal_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/adamantite', [
    'enlightened_end:adamantite_node',
  ])

  event.add('forge:ores/arcane_crystal', [
    'forbidden_arcanus:arcane_crystal_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/bismuth', [
    'enlightened_end:bismuth_ore',
  ])

  event.add('forge:ores/blazing_quartz', [
    'malum:blazing_quartz_ore',
  ]);

  event.add('forge:ores/irradium', [
    'enlightened_end:irradium_ore',
  ])

  event.add('forge:ores/quartz', [
    'malum:natural_quartz_ore',
    'malum:deepslate_quartz_ore',
  ]);

  event.add('forge:ores/soulstone', [
    'malum:deepslate_soulstone_ore',
    'malum:soulstone_ore',
  ]);

  event.add('forge:ores/silver', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore',
  ]);

  // Missing Storage Block Tags
  
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
    'spirit:soul_steel_block',
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

  event.add('forge:storage_blocks/raw_soulstone', [
    'malum:block_of_raw_soulstone',
  ]);

  event.add('forge:storage_blocks/soulstone', [
    'malum:block_of_soulstone',
  ]);

  event.add('forge:storage_blocks/soul_steel', [
    'malum:block_of_soul_stained_steel',
    'spirit:soul_steel_block',
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

  // Create
  event.add('create:fan_processing_catalysts/haunting', [
    'decorative_blocks:soul_brazier',
    'valhelsia_structures:soul_brazier',
  ]);

  event.add('create:fan_processing_catalysts/smoking', [
    'decorative_blocks:brazier',
    'valhelsia_structures:brazier',
  ]);
});