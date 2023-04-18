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

  /**
   * Creates a new Hammer Crushing recipe for use with the Engineer's Hammer.
   * @param {(!string|!Item)} output Output item(s).
   * @param {(!string|!Ingredient)} input Input ingredient(s).
   */
  const hammer_crush = (output, input) => {
    event.custom({
      type: 'immersiveengineering:hammer_crushing',
      input: Ingredient.of(input).toJson(),
      result: Item.of(output).toJson()
    });
  };

  /**
   * Creates a new Fermenter recipe.
   * @param {!string} fluid The ID of the fluid to output.
   * @param {(!string|!Ingredient)} input The input item to ferment.
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
        input: Ingredient.of(input).toJson(),
        energy: energy
    });
  };

  /**
   * Creates a new Squeezer recipe.
   * @param {!string} fluid The ID of the fluid to output.
   * @param {(!string|!Ingredient)} input The input item to squeeze.
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
        input: Ingredient.of(input).toJson(),
        energy: energy
    });
  };

  /**
   * Creates an Immersive Engineering Unpacking Recipe.
   * @param {(string|Item)} output Output item(s).
   * @param {(string|Ingredient)} input Input item(s).
   */
  const unpack = (output, input) => {
    event.recipes.immersiveengineeringMetalPress(output, input, 'immersiveengineering:mold_unpacking');
  }


  // Hammer Crushing Recipes
  hammer_crush('ae2:ender_dust', 'minecraft:ender_pearl');
  
  // Fermenter Recipes
  fermenter('immersiveengineering:ethanol', '#forge:seeds/rice', 80);

  // Squeezer Recipes 
  squeezer('immersiveengineering:plantoil', '#forge:seeds/hemp', 120);
  squeezer('immersiveengineering:plantoil', '#forge:seeds/flax', 100);
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
  event.recipes.immersiveengineeringBlastFurnaceFuel('#mekanism:enriched/carbon').time(600);

  // Additional Fertilizers
  event.recipes.immersiveengineeringFertilizer('minecolonies:compost').growthModifier(1.5);

  // Cloche Recipes
  event.recipes.immersiveengineeringCloche(['minecraft:crimson_fungus'], 'minecraft:crimson_fungus', 'minecraft:crimson_nylium', {type: 'generic', block: 'minecraft:crimson_fungus'}).time(1000);
  event.recipes.immersiveengineeringCloche(['minecraft:warped_fungus'], 'minecraft:warped_fungus', 'minecraft:warped_nylium', {type: 'generic', block: 'minecraft:warped_fungus'}).time(1000);
  event.recipes.immersiveengineeringCloche(['2x atmospheric:aloe_leaves', '2x minecraft:yellow_dye', 'atmospheric:aloe_kernels'], 'atmospheric:aloe_kernels', 'atmospheric:arid_sand', {type: 'crop', block: 'atmospheric:aloe_vera'}).time(800);
  event.recipes.immersiveengineeringCloche(['2x autumnity:foul_berries'], 'autumnity:foul_berry_pips', 'minecraft:dirt', {type: 'crop', block: 'autumnity:foul_berry_bush'}).time(560);
  event.recipes.immersiveengineeringCloche(['forbidden_arcanus:deorum_nugget'], 'forbidden_arcanus:golden_orchid_seeds', 'forbidden_arcanus:magical_farmland', {type: 'crop', block: 'forbidden_arcanus:golden_orchid'}).time(1600);
  event.recipes.immersiveengineeringCloche(['forbidden_arcanus:arcane_crystal_dust_speck'], 'forbidden_arcanus:nipa', 'forbidden_arcanus:magical_farmland', {type: 'generic', block: 'forbidden_arcanus:nipa'}).time(1600);
  event.recipes.immersiveengineeringCloche(['forbidden_arcanus:fungyss'], 'forbidden_arcanus:fungyss', 'minecraft:diorite', {type: 'generic', block: 'forbidden_arcanus:fungyss'}).time(1000);
  event.recipes.immersiveengineeringCloche(['2x neapolitan:strawberries'], 'neapolitan:strawberry_pips', 'minecraft:dirt', {type: 'crop', block: 'neapolitan:strawberry_bush'}).time(800);
  
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
  event.recipes.immersiveengineeringMetalPress('minecraft:blaze_rod', '6x minecraft:blaze_powder', 'immersiveengineering:mold_rod'); // Fixes dupe exploit.
  event.recipes.immersiveengineeringMetalPress('upgrade_aquatic:prismarine_rod', '2x minecraft:prismarine_shard', 'immersiveengineering:mold_rod');

});