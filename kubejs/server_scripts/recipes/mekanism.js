// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for Mekanism's crafting methods.
 * 
 * @see crushing.js for crushing recipes.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Mekanism Recipe Event Handler
 */
ServerEvents.recipes(event => {

  // Temporary fix: Disable Mekanism recipes until KubeJS Mekanism is fixed.
  return;
  
  /**
   * Adds a recipe to fill a Metallurgic Infuser with a given type of infusion material.
   * @param {string} type The infusion material to fill the infuser with (eg. 'mekanism:carbon').
   * @param {(string|Ingredient)} input The input ingredient to convert into the infusion material.
   * @param {number} amount The amount of the given type to add.
   */
  const infusionConversion = (type, input, amount) => {
    event.custom({
      type: 'mekanism:infusion_conversion',
      input: {
        ingredient: Ingredient.of(input).toJson()
      },
      output: {
        infuse_type: type,
        amount: amount
      }
    });
  };

  /**
   * Creates a recipe to turn a block into a mossy version of it.
   * @param {(string|Item)} output The item or item ID of the mossy block.
   * @param {(string|Ingredient)} input The item or item ID of the base block.
   */
  const mossify = (output, input) => {
    event.recipes.mekanismMetallurgicInfusing(output, input, 'mekanism:bio', 10);
  };

  /**
   * Creates a recipe to turn a block into a fungal version of it.
   * @param {(string|Item)} output The item or item ID of the mossy block.
   * @param {(string|Ingredient)} input The item or item ID of the base block.
   */
  const fungify = (output, input) => {
    event.recipes.mekanismMetallurgicInfusing(output, input, 'mekanism:fungi', 10);
  };

  /**
   * Creates a recipe to crush an ingredient into Bio Fuel.
   * Note: This is in mekanism.js rather than in crushing.js due to being Mekanism-specific.
   * @param {(string|Ingredient)} input The item or item ID of the base block.
   * @param {number} quantity The number of Bio Fuel items to output.
   */
  const bioCrush = (input, quantity) => {
    event.recipes.mekanismCrushing(`${quantity}x mekanism:bio_fuel`, input);
  };

  // Bio Fuel
  // Note: When adding bio fuel crushing, use tags where practical, even if they have to be created
  // (such as 'valhelsia:grasses' or 'forge:fruits' or whatever).

  // Remove specific biofuel crushing recipes in favour of using tags instead.
  [
    // Saplings
    'mekanism:crushing/biofuel/oak_sapling',
    'mekanism:crushing/biofuel/spruce_sapling',
    'mekanism:crushing/biofuel/birch_sapling',
    'mekanism:crushing/biofuel/jungle_sapling',
    'mekanism:crushing/biofuel/acacia_sapling',
    'mekanism:crushing/biofuel/dark_oak_sapling',
    'mekanism:crushing/biofuel/mangrove_sapling',

    // Leaves
    //'mekanism:crushing/biofuel/oak_leaves',
    //'mekanism:crushing/biofuel/spruce_leaves',
    //'mekanism:crushing/biofuel/birch_leaves',
    //'mekanism:crushing/biofuel/jungle_leaves',
    //'mekanism:crushing/biofuel/acacia_leaves',
    //'mekanism:crushing/biofuel/dark_oak_leaves',
    //'mekanism:crushing/biofuel/azalea_leaves',
    //'mekanism:crushing/biofuel/mangrove_leaves',

    // Seeds
    'mekanism:crushing/biofuel/beetroot_seeds',
    'mekanism:crushing/biofuel/melon_seeds',
    'mekanism:crushing/biofuel/pumpkin_seeds',
    'mekanism:crushing/biofuel/wheat_seeds',

    // Flowers
    'mekanism:crushing/biofuel/dandelion',
    'mekanism:crushing/biofuel/poppy',
    'mekanism:crushing/biofuel/blue_orchid',
    'mekanism:crushing/biofuel/allium',
    'mekanism:crushing/biofuel/azure_bluet',
    'mekanism:crushing/biofuel/red_tulip',
    'mekanism:crushing/biofuel/orange_tulip',
    'mekanism:crushing/biofuel/white_tulip',
    'mekanism:crushing/biofuel/pink_tulip',
    'mekanism:crushing/biofuel/oxeye_daisy',
    'mekanism:crushing/biofuel/cornflower',
    'mekanism:crushing/biofuel/lily_of_the_valley',
    'mekanism:crushing/biofuel/wither_rose',
    'mekanism:crushing/biofuel/sunflower',
    'mekanism:crushing/biofuel/lilac',
    'mekanism:crushing/biofuel/rose_bush',
    'mekanism:crushing/biofuel/peony',

    'mekanism:crushing/biofuel/melon_slice', // #blameurmet
    
    // TODO: More as tags are created / expanded.
    // See default recipes here: https://github.com/mekanism/Mekanism/tree/1.18.x/src/datagen/generated/mekanism/data/mekanism/recipes/crushing/biofuel
  ].forEach((recipeID) => event.remove({id: recipeID}));
  
  bioCrush('#minecraft:flowers', 5);
  bioCrush('#minecraft:saplings', 2);
  bioCrush('#forge:seeds', 2);
  bioCrush('minecraft:melon_slice', 2); // #blameurmet

  // Coal Coke -> Carbon / Enriched Carbon
  event.recipes.mekanismEnriching('2x mekanism:enriched_carbon', '#forge:coal_coke');
  infusionConversion('mekanism:carbon', '#forge:coal_coke', 40);
  infusionConversion('mekanism:carbon', '#forge:dusts/coal_coke', 40);

  // Enrichment
  event.recipes.mekanismEnriching('forbidden_arcanus:arcane_crystal', '#forge:dusts/arcane_crystal');

  // Fungification
  // TODO: Fungification

  // Mossification
  mossify('darkerdepths:mossy_grimestone', 'darkerdepths:grimestone');

});