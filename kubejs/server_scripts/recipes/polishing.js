// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for Grindstone Polishing (Sully's Mod)
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Grindstone Polishing Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:polishing/';

  /**
   * Creates a new Grindstone Polishing recipe.
   * @param {(!string|!Item)} output Output item.
   * @param {(!string|!InputItem)} input Input ingredient.
   */
  const polish = (output, input) => {
    event.custom({
      type: 'sullysmod:grindstone_polishing',
      experience: 1,
      ingredient: InputItem.of(input).ingredient.toJson(),
      result: OutputItem.of(output).item.toJson(),
      resultCount: 1
    }).id(`${ID_PREFIX}${OutputItem.of(output).item.id.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

});