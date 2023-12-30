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
  const ID_PREFIX = 'valhelsia:farmersdelight/';

  /**
   * Creates an Axe Stripping recipe for the Farmer's Delight Cutting Board.
   * Automatically adds the tree bark as one output.
   * @param {(string|Item)} output The resulting stripped log. 
   * @param {(string|InputItem)} input An unstripped log to be stripped.
   */
  const strip = (output, input, id) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        Item.of(input).toJson()
      ],
      tool: {
        type: 'farmersdelight:tool_action',
        action: 'axe_dig'
      },
      result: [
        Item.of(output).toJson(),
        {item: 'farmersdelight:tree_bark'}
      ],
      sound: 'minecraft:item.axe.strip'
    }).id(id);
  };

  /**
   * Creates an Axe Chopping recipe for the Farmer's Delight Cutting Board.
   * @param {(string|Item)} output The output item.
   * @param {(string|InputItem)} input The input ingredient.
   */
  const chop = (output, input, id) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        Item.of(input).toJson()
      ],
      tool: {
        type: 'farmersdelight:tool_action',
        action: 'axe_dig'
      },
      result: [
        Item.of(output).toJson()
      ]
    }).id(id);
  };

  
  /**
   * Creates a Pickaxe Crushing recipe for the Farmer's Delight Cutting Board.
   * @param {(string|Item)} output The output item.
   * @param {(string|InputItem)} input The input ingredient.
   */
  const crush = (output, input, id) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        Item.of(input).toJson()
      ],
      tool: {
        type: 'farmersdelight:tool_action',
        action: 'pickaxe_dig'
      },
      result: [
        Item.of(output).toJson()
      ]
    }).id(id);
  };

  /**
   * Creates a Knife Cutting recipe for the Farmer's Delight Cutting Board.
   * @param {Item[]} output An array of items to output.
   * @param {(string|InputItem)} input The input ingredient(s).
   */
  const cut = (output, input, id) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        Item.of(input).toJson()
      ],
      tool: {
        tag: 'forge:tools/knives'
      },
      result: output
    }).id(id);
  };

  /**
   * Creates a Cooking Pot recipe for Farmer's Delight.
   * Automatically grants 0.2 XP and takes 200 ticks to cook.
   * @param {(string|Item)} output An output item.
   * @param {(string|InputItem)} input An input ingredient.
   * @param {(string|Item)} container An item to use as a container (eg. 'minecraft:bowl').
   */
  const pot = (output, input, container, id) => {
    event.custom({
      type: 'farmersdelight:cooking',
      ingredients: input,
      result: Item.of(output).toJson(),
      container: Item.of(container).toJson(),
      experience: 0.2,
      cookingtime: 200
    }).id(id);
  };

  // ----- Axe Recipes -----

  // ----- Pickaxe Recipes -----
  crush('4x biomesoplenty:rose_quartz_shard', 'biomesoplenty:rose_quartz_block', `${ID_PREFIX}cutting/rose_quartz_shard_from_rose_quartz_block`);
  crush('4x galosphere:allurite_shard', 'galosphere:allurite_block', `${ID_PREFIX}cutting/allurite_shard_from_allurite_block`);
  crush('4x galosphere:lumiere_shard', 'galosphere:lumiere_block', `${ID_PREFIX}cutting/lumiere_shard_from_lumiere_block`);

  // Working around a bug in Neapolitan. They have a typo in their own recipe.
  event.remove({id: 'neapolitan:ice_cutting'});
  crush('4x neapolitan:ice_cubes', 'minecraft:ice', `${ID_PREFIX}cutting/ice_cubes_from_ice`); 
  
  // ----- Knife Recipes -----
  cut([Item.of('minecraft:string', 2)], '#minecraft:wool', `${ID_PREFIX}cutting/string_from_wool`);
  cut([Item.of('cnb:apple_slice', 4)], 'minecraft:apple', `${ID_PREFIX}cutting/apple_slice_from_apple`);

  // ----- Cooking Pot Recipes -----

});