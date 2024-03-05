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
 * @copyright Valhelsia Inc 2022-2024
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
   * Adds a new ring shaped recipe (donut without corners)
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
    const ring = (output, input, recipeID) => {
      let recipe = event.shaped(output, [' A ', 'A A', ' A '], {A: input});
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

  // Valhelsia
  plusWrapped(Item.of('akashictome:tome', AKASHIC_TOME_NBT), 'minecraft:book', '#forge:bookshelves', 'filled_akashic_tome');

  // Minecraft
  event.shaped('minecraft:bookshelf', [
    'PPP',
    'BBB',
    'PPP'
  ], {
    P: '#minecraft:planks',
    B: 'minecraft:book'
  }).id(`${ID_PREFIX}bookshelf`);
  
  event.shaped('minecraft:bundle', [
    'SCS',
    'C C',
    'CCC'
  ], {
    S: '#forge:string',
    C: 'farmersdelight:canvas'
  }).id(`${ID_PREFIX}bundle`);

  event.shaped('minecraft:chainmail_helmet', [
    'CCC',
    'C C'
  ], {
    C: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_helmet`);

  event.shaped('minecraft:chainmail_chestplate', [
    'C C',
    'CCC',
    'CCC'
  ], {
    C: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_chestplate`);

  event.shaped('minecraft:chainmail_leggings', [
    'CCC',
    'C C',
    'C C'
  ], {
    C: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_leggings`);

  event.shaped('minecraft:chainmail_boots', [
    'C C',
    'C C'
  ], {
    C: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_boots`);

  shaped3x3('minecraft:cobweb', 'minecraft:string', 'cobweb');
  
  event.shaped('minecraft:dispenser', [
    'CCC',
    'CBC',
    'CRC'
  ], {
    C: '#forge:cobblestone',
    B: 'minecraft:crossbow',
    R: 'minecraft:redstone'
  }).id(`${ID_PREFIX}dispenser_with_crossbow`);

  event.shaped('minecraft:furnace_minecart', [
    'F',
    'C',
  ], {
    F: '#valhelsia:furnaces',
    C: 'minecraft:minecart'
  }).id(`${ID_PREFIX}furnace_minecart`);
  
  event.shaped('minecraft:furnace_minecart', [
    'IFI',
    'III',
  ], {
    I: '#forge:ingots/iron',
    F: '#valhelsia:furnaces'
  }).id(`${ID_PREFIX}furnace_minecart_shortcut`);

  event.shaped('4x minecraft:ladder', [
    'S S',
    'SPS',
    'S S'
  ], {
    S: '#forge:rods/wooden',
    P: '#minecraft:planks'
  }).id(`${ID_PREFIX}ladder`);

  // Biomes 'o' Plenty
  event.shaped('3x biomesoplenty:hanging_cobweb', [
    'W',
    'W',
    'W'
  ], {
    W: 'minecraft:cobweb'
  }).id(`${ID_PREFIX}hanging_cobweb`);

  // Blue Skies
  event.shaped('3x blue_skies:spider_webbing', [
    'WW', 
    'W '
  ], {
    W: 'minecraft:cobweb'
  }).id(`${ID_PREFIX}spider_webbing`);

  // Brewin' and Chewin'
  event.shaped('brewinandchewin:pizza', [
    'CCC',
    'MSO',
    ' D '
  ], {
    C: '#valhelsia:cheese',
    M: 'minecraft:brown_mushroom',
    S: 'farmersdelight:tomato_sauce',
    O: '#forge:vegetables/onion',
    D: '#forge:dough/wheat',
  }).id(`${ID_PREFIX}mushroom_pizza`);

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

  // Galosphere
  plusWrapped('4x galosphere:silver_bomb', 'supplementaries:bomb', '#forge:ingots/silver', 'silver_bomb_from_bomb')

  // Immersive Engineering
  shaped3x3('immersiveengineering:storage_silver', '#forge:ingots/silver', 'silver_block_from_silver_ingots');
  shaped3x3('immersiveengineering:storage_steel', '#forge:ingots/steel', 'steel_block_from_steel_ingots');
  shaped3x3('immersiveengineering:ingot_silver', '#forge:nuggets/silver', 'silver_ingot_from_silver_nuggets');

  // Iron's Spellbooks
  ring('irons_spellbooks:silver_ring', '#forge:ingots/silver', 'silver_ring');

  // Mekanism Tools
  event.shaped('mekanismtools:steel_paxel', [
    'ABC',
    ' D ',
    ' D '
  ], {
    A: 'immersiveengineering:axe_steel',
    B: 'immersiveengineering:pickaxe_steel',
    C: 'immersiveengineering:shovel_steel',
    D: 'minecraft:iron_ingot'
  }).id(`${ID_PREFIX}steel_paxel`);

  // Supplementaries
  event.shaped('supplementaries:quiver', [
    'L L',
    'LSL',
    ' L '
  ], {
    S: '#forge:string',
    L: '#forge:leather'
  }).id(`${ID_PREFIX}quiver`);

  // Tetra
  slab('tetra:forged_platform_slab', 'tetra:forged_platform', 'forged_platform_slab_from_forged_platform');
  
  // Twilight Forest
  wrapped('8x twilightforest:nagastone', 'twilightforest:naga_scale', 'minecraft:stone', 'nagastone');
  multiWrapped('4x twilightforest:aurora_block', 'quark:myalite', 'minecraft:blue_ice', 'minecraft:prismarine_shard', 'aurora_block');

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
