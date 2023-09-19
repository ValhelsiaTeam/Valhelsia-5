// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Stonecutter recipe additions for Valhelsia 5.
 * Includes functions for frequently used recipe templates.
 * 
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Stonecutting Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:stonecutting/';

  /**
   * Creates multiple stonecutting recipes to convert items between each other.
   * Typically used to convert between equivalent stones from different mods.
   * 
   * @example scConvert(['create:limestone', 'quark:limestone']);
   * 
   * @param {(string[]|Item[])} items An array of items (or item IDs), usually types of raw stone.
   */
  const scConvert = (items) => {
    if (!Array.isArray(items)) {
      console.error('scConvert requires an array as input.');
      return;
    }

    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items.length; j++) {
        if (i != j) {
          event.stonecutting(items[i], items[j]).id(`${ID_PREFIX}/conversion/${OutputItem.of(items[i]).item.id.replace(':', '_')}_from_${OutputItem.of(items[j]).item.id.replace(':', '_')}`);
        }
      }
    }
  };

  /**
   * Creates a stonecutter recipe with an automatically generated recipe ID.
   * 
   * @example cut('darkerdepths:stone_brick_pillar', 'minecraft:stone');
   * 
   * @param {(string|OutputItem)} output The output item.
   * @param {(string|InputItem)} input The input ingredient.
   */
  const cut = (output, input) => {
    event.stonecutting(output, input).id(`${ID_PREFIX}${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  }

  // Conversion between stone of the same type.
  scConvert(['create:limestone', 'darkerdepths:limestone', 'quark:limestone']);
  scConvert(['darkerdepths:shale', 'quark:shale']);

  // Darker Depths
  cut('darkerdepths:stone_brick_pillar', 'minecraft:stone');
  cut('darkerdepths:stone_brick_pillar', 'minecraft:stone_bricks');

  cut('2x darkerdepths:petrified_vertical_slab', 'darkerdepths:petrified_planks');

  cut('2x darkerdepths:aridrock_vertical_slab', 'darkerdepths:aridrock');
  cut('2x darkerdepths:aridrock_bricks_vertical_slab', 'darkerdepths:aridrock');
  cut('2x darkerdepths:aridrock_bricks_vertical_slab', 'darkerdepths:polished_aridrock');
  cut('2x darkerdepths:aridrock_bricks_vertical_slab', 'darkerdepths:aridrock_bricks');
  cut('2x darkerdepths:polished_aridrock_vertical_slab', 'darkerdepths:aridrock');
  cut('2x darkerdepths:polished_aridrock_vertical_slab', 'darkerdepths:polished_aridrock');

  cut('2x darkerdepths:grimestone_vertical_slab', 'darkerdepths:grimestone');
  cut('2x darkerdepths:grimestone_bricks_vertical_slab', 'darkerdepths:grimestone');
  cut('2x darkerdepths:grimestone_bricks_vertical_slab', 'darkerdepths:polished_grimestone');
  cut('2x darkerdepths:grimestone_bricks_vertical_slab', 'darkerdepths:grimestone_bricks');
  cut('2x darkerdepths:polished_grimestone_vertical_slab', 'darkerdepths:grimestone');
  cut('2x darkerdepths:polished_grimestone_vertical_slab', 'darkerdepths:polished_grimestone');
  
  cut('2x darkerdepths:limestone_vertical_slab', 'darkerdepths:limestone');
  cut('2x darkerdepths:limestone_bricks_vertical_slab', 'darkerdepths:limestone');
  cut('2x darkerdepths:limestone_bricks_vertical_slab', 'darkerdepths:polished_limestone');
  cut('2x darkerdepths:limestone_bricks_vertical_slab', 'darkerdepths:limestone_bricks');
  cut('2x darkerdepths:polished_limestone_vertical_slab', 'darkerdepths:limestone');
  cut('2x darkerdepths:polished_limestone_vertical_slab', 'darkerdepths:polished_limestone');

  cut('2x darkerdepths:shale_vertical_slab', 'darkerdepths:shale');
  cut('2x darkerdepths:shale_bricks_vertical_slab', 'darkerdepths:shale');
  cut('2x darkerdepths:shale_bricks_vertical_slab', 'darkerdepths:polished_shale');
  cut('2x darkerdepths:shale_bricks_vertical_slab', 'darkerdepths:shale_bricks');
  cut('2x darkerdepths:polished_shale_vertical_slab', 'darkerdepths:shale');
  cut('2x darkerdepths:polished_shale_vertical_slab', 'darkerdepths:polished_shale');

  // Engineer's Decor
  cut('2x engineersdecor:rebar_concrete_slab', 'engineersdecor:rebar_concrete');
  cut('8x engineersdecor:halfslab_rebar_concrete', 'engineersdecor:rebar_concrete');
  cut('engineersdecor:rebar_concrete_stairs', 'engineersdecor:rebar_concrete');
  cut('engineersdecor:rebar_concrete_tile', 'engineersdecor:rebar_concrete');
  cut('2x engineersdecor:rebar_concrete_tile_slab', 'engineersdecor:rebar_concrete');
  cut('engineersdecor:rebar_concrete_tile_stairs', 'engineersdecor:rebar_concrete');
  cut('engineersdecor:rebar_concrete_wall', 'engineersdecor:rebar_concrete');
  cut('2x engineersdecor:rebar_concrete_tile_slab', 'engineersdecor:rebar_concrete_tile');
  cut('engineersdecor:rebar_concrete_tile_stairs', 'engineersdecor:rebar_concrete_tile');

  // Twilight Forest
  cut('twilightforest:nagastone_pillar', 'twilightforest:nagastone');
  cut('twilightforest:etched_nagastone', 'twilightforest:nagastone');
  cut('twilightforest:nagastone_head', 'twilightforest:nagastone');
});
