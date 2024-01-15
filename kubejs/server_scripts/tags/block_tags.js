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
    'enlightened_end:bismuth_ore',
    'enlightened_end:irradium_ore',
  ]);

  event.add('forge:ores/adamantite', [
    'enlightened_end:adamantite_node',
  ])

  event.add('forge:ores/bismuth', [
    'enlightened_end:bismuth_ore',
  ])

  event.add('forge:ores/irradium', [
    'enlightened_end:irradium_ore',
  ])

  // Missing Quark Revertable Chests
  event.add('quark:revertable_chests', [
    'ars_nouveau:archwood_chest'
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