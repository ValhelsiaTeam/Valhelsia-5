// priority: 0

//   __   ___   _    _  _ ___ _    ___ ___   _       ___ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | __|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |__ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |___/
//

/**
 * @file Add or modify item tooltips for Valhelsia 5.
 * 
 * Includes a convenience function for adding translated tooltips,
 * as all tooltips included in Valhelsia packs should use language entries
 * to ensure translations can be made via CrowdIn.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Event handler for adding / adjusting item tooltips.
 */
ItemEvents.tooltip(event => {

  /**
   * Adds a translated tooltip to an item (using default colour).
   * @param {string} itemID The ID of the item to add the tooltip to.
   * @param {string} textID The language entry for the tooltip.
   */
  const addTooltip = (itemID, textID) => {
    event.add(itemID, Text.translate(textID));
  };

  addTooltip('sullysmod:polished_jade', 'valhelsia.tooltip.how_get_jade');
  addTooltip('sophisticatedbackpacks:backpack', 'valhelsia.tooltip.backpack');
  addTooltip('sophisticatedbackpacks:iron_backpack', 'valhelsia.tooltip.iron_backpack');
  addTooltip('sophisticatedbackpacks:gold_backpack', 'valhelsia.tooltip.gold_backpack');
  addTooltip('sophisticatedbackpacks:diamond_backpack', 'valhelsia.tooltip.diamond_backpack');
  addTooltip('sophisticatedbackpacks:netherite_backpack', 'valhelsia.tooltip.netherite_backpack');
})