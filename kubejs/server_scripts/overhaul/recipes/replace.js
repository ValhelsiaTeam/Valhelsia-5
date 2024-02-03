// priority: 89
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe input / output replacements for Valhelsia 5's Recipe Overhaul mode.
 * 
 * This replaces a number of recipe ingredients or outputs with things that better
 * fit our vision for a cohesive modpack. These are often harder to make, but not
 * always. As such, it's not really an "expert mode" as it is just our take on things.
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.overhaul) {
    return;
  }

  // ----- Convenience Functions -----

  /**
   * Replaces a given input ingredient in all KubeJS-compatible recipes.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInput = (from, to) => {
    event.replaceInput({}, from, to);
  };

  /**
   * Replaces a given output item in all KubeJS-compatible recipes.
   * @param {*} from Original output item.
   * @param {*} to New output item.
   */
  const replaceOutput = (from, to) => {
    event.replaceOutput({}, from, to);
  };

  /**
   * Replaces input ingredients in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace ingredients in.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceInput({id: recipeID}, from, to));
    } else {
      event.replaceInput({id: recipes}, from, to);
    }
  };

  /**
   * Replaces output items in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace items in.
   * @param {*} from Original item.
   * @param {*} to New item.
   */
  const replaceOutputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceOutput({id: recipeID}, from, to));
    } else {
      event.replaceOutput({id: recipes}, from, to);
    }
  };

  // Replace inputs / outputs by recipe type.
  const replaceInputType = (recipeType, from, to) => {
    event.replaceInput({type: recipeType}, from, to);
  };

  const replaceOutputType = (recipeType, from, to) => {
    event.replaceOutput({type: recipeType}, from, to);
  };

  /// ----- Generic Replacements -----

  // Bottle -> Jar
  replaceInputID([
    'twilightforest:cicada_jar', 
    'twilightforest:firefly_jar'
  ], 'minecraft:glass_bottle', 'supplementaries:jar');

  // Ink Sac -> Antique Ink
  replaceInputID([
    'minecraft:writable_book',
    'fairylights:letter_bunting',
    'xercamusic:music_sheet',
  ], 'minecraft:ink_sac', 'supplementaries:antique_ink');


  // ----- Mod-specific Replacements -----

  // Xerca's Music Maker Mod

  // Tonewoods
  replaceInputID('xercamusic:cello', 'minecraft:stick', 'minecraft:spruce_planks');
  replaceInputID('xercamusic:cello', 'minecraft:dark_oak_planks', ['autumnity:maple_planks', 'blue_skies:maple_planks']);
  replaceInputID('xercamusic:guitar', 'minecraft:stick', 'biomesoplenty:mahogany_planks');
  replaceInputID('xercamusic:guitar', 'minecraft:oak_planks', 'atmospheric:rosewood_planks');
  replaceInputID('xercamusic:redstone_guitar', 'minecraft:stick', ['autumnity:maple_planks', 'blue_skies:maple_planks']);
  replaceInputID('xercamusic:redstone_guitar', 'minecraft:oak_planks', 'ecologics:walnut_planks');
  replaceInputID('xercamusic:violin', 'minecraft:spruce_planks', ['autumnity:maple_planks', 'blue_skies:maple_planks']);

  // Metals
  replaceInputID([
    'xercamusic:french_horn',
    'xercamusic:saxophone',
    'xercamusic:tubular_bell',
  ], 'minecraft:gold_nugget', '#forge:nuggets/brass');

  replaceInputID('xercamusic:cymbal', 'minecraft:gold_nugget', '#forge:nuggets/bronze');
  replaceInputID('xercamusic:redstone_guitar', 'minecraft:string', '#forge:wires/steel');
  replaceInputID('xercamusic:sansula', 'minecraft:gold_nugget', '#forge:nuggets/steel');

});