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
  hammer_crush('ae2:ender_dust', 'minecraft:ender_pearl');
  
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
  //event.recipes.immersiveengineering.cloche(['minecraft:crimson_fungus'], 'minecraft:crimson_fungus', 'minecraft:crimson_nylium', 1000, {type: 'generic', block: 'minecraft:crimson_fungus'});
  //event.recipes.immersiveengineering.cloche(['minecraft:warped_fungus'], 'minecraft:warped_fungus', 'minecraft:warped_nylium', 1000, {type: 'generic', block: 'minecraft:warped_fungus'});
  //event.recipes.immersiveengineering.cloche(['2x atmospheric:aloe_leaves', '2x minecraft:yellow_dye', 'atmospheric:aloe_kernels'], 'atmospheric:aloe_kernels', 'atmospheric:arid_sand', 800, {type: 'crop', block: 'atmospheric:aloe_vera'});
  //event.recipes.immersiveengineering.cloche(['2x autumnity:foul_berries'], 'autumnity:foul_berry_pips', 'minecraft:dirt', 560, {type: 'crop', block: 'autumnity:foul_berry_bush'});
  //event.recipes.immersiveengineering.cloche(['forbidden_arcanus:deorum_nugget'], 'forbidden_arcanus:golden_orchid_seeds', 'forbidden_arcanus:magical_farmland', 1600, {type: 'crop', block: 'forbidden_arcanus:golden_orchid'});
  //event.recipes.immersiveengineering.cloche(['forbidden_arcanus:arcane_crystal_dust_speck'], 'forbidden_arcanus:nipa', 'forbidden_arcanus:magical_farmland', 1600, {type: 'generic', block: 'forbidden_arcanus:nipa'});
  //event.recipes.immersiveengineering.cloche(['forbidden_arcanus:fungyss'], 'forbidden_arcanus:fungyss', 'minecraft:diorite', 1000, {type: 'generic', block: 'forbidden_arcanus:fungyss'});
  //event.recipes.immersiveengineering.cloche(['2x neapolitan:strawberries'], 'neapolitan:strawberry_pips', 'minecraft:dirt', 800, {type: 'crop', block: 'neapolitan:strawberry_bush'});
  
  // Metal Press Unpacking Recipes
  unpack('9x minecraft:dried_kelp', 'minecraft:dried_kelp_block');
  unpack('4x minecraft:nether_wart', 'minecraft:nether_wart_block');
  unpack('9x atmospheric:aloe_leaves', 'atmospheric:aloe_bundle');
  unpack('9x atmospheric:barrel_cactus', 'atmospheric:barrel_cactus_batch');
  unpack('9x atmospheric:passion_vine', 'atmospheric:passion_vine_bundle');
  unpack('9x autumnity:snail_goo', 'autumnity:snail_goo_block');
  unpack('3x neapolitan:banana', 'neapolitan:banana_bunch');
  unpack('9x neapolitan:banana_bunch', 'neapolitan:banana_crate');

  // Other Metal Press Recipes
  event.recipes.immersiveengineering.metal_press('minecraft:blaze_rod', '6x minecraft:blaze_powder', 'immersiveengineering:mold_rod'); // Fixes dupe exploit.
  event.recipes.immersiveengineering.metal_press('upgrade_aquatic:prismarine_rod', '2x minecraft:prismarine_shard', 'immersiveengineering:mold_rod');

});