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
 * @copyright Valhelsia Inc 2022
 */

/**
 * Mekanism Recipe Event Handler
 */
ServerEvents.recipes(event => {
  
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
    // TODO: Uncomment below once KubeJS Mekanism has updated.
    // event.recipes.mekanismMetallurgicInfusing(output, input, 'mekanism:bio', 10);
  };

  /**
   * Creates a recipe to turn a block into a fungal version of it.
   * @param {(string|Item)} output The item or item ID of the mossy block.
   * @param {(string|Ingredient)} input The item or item ID of the base block.
   */
  const fungify = (output, input) => {
    // TODO: Uncomment below once KubeJS Mekanism has updated.
    // event.recipes.mekanismMetallurgicInfusing(output, input, 'mekanism:fungi', 10);
  };

  /**
   * Creates a recipe to crush an ingredient into Bio Fuel.
   * Note: This is in mekanism.js rather than in crushing.js due to being Mekanism-specific.
   * @param {(string|Ingredient)} input The item or item ID of the base block.
   * @param {number} quantity The number of Bio Fuel items to output.
   */
  const bioCrush = (input, quantity) => {
    // TODO: Uncomment below once KubeJS Mekanism has updated.
    // event.recipes.mekanismCrushing(`${quantity}x mekanism:bio_fuel`, input);
  };

  // Bio Fuel
  // Note: When adding bio fuel crushing, use tags where practical, even if they have to be created
  // (such as 'valhelsia:grasses' or 'forge:fruits' or whatever).

  // Remove specific biofuel crushing recipes in favour of using tags instead.
  [
    // Saplings

    // Leaves

    // Seeds

    // Flowers

    // TODO: More as tags are created / expanded.
    // See default recipes here: https://github.com/mekanism/Mekanism/tree/1.18.x/src/datagen/generated/mekanism/data/mekanism/recipes/crushing/biofuel
  ].forEach((recipeID) => event.remove({id: recipeID}));
  
  bioCrush('#minecraft:flowers', 5);
  bioCrush('#minecraft:saplings', 2);
  bioCrush('#forge:seeds', 2);

  // Coal Coke -> Carbon / Enriched Carbon
  //event.recipes.mekanismEnriching('2x mekanism:enriched_carbon', '#forge:coal_coke');
  infusionConversion('mekanism:carbon', '#forge:coal_coke', 40);
  infusionConversion('mekanism:carbon', '#forge:dusts/coal_coke', 40);

  // Fungification
  // TODO: Fungification

  // Mossification
  // TODO: Mossification
  
});