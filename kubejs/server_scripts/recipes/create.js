// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for Create's crafting methods.
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Create Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:create/';

  // Mechanical Crafting
  event.recipes.create.mechanical_crafting('valhelsia_structures:dungeon_door', [
    'CCCCC',
    'HWCWH',
    'CWCWC',
    'HSCSH',
    'CCCCC'
  ], {
    C: '#forge:ingots/cast_iron',
    W: 'minecraft:dark_oak_planks',
    H: 'create:shaft',
    S: '#forge:plates/cast_iron',
  });

  // Mixing
  event.recipes.create.mixing([Fluid.of('minecraft:milk 250')], [Fluid.of('minecraft:water 250'), '#valhelsia:nuts']).heated().id(`${ID_PREFIX}mixing/milk_from_nuts`);
});