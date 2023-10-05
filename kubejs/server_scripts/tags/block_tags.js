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

  // Missing Quark Revertable Chests
  event.add('quark:revertable_chests', [
    'ars_nouveau:archwood_chest'
  ]);

});