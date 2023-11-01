// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for the smithing table.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Smithing Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:smithing/';

  // Upgrade Deorum gear to Reinforced Deorum by applying Netherite.
  event.smithing('forbidden_arcanus:reinforced_deorum_blacksmith_gavel', 'forbidden_arcanus:deorum_blacksmith_gavel', 'minecraft:netherite_ingot').id(`${ID_PREFIX}reinforced_deorum_blacksmith_gavel`);
  event.smithing('forbidden_arcanus:reinforced_deorum_sword', 'forbidden_arcanus:deorum_sword', 'minecraft:netherite_ingot').id(`${ID_PREFIX}reinforced_deorum_sword`);
  event.smithing('forbidden_arcanus:reinforced_deorum_shovel', 'forbidden_arcanus:deorum_shovel', 'minecraft:netherite_ingot').id(`${ID_PREFIX}reinforced_deorum_shovel`);
  event.smithing('forbidden_arcanus:reinforced_deorum_pickaxe', 'forbidden_arcanus:deorum_pickaxe', 'minecraft:netherite_ingot').id(`${ID_PREFIX}reinforced_deorum_pickaxe`);
  event.smithing('forbidden_arcanus:reinforced_deorum_axe', 'forbidden_arcanus:deorum_axe', 'minecraft:netherite_ingot').id(`${ID_PREFIX}reinforced_deorum_axe`);
  event.smithing('forbidden_arcanus:reinforced_deorum_hoe', 'forbidden_arcanus:deorum_hoe', 'minecraft:netherite_ingot').id(`${ID_PREFIX}reinforced_deorum_hoe`);


});