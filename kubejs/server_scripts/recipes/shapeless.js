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

  // Minecraft
  event.shapeless('minecraft:yellow_dye', 'forbidden_arcanus:yellow_orchid').id(`${ID_PREFIX}yellow_dye_from_yellow_orchid`);

  // Biomes 'o' Plenty
  event.shapeless('2x biomesoplenty:orange_sand', ['minecraft:sand', 'minecraft:red_sand']).id(`${ID_PREFIX}orange_sand`);

  // Create Crafts & Additions
  event.shapeless('createaddition:iron_wire', ['#forge:plates/iron', 'immersiveengineering:wirecutter']).id(`${ID_PREFIX}iron_wire_from_cutting`);

  // Darker Depths
  event.shapeless('darkerdepths:mossy_grimestone', ['darkerdepths:grimestone', 'darkerdepths:glowspire']).id(`${ID_PREFIX}mossy_grimestone`);

  // Ecologics
  event.shapeless('4x ecologics:surface_moss', 'minecraft:moss_block').id(`${ID_PREFIX}surface_moss`);  

  // Engineer's Decor
  event.shapeless('engineersdecor:clinker_brick_block', ['engineersdecor:clinker_brick_slab', 'engineersdecor:clinker_brick_slab']).id(`${ID_PREFIX}clinker_brick_slab_to_clinker_brick_block`);

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

  // Supplementaries
  event.shapeless('supplementaries:antique_ink', ['minecraft:ink_sac', 'minecraft:glass_bottle', 'valhelsia:ash']).id(`${ID_PREFIX}antique_ink`);

  // Tetra
  event.shapeless('tetra:forged_platform', ['tetra:forged_platform_slab', 'tetra:forged_platform_slab']).id(`${ID_PREFIX}forged_platform_slab_to_forged_platform`);

});
