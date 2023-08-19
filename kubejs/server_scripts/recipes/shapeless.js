// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Shapeless recipe additions for Valhelsia 5.
 * @copyright Valhelsia Inc 2022-2023
 * @see shaped.js
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:crafting/';

  // Biomes 'o' Plenty
  event.shapeless('2x biomesoplenty:orange_sand', ['minecraft:sand', 'minecraft:red_sand']).id(`${ID_PREFIX}orange_sand`);
  
  // Darker Depths
  event.shapeless('darkerdepths:mossy_grimestone', ['darkerdepths:grimestone', 'darkerdepths:glowspire']).id(`${ID_PREFIX}mossy_grimestone`);

  // Ecologics
  event.shapeless('4x ecologics:surface_moss', 'minecraft:moss_block').id(`${ID_PREFIX}surface_moss`);  

  // Farmer's Delight
  event.shapeless('farmersdelight:organic_compost', [
    'minecraft:dirt', 
    'farmersdelight:straw',
    'farmersdelight:straw',
    'minecraft:bone_meal',
    'minecraft:bone_meal',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood'
  ]).id(`${ID_PREFIX}compost_from_sawdust`);

  // Quark
  event.shapeless('2x quark:myalite', ['minecraft:cobblestone', 'minecraft:amethyst_block', 'quark:myalite_crystal']).id(`${ID_PREFIX}myalite`);
  event.shapeless('quark:dusky_myalite', ['ars_nouveau:sourcestone', 'quark:myalite_crystal']).id(`${ID_PREFIX}dusky_myalite`);

});
