// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Alloying recipes for Valhelsia 5.
 * 
 * Includes a function to add alloying recipes to multiple mods at the same time.
 * Also replaces some existing alloying recipes in order to unify them between mods.
 * 
 * @copyright Valhelsia Inc 2022
 */

/**
 * Alloying Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:alloying/';

  /**
   * Creates an alloy recipe for multiple mods.
   * If the inputs parameter has exactly two ingredients then the recipe will be added to all supported mods,
   * and if it has more than two then it will only be added to Create (which supports a greater number of ingredients).
   * 
   * @param {(string|Item)} output The resulting output alloy item(s).
   * @param {(string[]|InputItem[])} inputs An array of ingredients to use as inputs. Must have at least two ingredients.
   */
  const alloy = (output, inputs, isDust) => {
    if (typeof isDust == 'undefined') {
      isDust = false;
    }

    let itemID = OutputItem.of(output).item.id.replace(':', '/');
    if (isDust) {
      itemID += '_from_dust';
    }

    // Create
    event.recipes.create.mixing(output, inputs).heated().id(`${ID_PREFIX}create/${itemID}`);
    // TODO: Consider adding a flag to switch between unheated, heated, superheated mixing recipes.
    //       For now, heated is a sensible default for most alloying.

    // Immersive Engineering & Mekanism
    if (inputs.length == 2) {
      event.recipes.immersiveengineering.alloy(output, inputs[0], inputs[1]).id(`${ID_PREFIX}immersiveengineering/${itemID}`);

      // Note: The combiner is the closest thing in Mekanism to an alloy kiln, as it
      // takes two inputs and merges them into one output, consuming power to do so.
      // This also makes up for the potential removal of the default recipes of the combiner in the future.
      event.recipes.mekanism.combining(output, inputs[0], inputs[1]).id(`${ID_PREFIX}mekanism/${itemID}`);
    }
  };

  // Remove unused alloying recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of alloying recipes with no replacement, use remove.js instead.
  [
    'create:mixing/brass_ingot',
    'immersiveengineering:alloysmelter/brass',
    'immersiveengineering:alloysmelter/bronze',
    'immersiveengineering:alloysmelter/constantan',
    'immersiveengineering:alloysmelter/electrum',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Minecraft
  alloy('minecraft:netherite_ingot', ['4x minecraft:netherite_scrap', '4x #forge:ingots/gold']);

  // Create
  alloy('2x create:brass_ingot', ['#forge:ingots/copper', '#forge:ingots/zinc']);
  // TODO: Look through Create mixing recipes - there's plenty more that should be removed and moved here
  //       in order to add compatibility with other alloying methods.
  
  // Forbidden and Arcanus
  alloy('forbidden_arcanus:obsidian_ingot', ['#forge:dusts/obsidian', '4x #forge:nuggets/iron'], true);
  //alloy('forbidden_arcanus:deorum_ingot', ['#forge:ingots/gold', '4x #forge:dusts/mundabitur']);
  //alloy('forbidden_arcanus:deorum_ingot', ['#forge:dusts/gold', '4x #forge:dusts/mundabitur']);
  
  // Immersive Engineering
  alloy('2x immersiveengineering:ingot_constantan', ['#forge:ingots/copper', '#forge:ingots/nickel']);
  alloy('2x immersiveengineering:ingot_constantan', ['#forge:dusts/copper', '#forge:dusts/nickel'], true);
  alloy('2x immersiveengineering:ingot_electrum', ['#forge:ingots/gold', '#forge:ingots/silver']);
  alloy('2x immersiveengineering:ingot_electrum', ['#forge:dusts/gold', '#forge:dusts/silver'], true);

  // Mekanism
  alloy('4x mekanism:ingot_bronze', ['3x #forge:ingots/copper', '#forge:ingots/tin']);
  alloy('4x mekanism:ingot_bronze', ['3x #forge:dusts/copper', '#forge:dusts/tin'], true);
  alloy('mekanism:dust_refined_obsidian', ['#forge:dusts/obsidian', '#forge:dusts/diamond'], true);
  alloy('mekanism:alloy_infused', ['#forge:ingots/iron', '#forge:dusts/redstone']);
  alloy('mekanism:alloy_reinforced', ['#forge:alloys/advanced', '2x #forge:dusts/diamond'], true);
  alloy('mekanism:alloy_atomic', ['#forge:alloys/elite', '4x #forge:dusts/refined_obsidian'], true);

  // More Minecarts
  alloy('moreminecarts:silica_steel', ['#forge:ingots/steel', '#forge:gems/quartz']);
  alloy('moreminecarts:silica_steel', ['#forge:dusts/steel', '#forge:gems/quartz'], true);

});