// priority: 90
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Additions, removals, and changes for blasting and smelting recipes in Valhelsia 5.
 * 
 * Contains several convenience functions, particularly where smelting and blasting recipes need to be changed together.
 * This script merges several metal smelting recipes together to reduce clutter.
 * It also removes recipes where multiple mods add the same recipe.
 * 
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Smelting / Blasting Recipe Event Handler
 */
ServerEvents.recipes(event => {
  
  // ----- Convenience Functions -----
 
  /**
   * Replaces the input of a smelting / blasting recipe.
   * @param {string|Ingredient} from Original input.
   * @param {string|Ingredient} to New input.
   */
  const replaceSmeltingInput = (from, to) => {
    event.replaceInput({type: 'minecraft:blasting'}, from, to);
    event.replaceInput({type: 'minecraft:smelting'}, from, to);
  };

  /**
   * Replaces the output of a smelting / blasting recipe.
   * This generally isn't needed, since outputs can usually be changed for all recipe types.
   * @param {string|Item} from Original output.
   * @param {string|Item} to New output.
   */
  const replaceSmeltingOutput = (from, to) => { 
    event.replaceOutput({type: 'minecraft:blasting'}, from, to);
    event.replaceOutput({type: 'minecraft:smelting'}, from, to);
  };

  /**
   * Adds a smelting recipe for the furnace.
   * @param {(string|Item)} output Resulting smelted item.
   * @param {(string|Ingredient)} input Ingredient to be smelted.
   * @param {number} [xp] Experience given by smelting the item.
   */
   const smelt = (output, input, xp) => {
    if (typeof xp == 'undefined') {
      xp = 0.1;
    }

    event.smelting(output, input).xp(xp);
  };

  /**
   * Adds a blasting recipe to the vanilla blast furnace.
   * @param {(string|Item)} output Resulting blasted item.
   * @param {(string|Ingredient)} input Ingredient to be blasted.
   * @param {number} [xp] Experience given by blasting the item.
   */
  const blast = (output, input, xp) => {
    if (typeof xp == 'undefined') {
      xp = 0.1;
    }

    event.blasting(output, input).xp(xp);
  };

  /**
   * Adds a smelting recipe to both the furnace and blast furnace.
   * @param {(string|Item)} output Resulting smelted item.
   * @param {(string|Ingredient)} input Ingredient to be smelted.
   * @param {number} [xp] Experience given by smelting the item.
   */
  const smeltAndBlast = (output, input, xp) => {
    if (typeof xp == 'undefined') {
      xp = 0.1;
    }

    event.smelting(output, input).xp(xp);
    event.blasting(output, input).xp(xp);
  };

  // Replace Vanilla Smelting / Blasting inputs to reduce clutter in JEI / REI.
  ['coal', 'copper', 'diamond', 'gold', 'iron', 'lapis', 'redstone'].forEach((metal) => {
    replaceSmeltingInput(`minecraft:${metal}_ore`, `#forge:ores/${metal}`);
    replaceSmeltingInput(`minecraft:raw_${metal}`, `#forge:raw_materials/${metal}`);
  });

  // Replace IE Smelting / Blasting inputs with tags.
  ['aluminum', 'nickel', 'silver'].forEach((metal) => {
    replaceSmeltingInput(`immersiveengineering:dust_${metal}`, `#forge:dusts/${metal}`);
    replaceSmeltingInput(`immersiveengineering:ore_${metal}`, `#forge:ores/${metal}`);
    replaceSmeltingInput(`immersiveengineering:raw_${metal}`, `#forge:raw_materials/${metal}`);
  });

  // As above, but for metals that don't have ore or raw ore forms.
  ['constantan', 'electrum'].forEach((metal) => {
    replaceSmeltingInput(`immersiveengineering:dust_${metal}`, `#forge:dusts/${metal}`);
  });

  // Remove merged smelting / blasting recipes now that they're redundant due to the above change.
  ['coal', 'diamond', 'gold', 'iron', 'lapis', 'redstone'].forEach((metal) => {
    event.remove({id: `minecraft:${metal}_ingot_from_blasting_deepslate_${metal}_ore`});
    event.remove({id: `minecraft:${metal}_ingot_from_smelting_deepslate_${metal}_ore`});
    event.remove({id: `darkerdepths:${metal}_ingot_from_blasting_aridrock_${metal}_ore`});
    event.remove({id: `darkerdepths:${metal}_ingot_from_blasting_limestone_${metal}_ore`});
    event.remove({id: `darkerdepths:${metal}_ingot_from_smelting_aridrock_${metal}_ore`});
    event.remove({id: `darkerdepths:${metal}_ingot_from_smelting_limestone_${metal}_ore`});
  });
  event.remove({id: 'minecraft:copper_ingot_from_blasting_deepslate_copper_ore'});
  event.remove({id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore'});
  event.remove({id: 'minecraft:gold_ingot_from_blasting_nether_gold_ore'});
  event.remove({id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore'});

  // Remove IE smelting / blasting of dusts (duplicates - Mekanism has recipes that use tags).
  ['copper_ingot', 'gold_ingot', 'iron_ingot', 'ingot_lead', 'ingot_steel', 'ingot_uranium'].forEach((metal) => {
    event.remove({id: `immersiveengineering:smelting/${metal}_from_dust_from_blasting`});
    event.remove({id: `immersiveengineering:smelting/${metal}_from_dust`});
  });

  // Remove IE smelting / blasting where Mekanism recipes exist.
  ['lead', 'uranium'].forEach((metal) => {
    event.remove({id: `immersiveengineering:smelting/ingot_${metal}`});
    event.remove({id: `immersiveengineering:smelting/ingot_${metal}2`});
    event.remove({id: `immersiveengineering:smelting/ingot_${metal}3`});
    event.remove({id: `immersiveengineering:smelting/ingot_${metal}_from_blasting`});
    event.remove({id: `immersiveengineering:smelting/ingot_${metal}_from_blasting2`});
    event.remove({id: `immersiveengineering:smelting/ingot_${metal}_from_blasting3`});
  });

  // Allow Ash Bricks to be made by smelting any ash.
  replaceSmeltingInput('supplementaries:ash', '#valhelsia:ash');

  // New smelting recipes.
  smelt('biomesoplenty:dried_salt', 'mekanism:block_salt');
});
