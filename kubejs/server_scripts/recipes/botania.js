// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for Botania's recipe types.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Botania Recipe Event Handler
 */
ServerEvents.recipes(event => {

  /**
   * Creates a conjuration recipe to duplicate an item with a mana pool. 
   * 
   * @param {!string} item The Item ID of the item to duplicate (MUST be a string).
   * @param {number} [mana] The mana cost of the duplication (default: 800).
   */
  const conj2x = (item, mana) => {
    if (typeof mana == 'undefined') {
      mana = 800;
    }

    event.recipes.botania.mana_infusion(`2x ${item}`, item, mana, 'botania:conjuration_catalyst').id(`valhelsia:conjuration_${item.replace(':','_')}`);
  };

  // Mana Infusion
  //event.recipes.botania.mana_infusion('output_here', 'input_here', 200);

  // Mana Infusion - Alchemy
  event.recipes.botania.mana_infusion('minecraft:kelp', 'minecraft:seagrass', 200, 'botania:alchemy_catalyst');
  event.recipes.botania.mana_infusion('minecraft:seagrass', 'minecraft:kelp', 200, 'botania:alchemy_catalyst');
  event.recipes.botania.mana_infusion('darkerdepths:lush_sprouts', 'biomesoplenty:sprout', 500, 'botania:alchemy_catalyst');

  // Mana Infusion - Conjuration
  conj2x('minecraft:crimson_roots');
  conj2x('minecraft:hanging_roots');
  conj2x('minecraft:nether_sprouts');
  conj2x('minecraft:warped_roots');
  conj2x('minecraft:small_dripleaf', 1000);

  conj2x('biomesoplenty:barley');
  conj2x('biomesoplenty:bush');
  conj2x('biomesoplenty:cattail');
  conj2x('biomesoplenty:clover');
  conj2x('biomesoplenty:dead_grass');
  conj2x('biomesoplenty:desert_grass');
  conj2x('biomesoplenty:dune_grass');
  conj2x('biomesoplenty:huge_clover_petal', 1000);
  conj2x('biomesoplenty:reed');
  conj2x('biomesoplenty:sea_oats');
  conj2x('biomesoplenty:sprout');
  conj2x('biomesoplenty:watergrass');

  conj2x('blue_skies:cryo_root', 1000);
  conj2x('blue_skies:lucentroot', 1000);

  conj2x('darkerdepths:dry_sprouts');
  conj2x('darkerdepths:glowshroom', 1000);
  conj2x('darkerdepths:glowshroom_block', 2000);
  conj2x('darkerdepths:glowshroom_stem', 2000);
  conj2x('darkerdepths:long_roots', 1000);
  conj2x('darkerdepths:lush_sprouts');
  conj2x('darkerdepths:mossy_sprouts');
  conj2x('darkerdepths:roots');

  conj2x('farmersdelight:wild_cabbages', 1000);
  conj2x('farmersdelight:wild_onions', 1000);
  conj2x('farmersdelight:wild_carrots', 1000);
  conj2x('farmersdelight:wild_potatoes', 1000);
  conj2x('farmersdelight:wild_rice', 1000);
  conj2x('farmersdelight:sandy_shrub', 800);

  conj2x('farmersrespite:wild_tea_bush', 1000);
  conj2x('farmersrespite:wild_coffee_bush', 1000);

  conj2x('forbidden_arcanus:petrified_root', 1000);

  conj2x('supplementaries:wild_flax', 1000);

  // Elven Trade
  // event.recipes.botania.elven_trade(['output_here'], 'input_here');

  // Pure Daisy
  event.recipes.botania.pure_daisy('forbidden_arcanus:soulless_sand', 'minecraft:soul_sand');
  event.recipes.botania.pure_daisy('minecraft:sand', 'forbidden_arcanus:soulless_sand');

  // Brewing (Note: Needs a corresponding entry in a startup script too!)
  // event.recipes.botania.brew('kubejs:torrent', ['input_here']);

  // Petal Apothecary
  // event.recipes.botania.petal_apothecary('output_here', ['input_here']);

  // Runic Altar
  // event.recipes.botania.runic_altar('output_here', ['input_1', 'input_2'], 5000);

  // Terrestrial Agglomoration Plate
  // event.recipes.botania.terra_plate('output_here', ['input_1', 'input_2'], 5000000);

  // Orechid - Stone
  event.recipes.botania.orechid('create:zinc_ore', 'minecraft:stone', 7000);
  event.recipes.botania.orechid('forbidden_arcanus:arcane_crystal_ore', 'minecraft:stone', 1000);
  event.recipes.botania.orechid('immersiveengineering:ore_aluminum', 'minecraft:stone', 4000);
  event.recipes.botania.orechid('immersiveengineering:ore_nickel', 'minecraft:stone', 1500);
  event.recipes.botania.orechid('immersiveengineering:ore_silver', 'minecraft:stone', 3000);
  event.recipes.botania.orechid('mekanism:fluorite_ore', 'minecraft:stone', 5000);
  event.recipes.botania.orechid('mekanism:lead_ore', 'minecraft:stone', 2000);
  event.recipes.botania.orechid('mekanism:osmium_ore', 'minecraft:stone', 18000);
  event.recipes.botania.orechid('mekanism:tin_ore', 'minecraft:stone', 4000);
  event.recipes.botania.orechid('mekanism:uranium_ore', 'minecraft:stone', 1500);
  event.recipes.botania.orechid('sullysmod:jade_ore', 'minecraft:stone', 1000);

  // Orechid - Deepslate
  event.recipes.botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate', 150);
  event.recipes.botania.orechid('forbidden_arcanus:deepslate_arcane_crystal_ore', 'minecraft:deepslate', 75);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_aluminum', 'minecraft:deepslate', 75);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_nickel', 'minecraft:deepslate', 100);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_silver', 'minecraft:deepslate', 125);
  event.recipes.botania.orechid('mekanism:deepslate_fluorite_ore', 'minecraft:deepslate', 100);
  event.recipes.botania.orechid('mekanism:deepslate_lead_ore', 'minecraft:deepslate', 100);
  event.recipes.botania.orechid('mekanism:deepslate_osmium_ore', 'minecraft:deepslate', 180);
  event.recipes.botania.orechid('mekanism:deepslate_tin_ore', 'minecraft:deepslate', 150);
  event.recipes.botania.orechid('mekanism:deepslate_uranium_ore', 'minecraft:deepslate', 150);
  event.recipes.botania.orechid('sullysmod:deepslate_jade_ore', 'minecraft:deepslate', 50);
  

  // Orechid - Netherrack
  // event.recipes.botania.orechid_ignem('output_here', 'minecraft:netherrack', 1);

  // Orechid - Modded Stone

  // Marimorphosis
  // event.recipes.botania.marimorphosis('output_here', 'input_here', 1, ['plains'], 10);
});
