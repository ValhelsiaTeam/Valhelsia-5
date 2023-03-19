// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Shaped recipe additions for Valhelsia 5.
 * 
 * Contains several convenience functions for frequently used shapes.
 * 
 * @see shapeless.js
 * 
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Shaped Recipe Event Handler
 */
ServerEvents.recipes(event => {

  // Convenience Functions:
  const shaped2x2 = (output, input) => {event.shaped(output, ['AA', 'AA'], {A: input})};
  const shaped3x3 = (output, input) => {event.shaped(output, ['AAA', 'AAA', 'AAA'], {A: input})};
  const donut = (output, input) => {event.shaped(output, ['AAA', 'A A', 'AAA'], {A: input})};
  const wrapped = (output, core, wrap) => {event.shaped(output, ['AAA', 'ABA', 'AAA'], {A: wrap, B: core})};
  const plusWrapped = (output, core, wrap) => {event.shaped(output, [' A ', 'ABA', ' A '], {A: wrap, B: core})};
  const barrel = (output, plank, slab) => {event.shaped(output, ['ABA', 'A A', 'ABA'], {A: plank, B: slab})};
  const slab = (output, input) => {event.shaped(Item.of(output, 6), ['AAA'], {A: input})};
  const vslab = (output, input) => {event.shaped(Item.of(output, 3), ['A', 'A', 'A'], {A: input})};

  // Valhelsia
  plusWrapped(Item.of('akashictome:tome', AKASHIC_TOME_NBT), 'minecraft:book', '#forge:bookshelves');

  // Minecraft
  shaped3x3('minecraft:cobweb', 'minecraft:string');

  event.shaped('minecraft:dispenser', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: '#forge:cobblestone',
    B: 'minecraft:crossbow',
    C: 'minecraft:redstone'
  });

  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  });

  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  });

  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  });

  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  });

  event.shaped('minecraft:bundle', [
    'SCS',
    'C C',
    'CCC'
  ], {
    S: '#forge:string',
    C: 'farmersdelight:canvas'
  });

  event.shaped('minecraft:bookshelf', [
    'AAA',
    'BBB',
    'AAA'
  ], {
    A: '#minecraft:planks',
    B: 'minecraft:book'
  });
  
  event.shaped('4x minecraft:ladder', [
    'A A',
    'ABA',
    'A A'
  ], {
    A: '#forge:rods/wooden',
    B: '#minecraft:planks'
  });

  event.shaped('minecraft:chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: '#minecraft:planks'
  });

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

  // Darker Depths
  shaped2x2('darkerdepths:ash_block', '#valhelsia:ash');

  vslab('darkerdepths:petrified_vertical_slab', 'darkerdepths:petrified_slab');

  vslab('darkerdepths:aridrock_vertical_slab', 'darkerdepths:aridrock_slab');
  vslab('darkerdepths:aridrock_bricks_vertical_slab', 'darkerdepths:aridrock_bricks_slab');
  vslab('darkerdepths:polished_aridrock_vertical_slab', 'darkerdepths:polished_aridrock_slab');

  vslab('darkerdepths:grimestone_vertical_slab', 'darkerdepths:grimestone_slab');
  vslab('darkerdepths:grimestone_bricks_vertical_slab', 'darkerdepths:grimestone_bricks_slab');
  vslab('darkerdepths:polished_grimestone_vertical_slab', 'darkerdepths:polished_grimestone_slab');

  vslab('darkerdepths:limestone_vertical_slab', 'darkerdepths:limestone_slab');
  vslab('darkerdepths:limestone_bricks_vertical_slab', 'darkerdepths:limestone_bricks_slab');
  vslab('darkerdepths:polished_limestone_vertical_slab', 'darkerdepths:polished_limestone_slab');

  vslab('darkerdepths:shale_vertical_slab', 'darkerdepths:shale_slab');
  vslab('darkerdepths:shale_bricks_vertical_slab', 'darkerdepths:shale_bricks_slab');
  vslab('darkerdepths:polished_shale_vertical_slab', 'darkerdepths:polished_shale_slab');

  // Decorative Blocks
  event.shaped('2x decorative_blocks:chain', [
    'A',
    'B',
    'A'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_nugget'
  });

  event.shaped('4x decorative_blocks:rocky_dirt', [
    'AB',
    'BA'
  ], {
    A: 'minecraft:dirt',
    B: '#forge:cobblestone'
  });

  // Ecologics
  shaped2x2('minecraft:moss_block', 'ecologics:surface_moss');

  // Farmer's Delight
  shaped3x3('farmersdelight:organic_compost', 'minecolonies:compost');

  // Forbidden & Arcanus
  event.shaped('forbidden_arcanus:deorum_chain', [
    'A',
    'B',
    'A'
  ], {
    A: 'forbidden_arcanus:deorum_nugget',
    B: 'forbidden_arcanus:deorum_ingot'
  });

  // Immersive Engineering
  shaped3x3('immersiveengineering:storage_silver', '#forge:ingots/silver');
  shaped3x3('immersiveengineering:storage_steel', '#forge:ingots/steel');

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

  // Supplementaries
  event.shaped('supplementaries:quiver', [
    'L L',
    'LSL',
    ' L '
  ], {
    S: '#forge:string',
    L: '#forge:leather'
  });

  // Waystones
  event.shaped('waystones:warp_scroll', [
    'NWN',
    'NEN',
    'PPP'
  ], {
    N: '#forge:nuggets/gold',
    W: '#forge:dusts/warp',
    E: '#forge:ender_pearls',
    P: '#forge:paper'
  }).id('valhelsia:warp_scroll');

  event.shaped('waystones:warp_stone', [
    'WPW',
    'PEP',
    'WPW'
  ], {
    W: '#forge:dusts/warp',
    P: '#forge:ender_pearls',
    E: '#forge:gems/emerald'
  }).id('valhelsia:warp_stone');

});
