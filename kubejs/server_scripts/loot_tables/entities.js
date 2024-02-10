// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Entity loot table injection / replacement.
 * @copyright Valhelsia Inc 2022-2024
 */

/**
 * Entity Loot Table Event Handler
 */
ServerEvents.entityLootTables(event => {
  // Minecraft - Husk
  event.modifyEntity('minecraft:husk', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_tin');
      pool.killedByPlayer();
      pool.randomChanceWithLooting(0.11, 0.02);
    });
  });
  
  // Minecraft - Stray
  event.modifyEntity('minecraft:stray', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('immersiveengineering:ingot_silver');
      pool.killedByPlayer();
      pool.randomChanceWithLooting(0.11, 0.02);
    });
  });

  // Quark - Wraith
  event.modifyEntity('quark:wraith', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_lead');
      pool.killedByPlayer();
      pool.randomChanceWithLooting(0.11, 0.02);
    });
  });

  // Rotten Creatures - Burned
  event.modifyEntity('rottencreatures:burned', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('immersiveengineering:ingot_nickel');
      pool.killedByPlayer();
      pool.randomChanceWithLooting(0.11, 0.02);
    });
  });

  // Rotten Creatures - Frostbitten
  event.modifyEntity('rottencreatures:frostbitten', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('create:zinc_ingot');
      pool.killedByPlayer();
      pool.randomChanceWithLooting(0.11, 0.02);
    });
  });

  // Twilight Forest - Hydra
  event.modifyEntity('twilightforest:hydra', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('irons_spellbooks:fire_rune');
    });
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('irons_spellbooks:arcane_essence', 1, [0, 8]).lootingEnchant([0, 1], 1);
    });
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('irons_spellbooks:scroll').addFunction({
        function: 'irons_spellbooks:randomize_spell',
        quality: {
          min: 0.25,
          max: 0.85
        },
        school: 'irons_spellbooks:fire'
      });
    });
    table.addPool(pool => {
      pool.rolls = [1, 3];
      pool.addLootTable('irons_spellbooks:magic_items/great_ink');
    });
  });

  // Twilight Forest - Lich
  event.modifyEntity('twilightforest:lich', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('irons_spellbooks:arcane_essence', 1, [0, 4]).lootingEnchant([0, 1], 1);
    });
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('irons_spellbooks:scroll').addFunction({
        function: 'irons_spellbooks:randomize_spell',
        quality: {
          min: 0.0,
          max: 0.3
        }
      }).randomChanceWithLooting(0.25, 0.05);
    });
  });

  // Twilight Forest - Ur-ghast
  // TODO
  // event.modifyEntity('twilight_forest:ur_ghast), table => {});

  // Twilight Forest - Snow Queen
  event.modifyEntity('twilightforest:snow_queen', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('irons_spellbooks:ice_rune');
    });
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('irons_spellbooks:arcane_essence', 1, [0, 8]).lootingEnchant([0, 1], 1);
    });
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('irons_spellbooks:scroll').addFunction({
        function: 'irons_spellbooks:randomize_spell',
        quality: {
          min: 0.25,
          max: 0.85
        },
        school: 'irons_spellbooks:ice'
      });
    });
    table.addPool(pool => {
      pool.rolls = [1, 3];
      pool.addLootTable('irons_spellbooks:magic_items/great_ink');
    });
  });

});