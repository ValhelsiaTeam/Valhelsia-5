// priority: 9
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Shapeless recipe additions for Valhelsia 5's Recipe Overhaul Mode.
 * @copyright Valhelsia Inc 2024
 * @see shaped.js
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.overhaul) {
    return;
  }

  const ID_PREFIX = 'valhelsia:overhaul/crafting/shapeless/';

  // Ars Nouveau
  event.shaped('ars_nouveau:novice_spell_book', [
    'minecraft:book',
    'forbidden_arcanus:deorum_shovel',
    'forbidden_arcanus:deorum_pickaxe',
    'forbidden_arcanus:deorum_axe',
    'forbidden_arcanus:deorum_sword',
  ]).id(`${ID_PREFIX}novice_spell_book`);

  // Botania
  event.shapeless('botania:redstone_root', 'minecraft:hanging_roots').id(`${ID_PREFIX}redstone_root`);

  // Supplementaries
  event.shapeless('supplementaries:globe_sepia', ['supplementaries:globe', 'supplementaries:antique_ink', '#forge:dyes/brown']).id(`${ID_PREFIX}sepia_globe`);
});
