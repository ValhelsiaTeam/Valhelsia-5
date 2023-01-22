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

  // Create

  // Cave Enhancements
  shaped2x2('biomesoplenty:rose_quartz_block', 'cave_enhancements:rose_quartz');

  // Darker Depths
  shaped2x2('darkerdepths:ash_block', '#valhelsia:ash');

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

});
