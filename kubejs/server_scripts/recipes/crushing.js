// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Crushing recipes for Valhelsia 5.
 * 
 * Includes functions to add crushing and milling recipes to multiple mods at the same time.
 * Also replaces some existing crushing recipes in order to unify them between mods.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Crushing Recipe Event Handler
 */
 ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:crushing/';

  /**
   * Creates a Crushing recipe for multiple mods.
   * Note: Mekanism doesn't handle secondary outputs for crushing recipes. This function just ignores them.
   * 
   * @param {(string|Item)} output The resulting crushed item(s).
   * @param {(string|InputItem)} input A single ingredient to crush.
   * @param {(string|Item|Array)} secondary An optional secondary output.
   */
  const crush = (output, input, secondary) => {
    let itemID = `${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`;

    if (typeof secondary != 'undefined') {
      if (Array.isArray(secondary)) {
        event.recipes.immersiveengineering.crusher(output, input, secondary, 3200).id(`${ID_PREFIX}immersiveengineering/${itemID}`);
        event.recipes.create.crushing(output.concat(secondary), input).id(`${ID_PREFIX}create/${itemID}`);
      } else {
        event.recipes.immersiveengineering.crusher(output, input, [secondary], 3200).id(`${ID_PREFIX}immersiveengineering/${itemID}`);
        event.recipes.create.crushing([output, secondary], input).id(`${ID_PREFIX}create/${itemID}`);
      }
    } else {
      event.recipes.immersiveengineering.crusher(output, input, [], 3200).id(`${ID_PREFIX}immersiveengineering/${itemID}`);
      event.recipes.create.crushing(output, input).id(`${ID_PREFIX}create/${itemID}`);
    }
    event.recipes.mekanism.crushing(output, input).id(`${ID_PREFIX}mekanism/${itemID}`);
    // TODO: Add Ars Nouveau Crushing (note: maybe separate, as it works very differently to the above).
    // TODO: Add MineColonies Crushing.
  };

  /**
   * Creates a Milling recipe for multiple mods.
   * Milling recipes are also added as crushing recipes (but not the reverse). This is in line with the way
   * the Create mod handles Milling vs Crushing.
   * @param {(string|Item)} output The resulting milled item(s).
   * @param {(string|Ingredient)} input A single ingredient to mill.
   * @param {(string|Item)} secondary An optional secondary output.
   */
  const mill = (output, input, secondary) => {
    let itemID = `${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`;
    event.recipes.create.milling(output, input).id(`${ID_PREFIX}create/milling/${itemID}`);
    if (typeof secondary != 'undefined') {
      if (Array.isArray(secondary)) {
        event.recipes.create.milling(output.concat(secondary), input).id(`${ID_PREFIX}create/milling/${itemID}`);
      } else {
        event.recipes.create.milling([output, secondary], input).id(`${ID_PREFIX}create/milling/${itemID}`);
      }
    } else {
      event.recipes.create.milling(output, input).id(`${ID_PREFIX}create/milling/${itemID}`);
    }
    crush(output, input);
  };

  // Remove unused crushing/milling recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of crushing/milling recipes with no replacement, use remove.js instead.
  [
    'create:milling/granite',
    'create:milling/sandstone',
    'create:milling/terracotta',
    'immersiveengineering:crusher/nether_wart',
    'immersiveengineering:crusher/red_sandstone',
    'immersiveengineering:crusher/sandstone',
    'immersiveengineering:crusher/slag',
    'immersiveengineering:crusher/venus_sandstone',
    'mekanism:crushing/red_sandstone_to_sand',
    'mekanism:crushing/sandstone_to_sand',
    'mekanism:crushing/soul_soil_to_soul_sand',
    'mekanism:crushing/stone/to_cobblestone',
    // TODO: check for default bone meal + nether wart milling.
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Crushing
  crush('minecraft:red_sand', 'minecraft:granite');
  crush('minecraft:cobblestone', 'minecraft:stone');
  crush('atmospheric:arid_sand', 'darkerdepths:aridrock');
  crush('biomesoplenty:black_sand', 'minecraft:basalt');
  crush('4x biomesoplenty:rose_quartz_shard', 'biomesoplenty:rose_quartz_block');
  crush('immersiveengineering:slag_gravel', 'immersiveengineering:slag');
  

  // Milling + Crushing
  // Sandstone, Terracotta, and other soft materials can be milled.
  // Harder materials (stone, ore) should only be crushable, not millable.
  
  // Sands
  let saltpeter = Item.of('immersiveengineering:dust_saltpeter').withChance(0.5);
  mill('2x minecraft:red_sand', '#forge:sandstone/red', saltpeter);
  mill('2x minecraft:red_sand', 'minecraft:terracotta');
  mill('2x minecraft:sand', '#forge:sandstone/colorless', saltpeter);
  mill('1x minecraft:soul_sand', 'minecraft:soul_soil');
  mill('2x minecraft:soul_sand', '#forge:sandstone/soul', saltpeter);
  mill('2x ad_astra:venus_sand', '#forge:sandstone/venus_sandstone', saltpeter);
  mill('2x biomesoplenty:black_sand', '#forge:sandstone/black', saltpeter);
  mill('2x biomesoplenty:orange_sand', '#forge:sandstone/orange', saltpeter);
  mill('2x biomesoplenty:white_sand', '#forge:sandstone/white', saltpeter);
  mill('2x blue_skies:crystal_sand', '#forge:sandstone/crystal', saltpeter);
  mill('2x blue_skies:midnight_sand', '#forge:sandstone/midnight', saltpeter);
  mill('2x forbidden_arcanus:soulless_sand', '#forge:sandstone/soulless', saltpeter);

  // Bone Meal
  mill('9x minecraft:bone_meal', 'minecraft:bone_block');
  mill('4x minecraft:bone_meal', 'alexsmobs:fish_bones');
  mill('16x minecraft:bone_meal', 'aquamirae:anglers_fang');
  mill('6x minecraft:bone_meal', 'aquamirae:remnants_saber');
  mill('2x minecraft:bone_meal', 'aquamirae:sharp_bones');
  mill('5x minecraft:bone_meal', 'ars_nouveau:wilden_horn');
  mill('16x minecraft:bone_meal', 'cnb:yeti_antler');
  mill('6x minecraft:bone_meal', 'blue_skies:azulfo_horn');
  mill('4x minecraft:bone_meal', 'enlightened_end:stalker_tooth');
  mill('9x minecraft:bone_meal', 'malum:grim_talc');
  mill('9x minecraft:bone_meal', 'upgrade_aquatic:thrasher_tooth');

  // Other Milling
  mill('4x minecraft:nether_wart', 'minecraft:nether_wart_block');
  mill('1x minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt');
  mill('1x mekanism:sawdust', 'biomesoplenty:dead_branch');
  mill('4x minecraft:rotten_flesh', 'biomesoplenty:flesh');
});
