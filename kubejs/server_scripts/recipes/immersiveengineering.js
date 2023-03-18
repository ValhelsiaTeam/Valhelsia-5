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

  // Hammer Crushing
  hammer_crush('ae2:ender_dust', 'minecraft:ender_pearl');

});