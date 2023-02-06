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

  // Mana Infusion
  // event.recipes.botania.mana_infusion("minecraft:acacia_boat", "minecraft:acacia_door", 200);

  // Mana Infusion - Alchemy
  // event.recipes.botania.mana_infusion("minecraft:acacia_boat", "minecraft:acacia_door", 400, 'botania:alchemy_catalyst');

  // Mana Infusion - Conjuration
  // event.recipes.botania.mana_infusion("minecraft:acacia_boat", "minecraft:acacia_door", 2000, 'botania:conjuration_catalyst');

  // Elven Trade
  // event.recipes.botania.elven_trade(["minecraft:acacia_boat"], "minecraft:diamond");

  // Pure Daisy
  // event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:stone");

  // Brewing (Note: Needs a corresponding entry in a startup script too!)
  // event.recipes.botania.brew("kubejs:torrent", ["minecraft:acacia_boat"]);

  // Petal Apothecary
  // event.recipes.botania.petal_apothecary("minecraft:acacia_boat", ["minecraft:acacia_button"]);

  // Runic Altar
  // event.recipes.botania.runic_altar("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000);

  // Terrestrial Agglomoration Plate
  // event.recipes.botania.terra_plate("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000000);

  // Orechid - Stone
  event.recipes.botania.orechid('create:zinc_ore', 'minecraft:stone', 7000);
  event.recipes.botania.orechid('immersiveengineering:ore_aluminum', 'minecraft:stone', 2000);
  event.recipes.botania.orechid('immersiveengineering:ore_nickel', 'minecraft:stone', 1500);
  event.recipes.botania.orechid('immersiveengineering:ore_silver', 'minecraft:stone', 3000);
  event.recipes.botania.orechid('mekanism:fluorite_ore', 'minecraft:stone', 5000);
  event.recipes.botania.orechid('mekanism:lead_ore', 'minecraft:stone', 2000);
  event.recipes.botania.orechid('mekanism:osmium_ore', 'minecraft:stone', 18000);
  event.recipes.botania.orechid('mekanism:tin_ore', 'minecraft:stone', 4000);
  event.recipes.botania.orechid('mekanism:uranium_ore', 'minecraft:stone', 1500);

  // Orechid - Deepslate
  event.recipes.botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate', 150);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_aluminum', 'minecraft:deepslate', 75);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_nickel', 'minecraft:deepslate', 100);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_silver', 'minecraft:deepslate', 125);
  event.recipes.botania.orechid('mekanism:deepslate_fluorite_ore', 'minecraft:deepslate', 100);
  event.recipes.botania.orechid('mekanism:deepslate_lead_ore', 'minecraft:deepslate', 100);
  event.recipes.botania.orechid('mekanism:deepslate_osmium_ore', 'minecraft:deepslate', 180);
  event.recipes.botania.orechid('mekanism:deepslate_tin_ore', 'minecraft:deepslate', 150);
  event.recipes.botania.orechid('mekanism:deepslate_uranium_ore', 'minecraft:deepslate', 150);
  

  // Orechid - Netherrack
  // event.recipes.botania.orechid_ignem('output_here', 'minecraft:netherrack', 1);

  // Orechid - Modded Stone

  // Marimorphosis
  // event.recipes.botania.marimorphosis("minecraft:acacia_door", "minecraft:acacia_fence_gate", 1, ["plains"], 10);
});
