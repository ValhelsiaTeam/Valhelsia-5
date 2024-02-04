// priority: 9
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Ars Nouveau Recipes for Valhelsia 5's Recipe Overhaul Mode.
 * @copyright Valhelsia Inc 2024
 */

/**
 * Ars Nouveau Recipe Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.overhaul) {
    return;
  }

  const ID_PREFIX = 'valhelsia:overhaul/ars_nouveau/';

  /**
   * Creates a new recipe to upgrade an Ars Nouveau spellbook.
   * @param {string} output The book to upgrade to.
   * @param {Array} input An array of ingredients required to upgrade the book.
   * @param {string} input_book The book to upgrade from.
   * @param {string} id The recipe ID.
   */
  const book_upgrade = (output, input, input_book, recipe_id) => {
    event.custom({
      type: 'ars_nouveau:book_upgrade',
      pattern: [
        '   ',
        ' y ',
        '   '
      ],
      key: {
        y: {
          item: input_book
        }
      },
      ingredients: input,
      result: {
        item: output
      }
    }).id(recipe_id);
  };

  // Spellbook Upgrades
  book_upgrade('ars_nouveau:apprentice_spell_book', [
    {item: 'ars_nouveau:novice_spell_book'},
    {item: 'forbidden_arcanus:obsidian_skull'},
    {item: 'sullysmod:polished_jade'},
    {item: 'sullysmod:polished_jade'},
    {item: 'sullysmod:polished_jade'},
    {item: 'create:polished_rose_quartz'},
    {item: 'create:polished_rose_quartz'},
    {item: 'ars_nouveau:blaze_fiber'},
    {item: 'ars_nouveau:blaze_fiber'},
  ],
  'ars_nouveau:novice_spell_book',
  `${ID_PREFIX}apprentice_spell_book_upgrade`);
  
  book_upgrade('ars_nouveau:archmage_spell_book', [
    {item: 'ars_nouveau:apprentice_spell_book'},
    {item: 'forbidden_arcanus:dark_nether_star'},
    {item: 'ars_nouveau:wilden_tribute'},
    {item: 'forbidden_arcanus:stellarite_piece'},
    {item: 'forbidden_arcanus:stellarite_piece'},
    {item: 'alexsmobs:void_worm_eye'},
    {item: 'tetra:dragon_sinew'},
    {item: 'ars_nouveau:end_fiber'},
    {item: 'minecraft:totem_of_undying'},
  ],
  'ars_nouveau:apprentice_spell_book',
  `${ID_PREFIX}archmage_spell_book_upgrade`);

  // Ars Nouveau Glyphs
  event.recipes.ars_nouveau.glyph(
    'ars_nouveau:glyph_break',
    [
      'forbidden_arcanus:deorum_blacksmith_gavel',
    ],
    3
  ).id(`${ID_PREFIX}glyph_break`);

  event.recipes.ars_nouveau.glyph(
    'ars_nouveau:glyph_conjure_water',
    [
      'ars_nouveau:water_essence',
      'botania:water_rod',
    ],
    5
  ).id(`${ID_PREFIX}glyph_conjure_water`);

  event.recipes.ars_nouveau.glyph(
    'ars_nouveau:glyph_hex',
    [
      'ars_nouveau:abjuration_essence',
      'minecraft:fermented_spider_eye',
      'minecraft:wither_rose',
      'malum:hex_ash',
      'malum:hex_ash',
      'malum:hex_ash',
    ], 
    10
  ).id(`${ID_PREFIX}glyph_hex`);

  event.recipes.ars_nouveau.glyph(
    'ars_nouveau:glyph_pierce',
    [
      'ars_nouveau:pierce_arrow',
      'ars_nouveau:wilden_spike',
    ],
    5
  ).id(`${ID_PREFIX}glyph_pierce`);

  // Ars Elemental Glyphs
  
  event.recipes.ars_nouveau.glyph(
    'ars_elemental:glyph_conjure_terrain',
    [
      'ars_nouveau:earth_essence',
      'botania:dirt_rod',
    ],
    5
  ).id(`${ID_PREFIX}glyph_conjure_terrain`);

});
