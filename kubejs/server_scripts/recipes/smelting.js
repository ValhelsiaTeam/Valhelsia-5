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
   * Adds a smoking recipe to the vanilla smoker.
   * @param {(string|Item)} output Resulting smoked item.
   * @param {(string|InputItem)} input Ingredient to be smoked.
   * @param {number} [xp] Experience given by smoking the item.
   */
  const smoke = (output, input, xp) => {
    if (typeof xp == 'undefined') {
      xp = 0.1;
    }

    event.smoking(output, input).xp(xp).id(`${ID_PREFIX}${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}_from_smoking`);
  };

  /**
   * Adds a smoking recipe to the vanilla smoker.
   * @param {(string|Item)} output Resulting smoked item.
   * @param {(string|InputItem)} input Ingredient to be smoked.
   * @param {number} [xp] Experience given by smoking the item.
   */
  const campfire = (output, input, xp) => {
    if (typeof xp == 'undefined') {
      xp = 0.1;
    }

    event.campfireCooking(output, input).xp(xp).id(`${ID_PREFIX}${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}_from_campfire`);
  };

  /**
   * Adds a smelting recipe to both the furnace and blast furnace.
   * @param {(string|Item)} output Resulting smelted item.
   * @param {(string|InputItem)} input Ingredient to be smelted.
   * @param {number} [xp] Experience given by smelting the item.
   */
  const smeltAndBlast = (output, input, xp) => {
    smelt(output, input, xp);
    blast(output, input, xp);
  };
  
  /**
   * Adds a smelting recipe to both the furnace and smoker.
   * @param {(string|Item)} output Resulting smelted item.
   * @param {(string|InputItem)} input Ingredient to be smelted.
   * @param {number} [xp] Experience given by smelting the item.
   */
  const smeltAndSmoke = (output, input, xp) => {
    smelt(output, input, xp);
    smoke(output, input, xp);
  };
  
  /**
   * Adds a cooking recipe to the furnace, smoker, and campfire.
   * @param {(string|Item)} output Resulting smelted item.
   * @param {(string|InputItem)} input Ingredient to be smelted.
   * @param {number} [xp] Experience given by smelting the item.
   */
  const cook = (output, input, xp) => {    
    smelt(output, input, xp);
    smoke(output, input, xp);
    campfire(output, input, xp);
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

  // Remove redundant smelting recipes by ID.
  [
    // Minecraft 
    'minecraft:copper_ingot_from_blasting_deepslate_copper_ore',
    'minecraft:copper_ingot_from_smelting_deepslate_copper_ore',
    
    'minecraft:gold_ingot_from_blasting_nether_gold_ore',
    'minecraft:gold_ingot_from_smelting_nether_gold_ore',

    'minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore',
    'minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore',
  
    // Ad Astra
    'ad_astra:recipes/coal_from_blasting_glacio_coal_ore',
    'ad_astra:recipes/coal_from_smelting_glacio_coal_ore',
    'ad_astra:recipes/coal_from_blasting_venus_coal_ore',
    'ad_astra:recipes/coal_from_smelting_vnus_coal_ore',

    'ad_astra:recipes/copper_ingot_from_blasting_glacio_copper_ore',
    'ad_astra:recipes/copper_ingot_from_smelting_glacio_copper_ore',

    'ad_astra:recipes/diamond_from_blasting_venus_diamond_ore',
    'ad_astra:recipes/diamond_from_smelting_venus_diamond_ore',
    'ad_astra:recipes/diamond_from_blasting_mars_diamond_ore',
    'ad_astra:recipes/diamond_from_smelting_mars_diamond_ore',

    'ad_astra:recipes/iron_ingot_from_blasting_moon_iron_ore',
    'ad_astra:recipes/iron_ingot_from_smelting_moon_iron_ore',
    'ad_astra:recipes/iron_ingot_from_blasting_mars_iron_ore',
    'ad_astra:recipes/iron_ingot_from_smelting_mars_iron_ore',
    'ad_astra:recipes/iron_ingot_from_blasting_mercury_iron_ore',
    'ad_astra:recipes/iron_ingot_from_smelting_mercury_iron_ore',
    'ad_astra:recipes/iron_ingot_from_blasting_glacio_iron_ore',
    'ad_astra:recipes/iron_ingot_from_smelting_glacio_iron_ore',

    'ad_astra:recipes/gold_ingot_from_blasting_venus_gold_ore',
    'ad_astra:recipes/gold_ingot_from_smelting_venus_gold_ore',

    'ad_astra:recipes/lapis_lazuli_from_blasting_glacio_lapis_ore',
    'ad_astra:recipes/lapis_lazuli_from_smelting_glacio_lapis_ore',

    // Create
    'create:campfire_cooking/bread',
    'create:smelting/bread',
    'create:smoking/bread',
    'create:blasting/ingot_lead_compat_immersiveengineering',
    'create:blasting/ingot_uranium_compat_immersiveengineering',
    'create:smelting/ingot_lead_compat_immersiveengineering',
    'create:smelting/ingot_uranium_compat_immersiveengineering',

    // Darker Depths
    'darkerdepths:lapis_lazuli_from_blasting_aridrock_lapis_ore',
    'darkerdepths:lapis_lazuli_from_blasting_limestone_lapis_ore',
    'darkerdepths:lapis_lazuli_from_smelting_aridrock_lapis_ore',
    'darkerdepths:lapis_lazuli_from_smelting_limestone_lapis_ore',
    'darkerdepths:silver_ingot_from_smelting_aridrock_silver_ore',
    'darkerdepths:silver_ingot_from_smelting_limestone_silver_ore',
    'darkerdepths:silver_ingot_from_blasting_aridrock_silver_ore',
    'darkerdepths:silver_ingot_from_blasting_limestone_silver_ore',

    // Deeper and Darker (uses the wrong namespace)
    'minecraft:copper_ingot_from_blasting_sculk_stone_copper_ore',
    'minecraft:copper_ingot_from_smelting_sculk_stone_copper_ore',
    'minecraft:lapis_lazuli_from_blasting_sculk_stone_lapis_ore',
    'minecraft:lapis_lazuli_from_smelting_sculk_stone_lapis_ore',

    // Farmer's Delight
    'farmersdelight:bread_from_smelting',
    'farmersdelight:bread_from_smoking',

    // Galosphere
    'galosphere:silver_ingot_from_blasting_silver_ore',
    'galosphere:silver_ingot_from_smelting_silver_ore',
    'galosphere:silver_ingot_from_blasting_raw_silver',
    'galosphere:silver_ingot_from_smelting_raw_silver',

    // Immersive Engineering
    'immersiveengineering:smelting/ingot_silver2',
    'immersiveengineering:smelting/ingot_silver_from_blasting_2',

    // MineColonies
    'minecolonies:baked_bread',
    'minecolonies:baked_bread_campfire_cooking',
    'minecolonies:baked_bread_smoking',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Allow Ash Bricks to be made by smelting any ash.
  replaceSmeltingInput('supplementaries:ash', '#valhelsia:ash');

  // New smelting recipes.
  smelt('biomesoplenty:dried_salt', 'mekanism:block_salt');
  smeltAndBlast('darkerdepths:amber', 'deeperdarker:crystallized_amber');
  smelt('irons_spellbooks:arcane_salvage', 'irons_spellbooks:arcane_debris');
  cook('minecraft:bread', '#forge:dough/wheat', 0.35);
});
