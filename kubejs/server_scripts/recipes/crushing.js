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
 * @copyright Valhelsia Inc 2023-2024
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
    // The local name of the recipe ID (ie. ID without namespace).
    let recipeIDLocal = `${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`;

    if (typeof secondary != 'undefined') {
      if (Array.isArray(secondary)) {
        event.recipes.immersiveengineering.crusher(output, input, secondary, 3200).id(`${ID_PREFIX}immersiveengineering/${recipeIDLocal}`);
        event.recipes.create.crushing(output.concat(secondary), input).id(`${ID_PREFIX}create/${recipeIDLocal}`);
      } else {
        event.recipes.immersiveengineering.crusher(output, input, [secondary], 3200).id(`${ID_PREFIX}immersiveengineering/${recipeIDLocal}`);
        event.recipes.create.crushing([output, secondary], input).id(`${ID_PREFIX}create/${recipeIDLocal}`);
      }
    } else {
      event.recipes.immersiveengineering.crusher(output, input, [], 3200).id(`${ID_PREFIX}immersiveengineering/${recipeIDLocal}`);
      event.recipes.create.crushing(output, input).id(`${ID_PREFIX}create/${recipeIDLocal}`);
    }
    event.recipes.mekanism.crushing(output, input).id(`${ID_PREFIX}mekanism/${recipeIDLocal}`);
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
    // The local name of the recipe ID (ie. ID without namespace).
    let recipeIDLocal = `${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`;
    
    if (typeof secondary != 'undefined') {
      if (Array.isArray(secondary)) {
        event.recipes.create.milling(output.concat(secondary), input).id(`${ID_PREFIX}create/milling/${recipeIDLocal}`);
      } else {
        event.recipes.create.milling([output, secondary], input).id(`${ID_PREFIX}create/milling/${recipeIDLocal}`);
      }
    } else {
      event.recipes.create.milling(output, input).id(`${ID_PREFIX}create/milling/${recipeIDLocal}`);
    }
    
    crush(output, input, secondary);
  };

  // Remove unused crushing/milling recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of crushing/milling recipes with no replacement, use remove.js instead.
  [
    'create:compat/ae2/milling/ender_pearl',
    'create:compat/neapolitan/crushing/ice',
    'create:crushing/netherrack',
    'create:crushing/nether_wart_block',
    'create:milling/granite',
    'create:milling/sandstone',
    'create:milling/terracotta',
    'createaddition:compat/immersiveengineering/crushing/coke_block',
    'createaddition:compat/immersiveengineering/crushing/coal_coke',
    'createaddition:compat/immersiveengineering/crushing/steel_ingot',
    'createaddition:crushing/diamond',

    'immersiveengineering:crusher/coke',
    'immersiveengineering:crusher/coke_block',
    'immersiveengineering:crusher/ingot_aluminum',
    'immersiveengineering:crusher/ingot_constantan',
    'immersiveengineering:crusher/ingot_copper',
    'immersiveengineering:crusher/ingot_electrum',
    'immersiveengineering:crusher/ingot_iron',
    'immersiveengineering:crusher/ingot_gold',
    'immersiveengineering:crusher/ingot_lead',
    'immersiveengineering:crusher/ingot_nickel',
    'immersiveengineering:crusher/ingot_silver',
    'immersiveengineering:crusher/ingot_steel',
    'immersiveengineering:crusher/ingot_uranium',

    'immersiveengineering:crusher/glass',
    'immersiveengineering:crusher/nether_wart',
    'immersiveengineering:crusher/red_sandstone',
    'immersiveengineering:crusher/sandstone',
    'immersiveengineering:crusher/slag',
    'immersiveengineering:crusher/venus_sandstone',

    'mekanism:crushing/red_sandstone_to_sand',
    'mekanism:crushing/sandstone_to_sand',
    'mekanism:crushing/soul_soil_to_soul_sand',
    'mekanism:crushing/stone/to_cobblestone',

    'mekanism:processing/diamond/to_dust',
    'mekanism:processing/copper/dust/from_ingot',
    'mekanism:processing/iron/dust/from_ingot',
    'mekanism:processing/gold/dust/from_ingot',
    'mekanism:processing/lead/dust/from_ingot',
    'mekanism:processing/uranium/dust/from_ingot',
  ].forEach((recipeIDLocal) => event.remove({id: recipeIDLocal}));

  // Crushing
  crush('minecraft:red_sand', 'minecraft:granite');
  crush('minecraft:cobblestone', 'minecraft:stone');
  crush('atmospheric:arid_sand', 'darkerdepths:aridrock');
  crush('biomesoplenty:black_sand', 'minecraft:basalt');
  crush('4x biomesoplenty:rose_quartz_shard', 'biomesoplenty:rose_quartz_block');
  crush('immersiveengineering:slag_gravel', 'immersiveengineering:slag');
  crush('create:cinder_flour', '#forge:netherrack', Item.of('create:cinder_flour').withChance(0.5));
  crush('2x immersiveengineering:dust_sulfur', 'biomesoplenty:brimstone', Item.of('immersiveengineering:dust_sulfur').withChance(0.5));

  // Glass Crushing
  crush('quark:clear_shard', 'minecraft:glass_bottle');
  crush('3x quark:clear_shard', 'minecraft:glass');
  crush('3x quark:dirty_shard', 'quark:dirty_glass');
  COLORS.forEach((color) => crush(`3x quark:${color}_shard`, `minecraft:${color}_stained_glass`));
  COLORS.forEach((color) => crush(`3x quark:${color}_shard`, `valhelsia_structures:${color}_metal_framed_glass`, Item.of('mekanism:dust_iron').withChance(0.0625)));

  // Dusts
  crush('immersiveengineering:dust_aluminum', '#forge:ingots/aluminum');
  crush('immersiveengineering:dust_coke', '#forge:coal_coke');
  crush('immersiveengineering:dust_constantan', '#forge:ingots/constantan');
  crush('immersiveengineering:dust_electrum', '#forge:ingots/electrum');
  crush('immersiveengineering:dust_nickel', '#forge:ingots/nickel');
  crush('immersiveengineering:dust_silver', '#forge:ingots/silver');

  crush('mekanism:dust_copper', '#forge:ingots/copper');
  crush('mekanism:dust_diamond', '#forge:gems/diamond');
  crush('mekanism:dust_iron', '#forge:ingots/iron');
  crush('mekanism:dust_gold', '#forge:ingots/gold');
  crush('mekanism:dust_lead', '#forge:ingots/lead');
  crush('mekanism:dust_uranium', '#forge:ingots/uranium');
  crush('mekanism:dust_steel', '#forge:ingots/steel');

  // Dusts from blocks
  crush('9x immersiveengineering:dust_aluminum', '#forge:storage_blocks/aluminum');
  crush('9x immersiveengineering:dust_coke', '#forge:storage_blocks/coal_coke');
  crush('9x immersiveengineering:dust_constantan', '#forge:storage_blocks/constantan');
  crush('9x immersiveengineering:dust_electrum', '#forge:storage_blocks/electrum');
  crush('9x immersiveengineering:dust_nickel', '#forge:storage_blocks/nickel');
  crush('9x immersiveengineering:dust_silver', '#forge:storage_blocks/silver');

  crush('9x mekanism:dust_copper', '#forge:storage_blocks/copper');
  crush('9x mekanism:dust_diamond', '#forge:storage_blocks/diamond');
  crush('9x mekanism:dust_iron', '#forge:storage_blocks/iron');
  crush('9x mekanism:dust_gold', '#forge:storage_blocks/gold');
  crush('9x mekanism:dust_lead', '#forge:storage_blocks/lead');
  crush('9x mekanism:dust_uranium', '#forge:storage_blocks/uranium');
  crush('9x mekanism:dust_steel', '#forge:storage_blocks/steel');
  
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
  mill('4x minecraft:rotten_flesh', 'biomesoplenty:flesh');
  mill('ae2:ender_dust', '#forge:ender_pearls');
  mill('forbidden_arcanus:arcane_crystal_dust', '#forge:gems/arcane_crystal');
  mill('9x forbidden_arcanus:arcane_crystal_dust_speck', '#forge:dusts/arcane_crystal');
  mill('galosphere_delight:allurite_shiny_powder', 'galosphere:allurite_shard');
  mill('galosphere_delight:lumiere_shiny_powder', 'galosphere:lumiere_shard');
  mill('1x mekanism:sawdust', 'biomesoplenty:dead_branch');
  mill('3x neapolitan:ice_cubes', 'minecraft:ice', Item.of('3x neapolitan:ice_cubes').withChance(0.25));
});
