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
 * @copyright Valhelsia Inc 2022
 */

/**
 * Item Tag Event Handler
 */
ServerEvents.tags('item', event => {
  event.add('valhelsia:ropes', [
    'farmersdelight:rope',
    'supplementaries:rope'
  ]);

  event.add('valhelsia:ash', [
    'supplementaries:ash',
    'darkerdepths:ash'
  ]);

  event.add('valhelsia:rose_quartz', [
    'cave_enhancements:rose_quartz',
    'biomesoplenty:rose_quartz_shard'
  ]);

  event.add('forge:ores', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore'
  ]);

  event.add('forge:ores/silver', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore'
  ]);

  event.add('forge:ingots', [
    'moreminecarts:silica_steel'
  ]);

  event.add('forge:ingots/silica_steel', [
    'moreminecarts:silica_steel'
  ]);

  event.add('forge:storage_blocks', [
    'moreminecarts:silica_steel_block'
  ]);

  event.add('forge:storage_blocks/silica_steel', [
    'moreminecarts:silica_steel_block'
  ]);

});