// priority: 9
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Expert Mode shaped recipe additions for Valhelsia 5.
 * 
 * @copyright Valhelsia Inc 2022
 */

/**
 * Shaped Recipe Event Handler
 */
 ServerEvents.recipes(event => {
  if (!global.config.expert) {
    return;
  }

  // Ars Nouveau
  event.shaped('ars_nouveau:novice_spell_book', [
    'ABC',
    'DE ',
    '   ',
  ], {
    A: 'minecraft:book',
    B: 'forbidden_arcanus:deorum_shovel',
    C: 'forbidden_arcanus:deorum_pickaxe',
    D: 'forbidden_arcanus:deorum_axe',
    E: 'forbidden_arcanus:deorum_sword',
  });

  event.shaped('ars_nouveau:apprentice_spell_book', [
    'ABC',
    'CCD',
    'DEE',
  ], {
    A: 'ars_nouveau:novice_spell_book',
    B: 'forbidden_arcanus:obsidian_skull',
    C: 'sullysmod:polished_jade',
    D: 'create:polished_rose_quartz',
    E: 'minecraft:blaze_rod',
  });

  event.shaped('ars_nouveau:archmage_spell_book', [
    'ABC',
    'DDE',
    'EEF',
  ], {
    A: 'ars_nouveau:apprentice_spell_book',
    B: 'forbidden_arcanus:dark_nether_star',
    C: 'ars_nouveau:wilden_tribute',
    D: 'forbidden_arcanus:stellarite_piece',
    E: 'alexsmobs:void_worm_eye',
    F: 'minecraft:totem_of_undying',
  });
  
  event.shaped('ars_nouveau:mob_jar', [
    'SSS',
    'G G',
    'GGG',
  ], {
    S: 'ars_nouveaut:archwood_slab',
    G: 'forbidden_arcanus:runic_glass'
  });

  // Sophisticated Backpacks
  event.shaped('sophisticatedbackpacks:backpack', [
    'ACA',
    'BDB',
    'BBB'
  ], {
    A: '#valhelsia:ropes',
    B: '#forge:leather',
    C: 'quark:ravager_hide',
    D: '#forge:chests/wooden'
  });

});
