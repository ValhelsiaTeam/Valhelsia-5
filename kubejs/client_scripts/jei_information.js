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
 * @copyright Valhelsia Inc 2023-2024
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
    event.addItem(items, Text.translate(textID));
  };

  // Minecraft
  addInfo('minecraft:firework_star', 'valhelsia.information.minecraft.crafting_firework_stars');
  addInfo('minecraft:glow_berries', 'valhelsia.information.minecraft.glow_berries');
  addInfo('minecraft:sweet_berries', 'valhelsia.information.minecraft.sweet_berries');

  // Akashic Tome
  addInfo('akashictome:tome', 'valhelsia.information.akashictome.filled_akashic_tome');
  addInfo('akashictome:tome', 'valhelsia.information.akashictome.reverting');

  // Atmospheric
  addInfo('atmospheric:aloe_kernels', 'valhelsia.information.atmospheric.aloe_kernels');
  addInfo('atmospheric:yellow_blossoms', 'valhelsia.information.atmospheric.yellow_blossoms');

  // Autumnity
  addInfo('autumnity:sap_bottle', 'valhelsia.information.autumnity.sap_bottle');
  addInfo('autumnity:sappy_maple_log', 'valhelsia.information.autumnity.sappy_maple_log');
  addInfo('autumnity:sappy_maple_wood', 'valhelsia.information.autumnity.sappy_maple_wood');
  addInfo('autumnity:snail_goo_block', 'valhelsia.information.autumnity.snail_goo_block_1');
  addInfo('autumnity:snail_goo_block', 'valhelsia.information.autumnity.snail_goo_block_2');
  addInfo('autumnity:snail_goo_block', 'valhelsia.information.autumnity.snail_goo_block_3');
  addInfo('autumnity:snail_goo_block', 'valhelsia.information.autumnity.snail_goo_block_4');

  // Botania
  addInfo('botania:ender_air_bottle', 'valhelsia.information.botania.ender_air_bottle');

  // Farmer's Delight
  addInfo('farmersdelight:rice', 'valhelsia.information.farmersdelight.rice');

  // Farmer's Respite
  addInfo('farmersrespite:coffee_beans', 'valhelsia.information.farmersrespite.coffee_beans');

  // Forbidden and Arcanus
  addInfo('forbidden_arcanus:arcane_bone_meal', 'valhelsia.information.forbidden_arcanus.magical_farmland');
  addInfo([
    'forbidden_arcanus:deorum_block',
    'forbidden_arcanus:deorum_ingot',
    'forbidden_arcanus:deorum_nugget',
    'forbidden_arcanus:golden_orchid_seeds',
  ], 'valhelsia.information.forbidden_arcanus.deorum');
  addInfo('forbidden_arcanus:fungyss', 'valhelsia.information.forbidden_arcanus.fungyss_obtaining');
  addInfo('forbidden_arcanus:fungyss', 'valhelsia.information.forbidden_arcanus.fungyss');
  addInfo('forbidden_arcanus:magical_farmland', 'valhelsia.information.forbidden_arcanus.magical_farmland');
  addInfo('forbidden_arcanus:stellarite_piece', 'valhelsia.information.forbidden_arcanus.stellarite_piece');
  addInfo('forbidden_arcanus:yellow_orchid', 'valhelsia.information.forbidden_arcanus.yellow_orchid');

  // Neapolitan
  addInfo('neapolitan:banana_frond', 'valhelsia.information.neapolitan.banana_fronds');

  // Sully's Mod
  addInfo([
    'sullysmod:jade_ore', 
    'sullysmod:deepslate_jade_ore', 
    'sullysmod:rough_jade',
    'sullysmod:polished_jade',
  ], 'valhelsia.information.sullysmod.obtaining_jade');

  // Valhelsia
  addInfo('valhelsia_tweaks:candy_corn', 'valhelsia.information.valhelsia_tweaks.candy');
  addInfo('valhelsia_tweaks:lemon_candy', 'valhelsia.information.valhelsia_tweaks.candy');
  addInfo('valhelsia_tweaks:cherry_lollipop', 'valhelsia.information.valhelsia_tweaks.candy');
  addInfo('valhelsia_tweaks:spicy_mango_lollipop', 'valhelsia.information.valhelsia_tweaks.candy');

  // Xercapaint / Joy of Painting
  addInfo('xercapaint:item_palette', 'valhelsia.information.xercapaint.crafting_palettes');
  addInfo('xercapaint:item_palette', 'valhelsia.information.xercapaint.adding_dye');

});