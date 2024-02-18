// priority: 120
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//                       

/**
 * @file Block Tag Removal for Valhelsia 5.
 * @copyright Valhelsia Inc 2022-2024
 */

/**
 * Block Tag Event Handler (to be used for tag removal only).
 * @see block_tags.js
 */
ServerEvents.tags('block', event => {
  // To fix the bars with Windowlogging (and because they are not walls)
  event.remove('minecraft:walls', [
    'createdeco:andesite_bars',
    'createdeco:andesite_bars_overlay',
    'createdeco:brass_bars',
    'createdeco:brass_bars_overlay',
    'createdeco:cast_iron_bars',
    'createdeco:cast_iron_bars_overlay',
    'createdeco:copper_bars',
    'createdeco:copper_bars_overlay',
    'createdeco:gold_bars',
    'createdeco:gold_bars_overlay',
    'createdeco:iron_bars_overlay',
    'createdeco:netherite_bars',
    'createdeco:netherite_bars_overlay',
    'createdeco:polished_iron_bars',
    'createdeco:polished_iron_bars_overlay',
    'createdeco:zinc_bars',
    'createdeco:zinc_bars_overlay',
  ]);

});