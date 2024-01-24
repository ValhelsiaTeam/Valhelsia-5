// priority: 9
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Shaped recipe additions for Valhelsia 5's Recipe Overhaul Mode
 * 
 * @see shapeless.js
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Shaped Recipe Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.overhaul) {
    return;
  }

  const ID_PREFIX = 'valhelsia:overhaul/crafting/shaped/';

  // ----- Ars Nouveau -----
  // Makes runes useful, and naturally limits the power level of Drygmy farms.
  event.shaped('ars_nouveau:mob_jar', [
    'SSS',
    'G G',
    'GGG',
  ], {
    S: 'ars_nouveau:archwood_slab',
    G: 'forbidden_arcanus:runic_glass'
  }).id(`${ID_PREFIX}containment_jar`);
  
  // Gated behind having visited the End, but otherwise cheap - void shale is plentiful.
  event.shaped('ars_nouveau:void_prism', [
    'VOV',
    'OSO',
    'VOV'
  ], {
    V: 'enlightened_end:void_shale',
    O: '#forge:obsidian',
    S: 'ars_nouveau:spell_prism'
  }).id(`${ID_PREFIX}void_prism`);

  // ----- Botania -----
  // Gated behind having visited the End, but otherwise cheap - void shale is plentiful.
  event.shaped('botania:mana_void', [
    'LVL',
    'VOV',
    'LVL'
  ], {
    L: 'botania:livingrock',
    V: 'enlightened_end:void_shale',
    O: '#forge:obsidian'
  }).id(`${ID_PREFIX}mana_void`);

  // ----- Cave Enhancements -----
  plusWrapped('cave_enhancements:amethyst_flute', 'supplementaries:flute', 'minecraft:amethyst_shard', 'amethyst_flute');

  // ----- Mekanism -----
  // Actually includes ender pearls for lore purposes. No idea why the original recipe didn't.
  event.shaped('mekanism:teleportation_core', [
    'PAP',
    'CWC',
    'PAP'
  ], {
    P: 'ae2:fluix_pearl',
    A: '#forge:alloys/ultimate',
    C: 'integrateddynamics:crystalized_chorus_chunk',
    W: 'waystones:warp_stone'
  }).id(`${ID_PREFIX}teleportation_core`);

  // ----- Sophisticated Backpacks -----
  // Gated behind having visited the End, but otherwise cheap - void shale is plentiful.
  event.shaped('sophisticatedbackpacks:void_upgrade', [
    'VLV',
    'OUO',
    'ROR'
  ], {
    L: 'minecraft:lava_bucket',
    V: 'enlightened_end:void_shale',
    O: '#forge:obsidian',
    U: 'sophisticatedbackpacks:upgrade_base',
    R: 'minecraft:redstone',
  }).id(`${ID_PREFIX}backpack_void_upgrade`);

  // Requires doing some of either Mekanism or PneumaticCraft.
  event.shaped('sophisticatedbackpacks:advanced_void_upgrade', [
    'GCG',
    'RUR',
    'GRG'
  ], {
    G: '#forge:ingots/gold',
    C: '#forge:circuits/elite',
    R: 'minecraft:redstone',
    U: 'sophisticatedbackpacks:void_upgrade'
  }).id(`${ID_PREFIX}backpack_advanced_void_upgrade`);

  // ----- Storage Drawers -----
  // Gated behind having steel production.
  event.shaped('storagedrawers:emerald_storage_upgrade', [
    'SSS',
    'DUD',
    'SSS'
  ], {
    S: '#forge:rods/steel',
    E: 'minecraft:diamond',
    U: 'minecraft:storagedrawers:upgrade_template'
  }).id(`${ID_PREFIX}diamond_storage_upgrade`);

  // Gated behind having steel production (and blocks of emerald instead of single emeralds).
  event.shaped('storagedrawers:emerald_storage_upgrade', [
    'SSS',
    'EUE',
    'SSS'
  ], {
    S: '#forge:rods/steel',
    E: 'minecraft:emerald_block',
    U: 'minecraft:storagedrawers:upgrade_template'
  }).id(`${ID_PREFIX}emerald_storage_upgrade`);

  // Gated behind having visited the End, but otherwise cheap - void shale is plentiful.
  event.shaped('storagedrawers:void_upgrade', [
    'VOV',
    'OUO',
    'VOV'
  ], {
    V: 'enlightened_end:void_shale',
    O: '#forge:obsidian',
    U: 'minecraft:storagedrawers:upgrade_template'
  }).id(`${ID_PREFIX}drawer_void_upgrade`);

  // ----- Xerca's Music Maker Mod -----
  event.shaped('xercamusic:lyre', [
    'S S',
    ' T ',
  ], {
    S: '#forge:rods/wooden',
    T: 'minecraft:turtle_helmet'
  }).id(`${ID_PREFIX}lyre`);

  event.shaped('xercamusic:xylophone', [
    'BBB',
    'TTT',
  ], {
    B: 'atmospheric:rosewood_planks',
    T: '#forge:rods/steel'
  }).id(`${ID_PREFIX}xylophone`);

});
