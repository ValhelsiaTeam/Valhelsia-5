// priority: 0

//   __   ___   _    _  _ ___ _    ___ ___   _       ___ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | __|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |__ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |___/
//

/**
 * @file JEI Information for Valhelsia 5
 * 
 * For consistency, Item / Fluid IDs should be in the order of Minecraft entries first, then by mod in alphabetical order.
 * 
 * All entries should use translated text, which can be done using addInfo.
 * Language entries should be named in the form of 'valhelsia.information.[mod id].[info id]'
 *  
 * @copyright Valhelsia Inc 2023
 */

/**
 * Event handler for adding JEI information.
 */
JEIEvents.information(event => {

  /**
   * Adds a translated JEI information pane to one or more items.
   * @param {string|string[]} items The ID(s) of the item(s) to add.
   * @param {string} textID The language entry for the information.
   */
  const addInfo = (items, textID) => {
    event.add(items, Text.translate(textID));
  };

  // Minecraft
  addInfo('minecraft:firework_star', 'valhelsia.information.minecraft.crafting_firework_stars');

  // Botania
  addInfo('botania:ender_air_bottle', 'valhelsia.information.botania.ender_air_bottle');

  // Sully's Mod
  addInfo([
    'sullysmod:jade_ore', 
    'sullysmod:deepslate_jade_ore', 
    'sullysmod:rough_jade',
    'sullysmod:polished_jade',
  ], 'valhelsia.information.sullysmod.obtaining_jade');

  // Joy of Painting
  addInfo('xercapaint:item_palette', 'valhelsia.information.xercapaint.crafting_palettes');
  addInfo('xercapaint:item_palette', 'valhelsia.information.xercapaint.adding_dye');
});