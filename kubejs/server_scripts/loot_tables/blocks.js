// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Block loot table injection / replacement.
 * 
 * @copyright Valhelsia Inc 2023
 */

const SILK_TOUCH_CONDITION = {
  condition: 'minecraft:match_tool',
  predicate: {
    enchantments: [
      {
        enchantment: 'minecraft:silk_touch',
        levels: {
          min: 1
        }
      }
    ]
  }
};

/**
 * Block Loot Table Event Handler
 */
ServerEvents.blockLootTables(event => {

  event.addBlock('darkerdepths:ash_block', table => {
    // With Silk Touch
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('darkerdepths:ash_block');
      pool.addCondition(SILK_TOUCH_CONDITION);
    });

    // Without Silk Touch
    table.addPool(pool => {
      pool.rolls = 4;
      pool.addItem('supplementaries:ash');
      pool.addCondition({condition: 'minecraft:inverted', term: SILK_TOUCH_CONDITION});
    });
  });
  
});