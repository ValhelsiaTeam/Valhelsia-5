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

  event.shapeless('farmersdelight:barbecue_stick', [
    '#forge:vegetables/tomato',
    '#forge:vegetables/onion',
    '#valhelsia:cooked_proteins',
    '#forge:rods/wooden',
  ]).id(`${ID_PREFIX}barbeque_stick`);

  event.shapeless('farmersdelight:stuffed_potato', [
    'minecraft:baked_potato',
    '#forge:vegetables/onion',
    '#valhelsia:cooked_proteins',
  ]).id(`${ID_PREFIX}stuffed_potato`);

  // Quark
  event.shapeless('2x quark:myalite', ['minecraft:cobblestone', 'minecraft:amethyst_block', 'quark:myalite_crystal']).id(`${ID_PREFIX}myalite`);
  event.shapeless('quark:dusky_myalite', ['ars_nouveau:sourcestone', 'quark:myalite']).id(`${ID_PREFIX}dusky_myalite`);

  // Supplementaries
  event.shapeless('supplementaries:antique_ink', ['minecraft:ink_sac', 'minecraft:glass_bottle', '#valhelsia:ash']).id(`${ID_PREFIX}antique_ink`);

  // Tetra
  event.shapeless('tetra:forged_platform', ['tetra:forged_platform_slab', 'tetra:forged_platform_slab']).id(`${ID_PREFIX}forged_platform_slab_to_forged_platform`);

  // Vertical Slabs Compat
  event.shapeless('v_slab_compat:create/waxed_copper_shingle_vertical_slab', ['v_slab_compat:create/copper_shingle_vertical_slab', '#valhelsia:wax']).id(`${ID_PREFIX}waxed_copper_shingle_vertical_slab`);
  event.shapeless('v_slab_compat:create/waxed_exposed_copper_shingle_vertical_slab', ['v_slab_compat:create/exposed_copper_shingle_vertical_slab', '#valhelsia:wax']).id(`${ID_PREFIX}waxed_exposed_copper_shingle_vertical_slab`);
  event.shapeless('v_slab_compat:create/waxed_oxidized_copper_shingle_vertical_slab', ['v_slab_compat:create/oxidized_copper_shingle_vertical_slab', '#valhelsia:wax']).id(`${ID_PREFIX}waxed_oxidized_copper_shingle_vertical_slab`);
  event.shapeless('v_slab_compat:create/waxed_weathered_copper_shingle_vertical_slab', ['v_slab_compat:create/weathered_copper_shingle_vertical_slab', '#valhelsia:wax']).id(`${ID_PREFIX}waxed_weathered_copper_shingle_vertical_slab`);
  event.shapeless('v_slab_compat:create/waxed_copper_tile_vertical_slab', ['v_slab_compat:create/copper_tile_vertical_slab', '#valhelsia:wax']).id(`${ID_PREFIX}waxed_copper_tile_vertical_slab`);
  event.shapeless('v_slab_compat:create/waxed_exposed_copper_tile_vertical_slab', ['v_slab_compat:create/exposed_copper_tile_vertical_slab', '#valhelsia:wax']).id(`${ID_PREFIX}waxed_exposed_copper_tile_vertical_slab`);
  event.shapeless('v_slab_compat:create/waxed_oxidized_copper_tile_vertical_slab', ['v_slab_compat:create/oxidized_copper_tile_vertical_slab', '#valhelsia:wax']).id(`${ID_PREFIX}waxed_oxidized_copper_tile_vertical_slab`);
  event.shapeless('v_slab_compat:create/waxed_weathered_copper_tile_vertical_slab', ['v_slab_compat:create/weathered_copper_tile_vertical_slab', '#valhelsia:wax']).id(`${ID_PREFIX}waxed_weathered_copper_tile_vertical_slab`);
  event.shapeless('v_slab_compat:enlightened_end/waxed_bismuth_sheet_vertical_slab', ['v_slab_compat:enlightened_end/bismuth_sheet_vertical_slab', '#valhelsia:wax']).id(`${ID_PREFIX}waxed_bismuth_sheet_vertical_slab`);
});
