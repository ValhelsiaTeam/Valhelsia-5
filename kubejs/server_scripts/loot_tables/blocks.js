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

/**
 * Block Loot Table Event Handler
 */
ServerEvents.blockLootTables(event => {
  event.addBlock('darkerdepths:ash_block', table => {
    table.addPool(pool => {
      pool.rolls = 4
      pool.addItem('supplementaries:ash')
    });
  });
});