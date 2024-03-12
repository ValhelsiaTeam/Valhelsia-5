// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Chest loot table injection / replacement.
 * @copyright Valhelsia Inc 2023
 */

/**
 * Chest Loot Table Event Handler
 */
ServerEvents.chestLootTables(event => {

  // Additional Cooking Chest Loot
  [
    'valhelsia_structures:desert_house',
    'valhelsia_structures:player_house',
    'valhelsia_structures:kitchen',
  ].forEach(function(chestID) {
    event.modify(chestID, table => {
      table.addPool(pool => {
        pool.rolls = [1, 4];
        pool.addItem('farmersdelight:cooked_bacon', 18, [2, 3]);
        pool.addItem('farmersdelight:cooked_cod_slice', 18, [2, 3]);
        pool.addItem('farmersdelight:cooked_salmon_slice', 18, [2, 3]);
        pool.addItem('farmersdelight:cooked_mutton_chops', 18, [2, 3]);
        pool.addItem('farmersdelight:smoked_ham', 18, [2, 3]);
        pool.addItem('farmersdelight:rice', 15, [2, 6]);
        pool.addItem('farmersdelight:onion', 15, [2, 6]);
        pool.addItem('farmersdelight:cabbage_seeds', 15, [2, 6]);
        pool.addItem('farmersdelight:tomato_seeds', 15, [2, 6]);
        pool.addItem('farmersdelight:cooking_pot', 3);
        pool.addItem('farmersdelight:skillet', 3);
        pool.addItem('farmersdelight:cutting_board', 6);
        pool.addItem('farmersdelight:iron_knife', 4);
        pool.addItem('supplementaries:rope', 10, [3, 9]);
        pool.addItem('farmersrespite:kettle', 3);
        pool.addItem('farmersrespite:tea_seeds', 10, [2, 6]);
        pool.addItem('farmersrespite:coffee_beans', 10, [2, 6]);
        pool.addItem('brewinandchewin:tankard', 6, [4, 8]);
        pool.addItem('brewinandchewin:beer', 10);
        pool.addItem('brewinandchewin:mead', 10);
        pool.addItem('brewinandchewin:flaxen_cheese_wedge', 8, [2, 6]);
      });
    });
  });

  // Additional Forge Chest Loot
  event.modify('valhelsia_structures:forge', table => {
    table.addPool(pool => {
      pool.rolls = [1, 3];
      pool.addItem('forbidden_arcanus:stone_blacksmith_gavel', 15);
      pool.addItem('forbidden_arcanus:iron_blacksmith_gavel', 10);
      pool.addItem('forbidden_arcanus:diamond_blacksmith_gavel', 2);
      pool.addItem('immersiveengineering:ingot_steel', 7, [1, 3]);
      pool.addItem('pneumaticcraft:ingot_iron_compressed', 6, [1, 3]);
      pool.addItem('moreminecarts:silica_steel', 6, [1, 3]);
      pool.addItem('minecraft:raw_iron', 10, [3, 6]);
      pool.addItem('minecraft:raw_gold', 7, [2, 5]);
      pool.addItem('minecraft:raw_copper', 7, [2, 5]);
      pool.addItem('minecraft:copper_ingot', 7, [1, 3]);
    });
  });

  // Additional Castle Ruin Loot
  event.modify('valhelsia_structures:castle_ruin', table => {
    table.addPool(pool => {
      pool.rolls = [0, 1];
      pool.addItem('savage_and_ravage:blast_proof_plating', 15, [2, 4]);
      pool.addItem('irons_spellbooks:iron_spell_book', 10);
      pool.addItem('mekanismtools:bronze_sword', 10);
      pool.addItem('mekanismtools:bronze_axe', 10);
      pool.addItem('immersiveengineering:sword_steel', 5);
      pool.addItem('immersiveengineering:axe_steel', 5);
      pool.addItem('savage_and_ravage:cleaver_of_beheading', 5);
      pool.addItem(Item.of('minecraft:player_head', '{SkullOwner:"Ollari0n"}'), 5);
    });
  });

  // Additional Witch Hut Loot
  event.modify('valhelsia_structures:witch_hut', table => {
    table.addPool(pool => {
      pool.rolls = [1, 2];
      pool.addItem('malum:hex_ash', 15, [2, 4]);
      pool.addItem('irons_spellbooks:cinder_essence', 12, [1, 3]);
      pool.addItem('irons_spellbooks:gold_spell_book', 10);
      pool.addItem('irons_spellbooks:diamond_spell_book', 5);
      pool.addItem('forbidden_arcanus:corrupt_soul', 5);
      pool.addItem('ars_nouveau:wixie_shards', 5);
      pool.addItem('ars_nouveau:wand', 3);
      pool.addItem('ars_nouveau:dominion_wand', 2);
    });
  });

});