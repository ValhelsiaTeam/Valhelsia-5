// priority: 90
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Additions, removals, and changes for Clayworks baking recipes in Valhelsia 5.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Baking Recipe Event Handler
 */
ServerEvents.recipes(event => {
  /**
   * Adds a baking recipe for the kiln.
   * @param {(string|Item)} output Resulting baked item.
   * @param {(string|InputItem)} input Ingredient to be baked.
   * @param {number} [xp] Experience given by baking the item.
   */
  const bake = (output, input, xp) => {
    if (typeof xp == 'undefined') {
      xp = 0.1;
    }

    event.custom({
      type: 'clayworks:baking',
      ingredient: InputItem.of(input).toJson(),
      result: Item.of(output).toJson(),
      experience: xp,
      cookingtime: 100
    });
  };

  // Biomes o' Plenty
  bake('biomesoplenty:dried_salt', 'mekanism:block_salt');

  // Blue Skies
  bake('blue_skies:cracked_lunar_stonebrick', 'blue_skies:lunar_stonebrick');
  bake('blue_skies:cracked_turquoise_stonebrick', 'blue_skies:turquoise_stonebrick');

  // Botania
  bake('botania:cracked_livingrock_bricks', 'botania:livingrock_bricks');

  // Create Deco
  bake('createdeco:cracked_blue_bricks', 'createdeco:blue_bricks');
  bake('createdeco:cracked_blue_brick_tiles', 'createdeco:blue_brick_tiles');
  bake('createdeco:cracked_blue_long_bricks', 'createdeco:blue_long_bricks');
  bake('createdeco:cracked_blue_short_bricks', 'createdeco:blue_short_bricks');
  
  bake('createdeco:cracked_dean_bricks', 'createdeco:dean_bricks');
  bake('createdeco:cracked_dean_brick_tiles', 'createdeco:dean_brick_tiles');
  bake('createdeco:cracked_dean_long_bricks', 'createdeco:dean_long_bricks');
  bake('createdeco:cracked_dean_short_bricks', 'createdeco:dean_short_bricks');

  bake('createdeco:cracked_dusk_bricks', 'createdeco:dusk_bricks');
  bake('createdeco:cracked_dusk_brick_tiles', 'createdeco:dusk_brick_tiles');
  bake('createdeco:cracked_dusk_long_bricks', 'createdeco:dusk_long_bricks');
  bake('createdeco:cracked_dusk_short_bricks', 'createdeco:dusk_short_bricks');

  bake('createdeco:cracked_red_bricks', 'minecraft:bricks');
  bake('createdeco:cracked_red_brick_tiles', 'createdeco:red_brick_tiles');
  bake('createdeco:cracked_red_long_bricks', 'createdeco:red_long_bricks');
  bake('createdeco:cracked_red_short_bricks', 'createdeco:red_short_bricks');

  bake('createdeco:cracked_pearl_bricks', 'createdeco:pearl_bricks');
  bake('createdeco:cracked_pearl_brick_tiles', 'createdeco:pearl_brick_tiles');
  bake('createdeco:cracked_pearl_long_bricks', 'createdeco:pearl_long_bricks');
  bake('createdeco:cracked_pearl_short_bricks', 'createdeco:pearl_short_bricks');
  
  bake('createdeco:cracked_scarlet_bricks', 'createdeco:scarlet_bricks');
  bake('createdeco:cracked_scarlet_brick_tiles', 'createdeco:scarlet_brick_tiles');
  bake('createdeco:cracked_scarlet_long_bricks', 'createdeco:scarlet_long_bricks');
  bake('createdeco:cracked_scarlet_short_bricks', 'createdeco:scarlet_short_bricks');

  bake('createdeco:worn_brick', 'minecraft:brick');
  bake('createdeco:cracked_worn_bricks', 'createdeco:worn_bricks');
  bake('createdeco:cracked_worn_brick_tiles', 'createdeco:worn_brick_tiles');
  bake('createdeco:cracked_worn_long_bricks', 'createdeco:worn_long_bricks');
  bake('createdeco:cracked_worn_short_bricks', 'createdeco:worn_short_bricks');

  // Darker Depths
  bake('darkerdepths:cracked_aridrock_bricks', 'darkerdepths:aridrock_bricks');
  bake('darkerdepths:cracked_grimestone_bricks', 'darkerdepths:grimestone_bricks');
  bake('darkerdepths:cracked_limestone_bricks', 'darkerdepths:limestone_bricks');
  bake('darkerdepths:cracked_shale_bricks', 'darkerdepths:shale_bricks');

  // Forbidden and Arcanus
  bake('forbidden_arcanus:cracked_polished_darkstone_bricks', 'forbidden_arcanus:polished_darkstone_bricks');

  // Immersive Engineering
  bake('immersiveengineering:concrete_brick_cracked', 'immersiveengineering:concrete_brick');
  bake('immersiveengineering:hempcrete_brick_cracked', 'immersiveengineering:hempcrete_brick');

  // Malum
  bake('malum:cracked_small_tainted_rock_bricks', 'malum:small_tainted_rock_bricks');
  bake('malum:cracked_tainted_rock_bricks', 'malum:tainted_rock_bricks');
  bake('malum:cracked_tainted_rock_tiles', 'malum:tainted_rock_tiles');
  bake('malum:cracked_small_twisted_rock_bricks', 'malum:small_twisted_rock_bricks');
  bake('malum:cracked_twisted_rock_bricks', 'malum:twisted_rock_bricks');
  bake('malum:cracked_twisted_rock_tiles', 'malum:twisted_rock_tiles');

  // Twilight Foresst
  bake('twilightforest:cracked_castle_brick', 'twilightforest:castle_brick');
  bake('twilightforest:cracked_deadrock', 'twilightforest:deadrock');
  bake('twilightforest:cracked_mazestone', 'twilightforest:mazestone');
  bake('twilightforest:cracked_towerwood', 'twilightforest:towerwood');
  bake('twilightforest:cracked_underbrick', 'twilightforest:underbrick');
});
