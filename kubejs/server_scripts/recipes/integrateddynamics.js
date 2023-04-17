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
  /**
   * Creates a new Drying Basin recipe. Automatically creates a corresponding Mechanical Drying Basin recipe too, 10x faster.
   * @param {!string|!Item} output The resulting item.
   * @param {(!string|!Ingredient)} input The input item to dry.
   * @param {number} duration The duration of the operation (in ticks). Optional (default 100).
   * @param {string} fluid The ID of the fluid to output. Optional.
   * @param {number} amount The quantity of the fluid to create, per operation (in millibuckets). Optional (default 100).
   
   */
  const drying_basin = (output, input, fluid, amount, duration) => {
    if (typeof duration == 'undefined') {
      duration = 100;
    }

    if (typeof amount == 'undefined') {
      amount = 100;
    }

    if (typeof fluid == 'undefined') {
      // Without fluid output.
      event.custom({
        type: 'integrateddynamics:drying_basin',
        item: Ingredient.of(input).toJson(),
        duration: duration,
        result: {
          item: Item.of(output).toJson()
        }
      });

      event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        item: Ingredient.of(input).toJson(),
        duration: duration * 0.1,
        result: {
          item: Item.of(output).toJson()
        }
      });

    } else {
      // With fluid output.
      event.custom({
        type: 'integrateddynamics:drying_basin',
        item: Ingredient.of(input).toJson(),
        fluid: {
          fluid: fluid,
          amount: amount
        },
        duration: duration,
        result: {
          item: Item.of(output).toJson()
        }
      });
      
      event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        item: Ingredient.of(input).toJson(),
        fluid: {
          fluid: fluid,
          amount: amount
        },
        duration: duration * 0.1,
        result: {
          item: Item.of(output).toJson()
        }
      });
    }
  };

  // Drying Basin Recipes
  // TODO

  // Squeezer Recipes
  // TODO

});