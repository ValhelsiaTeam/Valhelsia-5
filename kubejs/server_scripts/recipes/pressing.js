// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Pressing recipes for Valhelsia 5.
 * 
 * Includes functions to add pressing recipes to multiple mods at the same time.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Pressing Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:pressing/';

  /**
   * Creates an Ad Astra Compressor recipe.
   * 
   * This should normally not be called directly, but is
   * instead primarily intended to be used by the press(...)
   * function.
   * 
   * @param {(string|Item)} output Resulting compressed item.
   * @param {(string|Item)} input Ingredient to be compressed.
   */
  const compressor = (output, input) => {
    event.custom({
      type: 'ad_astra:compressing',
      input: Item.of(input).toJson(),
      output: {
        id: OutputItem.of(output).item.id,
        count: OutputItem.of(output).item.count
      },
      cookTime: 200
    }).id(`${ID_PREFIX}ad_astra_compressing/${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  /**
   * Creates a Hammering recipe (for both Ad Astra and Immersive Engineering).
   * 
   * This should normally not be called directly, but is
   * instead primarily intended to be used by the press(...)
   * function.
   * 
   * @param {(string|Item)} output Resulting hammered item.
   * @param {(string|Item)} input Ingredient to be hammered.
   */
  const hammering = (output, input) => {
    let itemID = `${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`;

    // Ad Astra
    event.custom({
      type: 'ad_astra:hammering',
      ingredients: [
        {
          item: 'ad_astra:hammer'
        }, 
        Item.of(input).toJson()
      ],
      result: Item.of(output).toJson(),
    }).id(`${ID_PREFIX}ad_astra_hammering/${itemID}`);

    // Immersive Engineering
    event.shapeless(output, [input, 'immersiveengineering:hammer']).id(`${ID_PREFIX}immersiveengineering_hammering/${itemID}`);
  };

  /**
   * Creates a Pressing recipe for multiple mods.
   * 
   * @param {(string|Item)} output The resulting pressed item(s).
   * @param {(string|InputItem)} input A single ingredient to press.
   */
  const press = (output, input) => {
    let itemID = `${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`;

    // Create Pressing
    event.recipes.create.pressing(output, input).id(`${ID_PREFIX}create_pressing/${itemID}`);

    // Immersive Engineering Metal Press
    event.recipes.immersiveengineering.metal_press(output, input, 'immersiveengineering:mold_plate').id(`${ID_PREFIX}immersiveengineering_metal_press/${itemID}`);

    // Hammering (in crafting grid)
    hammering(output, input);

    // Ad Astra Compressor
    compressor(output, input);
  };

  // Remove unused pressing.
  [
    'ad_astra:hammering/calcorite_plate',
    'ad_astra:hammering/desh_plate',
    'ad_astra:hammering/iron_plate',
    'ad_astra:hammering/ostrum_plate',
    'ad_astra:hammering/steel_plate',

    'create:pressing/brass_ingot',
    'create:pressing/copper_ingot',
    'create:pressing/gold_ingot',
    'create:pressing/iron_ingot',

    'createaddition:pressing/electrum_ingot',
    'createaddition:pressing/steel_ingot',
    'createaddition:pressing/zinc_ingot',

    'minecraft:pressing/cast_iron_sheet', // Create Deco has the wrong recipe namespace here.
    'minecraft:pressing/netherite_sheet', // Create Deco has the wrong recipe namespace here.

    'immersiveengineering:crafting/plate_aluminum_hammering',
    'immersiveengineering:crafting/plate_calcorite_hammering',
    'immersiveengineering:crafting/plate_constantan_hammering',
    'immersiveengineering:crafting/plate_copper_hammering',
    'immersiveengineering:crafting/plate_desh_hammering',
    'immersiveengineering:crafting/plate_electrum_hammering',
    'immersiveengineering:crafting/plate_iron_hammering',
    'immersiveengineering:crafting/plate_gold_hammering',
    'immersiveengineering:crafting/plate_lead_hammering',
    'immersiveengineering:crafting/plate_nickel_hammering',
    'immersiveengineering:crafting/plate_ostrum_hammering',
    'immersiveengineering:crafting/plate_silver_hammering',
    'immersiveengineering:crafting/plate_steel_hammering',
    'immersiveengineering:crafting/plate_uranium_hammering',

    'immersiveengineering:metalpress/plate_aluminum',
    'immersiveengineering:metalpress/plate_brass',
    'immersiveengineering:metalpress/plate_calcorite',
    'immersiveengineering:metalpress/plate_constantan',
    'immersiveengineering:metalpress/plate_copper',
    'immersiveengineering:metalpress/plate_desh',
    'immersiveengineering:metalpress/plate_electrum',
    'immersiveengineering:metalpress/plate_gold',
    'immersiveengineering:metalpress/plate_iron',
    'immersiveengineering:metalpress/plate_lead',
    'immersiveengineering:metalpress/plate_nickel',
    'immersiveengineering:metalpress/plate_ostrum',
    'immersiveengineering:metalpress/plate_silver',
    'immersiveengineering:metalpress/plate_steel',
    'immersiveengineering:metalpress/plate_uranium',
    'immersiveengineering:metalpress/plate_zinc',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Ad Astra
  press('ad_astra:calcorite_plate', '#forge:ingots/calcorite');
  press('ad_astra:desh_plate', '#forge:ingots/desh');
  press('ad_astra:ostrum_plate', '#forge:ingots/ostrum');

  // Create
  press('create:brass_sheet', '#forge:ingots/brass');

  // Create Crafts & Additions
  press('createaddition:zinc_sheet', '#forge:ingots/zinc');

  // Create Deco
  press('createdeco:cast_iron_sheet', '#forge:ingots/cast_iron');
  press('createdeco:netherite_sheet', '#forge:ingots/netherite');

  // Immersive Engineering
  press('immersiveengineering:plate_aluminum', '#forge:ingots/aluminum');
  press('immersiveengineering:plate_constantan', '#forge:ingots/constantan');
  press('immersiveengineering:plate_copper', '#forge:ingots/copper');
  press('immersiveengineering:plate_electrum', '#forge:ingots/electrum');
  press('immersiveengineering:plate_gold', '#forge:ingots/gold');
  press('immersiveengineering:plate_iron', '#forge:ingots/iron');
  press('immersiveengineering:plate_lead', '#forge:ingots/lead');
  press('immersiveengineering:plate_nickel', '#forge:ingots/nickel');
  press('immersiveengineering:plate_silver', '#forge:ingots/silver');
  press('immersiveengineering:plate_steel', '#forge:ingots/steel');
  press('immersiveengineering:plate_uranium', '#forge:ingots/uranium');

  // Tetra
  press('tetra:vent_plate', 'tetra:metal_scrap');

  // Recipes that don't use all methods:
  event.recipes.immersiveengineering.metal_press('mekanism:hdpe_sheet', '3x mekanism:hdpe_pellet', 'immersiveengineering:mold_plate').id(`${ID_PREFIX}metal_press/hdpe_sheet`);

});
