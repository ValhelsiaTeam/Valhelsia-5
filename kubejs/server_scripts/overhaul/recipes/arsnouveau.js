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

  const ID_PREFIX = 'valhelsia:overhaul/arsnouveau/';

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

  // Ars Nouveau
  book_upgrade('ars_nouveau:apprentice_spell_book', [
    {item: 'forbidden_arcanus:obsidian_skull'},
    {item: 'sullysmod:polished_jade'},
    {item: 'sullysmod:polished_jade'},
    {item: 'sullysmod:polished_jade'},
    {item: 'create:polished_rose_quartz'},
    {item: 'create:polished_rose_quartz'},
    {item: 'minecraft:blaze_rod'},
    {item: 'minecraft:blaze_rod'},
  ],
  'ars_nouveau:novice_spell_book',
  `${ID_PREFIX}apprentice_spell_book_upgrade`);
  
  book_upgrade('ars_nouveau:archmage_spell_book', [
    {item: 'forbidden_arcanus:dark_nether_star'},
    {item: 'ars_nouveau:wilden_tribute'},
    {item: 'forbidden_arcanus:stellarite_piece'},
    {item: 'forbidden_arcanus:stellarite_piece'},
    {item: 'alexsmobs:void_worm_eye'},
    {item: 'forbidden_arcanus:dragon_scale'},
    {item: 'forbidden_arcanus:dragon_scale'},
    {item: 'minecraft:totem_of_undying'},
  ],
  'ars_nouveau:apprentice_spell_book',
  `${ID_PREFIX}archmage_spell_book_upgrade`);
});
