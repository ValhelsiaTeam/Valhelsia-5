// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for Farmer's Delight's crafting methods.
 * 
 * Includes templates for adding cutting board or cooking pot recipes,
 * including presets for different categories of cutting board recipe
 * (eg. stripping, chopping, cutting).
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Farmer's Delight Recipe Event Handler
 */
ServerEvents.recipes(event => {

  /**
   * Creates an Axe Stripping recipe for the Farmer's Delight Cutting Board.
   * Automatically adds the tree bark as one output.
   * @param {(string|Item)} output The resulting stripped log. 
   * @param {(string|InputItem)} input An unstripped log to be stripped.
   */
  const strip = (output, input) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        InputItem.of(input).toJson()
      ],
      tool: {
        type: 'farmersdelight:tool',
        tag: 'forge:tools/axes'
      },
      result: [
        Item.of(output).toJson(),
        {item: 'farmersdelight:tree_bark'}
      ],
      sound: 'minecraft:item.axe.strip'
    });
  };

  /**
   * Creates an Axe Chopping recipe for the Farmer's Delight Cutting Board.
   * @param {(string|Item)} output The output item.
   * @param {(string|InputItem)} input The input ingredient.
   */
  const chop = (output, input) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        InputItem.of(input).toJson()
      ],
      tool: {
        type: 'farmersdelight:tool',
        tag: 'forge:tools/axes'
      },
      result: [
        Item.of(output).toJson()
      ]
    });
  };

  /**
   * Creates a Knife Cutting recipe for the Farmer's Delight Cutting Board.
   * @param {Item[]} output An array of items to output.
   * @param {(string|InputItem)} input The input ingredient(s).
   */
  const cut = (output, input) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        InputItem.of(input).toJson()
      ],
      tool: {
        tag: 'forge:tools/knives'
      },
      result: output
    });
  };

  /**
   * Creates a Cooking Pot recipe for Farmer's Delight.
   * Automatically grants 0.2 XP and takes 200 ticks to cook.
   * @param {(string|Item)} output An output item.
   * @param {(string|InputItem)} input An input ingredient.
   * @param {(string|Item)} container An item to use as a container (eg. 'minecraft:bowl').
   */
  const pot = (output, input, container) => {
    event.custom({
      type: 'farmersdelight:cooking',
      ingredients: input,
      result: Item.of(output).toJson(),
      container: Item.of(container).toJson(),
      experience: 0.2,
      cookingtime: 200
    });
  };

  // ----- Axe Recipes -----

  // ----- Knife Recipes -----
  //cut([Item.of('minecraft:string', 2)], '#minecraft:wool');

  // ----- Cooking Pot Recipes -----

});