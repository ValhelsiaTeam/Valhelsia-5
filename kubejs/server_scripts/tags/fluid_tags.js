// priority: 120
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//                       

/**
 * @file Fluid Tag Changes for Valhelsia 5.
 * @copyright Valhelsia Inc 2024
 */

/**
 * Fluid Tag Event Handler.
 */
ServerEvents.tags('fluid', event => {
  event.remove('minecraft:water', [
    'ad_astra:fuel',
    'ad_astra:flowing_fuel',
    'ad_astra:oil',
    'ad_astra:flowing_oil',
    'ad_astra:cryo_fuel',
    'ad_astra:flowing_cryo_fuel',
    'createaddition:bioethanol',
    'createaddition:flowing_bioethanol',
    'createaddition:seed_oil',
    'createaddition:flowing_seed_oil',
    'enlightened_end:ooze_fluid',
    'enlightened_end:flowing_ooze_fluid',
    'sliceanddice:fertilizer',
    'sliceanddice:flowing_fertilizer',
  ]);

  event.add('forge:ethene', [
    'immersivepetroleum:ethylene',
  ]);

  event.add('forge:ethylene', [
    "mekanism:ethene",
    "mekanism:flowing_ethene",
  ]);
});