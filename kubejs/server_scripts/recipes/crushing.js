// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Crushing recipes for Valhelsia 5.
 * 
 * Includes functions to add crushing and milling recipes to multiple mods at the same time.
 * Also replaces some existing crushing recipes in order to unify them between mods.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Crushing Recipe Event Handler
 */
 ServerEvents.recipes(event => {
  /**
   * Creates a Crushing recipe for multiple mods.
   * Note: This currently only works for simple recipes that have one input ingredient and one output item type.
   * @param {(string|Item)} output The resulting crushed item(s).
   * @param {(string|Ingredient)} input A single ingredient to crush.
   */
  const crush = (output, input) => {
    // TODO: Rework this to allow secondary outputs to work - not entirely simple since IE and Create have very
    //       different approaches to how they handle this (and Mekanism doesn't appear to handle it at all).
    //       Recipes with secondary outputs might end up with a separate function instead of this one.
    event.recipes.immersiveengineeringCrusher(output, input);
    event.recipes.mekanismCrushing(output, input);
    event.recipes.createCrushing(output, input);
    // TODO: Add Ars Nouveau Crushing.
    // TODO: Add MineColonies Crushing.
  };

  /**
   * Creates a Milling recipe for multiple mods.
   * Milling recipes are also added as crushing recipes (but not the reverse). This is in line with the way
   * the Create mod handles Milling vs Crushing.
   * Note: This currently only works for simple recipes that have one input ingredient and one output item type.
   * @param {(string|Item)} output The resulting milled item(s).
   * @param {(string|Ingredient)} input A single ingredient to mill.
   */
  const mill = (output, input) => {
    event.recipes.createMilling(output, input);
    crush(output, input);
  };

  // Remove unused crushing/milling recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of crushing/milling recipes with no replacement, use remove.js instead.
  [
    'create:milling/granite',
    'create:milling/sandstone',
    'create:milling/terracotta',
    'mekanism:crushing/soul_soil_to_soul_sand',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Crushing
  crush('minecraft:red_sand', 'minecraft:granite');

  // Milling + Crushing
  // Sandstone, Terracotta, and other soft materials can be milled.
  // Harder materials (stone, ore) should only be crushable, not millable.
  mill('minecraft:red_sand', '#forge:sandstone/red');
  mill('minecraft:red_sand', 'minecraft:terracotta');
  mill('minecraft:soul_sand', 'minecraft:soul_soil');
  mill('minecraft:sand', '#forge:sandstone/colorless');
  mill('minecraft:soul_sand', '#forge:sandstone/soul');
  mill('atmospheric:arid_sand', 'darkerdepths:aridrock');
  mill('biomesoplenty:black_sand', 'minecraft:basalt');
  mill('blue_skies:crystal_sand', '#forge:sandstone/crystal');
  mill('blue_skies:midnight_sand', '#forge:sandstone/midnight');
  mill('forbidden_arcanus:soulless_sand', '#forge:sandstone/soulless');

  mill('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt');
  mill('mekanism:sawdust', 'biomesoplenty:dead_branch');
  mill('4x minecraft:rotten_flesh', 'biomesoplenty:flesh');
  mill('10x minecraft:bone_meal', 'upgrade_aquatic:thrasher_tooth');
});
