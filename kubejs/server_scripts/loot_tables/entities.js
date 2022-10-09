// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Entity loot table injection / replacement.
 * @copyright Valhelsia Inc 2022
 */

/**
 * Entity Loot Table Event Handler
 */
ServerEvents.entityLootTables(event => {
  // Add a chance for some mobs to drop additonal loot, as a bonus incentive to farm them.

  // Wraith
  // Temp disabled until Quark updates.
  // event.modifyEntity('quark:wraith', table => {
  //   table.addPool(pool => {
  //     pool.rolls = 1;
  //     pool.addItem('mekanism:ingot_lead');
  //     pool.killedByPlayer();
  //     pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
  //   });
  // });

  // // Stray
  // Temp disabled until IE updates.
  // event.modifyEntity('minecraft:stray', table => {
  //   table.addPool(pool => {
  //     pool.rolls = 1;
  //     pool.addItem('immersiveengineering:ingot_silver');
  //     pool.killedByPlayer();
  //     pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
  //   });
  // });

  // Husk
  event.modifyEntity('minecraft:husk', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_tin');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });
});