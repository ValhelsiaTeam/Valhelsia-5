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
   * Creates a Hammer Crushing recipe for Immersive Engineering's Hammer.
   * @param {string|Item} output Output item(s).
   * @param {(string|Ingredient)} input Input ingredient(s).
   */
  const hammer_crush = (output, input) => {
    event.custom({
      type: 'immersiveengineering:hammer_crushing',
      input: Ingredient.of(input).toJson(),
      result: Item.of(output).toJson()
    });
  };

  // Hammer Crushing
  hammer_crush('ae2:ender_dust', 'minecraft:ender_pearl');

});