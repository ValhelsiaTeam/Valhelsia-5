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

  
  // Convenience Functions:

  /**
   * Adds a new 2x2 shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const shaped2x2 = (output, input, recipeID) => {
    let recipe = event.shaped(output, ['AA', 'AA'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new 3x3 shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const shaped3x3 = (output, input, recipeID) => {
    let recipe = event.shaped(output, ['AAA', 'AAA', 'AAA'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new donut shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const donut = (output, input, recipeID) => {
    let recipe = event.shaped(output, ['AAA', 'A A', 'AAA'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new wrapped shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} core Middle ingredient.
   * @param {*} wrap Outer ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const wrapped = (output, core, wrap, recipeID) => {
    let recipe = event.shaped(output, ['AAA', 'ABA', 'AAA'], {A: wrap, B: core});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new plus wrapped shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} core Middle ingredient.
   * @param {*} wrap Outer ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const plusWrapped = (output, core, wrap, recipeID) => {
    let recipe = event.shaped(output, [' A ', 'ABA', ' A '], {A: wrap, B: core});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };
  
  /**
   * Adds a new multi-wrapped shaped recipe (an item wrapped with two different items).
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} core Middle ingredient.
   * @param {*} cardinal Cardinal outer ingredients.
   * @param {*} diagonal Diagonal outer ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const multiWrapped = (output, core, cardinal, diagonal, recipeID) => {
    let recipe = event.shaped(output, ['ABA', 'BCB', 'ABA'], {A: diagonal, B: cardinal, C: core});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new 'barrel' shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} plank Plank ingredient.
   * @param {*} slab Slab ingredient.
   * @param {string} [recipeID] ID of the recipe.
   */
  const barrel = (output, plank, slab, recipeID) => {
    let recipe = event.shaped(output, ['ABA', 'A A', 'ABA'], {A: plank, B: slab});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new 'slab' shaped recipe.
   * 
   * @param {*} output Item to craft (quantity is automatically set).
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const slab = (output, input, recipeID) => {
    let recipe = event.shaped(Item.of(output, 6), ['AAA'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new 'vertical slab' shaped recipe.
   * 
   * @param {*} output Item to craft (quantity is automatically set).
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const vslab = (output, input, recipeID) => {
    let recipe = event.shaped(Item.of(output, 3), ['A', 'A', 'A'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

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

  // ----- CC: Tweaked -----
  event.shaped('computercraft:computer_normal', [
    'SSS',
    'SMS',
    'SCS'
  ], {
    S: '#forge:plates/iron',
    M: 'computercraft:monitor_normal',
    C: '#forge:circuits',
  }).id(`${ID_PREFIX}computer_normal`);
  
  event.shaped('computercraft:computer_advanced', [
    'SSS',
    'SMS',
    'SCS'
  ], {
    S: '#forge:plates/gold',
    M: 'computercraft:monitor_advanced',
    C: '#forge:circuits',
  }).id(`${ID_PREFIX}computer_advanced`);
  
  event.shaped('computercraft:monitor_normal', [
    'SSS',
    'SPS',
    'SBS'
  ], {
    S: '#forge:plates/iron',
    M: '#ae2:illuminated_panel',
    B: 'quark:iron_button',
  }).id(`${ID_PREFIX}monitor_normal`);
  
  event.shaped('computercraft:monitor_advanced', [
    'SSS',
    'SPS',
    'SBS'
  ], {
    S: '#forge:plates/gold',
    M: '#ae2:illuminated_panel',
    B: 'quark:iron_button',
  }).id(`${ID_PREFIX}monitor_advanced`);

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
  event.shaped('sophisticatedbackpacks:backpack', [
    'RHR',
    'LCL',
    'LLL'
  ], {
    R: '#valhelsia:ropes',
    L: '#forge:leather',
    H: 'quark:ravager_hide',
    C: '#forge:chests/wooden'
  }).id(`${ID_PREFIX}backpack`);

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
    D: 'minecraft:diamond',
    U: 'storagedrawers:upgrade_template'
  }).id(`${ID_PREFIX}diamond_storage_upgrade`);

  // Gated behind having steel production (and blocks of emerald instead of single emeralds).
  event.shaped('storagedrawers:emerald_storage_upgrade', [
    'SSS',
    'EUE',
    'SSS'
  ], {
    S: '#forge:rods/steel',
    E: 'minecraft:emerald_block',
    U: 'storagedrawers:upgrade_template'
  }).id(`${ID_PREFIX}emerald_storage_upgrade`);

  // Gated behind having visited the End, but otherwise cheap - void shale is plentiful.
  event.shaped('storagedrawers:void_upgrade', [
    'VOV',
    'OUO',
    'VOV'
  ], {
    V: 'enlightened_end:void_shale',
    O: '#forge:obsidian',
    U: 'storagedrawers:upgrade_template'
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
