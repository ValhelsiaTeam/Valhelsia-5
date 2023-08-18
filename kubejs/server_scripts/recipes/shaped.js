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
  const ID_PREFIX = 'valhelsia:crafting/';

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

  // Valhelsia
  plusWrapped(Item.of('akashictome:tome', AKASHIC_TOME_NBT), 'minecraft:book', '#forge:bookshelves', 'filled_akashic_tome');

  // Minecraft
  shaped3x3('minecraft:cobweb', 'minecraft:string', 'cobweb');

  event.shaped('minecraft:dispenser', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: '#forge:cobblestone',
    B: 'minecraft:crossbow',
    C: 'minecraft:redstone'
  }).id(`${ID_PREFIX}dispenser_with_crossbow`);

  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_helmet`);

  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_chestplate`);

  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_leggings`);

  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_boots`);

  event.shaped('minecraft:bundle', [
    'SCS',
    'C C',
    'CCC'
  ], {
    S: '#forge:string',
    C: 'farmersdelight:canvas'
  }).id(`${ID_PREFIX}bundle`);

  event.shaped('minecraft:bookshelf', [
    'AAA',
    'BBB',
    'AAA'
  ], {
    A: '#minecraft:planks',
    B: 'minecraft:book'
  }).id(`${ID_PREFIX}bookshelf`);
  
  event.shaped('4x minecraft:ladder', [
    'A A',
    'ABA',
    'A A'
  ], {
    A: '#forge:rods/wooden',
    B: '#minecraft:planks'
  }).id(`${ID_PREFIX}ladder`);

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
  }).id(`${ID_PREFIX}novice_spell_book`);

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
  }).id(`${ID_PREFIX}apprentice_spell_book`);

  event.shaped('ars_nouveau:archmage_spell_book', [
    'ABC',
    'DDE',
    'FFG',
  ], {
    A: 'ars_nouveau:apprentice_spell_book',
    B: 'forbidden_arcanus:dark_nether_star',
    C: 'ars_nouveau:wilden_tribute',
    D: 'forbidden_arcanus:stellarite_piece',
    E: 'alexsmobs:void_worm_eye',
    F: 'forbidden_arcanus:dragon_scale',
    G: 'minecraft:totem_of_undying',
  }).id(`${ID_PREFIX}archmage_spell_book`);

  // Blue Skies
  event.shaped('3x blue_skies:spider_webbing', [
    'WW', 
    'W '
  ], {
    W: 'minecraft:cobweb'
  }).id(`${ID_PREFIX}spider_webbing`);

  // Darker Depths
  shaped2x2('darkerdepths:ash_block', '#valhelsia:ash', 'ash_block');

  vslab('darkerdepths:petrified_vertical_slab', 'darkerdepths:petrified_slab', 'darkerdepths/petrified_vertical_slab');

  vslab('darkerdepths:aridrock_vertical_slab', 'darkerdepths:aridrock_slab', 'darkerdepths/aridrock_vertical_slab');
  vslab('darkerdepths:aridrock_bricks_vertical_slab', 'darkerdepths:aridrock_bricks_slab', 'darkerdepths/aridrock_bricks_vertical_slab');
  vslab('darkerdepths:polished_aridrock_vertical_slab', 'darkerdepths:polished_aridrock_slab', 'darkerdepths/polished_aridrock_vertical_slab');

  vslab('darkerdepths:grimestone_vertical_slab', 'darkerdepths:grimestone_slab', 'darkerdepths/grimestone_vertical_slab');
  vslab('darkerdepths:grimestone_bricks_vertical_slab', 'darkerdepths:grimestone_bricks_slab', 'darkerdepths/grimestone_bricks_vertical_slab');
  vslab('darkerdepths:polished_grimestone_vertical_slab', 'darkerdepths:polished_grimestone_slab', 'darkerdepths/polished_grimestone_vertical_slab');

  vslab('darkerdepths:limestone_vertical_slab', 'darkerdepths:limestone_slab', 'darkerdepths/limestone_vertical_slab');
  vslab('darkerdepths:limestone_bricks_vertical_slab', 'darkerdepths:limestone_bricks_slab', 'darkerdepths/limestone_bricks_vertical_slab');
  vslab('darkerdepths:polished_limestone_vertical_slab', 'darkerdepths:polished_limestone_slab', 'darkerdepths/polished_limestone_vertical_slab');

  vslab('darkerdepths:shale_vertical_slab', 'darkerdepths:shale_slab', 'darkerdepths/shale_vertical_slab');
  vslab('darkerdepths:shale_bricks_vertical_slab', 'darkerdepths:shale_bricks_slab', 'darkerdepths/shale_bricks_vertical_slab');
  vslab('darkerdepths:polished_shale_vertical_slab', 'darkerdepths:polished_shale_slab', 'darkerdepths/polished_shale_vertical_slab');

  // Decorative Blocks
  event.shaped('2x decorative_blocks:chain', [
    'A',
    'B',
    'A'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_nugget'
  }).id(`${ID_PREFIX}big_chain`);

  event.shaped('4x decorative_blocks:rocky_dirt', [
    'AB',
    'BA'
  ], {
    A: 'minecraft:dirt',
    B: '#forge:cobblestone'
  }).id(`${ID_PREFIX}rocky_dirt`);

  // Ecologics
  shaped2x2('minecraft:moss_block', 'ecologics:surface_moss', 'moss_block');

  // Farmer's Delight
  shaped3x3('farmersdelight:organic_compost', 'minecolonies:compost', 'organic_compost_from_minecolonies_compost');
  shaped2x2('farmersdelight:canvas', 'supplementaries:flax', 'canvas_from_flax');

  // Immersive Engineering
  shaped3x3('immersiveengineering:storage_silver', '#forge:ingots/silver', 'silver_block_from_silver_ingots');
  shaped3x3('immersiveengineering:storage_steel', '#forge:ingots/steel', 'steel_block_from_steel_ingots');
  shaped3x3('immersiveengineering:ingot_silver', '#forge:nuggets/silver', 'silver_ingot_from_silver_nuggets');

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
  }).id(`${ID_PREFIX}backpack`);

  // Supplementaries
  event.shaped('supplementaries:quiver', [
    'L L',
    'LSL',
    ' L '
  ], {
    S: '#forge:string',
    L: '#forge:leather'
  }).id(`${ID_PREFIX}quiver`);
  
  // Twilight Forest
  wrapped('8x twilightforest:nagastone', 'twilightforest:naga_scale', 'minecraft:stone', 'nagastone');

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
  }).id(`${ID_PREFIX}warp_scroll`);

  event.shaped('waystones:warp_stone', [
    'WPW',
    'PEP',
    'WPW'
  ], {
    W: '#forge:dusts/warp',
    P: '#forge:ender_pearls',
    E: '#forge:gems/emerald'
  }).id(`${ID_PREFIX}warp_stone`);

});
