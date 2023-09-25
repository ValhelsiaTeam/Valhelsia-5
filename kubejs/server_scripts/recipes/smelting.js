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
  const ID_PREFIX = 'valhelsia:smelting/';
  
  // ----- Convenience Functions -----
 
  /**
   * Replaces the input of a smelting / blasting recipe.
   * @param {string|InputItem} from Original input.
   * @param {string|InputItem} to New input.
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
   * @param {(string|InputItem)} input Ingredient to be smelted.
   * @param {number} [xp] Experience given by smelting the item.
   */
   const smelt = (output, input, xp) => {
    if (typeof xp == 'undefined') {
      xp = 0.1;
    }

    event.smelting(output, input).xp(xp).id(`${ID_PREFIX}${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  /**
   * Adds a blasting recipe to the vanilla blast furnace.
   * @param {(string|Item)} output Resulting blasted item.
   * @param {(string|InputItem)} input Ingredient to be blasted.
   * @param {number} [xp] Experience given by blasting the item.
   */
  const blast = (output, input, xp) => {
    if (typeof xp == 'undefined') {
      xp = 0.1;
    }

    event.blasting(output, input).xp(xp).id(`${ID_PREFIX}${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}_from_blasting`);
  };

  /**
   * Adds a smelting recipe to both the furnace and blast furnace.
   * @param {(string|Item)} output Resulting smelted item.
   * @param {(string|InputItem)} input Ingredient to be smelted.
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
  ['gold', 'iron'].forEach((metal) => {
    event.remove({id: `minecraft:${metal}_ingot_from_blasting_deepslate_${metal}_ore`});
    event.remove({id: `minecraft:${metal}_ingot_from_smelting_deepslate_${metal}_ore`});
    event.remove({id: `darkerdepths:${metal}_ingot_from_blasting_aridrock_${metal}_ore`});
    event.remove({id: `darkerdepths:${metal}_ingot_from_blasting_limestone_${metal}_ore`});
    event.remove({id: `darkerdepths:${metal}_ingot_from_smelting_aridrock_${metal}_ore`});
    event.remove({id: `darkerdepths:${metal}_ingot_from_smelting_limestone_${metal}_ore`});
    event.remove({id: `minecraft:${metal}_ingot_from_blasting_sculk_stone_${metal}_ore`}); // Deeper and Darker uses the wrong namespace.
    event.remove({id: `minecraft:${metal}_ingot_from_smelting_sculk_stone_${metal}_ore`}); // Deeper and Darker uses the wrong namespace.
  });
  
  ['coal', 'diamond', 'redstone'].forEach((mineral) => {
    event.remove({id: `minecraft:${mineral}_from_blasting_deepslate_${mineral}_ore`});
    event.remove({id: `minecraft:${mineral}_from_smelting_deepslate_${mineral}_ore`});
    event.remove({id: `darkerdepths:${mineral}_from_blasting_aridrock_${mineral}_ore`});
    event.remove({id: `darkerdepths:${mineral}_from_blasting_limestone_${mineral}_ore`});
    event.remove({id: `darkerdepths:${mineral}_from_smelting_aridrock_${mineral}_ore`});
    event.remove({id: `darkerdepths:${mineral}_from_smelting_limestone_${mineral}_ore`});
    event.remove({id: `minecraft:${mineral}_from_blasting_sculk_stone_${mineral}_ore`}); // Deeper and Darker uses the wrong namespace.
    event.remove({id: `minecraft:${mineral}_from_smelting_sculk_stone_${mineral}_ore`}); // Deeper and Darker uses the wrong namespace.
  });
  
  event.remove({id: 'ad_astra:recipes/coal_from_blasting_glacio_coal_ore'});
  event.remove({id: 'ad_astra:recipes/coal_from_smelting_glacio_coal_ore'});
  event.remove({id: 'ad_astra:recipes/coal_from_blasting_venus_coal_ore'});
  event.remove({id: 'ad_astra:recipes/coal_from_smelting_vnus_coal_ore'});

  event.remove({id: 'minecraft:copper_ingot_from_blasting_deepslate_copper_ore'});
  event.remove({id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore'});
  event.remove({id: 'minecraft:copper_ingot_from_blasting_sculk_stone_copper_ore'}); // Deeper and Darker uses the wrong namespace.
  event.remove({id: 'minecraft:copper_ingot_from_smelting_sculk_stone_copper_ore'}); // Deeper and Darker uses the wrong namespace.
  event.remove({id: 'ad_astra:recipes/copper_ingot_from_blasting_glacio_copper_ore'});
  event.remove({id: 'ad_astra:recipes/copper_ingot_from_smelting_glacio_copper_ore'});
  
  event.remove({id: 'ad_astra:recipes/diamond_from_blasting_venus_diamond_ore'});
  event.remove({id: 'ad_astra:recipes/diamond_from_smelting_venus_diamond_ore'});
  
  event.remove({id: 'ad_astra:recipes/iron_ingot_from_blasting_moon_iron_ore'});
  event.remove({id: 'ad_astra:recipes/iron_ingot_from_smelting_moon_iron_ore'});
  event.remove({id: 'ad_astra:recipes/iron_ingot_from_blasting_mars_iron_ore'});
  event.remove({id: 'ad_astra:recipes/iron_ingot_from_smelting_mars_iron_ore'});
  event.remove({id: 'ad_astra:recipes/iron_ingot_from_blasting_mercury_iron_ore'});
  event.remove({id: 'ad_astra:recipes/iron_ingot_from_smelting_mercury_iron_ore'});
  event.remove({id: 'ad_astra:recipes/iron_ingot_from_blasting_glacio_iron_ore'});
  event.remove({id: 'ad_astra:recipes/iron_ingot_from_smelting_glacio_iron_ore'});

  event.remove({id: 'minecraft:gold_ingot_from_blasting_nether_gold_ore'});
  event.remove({id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore'});
  event.remove({id: 'ad_astra:recipes/gold_ingot_from_blasting_venus_gold_ore'});
  event.remove({id: 'ad_astra:recipes/gold_ingot_from_smelting_venus_gold_ore'});

  event.remove({id: `minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore`});
  event.remove({id: `minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore`});
  event.remove({id: 'ad_astra:recipes/lapis_lazuli_from_blasting_glacio_lapis_ore'});
  event.remove({id: 'ad_astra:recipes/lapis_lazuli_from_smelting_glacio_lapis_ore'});
  event.remove({id: `darkerdepths:lapis_lazuli_from_blasting_aridrock_lapis_ore`});
  event.remove({id: `darkerdepths:lapis_lazuli_from_blasting_limestone_lapis_ore`});
  event.remove({id: `darkerdepths:lapis_lazuli_from_smelting_aridrock_lapis_ore`});
  event.remove({id: `darkerdepths:lapis_lazuli_from_smelting_limestone_lapis_ore`});
  event.remove({id: `minecraft:lapis_lazuli_from_blasting_sculk_stone_lapis_ore`}); // Deeper and Darker uses the wrong namespace.
  event.remove({id: `minecraft:lapis_lazuli_from_smelting_sculk_stone_lapis_ore`}); // Deeper and Darker uses the wrong namespace.
  
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

  // Remove other redundant IE smelting / blassting.
  event.remove({id: 'immersiveengineering:smelting/ingot_silver2'});
  event.remove({id: 'immersiveengineering:smelting/ingot_silver_from_blasting_2'});

  // Remove redundant Create smelting / blasting recipes.
  event.remove({id: 'create:blasting/ingot_lead_compat_immersiveengineering'});
  event.remove({id: 'create:blasting/ingot_uranium_compat_immersiveengineering'});
  event.remove({id: 'create:smelting/ingot_lead_compat_immersiveengineering'});
  event.remove({id: 'create:smelting/ingot_uranium_compat_immersiveengineering'});

  // Remove Darker Depths smelting / blasting.
  event.remove({id: 'darkerdepths:silver_ingot_from_smelting_aridrock_silver_ore'});
  event.remove({id: 'darkerdepths:silver_ingot_from_smelting_limestone_silver_ore'});
  event.remove({id: 'darkerdepths:silver_ingot_from_blasting_aridrock_silver_ore'});
  event.remove({id: 'darkerdepths:silver_ingot_from_blasting_limestone_silver_ore'});

  // Remove Galosphere smelting / blasting.
  event.remove({id: 'galosphere:silver_ingot_from_blasting_silver_ore'});
  event.remove({id: 'galosphere:silver_ingot_from_smelting_silver_ore'});
  event.remove({id: 'galosphere:silver_ingot_from_blasting_raw_silver'});
  event.remove({id: 'galosphere:silver_ingot_from_smelting_raw_silver'});

  // Allow Ash Bricks to be made by smelting any ash.
  replaceSmeltingInput('supplementaries:ash', '#valhelsia:ash');

  // New smelting recipes.
  smelt('biomesoplenty:dried_salt', 'mekanism:block_salt');
});
