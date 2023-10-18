// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for Integrated Dynamics.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Integrated Dynamics Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:integrateddynamics/';

  /**
   * Creates a new Drying Basin recipe. Automatically creates a corresponding Mechanical Drying Basin recipe too, 10x faster.
   * Note: Either input or fluid need to be filled.
   * 
   * @param {(!string|!Item)} output The resulting item.
   * @param {(string|InputItem)} input The input item to dry. Optional.
   * @param {string} fluid The ID of the fluid required. Optional.
   * @param {number} duration The duration of the operation (in ticks). Optional (default 100).
   * @param {number} amount The quantity of fluid required, per operation (in millibuckets). Optional (default 100).
   */
  const drying_basin = (output, input, fluid, amount, duration) => {
    if (typeof duration == 'undefined') {
      duration = 100;
    }

    let recipeData = {type: 'integrateddynamics:drying_basin'};
    let id = `${OutputItem.of(output).item.id.replace(':','/')}`;
    let mid = '_from_';
    
    if (typeof fluid == 'string') {
      if (typeof amount == 'undefined') {
        amount = 100;
      }

      recipeData.fluid = {
        fluid: fluid,
        amount: amount
      }
      id = `${id}_from_${fluid.replace(':','/')}`;
      mid = '_and_';
    }

    if (typeof input != 'undefined') {
        recipeData.item = Item.of(input).toJson();
        id = `${id}${mid}${InputItem.of(input).ingredient.first.id.replace(':', '_')}`;
    }

    recipeData.duration = duration;
    recipeData.result = {item: Item.of(output).toJson()};

    // Regular Drying Basin
    event.custom(recipeData).id(`${ID_PREFIX}drying_basin/${id}`);

    // Mechanical Drying Basin
    recipeData.type = 'integrateddynamics:mechanical_drying_basin';
    recipeData.duration *= 0.1;
    event.custom(recipeData).id(`${ID_PREFIX}mechanical_drying_basin/${id}`);
  };

  /**
   * Creates a new Squeezer recipe. Automatically creates a corresponding Mechanical Squeezer recipe too, 10x faster.
   * Note: Input comes before output in squeezer recipes as the output is optional.
   * Note: Either output or fluid need to be filled.
   * 
   * @param {(string|InputItem)} input The input item.
   * @param {(string|Item)} output The resulting item. Optional.
   * @param {string} fluid The ID of the fluid to output. Optional.
   * @param {number} duration The duration of the operation (in ticks). Optional (default 100).
   * @param {number} amount The quantity of fluid created, per operation (in millibuckets). Optional (default 100).
   */
  const squeezer = (input, output, fluid, amount, duration) => {
    if (typeof duration == 'undefined') {
      duration = 100;
    }

    let recipeData = {
      type: 'integrateddynamics:squeezer',
      item: Item.of(input).toJson(),
      duration: duration,
      result: {}
    };
    let id = `_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`;
    let mid = '';
    
    if (typeof fluid == 'string') {
      if (typeof amount == 'undefined') {
        amount = 100;
      }

      recipeData.result.fluid = {
        fluid: fluid,
        amount: amount
      }
      id = `${fluid.replace(':','/')}${id}`;
      mid = `_and_`;
    }

    if (typeof output != 'undefined') {
      if (Array.isArray(output)) {
        recipeData.result.items = output;
        id = `${OutputItem.of(output[0]).item.id.replace(':','/')}${mid}${id}`;
      } else {
        recipeData.result.items = [Item.of(output).toJson()];
        id = `${OutputItem.of(output).item.id.replace(':','/')}${mid}${id}`;
      }
    }

    // Regular Squeezer
    event.custom(recipeData).id(`${ID_PREFIX}squeezer/${id}`);

    // Mechanical Squeezer
    recipeData.type = 'integrateddynamics:mechanical_squeezer';
    recipeData.duration *= 0.1;
    event.custom(recipeData).id(`${ID_PREFIX}mechanical_squeezer/${id}`);
  }

  // Drying Basin Recipes
  // TODO

  // Squeezer Recipes
  // Note: Squeezer recipes have their input first. This is because the output can be either an item or a fluid.
  squeezer(Item.of('#forge:dusts/coal_coke', 8), 'immersiveengineering:dust_hop_graphite');

});