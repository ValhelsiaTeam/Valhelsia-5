// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for Immersive Enginnering's crafting methods.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Immersive Engineering Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:immersiveengineering/';

  /**
   * Creates a new Hammer Crushing recipe for use with the Engineer's Hammer.
   * @param {(!string|!Item)} output Output item(s).
   * @param {(!string|!InputItem)} input Input ingredient(s).
   */
  const hammer_crush = (output, input) => {
    event.custom({
      type: 'immersiveengineering:hammer_crushing',
      input: InputItem.of(input).ingredient.toJson(),
      result: OutputItem.of(output).item.toJson()
    }).id(`${ID_PREFIX}hammer_crushing/${OutputItem.of(output).item.id.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  /**
   * Creates a new Fermenter recipe.
   * @param {!string} fluid The ID of the fluid to output.
   * @param {(!string|!InputItem)} input The input item to ferment.
   * @param {!number} amount The quantity of the fluid to create, per operation, in millibuckets.
   * @param {number} energy The energy (in FE) to use, per operation. Defaults to 6400 if omitted.
   */
  const fermenter = (fluid, input, amount, energy) => {
    if (typeof energy == 'undefined') {
      energy = 6400;
    }

    event.custom({
        type: 'immersiveengineering:fermenter',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: InputItem.of(input).toJson(),
        energy: energy
    }).id(`${ID_PREFIX}fermenter/${fluid.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  /**
   * Creates a new Squeezer recipe.
   * @param {!string} fluid The ID of the fluid to output.
   * @param {(!string|!InputItem)} input The input item to squeeze.
   * @param {!number} amount The quantity of the fluid to create, per operation, in millibuckets.
   * @param {number} energy The energy (in FE) to use, per operation. Defaults to 6400 if omitted.
   */
  const squeezer = (fluid, input, amount, energy) => {
    if (typeof energy == 'undefined') {
      energy = 6400;
    }
    
    event.custom({
        type: 'immersiveengineering:squeezer',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: InputItem.of(input).toJson(),
        energy: energy
    }).id(`${ID_PREFIX}squeezer/${fluid.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  /**
   * Creates an Immersive Engineering Unpacking Recipe.
   * @param {(string|Item)} output Output item(s).
   * @param {(string|InputItem)} input Input item(s).
   */
  const unpack = (output, input) => {
    event.recipes.immersiveengineering.metal_press(output, input, 'immersiveengineering:mold_unpacking').id(`${ID_PREFIX}unpacking/${OutputItem.of(output).item.id.replace(':','/')}`);
  }

  // Hammer Crushing Recipes
  hammer_crush('ae2:certus_quartz_dust', '#forge:gems/certus_quartz');
  hammer_crush('ae2:ender_dust', 'minecraft:ender_pearl');
  hammer_crush('ae2:fluix_dust', '#forge:gems/fluix');
  hammer_crush('ae2:sky_dust', 'ae2:sky_stone_block');
  hammer_crush('forbidden_arcanus:arcane_crystal_dust', '#forge:gems/arcane_crystal');
  hammer_crush('galosphere_delight:allurite_shiny_powder', 'galosphere:allurite_shard');
  hammer_crush('galosphere_delight:lumiere_shiny_powder', 'galosphere:lumiere_shard');
  
  // Fermenter Recipes
  fermenter('immersiveengineering:ethanol', '#forge:seeds/rice', 80);

  // Squeezer Recipes 
  squeezer('immersiveengineering:plantoil', '#forge:seeds/hemp', 120);
  squeezer('immersiveengineering:plantoil', '#forge:seeds/flax', 100);
  squeezer('immersiveengineering:plantoil', 'ecologics:walnut', 100);
  squeezer('integrateddynamics:liquid_chorus', 'minecraft:popped_chorus_fruit', 125);
  squeezer('integrateddynamics:liquid_chorus', 'integrateddynamics:proto_chorus', 125);
  squeezer('integrateddynamics:menril_resin', 'integrateddynamics:menril_log', 1000);
  squeezer('integrateddynamics:menril_resin', 'integrateddynamics:menril_planks', 250);
  squeezer('minecraft:lava', 'minecraft:blaze_powder', 250);
  squeezer('minecraft:water', 'minecraft:ice', 1000);
  squeezer('minecraft:water', 'minecraft:snow_block', 1000);
  squeezer('minecraft:water', 'minecraft:snowball', 250);
  squeezer('minecraft:water', 'minecraft:snow', 125);

  // Additional Blast Furnace Fuel Sources
  event.recipes.immersiveengineering.blast_furnace_fuel('#mekanism:enriched/carbon').time(600);

  // Additional Fertilizers
  event.recipes.immersiveengineering.fertilizer('minecolonies:compost').growthModifier(1.5);

  // Cloche Recipes
  // Note: IE's default times also include 640 for wheat + glow berries, but I'd rather keep things more consistent.
  const CLOCHE_TIME_FLOWERS = 480;
  const CLOCHE_TIME_FRUITS = 560;
  const CLOCHE_TIME_CROPS = 800;
  const CLOCHE_TIME_MAGICAL = 1600;

  // Temporary: These have been added to IE on GitHub but not released on CurseForge yet:
  event.recipes.immersiveengineering.cloche(['minecraft:crimson_fungus'], 'minecraft:crimson_fungus', 'minecraft:crimson_nylium', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'minecraft:crimson_fungus'}).id(`${ID_PREFIX}cloche/crimson_fungus`);
  event.recipes.immersiveengineering.cloche(['minecraft:warped_fungus'], 'minecraft:warped_fungus', 'minecraft:warped_nylium', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'minecraft:warped_fungus'}).id(`${ID_PREFIX}cloche/warped_fungus`);
  ALL_VANILLA_FLOWERS.forEach((flower) => {
    let itemID = `minecraft:${flower}`;
    event.recipes.immersiveengineering.cloche([itemID], itemID, 'minecraft:dirt', CLOCHE_TIME_FLOWERS, {type: 'generic', block: itemID}).id(`${ID_PREFIX}cloche/${flower}`);
  });

  event.recipes.immersiveengineering.cloche(['2x atmospheric:aloe_leaves', '2x minecraft:yellow_dye', 'atmospheric:aloe_kernels'], 'atmospheric:aloe_kernels', 'atmospheric:arid_sand', CLOCHE_TIME_CROPS, {type: 'crop', block: 'atmospheric:aloe_vera'}).id(`${ID_PREFIX}cloche/aloe_vera`);

  [
    'water_hyacinth', 
    'warm_monkey_brush', 
    'hot_monkey_brush', 
    'scalding_monkey_brush', 
    'gilia', 
    'yucca_flower', 
    'tall_yucca_flower'
  ].forEach((flower) => {
    let itemID = `atmospheric:${flower}`;
    event.recipes.immersiveengineering.cloche([itemID], itemID, 'minecraft:dirt', CLOCHE_TIME_FLOWERS, {type: 'generic', block: itemID}).id(`${ID_PREFIX}cloche/${flower}`);
  });

  event.recipes.immersiveengineering.cloche(['autumnity:autumn_crocus'], 'autumnity:autumn_crocus', 'minecraft:dirt', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'autumnity:autumn_crocus'}).id(`${ID_PREFIX}cloche/autumn_crocus`);
  event.recipes.immersiveengineering.cloche(['2x autumnity:foul_berries'], 'autumnity:foul_berry_pips', 'minecraft:dirt', CLOCHE_TIME_FRUITS, {type: 'crop', block: 'autumnity:foul_berry_bush'}).id(`${ID_PREFIX}cloche/foul_berries`);

  event.recipes.immersiveengineering.cloche(['2x minecraft:glow_berries'], 'berry_good:glow_berry_pips', 'minecraft:moss', CLOCHE_TIME_FRUITS, {type: 'crop', block: 'minecraft:cave_vines'}).id(`${ID_PREFIX}cloche/glow_berries`);
  event.recipes.immersiveengineering.cloche(['2x minecraft:sweet_berries'], 'berry_good:sweet_berry_pips', 'minecraft:dirt', CLOCHE_TIME_FRUITS, {type: 'crop', block: 'minecraft:sweet_berry_bush'}).id(`${ID_PREFIX}cloche/sweet_berries`);

  event.recipes.immersiveengineering.cloche(['biomesoplenty:toadstool'], 'biomesoplenty:toadstool', ['minecraft:mycelium', 'minecraft:podzol'], CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'biomesoplenty:toadstool'}).id(`${ID_PREFIX}cloche/toadstool`);
  ALL_BOP_FLOWERS.forEach((flower) => {
    let itemID = `biomesoplenty:${flower}`;
    event.recipes.immersiveengineering.cloche([itemID], itemID, 'minecraft:dirt', CLOCHE_TIME_FLOWERS, {type: 'generic', block: itemID}).id(`${ID_PREFIX}cloche/bop_${flower}`);
  });
  
  ALL_BLUE_SKIES_FLOWERS.forEach((flower) => {
    // Note: Blue Skies flowers can all grow on either of the two Blue Skies dirt types, even if that isn't where they naturally grow - makes the script simpler.
    let itemID = `blue_skies:${flower}`;
    event.recipes.immersiveengineering.cloche([itemID], itemID, ['blue_skies:turquoise_dirt', 'blue_skies:lunar_dirt'], CLOCHE_TIME_FLOWERS, {type: 'generic', block: itemID}).id(`${ID_PREFIX}cloche/${flower}`)
  });

  COLORS.forEach((color) => {
    // Botania Mystical Flowers
    let itemID = `botania:${color}_mystical_flower`;
    event.recipes.immersiveengineering.cloche([itemID], itemID, ['minecraft:dirt'], CLOCHE_TIME_MAGICAL, {type: 'generic', block: itemID}).id(`${ID_PREFIX}cloche/${color}_mystical_flower`);

    // Botania Shimmering Mushrooms
    itemID = `botania:${color}_mushroom`;
    event.recipes.immersiveengineering.cloche([itemID], itemID, ['minecraft:mycelium', 'minecraft:podzol'], CLOCHE_TIME_MAGICAL, {type: 'generic', block: itemID}).id(`${ID_PREFIX}cloche/${color}_mushroom`);
  });

  event.recipes.immersiveengineering.cloche(['buzzier_bees:buttercup'], 'buzzier_bees:buttercup', 'minecraft:dirt', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'buzzier_bees:buttercup'}).id(`${ID_PREFIX}cloche/buttercup`);
  event.recipes.immersiveengineering.cloche(['buzzier_bees:white_clover'], 'buzzier_bees:white_clover', 'minecraft:dirt', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'buzzier_bees:white_clover'}).id(`${ID_PREFIX}cloche/white_clover`);
  event.recipes.immersiveengineering.cloche(['buzzier_bees:pink_clover'], 'buzzier_bees:pink_clover', 'minecraft:dirt', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'buzzier_bees:pink_clover'}).id(`${ID_PREFIX}cloche/pink_clover`);

  [
    'cartwheel',
    'bluebell',
    'violet',
    'dianthus',
    'red_lotus_flower',
    'white_lotus_flower',
    'yellow_hibiscus',
    'orange_hibiscus',
    'red_hibiscus',
    'pink_hibiscus',
    'magenta_hibiscus',
    'purple_hibiscus',
  ].forEach((flower) => {
    let itemID = `environmental:${flower}`;
    event.recipes.immersiveengineering.cloche([itemID], itemID, 'minecraft:dirt', CLOCHE_TIME_FLOWERS, {type: 'generic', block: itemID}).id(`${ID_PREFIX}cloche/environmental_${flower}`);
  });

  event.recipes.immersiveengineering.cloche(['forbidden_arcanus:deorum_nugget'], 'forbidden_arcanus:golden_orchid_seeds', 'forbidden_arcanus:magical_farmland', CLOCHE_TIME_MAGICAL, {type: 'crop', block: 'forbidden_arcanus:golden_orchid'}).id(`${ID_PREFIX}cloche/golden_orchid`);
  event.recipes.immersiveengineering.cloche(['forbidden_arcanus:arcane_crystal_dust_speck'], 'forbidden_arcanus:nipa', 'forbidden_arcanus:magical_farmland', CLOCHE_TIME_MAGICAL, {type: 'generic', block: 'forbidden_arcanus:nipa'}).id(`${ID_PREFIX}cloche/nipa`);
  event.recipes.immersiveengineering.cloche(['forbidden_arcanus:fungyss'], 'forbidden_arcanus:fungyss', 'minecraft:diorite', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'forbidden_arcanus:fungyss'}).id(`${ID_PREFIX}cloche/fungyss`);
  event.recipes.immersiveengineering.cloche(['forbidden_arcanus:yellow_orchid'], 'forbidden_arcanus:yellow_orchid', 'minecraft:dirt', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'forbidden_arcanus:yellow_orchid'}).id(`${ID_PREFIX}cloche/yellow_orchid`);

  event.recipes.immersiveengineering.cloche(['2x neapolitan:strawberries'], 'neapolitan:strawberry_pips', 'minecraft:dirt', CLOCHE_TIME_CROPS, {type: 'crop', block: 'neapolitan:strawberry_bush'}).id(`${ID_PREFIX}cloche/strawberries`);

  event.recipes.immersiveengineering.cloche(['upgrade_aquatic:white_searocket'], 'upgrade_aquatic:white_searocket', 'minecraft:sand', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'upgrade_aquatic:white_searocket'}).id(`${ID_PREFIX}cloche/white_searocket`);
  event.recipes.immersiveengineering.cloche(['upgrade_aquatic:pink_searocket'], 'upgrade_aquatic:pink_searocket', 'minecraft:sand', CLOCHE_TIME_FLOWERS, {type: 'generic', block: 'upgrade_aquatic:pink_searocket'}).id(`${ID_PREFIX}cloche/pink_searocket`);
  
  // Metal Press Unpacking Recipes
  unpack('9x minecraft:dried_kelp', 'minecraft:dried_kelp_block');
  unpack('4x minecraft:nether_wart', 'minecraft:nether_wart_block');
  unpack('9x atmospheric:aloe_leaves', 'atmospheric:aloe_bundle');
  unpack('9x atmospheric:barrel_cactus', 'atmospheric:barrel_cactus_batch');
  unpack('9x atmospheric:passion_vine', 'atmospheric:passion_vine_bundle');
  unpack('9x autumnity:snail_goo', 'autumnity:snail_goo_block');
  unpack('3x neapolitan:banana', 'neapolitan:banana_bunch');
  unpack('9x neapolitan:banana', 'neapolitan:banana_crate');

  // Metal Press Gear Recipes
  event.recipes.immersiveengineering.metal_press('immersiveengineering:sawblade', '6x #forge:ingots/steel', 'immersiveengineering:mold_gear').id(`${ID_PREFIX}metal_press/sawblade`);
  event.recipes.immersiveengineering.metal_press('pneumaticcraft:compressed_iron_gear', '4x #forge:ingots/compressed_iron', 'immersiveengineering:mold_gear').id(`${ID_PREFIX}metal_press/compressed_iron_gear`);

  // Metal Press Rod Recipes
  event.recipes.immersiveengineering.metal_press('minecraft:blaze_rod', '6x minecraft:blaze_powder', 'immersiveengineering:mold_rod').id(`${ID_PREFIX}metal_press/blaze_rod`); // Fixes dupe exploit.
  event.recipes.immersiveengineering.metal_press('mekanism:hdpe_rod', '3x mekanism:hdpe_pellet', 'immersiveengineering:mold_rod').id(`${ID_PREFIX}metal_press/hdpe_rod`);
  event.recipes.immersiveengineering.metal_press('mekanism:hdpe_stick', '2x mekanism:hdpe_rod', 'immersiveengineering:mold_rod').id(`${ID_PREFIX}metal_press/hdpe_stick`);
  event.recipes.immersiveengineering.metal_press('upgrade_aquatic:prismarine_rod', '2x minecraft:prismarine_shard', 'immersiveengineering:mold_rod').id(`${ID_PREFIX}metal_press/prismarine_rod`);

  // TODO: Metal Press Packing (2x2 and 3x3).

});