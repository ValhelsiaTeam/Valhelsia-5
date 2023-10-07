// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for Mekanism's crafting methods.
 * 
 * @see crushing.js for crushing recipes.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Mekanism Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:mekanism/';
  
  /**
   * Adds a recipe to fill a Metallurgic Infuser with a given type of infusion material.
   * @param {string} type The infusion material to fill the infuser with (eg. 'mekanism:carbon').
   * @param {(string|Ingredient)} input The input ingredient to convert into the infusion material.
   * @param {number} amount The amount of the given type to add.
   */
  const infusionConversion = (type, input, amount) => {
    event.custom({
      type: 'mekanism:infusion_conversion',
      input: InputItem.of(input).toJson(),
      output: {
        infuse_type: type,
        amount: amount
      }
    }).id(`${ID_PREFIX}infusion_conversion/${type.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  /**
   * Creates a recipe to turn a block into a mossy version of it.
   * @param {(string|OutputItem)} output The item or item ID of the mossy block.
   * @param {(string|Ingredient)} input The item or item ID of the base block.
   */
  const mossify = (output, input) => {
    event.recipes.mekanism.metallurgic_infusing(
      output, 
      input, 
      {infuse_type: 'mekanism:bio', amount: 10}
    ).id(`${ID_PREFIX}infusing/bio/${OutputItem.of(output).item.id.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  /**
   * Creates a recipe to turn a block into a fungal version of it.
   * @param {(string|OutputItem)} output The item or item ID of the mossy block.
   * @param {(string|InputItem)} input The item or item ID of the base block.
   */
  const fungify = (output, input) => {
    event.recipes.mekanism.metallurgic_infusing(
      output, 
      input, 
      {infuse_type: 'mekanism:fungi', amount: 10}
    ).id(`${ID_PREFIX}infusing/fungi/${OutputItem.of(output).item.id.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  /**
   * Creates a recipe to crush an ingredient into Bio Fuel.
   * Note: This is in mekanism.js rather than in crushing.js due to being Mekanism-specific.
   * @param {(string|InputItem)} input The item or item ID of the base block.
   * @param {number} quantity The number of Bio Fuel items to output.
   */
  const bioCrush = (input, quantity) => {
    event.recipes.mekanism.crushing(
      `${quantity}x mekanism:bio_fuel`, 
      input
    ).id(`${ID_PREFIX}crushing/biofuel/${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  // Bio Fuel
  // Note: When adding bio fuel crushing, use tags where practical, even if they have to be created
  // (such as 'valhelsia:grasses' or 'forge:fruits' or whatever).

  // Remove specific biofuel crushing recipes in favour of using tags instead.
  [
    // Saplings
    'mekanism:crushing/biofuel/oak_sapling',
    'mekanism:crushing/biofuel/spruce_sapling',
    'mekanism:crushing/biofuel/birch_sapling',
    'mekanism:crushing/biofuel/jungle_sapling',
    'mekanism:crushing/biofuel/acacia_sapling',
    'mekanism:crushing/biofuel/dark_oak_sapling',
    'mekanism:crushing/biofuel/mangrove_sapling',

    // Leaves
    //'mekanism:crushing/biofuel/oak_leaves',
    //'mekanism:crushing/biofuel/spruce_leaves',
    //'mekanism:crushing/biofuel/birch_leaves',
    //'mekanism:crushing/biofuel/jungle_leaves',
    //'mekanism:crushing/biofuel/acacia_leaves',
    //'mekanism:crushing/biofuel/dark_oak_leaves',
    //'mekanism:crushing/biofuel/azalea_leaves',
    //'mekanism:crushing/biofuel/mangrove_leaves',

    // Seeds
    'mekanism:crushing/biofuel/beetroot_seeds',
    'mekanism:crushing/biofuel/melon_seeds',
    'mekanism:crushing/biofuel/pumpkin_seeds',
    'mekanism:crushing/biofuel/wheat_seeds',

    // Flowers
    'mekanism:crushing/biofuel/dandelion',
    'mekanism:crushing/biofuel/poppy',
    'mekanism:crushing/biofuel/blue_orchid',
    'mekanism:crushing/biofuel/allium',
    'mekanism:crushing/biofuel/azure_bluet',
    'mekanism:crushing/biofuel/red_tulip',
    'mekanism:crushing/biofuel/orange_tulip',
    'mekanism:crushing/biofuel/white_tulip',
    'mekanism:crushing/biofuel/pink_tulip',
    'mekanism:crushing/biofuel/oxeye_daisy',
    'mekanism:crushing/biofuel/cornflower',
    'mekanism:crushing/biofuel/lily_of_the_valley',
    'mekanism:crushing/biofuel/wither_rose',
    'mekanism:crushing/biofuel/sunflower',
    'mekanism:crushing/biofuel/lilac',
    'mekanism:crushing/biofuel/rose_bush',
    'mekanism:crushing/biofuel/peony',

    'mekanism:crushing/biofuel/melon_slice', // #blameurmet

    'mekanism:crushing/biofuel/nether_wart_block', // Now turns into Nether Wart instead of Bio Fuel.
    
    // TODO: More as tags are created / expanded.
    // See default recipes here: https://github.com/mekanism/Mekanism/tree/1.18.x/src/datagen/generated/mekanism/data/mekanism/recipes/crushing/biofuel
  ].forEach((recipeID) => event.remove({id: recipeID}));
  
  bioCrush('#minecraft:flowers', 5);
  bioCrush('#minecraft:saplings', 2);
  bioCrush('#forge:seeds', 2);
  bioCrush('minecraft:melon_slice', 2); // #blameurmet

  // Coal Coke -> Carbon / Enriched Carbon
  event.remove({id: 'mekanism:enriching/enriched/carbon'});
  event.recipes.mekanism.enriching('mekanism:enriched_carbon', 'minecraft:coal').id(`${ID_PREFIX}enriching/enriched/carbon_from_coal`);
  event.recipes.mekanism.enriching('mekanism:enriched_carbon', 'minecraft:charcoal').id(`${ID_PREFIX}enriching/enriched/carbon_from_charcoal`);
  event.recipes.mekanism.enriching('2x mekanism:enriched_carbon', '#forge:coal_coke').id(`${ID_PREFIX}enriching/enriched/carbon_from_coal_coke`);
  infusionConversion('mekanism:carbon', '#forge:coal_coke', 40);
  infusionConversion('mekanism:carbon', '#forge:dusts/coal_coke', 40);

  // Malum Coals -> Carbon / Enriched Carbon
  infusionConversion('mekanism:carbon', 'malum:coal_fragment', 1);
  infusionConversion('mekanism:carbon', 'malum:charcoal_fragment', 2);
  infusionConversion('mekanism:carbon', 'malum:arcane_charcoal_fragment', 4);
  infusionConversion('mekanism:carbon', 'malum:arcane_charcoal', 40);
  event.recipes.mekanism.enriching('2x mekanism:enriched_carbon', 'malum:arcane_charcoal').id(`${ID_PREFIX}enriching/enriched/carbon_from_arcane_charcoal`);

  // Combiner
  event.recipes.mekanism.combining('biomesoplenty:rooted_sand', '3x minecraft:hanging_roots', 'minecraft:sand').id(`${ID_PREFIX}combining/rooted_sand`);
  event.recipes.mekanism.combining(Item.of('minecraft:player_head', '{SkullOwner:"DFood"}'), 'minecraft:player_head', 'farmersdelight:dog_food').id(`${ID_PREFIX}easter_egg/dfood`);
  event.recipes.mekanism.combining(Item.of('minecraft:player_head', '{SkullOwner:"JangroZ"}'), 'minecraft:player_head', 'minecraft:sticky_piston').id(`${ID_PREFIX}easter_egg/jangro`);
  event.recipes.mekanism.combining(Item.of('minecraft:player_head', '{SkullOwner:"Khytwel"}'), 'minecraft:player_head', 'valhelsia_structures:explorers_tent').id(`${ID_PREFIX}easter_egg/khytwel`);
  event.recipes.mekanism.combining(Item.of('minecraft:player_head', '{SkullOwner:"murr__"}'), 'minecraft:player_head', 'ae2:network_tool').id(`${ID_PREFIX}easter_egg/urmet`);
  event.recipes.mekanism.combining(Item.of('minecraft:player_head', '{SkullOwner:"stal111"}'), 'minecraft:player_head', 'forbidden_arcanus:corrupted_pixie_utrem_jar').id(`${ID_PREFIX}easter_egg/stal`);
  event.recipes.mekanism.combining(Item.of('minecraft:player_head', '{SkullOwner:"Vaelzan"}'), 'minecraft:player_head', 'quark:magenta_rune').id(`${ID_PREFIX}easter_egg/vaelzan`);

  // Enrichment
  event.recipes.mekanism.enriching('minecraft:ender_pearl', '#forge:dusts/ender_pearl').id(`${ID_PREFIX}enriching/ender_pearl_from_dust`);
  event.recipes.mekanism.enriching('ae2:fluix_crystal', '#forge:dusts/fluix').id(`${ID_PREFIX}enriching/fluix_crystal_from_dust`);
  event.recipes.mekanism.enriching('forbidden_arcanus:arcane_crystal', '#forge:dusts/arcane_crystal').id(`${ID_PREFIX}enriching/arcane_crystal_from_dust`);
  event.recipes.mekanism.enriching('galosphere:allurite_shard', '#forge:dusts/allurite').id(`${ID_PREFIX}enriching/allurite_shard_from_dust`);
  event.recipes.mekanism.enriching('galosphere:lumiere_shard', '#forge:dusts/lumiere').id(`${ID_PREFIX}enriching/lumiere_shard_from_dust`);

  // Infusion
  event.recipes.mekanism.metallurgic_infusing('forbidden_arcanus:gilded_darkstone', 'forbidden_arcanus:darkstone', {infuse_type: 'mekanism:gold', amount: 100}).id(`${ID_PREFIX}/infusing/gold/gilded_darkstone`);

  // Fungification
  fungify('minecraft:shroomlight', 'minecraft:glowstone');
  fungify('botania:metamorphic_fungal_stone', 'minecraft:stone');
  fungify('environmental:mycelium_sprouts', 'minecraft:grass');

  // Mossification
  mossify('botania:mossy_dreamwood_planks', 'botania:dreamwood_planks');
  mossify('botania:mossy_livingrock_bricks', 'botania:livingrock_bricks');
  mossify('botania:mossy_livingwood_planks', 'botania:livingwood_planks');

  // TODO: Blue Skies

  mossify('createdeco:mossy_worn_bricks', 'createdeco:worn_bricks');
  mossify('createdeco:mossy_red_long_bricks', 'minecraft:bricks');
  // TODO: More Create Deco

  mossify('darkerdepths:mossy_grimestone', 'darkerdepths:grimestone');

  mossify('quark:mossy_cobblestone_bricks', 'quark:cobblestone_bricks');

  mossify('twilightforest:mossy_castle_brick', 'twilightforest:castle_brick');
  mossify('twilightforest:mossy_etched_nagastone', 'twilightforest:etched_nagastone');
  mossify('twilightforest:mossy_mazestone', 'twilightforest:mazestone');
  mossify('twilightforest:mossy_nagastone_pillar', 'twilightforest:nagastone_pillar');
  mossify('twilightforest:mossy_towerwood', 'twilightforest:towerwood');
  mossify('twilightforest:mossy_underbrick', 'twilightforest:underbrick');

  mossify('waystones:mossy_waystone', 'waystones:waystone');

});