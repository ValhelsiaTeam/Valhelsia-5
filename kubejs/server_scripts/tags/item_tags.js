// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//                       

/**
 * @file Item Tag Additions for Valhelsia 5.
 * 
 * These are mostly for recipe input unification, but sometimes have other uses.
 * 
 * @see item_tags_remove.js
 * @copyright Valhelsia Inc 2022-2024
 */

/**
 * Item Tag Event Handler
 */
ServerEvents.tags('item', event => {

  // ----- Valhelsia Tags -----
  event.add('valhelsia:ash', [
    'supplementaries:ash',
    'darkerdepths:ash',
  ]);

  event.add('valhelsia:bowls', [
    'minecraft:bowl',
    'ecologics:coconut_husk',
  ]);
  
  event.add('valhelsia:capacitors', [
    'createaddition:capacitor',
    'pneumaticcraft:capacitor',
  ]);

  event.add('valhelsia:cheese', [
    'ad_astra:cheese',
    'brewinandchewin:flaxen_cheese_wedge',
  ]);

  event.add('valhelsia:electron_tubes', [
    'create:electron_tube',
    'immersiveengineering:electron_tube',
  ]);

  event.add('valhelsia:furnaces', [
    'minecraft:furnace',
    'nethersdelight:furnace',
    'quark:deepslate_furnace',
    'quark:blackstone_furnace',
  ]);

  event.add('valhelsia:nuts', [
    'blue_skies:solnut',
    'ecologics:walnut',
    'windswept:chestnuts',
  ]);
  
  event.add('valhelsia:raw_proteins', [
    '#forge:eggs',
    '#forge:raw_fishes',
    'minecraft:beef',
    'minecraft:brown_mushroom',
    'minecraft:chicken',
    'minecraft:mutton',
    'minecraft:porkchop',
    'minecraft:rabbit',
    'minecraft:red_mushroom',
    'abnormals_delight:duck_fillet',
    'abnormals_delight:venison_shanks',
    'alexsdelight:bison_mince',
    'alexsdelight:kangaroo_shank',
    'alexsdelight:loose_moose_rib',
    'alexsdelight:raw_bison',
    'alexsdelight:raw_bunfungus',
    'alexsdelight:raw_bunfungus_drumstick',
    'alexsdelight:raw_catfish_slice',
    'alexsmobs:blobfish',
    'alexsmobs:cosmic_cod',
    'alexsmobs:flying_fish',
    'alexsmobs:kangaroo_meat',
    'alexsmobs:lobster_tail',
    'alexsmobs:moose_ribs',
    'alexsmobs:raw_catfish',
    'aquamirae:spinefish',
    'autumnity:turkey',
    'autumnity:turkey_piece',
    'blue_skies:carabeef',
    'blue_skies:monitor_tail',
    'blue_skies:venison',
    'ecologics:crab_claw',
    'enlightened_end:raw_stalker',
    'environmental:duck',
    'environmental:venison',
    'farmersdelight:bacon',
    'farmersdelight:chicken_cuts',
    'farmersdelight:ham',
    'farmersdelight:minced_beef',
    'farmersdelight:mutton_chops',
    'forbidden_arcanus:tentacle',
    'neapolitan:adzuki_beans',
    'quark:crab_leg',
    'twilightforest:raw_meef',
    'twilightforest:raw_venison',
    'windswept:goat',
    'windswept:goat_shanks',
  ]);

  event.add('valhelsia:cooked_proteins', [
    '#forge:cooked_fishes',
    'minecraft:cooked_beef',
    'minecraft:cooked_chicken',
    'minecraft:cooked_mutton',
    'minecraft:cooked_porkchop',
    'minecraft:cooked_rabbit',
    'abnormals_delight:cooked_duck_fillet',
    'abnormals_delight:cooked_venison_shanks',
    'alexsdelight:bison_patty',
    'alexsdelight:cooked_bison',
    'alexsdelight:cooked_bunfungus',
    'alexsdelight:cooked_bunfungus_drumstick',
    'alexsdelight:cooked_catfish_slice',
    'alexsdelight:cooked_centipede_leg',
    'alexsdelight:cooked_kangaroo_shank',
    'alexsdelight:cooked_loose_moose_rib',
    'alexsmobs:boiled_emu_egg',
    'alexsmobs:cooked_catfish',
    'alexsmobs:cooked_kangaroo_meat',
    'alexsmobs:cooked_lobster_tail',
    'alexsmobs:cooked_moose_ribs',
    'aquamirae:cooked_spinefish',
    'autumnity:cooked_turkey',
    'autumnity:cooked_turkey_piece',
    'blue_skies:cooked_carabeef',
    'blue_skies:cooked_monitor_tail',
    'blue_skies:cooked_venison',
    'ecologics:crab_meat',
    'enlightened_end:cooked_stalker',
    'environmental:cooked_duck',
    'environmental:cooked_venison',
    'farmersdelight:beef_patty',
    'farmersdelight:cooked_bacon',
    'farmersdelight:cooked_chicken_cuts',
    'farmersdelight:cooked_mutton_chops',
    'farmersdelight:fried_egg',
    'farmersdelight:smoked_ham', // or steamed. ;)
    'forbidden_arcanus:cooked_tentacle',
    'incubation:fried_egg',
    'neapolitan:roasted_adzuki_beans',
    'quark:cooked_crab_leg',
    'twilightforest:cooked_meef',
    'twilightforest:cooked_venison',
    'windswept:cooked_goat',
    'windswept:cooked_goat_shanks',
  ]);

  event.add('valhelsia:proteins', [
    '#valhelsia:raw_proteins',
    '#valhelsia:cooked_proteins',
    '#minecraft:fishes', // Because some fish aren't tagged with the Forge tags for fish.
  ]);

  event.add('valhelsia:ropes', [
    'farmersdelight:rope',
    'immersiveengineering:wirecoil_structure_rope',
    'supplementaries:rope',
  ]);

  event.add('valhelsia:rose_quartz', [
    'biomesoplenty:rose_quartz_shard',
    'cave_enhancements:rose_quartz',
    'create:rose_quartz',
  ]);
  
  // Syrups might not be the best word - represents sweet liquids that can be interchangeable in some recipes.
  event.add('valhelsia:syrups', [
    'minecraft:honey_bottle',
    'autumnity:syrup_bottle',
    'malum:holy_syrup',
    'malum:unholy_syrup',
    'upgrade_aquatic:mulberry_jam_bottle',
  ]);

  event.add('valhelsia:spools', [
    'createaddition:copper_spool',
    'createaddition:gold_spool',
    'createaddition:electrum_spool',
    'createaddition:festive_spool',
    'immersiveengineering:wirecoil_copper',
    'immersiveengineering:wirecoil_electrum',
    'immersiveengineering:wirecoil_steel',
    'immersiveengineering:wirecoil_structure_rope',
    'immersiveengineering:wirecoil_structure_steel',
    'immersiveengineering:wirecoil_redstone',
    'immersiveengineering:wirecoil_copper_ins',
    'immersiveengineering:wirecoil_electrum_ins',
    'malum:esoteric_spool',
  ]);

  event.add('valhelsia:spools/copper', [
    'createaddition:copper_spool',
    'immersiveengineering:wirecoil_copper',
    'immersiveengineering:wirecoil_copper_ins',
  ]);
  
  event.add('valhelsia:spools/electrum', [
    'createaddition:electrum_spool',
    'immersiveengineering:wirecoil_electrum',
    'immersiveengineering:wirecoil_electrum_ins',
  ]);

  event.add('valhelsia:spools/gold', [
    'createaddition:gold_spool',
  ]);

  event.add('valhelsia:spools/redstone', [
    'immersiveengineering:wirecoil_redstone',
  ]);
  
  event.add('valhelsia:spools/rope', [
    'immersiveengineering:wirecoil_rope',
  ]);

  event.add('valhelsia:spools/steel', [
    'immersiveengineering:wirecoil_steel',
    'immersiveengineering:wirecoil_structure_steel',
  ]);

  event.add('valhelsia:wax', [
    'minecraft:honeycomb',
    'forbidden_arcanus:wax',
    'immersivepetroleum:paraffin_wax',
  ]);

  // ----- Ores -----
  event.add('forge:ores', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore',
    'enlightened_end:adamantite_node',
    'enlightened_end:bismuth_ore',
    'enlightened_end:irradium_ore',
    'enlightened_end:malachite_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
    'irons_spellbooks:arcane_debris',
  ]);

  event.add('forge:ores/adamantite', [
    'enlightened_end:adamantite_node',
  ]);

  event.add('forge:ores/arcane_crystal', [
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/arcane_debris', [
    'irons_spellbooks:arcane_debris',
  ]);

  event.add('forge:ores/bismuth', [
    'enlightened_end:bismuth_ore',
  ]);

  event.add('forge:ores/blazing_quartz', [
    'malum:blazing_quartz_ore',
  ]);

  event.add('forge:ores/irradium', [
    'enlightened_end:irradium_ore',
  ]);

  event.add('forge:ores/malachite', [
    'enlightened_end:malachite_ore',
  ]);
  
  event.add('forge:ores/silver', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore',
  ]);

  event.add('forge:ores/soulstone', [
    'malum:deepslate_soulstone_ore',
    'malum:soulstone_ore',
  ]);

  // ----- Raw Ores -----
  event.add('forge:raw_materials', [
    'enlightened_end:raw_bismuth',
    'enlightened_end:raw_irradium',
    'malum:raw_soulstone',
  ]);

  event.add('forge:raw_materials/bismuth', [
    'enlightened_end:raw_bismuth',
  ]);

  event.add('forge:raw_materials/irradium', [
    'enlightened_end:raw_irradium',
  ]);

  event.add('forge:raw_materials/soulstone', [
    'malum:raw_soulstone',
  ]);

  // ----- Ingots -----
  event.add('forge:ingots', [
    'createdeco:cast_iron_ingot',
    'enlightened_end:bismuth_ingot',
    'enlightened_end:starsteel_ingot',
    'irons_spellbooks:arcane_ingot',
    'malum:soul_stained_steel_ingot',
    'moreminecarts:silica_steel',
  ]);

  event.add('forge:ingots/arcane', [
    'irons_spellbooks:arcane_ingot',
  ]);

  event.add('forge:ingots/bismuth', [
    'enlightened_end:bismuth_ingot',
  ]);

  event.add('forge:ingots/silica_steel', [
    'moreminecarts:silica_steel',
  ]);

  event.add('forge:ingots/soul_steel', [
    'malum:soul_stained_steel_ingot',
    'spirit:soul_steel_ingot',
  ]);

  event.add('forge:ingots/starsteel', [
    'enlightened_end:starsteel_ingot',
  ]);
  // ----- Storage Blocks -----
  event.add('forge:storage_blocks', [
    'enlightened_end:adamantite_block',
    'enlightened_end:bismuth_block',
    'enlightened_end:depleted_irradium_block',
    'enlightened_end:glacium_block',
    'enlightened_end:irradium_block',
    'enlightened_end:raw_bismuth_block',
    'enlightened_end:raw_irradium_block',
    'enlightened_end:stardust_block',
    'enlightened_end:starsteel_block',
    'malum:block_of_hex_ash',
    'malum:block_of_raw_soulstone',
    'malum:block_of_soulstone',
    'malum:block_of_soul_stained_steel',
    'moreminecarts:silica_steel_block',
  ]);

  event.add('forge:storage_blocks/adamantite', [
    'enlightened_end:adamantite_block',
  ]);

  event.add('forge:storage_blocks/bismuth', [
    'enlightened_end:bismuth_block',
  ]);

  event.add('forge:storage_blocks/depleted_irradium', [
    'enlightened_end:depleted_irradium_block',
  ]);

  event.add('forge:storage_blocks/glacium', [
    'enlightened_end:glacium_block',
  ]);

  event.add('forge:storage_blocks/hex_ash', [
    'malum:block_of_hex_ash',
  ]);

  event.add('forge:storage_blocks/irradium', [
    'enlightened_end:irradium_block',
  ]);

  event.add('forge:storage_blocks/raw_bismuth', [
    'enlightened_end:raw_bismuth_block',
  ]);

  event.add('forge:storage_blocks/raw_irradium', [
    'enlightened_end:raw_irradium_block',
  ]);

  event.add('forge:storage_blocks/raw_soulstone', [
    'malum:block_of_raw_soulstone',
  ]);

  event.add('forge:storage_blocks/soulstone', [
    'malum:block_of_soulstone',
  ]);

  event.add('forge:storage_blocks/soul_steel', [
    'malum:block_of_soul_stained_steel',
    'spirit:soul_steel_block',
  ]);

  event.add('forge:storage_blocks/stardust', [
    'enlightened_end:stardust_block',
  ]);

  event.add('forge:storage_blocks/starsteel', [
    'enlightened_end:starsteel_block',
  ]);

  event.add('forge:storage_blocks/silica_steel', [
    'moreminecarts:silica_steel_block',
  ]);

  // ----- Nuggets -----
  event.add('forge:nuggets', [
    'enlightened_end:bismuth_nugget',
    'enlightened_end:starsteel_nugget',
  ]);

  event.add('forge:nuggets/bismuth', [
    'enlightened_end:bismuth_nugget',
  ]);

  event.add('forge:nuggets/soul_steel', [
    'malum:soul_stained_steel_nugget',
  ]);

  event.add('forge:nuggets/starsteel', [
    'enlightened_end:starsteel_nugget',
  ]);

  // ----- Dusts -----
  event.add('forge:dusts', [
    'botania:pixie_dust',
    'create:wheat_flour',
    'deeperdarker:soul_dust',
    'enlightened_end:stardust',
    'galosphere_delight:allurite_shiny_powder',
    'galosphere_delight:lumiere_shiny_powder',
    'malum:crushed_soulstone',
    'malum:hex_ash',
    'spirit:soul_powder',
    'waystones:warp_dust',
  ]);

  event.add('forge:dusts/allurite', [
    'galosphere_delight:allurite_shiny_powder',
  ]);

  event.add('forge:dusts/hex_ash', [
    'malum:hex_ash',
  ]);

  event.add('forge:dusts/lumiere', [
    'galosphere_delight:lumiere_shiny_powder',
  ]);

  event.add('forge:dusts/pixie', [
    'botania:pixie_dust',
  ]);

  event.add('forge:dusts/soul', [
    'deeperdarker:soul_dust',
    'spirit:soul_powder',
  ]);

  event.add('forge:dusts/soulstone', [
    'malum:crushed_soulstone',
  ]);

  event.add('forge:dusts/stardust', [
    'enlightened_end:stardust',
  ]);

  event.add('forge:dusts/warp', [
    'waystones:warp_dust',
  ]);

  event.add('forge:dusts/wheat', [
    'create:wheat_flour',
  ]);

  // ----- Plates -----
  event.add('forge:plates', [
    'createdeco:cast_iron_sheet',
    'mekanism:hdpe_sheet',
    'pneumaticcraft:plastic',
  ]);

  event.add('forge:plates/plastic', [
    'mekanism:hdpe_sheet',
    'pneumaticcraft:plastic',
  ]);

  // ----- Gems -----
  event.add('forge:gems', [
    'deeperdarker:soul_crystal',
    'enlightened_end:glacium',
    'enlightened_end:malachite',
    'spirit:crude_soul_crystal',
    'spirit:soul_crystal',
  ]);
  
  event.add('forge:gems/glacium', [
    'enlightened_end:glacium',
  ]);

  event.add('forge:gems/malachite', [
    'enlightened_end:malachite',
  ]);

  event.add('forge:gems/soul',[
    'deeperdarker:soul_crystal',
    'spirit:crude_soul_crystal',
    'spirit:soul_crystal',
  ]);

  event.add('forge:gems/soulstone',[
    'malum:processed_soulstone',
  ]);

  // ----- Logs / Wood -----
  event.add('forge:stripped_logs', [
    'forbidden_arcanus:stripped_cherry_log',
    'forbidden_arcanus:stripped_aurum_log',
    'upgrade_aquatic:stripped_driftwood_log',
  ]);

  event.add('forge:stripped_wood', [
    'forbidden_arcanus:stripped_cherry_wood',
    'forbidden_arcanus:stripped_aurum_wood',
    'upgrade_aquatic:stripped_driftwood',
  ]);

  event.add('minecraft:logs_that_burn', [
    'forbidden_arcanus:aurum_log',
    'forbidden_arcanus:stripped_aurum_log',
    'forbidden_arcanus:cherry_log',
    'forbidden_arcanus:thin_cherry_log',
    'forbidden_arcanus:stripped_cherry_log',
  ]);

  event.add('minecraft:planks', [
    'aether:skyroot_planks',
  ]);

  // ----- Electronics -----
  event.add('forge:circuits', [
    'create_connected:control_chip',
    'immersiveengineering:circuit_board',
    'pneumaticcraft:printed_circuit_board',
  ]);

  event.add('forge:circuits/advanced', [
    'create_connected:control_chip',
  ]);

  event.add('forge:circuits/elite', [
    'pneumaticcraft:printed_circuit_board', 
  ]);

  // ----- Flour & Dough -----
  event.add('forge:flour', [
    'pneumaticcraft:wheat_flour',
  ]);

  event.add('forge:flour/wheat', [
    'pneumaticcraft:wheat_flour',
  ]);

  event.add('forge:dough', [
    'farmersrespite:nether_wart_sourdough',
    'minecolonies:cookie_dough',
    'minecolonies:bread_dough',
    'pneumaticcraft:sourdough',
  ]);

  event.add('forge:dough/wheat', [
    'minecolonies:bread_dough',
    'pneumaticcraft:sourdough',
  ]);

  // ----- Fruits -----
  event.add('forge:fruits', [
    'minecraft:chorus_fruit',
    'minecraft:melon_slice',
    'minecraft:popped_chorus_fruit',
    'blue_skies:black_brewberry',
    'blue_skies:cherry',
    'blue_skies:crescent_fruit',
    'blue_skies:pine_fruit',
    'blue_skies:pink_brewberry',
    'blue_skies:scalefruit',
    'forbidden_arcanus:cherry_peach',
  ]);

  event.add('forge:fruits/cherry', [
    'blue_skies:cherry',
    'forbidden_arcanus:cherry_peach',
  ]);

  // Note: Includes things that aren't technically berries but are used culinarily as berries.
  event.add('forge:fruits/berry', [
    'minecraft:glow_berries',
    'minecraft:sweet_berries',
    'aether:blue_berry',
    'aether:enchanted_berry',
    'blue_skies:cherry',
    'forbidden_arcanus:cherry_peach',
    'neapolitan:strawberries',
    'neapolitan:white_strawberries',
  ]);

  // ----- Vegetables ------

  event.add('forge:vegetables', [
    'farmersdelight:cabbage',
    'farmersdelight:cabbage_leaf',
  ]);

  event.add('forge:vegetables/cabbage', [
    'farmersdelight:cabbage',
    'farmersdelight:cabbage_leaf',
  ]);

  // ----- Meat & Protein -----
  event.add('forge:food/meat', [
    'blue_skies:carabeef',
    'blue_skies:cooked_carabeef',
    'blue_skies:cooked_monitor_tail',
    'blue_skies:cooked_venison',
    'blue_skies:monitor_tail',
    'blue_skies:venison',
    'twilightforest:cooked_venison',
    'twilightforest:raw_venison',
  ]);

  event.add('forge:raw_beef', [
    'blue_skies:carabeef',
  ]);

  event.add('forge:cooked_beef', [
    'blue_skies:cooked_carabeef',
  ]);

  event.add('forge:raw_venison', [
    'blue_skies:venison',
    'twilightforest:raw_venison',
  ]);
  
  event.add('forge:cooked_venison', [
    'blue_skies:cooked_venison',
    'twilightforest:cooked_venison',
  ]);

  // ----- Netherrack -----
  event.add('forge:netherrack', [
    'rechiseled:netherrack_beams',
    'rechiseled:netherrack_beams_connecting',
    'rechiseled:netherrack_brick_pattern',
    'rechiseled:netherrack_brick_pattern_connecting',
    'rechiseled:netherrack_brick_paving',
    'rechiseled:netherrack_brick_paving_connecting',
    'rechiseled:netherrack_bricks',
    'rechiseled:netherrack_bricks_connecting',
    'rechiseled:netherrack_dented',
    'rechiseled:netherrack_dented_connecting',
    'rechiseled:netherrack_rotated_bricks',
    'rechiseled:netherrack_rotated_bricks_connecting',
    'rechiseled:netherrack_small_tiles',
    'rechiseled:netherrack_small_tiles_connecting',
    'rechiseled:netherrack_stripes',
    'rechiseled:netherrack_stripes_connecting',
    'rechiseled:netherrack_tiles',
    'rechiseled:netherrack_tiles_connecting',
  ]);


  // ----- Sandstone -----
  event.add('forge:sandstone/colorless', [
    'quark:sandstone_bricks',
  ]);

  event.add('forge:sandstone/red', [
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/arid', [
    'atmospheric:arid_sandstone',
    'atmospheric:smooth_arid_sandstone',
    'atmospheric:cut_arid_sandstone',
    'atmospheric:chiseled_arid_sandstone',
    'atmospheric:arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/red_arid', [
    'atmospheric:red_arid_sandstone',
    'atmospheric:smooth_red_arid_sandstone',
    'atmospheric:cut_red_arid_sandstone',
    'atmospheric:chiseled_red_arid_sandstone',
    'atmospheric:red_arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/orange', [
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:cut_orange_sandstone',
    'biomesoplenty:chiseled_orange_sandstone',
  ]);

  event.add('forge:sandstone/white', [
    'biomesoplenty:white_sandstone',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:cut_white_sandstone',
    'biomesoplenty:chiseled_white_sandstone',
  ]);

  event.add('forge:sandstone/black', [
    'biomesoplenty:black_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'biomesoplenty:cut_black_sandstone',
    'biomesoplenty:chiseled_black_sandstone',
  ]);

  event.add('forge:sandstone/soul', [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone',
  ]);

  event.add('forge:sandstone/soulless', [
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone',
  ]);

  event.add('forge:sandstone/crystal', [
    'blue_skies:crystal_sandstone',
    'blue_skies:chiseled_crystal_sandstone',
    'blue_skies:cut_crystal_sandstone',
    'blue_skies:smooth_crystal_sandstone',
    'blue_skies:crystal_sandstone_pillar',
  ]);
  
  event.add('forge:sandstone/midnight', [
    'blue_skies:midnight_sandstone',
    'blue_skies:chiseled_midnight_sandstone',
    'blue_skies:cut_midnight_sandstone',
    'blue_skies:smooth_midnight_sandstone',
    'blue_skies:midnight_sandstone_pillar',
  ]);

  // ----- Seeds -----
  event.add('forge:seeds', [
    'enlightened_end:elevibloom_seeds',
    'farmersrespite:tea_seeds',
  ]);

  event.add('forge:seeds/elevibloom', [
    'enlightened_end:elevibloom_seeds',
  ]);

  event.add('forge:seeds/fiery_bean', [
    'blue_skies:fiery_bean_seeds',
  ]);

  event.add('forge:seeds/hemp', [
    'immersiveengineering:seed',
  ]);

  event.add('forge:seeds/magebloom', [
    'ars_nouveau:magebloom_crop',
  ]);

  event.add('forge:seeds/pine_fruit', [
    'blue_skies:pine_fruit_seeds',
  ]);

  event.add('forge:seeds/scalebloom', [
    'blue_skies:scalebloom_seeds',
  ]);

  event.add('forge:seeds/tea', [
    'farmersrespite:tea_seeds',
  ]);

  event.add('forge:seeds/winter_leaf', [
    'blue_skies:winter_leaf_seeds',
  ]);


  // ----- Slimeballs -----
  event.add('forge:slimeballs', [
    'aether:swet_ball',
    'alexsmobs:banana_slug_slime',
    'autumnity:snail_goo',
  ]);

  // ----- Mod-specific Tags -----

  // Applied Energistics 2
  event.add('ae2:all_quartz_dusts', [
    'mekanism:quartz_dust',
  ]);

  event.add('ae2:can_remove_color', [
    'supplementaries:soap',
  ]);

  // Ars Elemental
  event.add('ars_elemental:caster_bag_item', [
    'irons_spellbooks:blood_staff',
    'irons_spellbooks:scroll',
    /irons_spellbooks:.*_spell_book$/,
    /irons_spellbooks:.*_helmet$/,
    /irons_spellbooks:.*_chestplate$/,
    /irons_spellbooks:.*_leggings$/,
    /irons_spellbooks:.*_boots$/,
  ]);

  // Ars Nouveau
  event.add('ars_nouveau:whirlisprig/denied_drop', [
    'atmospheric:red_arid_sand', // Bonemealable but not a plant.
    'atmospheric:arid_sand', // Bonemealable but not a plant.
  ]);

  // Create Slice & Dice
  event.add('sliceanddice:allowed_tools', [
    'galosphere_delight:silver_kitchen_hammer',
  ]);

  // Environmental
  event.add('environmental:deer_food', [
    'blue_skies:cherry',
    'forbidden_arcanus:cherry_peach',
  ]);
  
  event.add('environmental:deer_tempt_items', [
    'blue_skies:cherry',
    'forbidden_arcanus:cherry_peach',
  ]);

  // Farmer's Delight
  event.add('farmersdelight:serving_containers', [
    'ecologics:coconut_husk',
  ]);

  // Forbidden and Arcanus
  event.add('forbidden_arcanus:clibano/creates_soul_fire', [
    'blue_skies:soul_fragment',
    'deeperdarker:soul_dust',
    'spirit:soul_powder',
  ]);

  // Immersive Engineering
  // Valid Tools for the Toolbox
  event.add('immersiveengineering:toolbox/tools', [
    'akashictome:tome',
  ]);

  // Valid Wiring for the Toolbox
  event.add('immersiveengineering:toolbox/wiring', [
    'createaddition:connector',
    'createaddition:large_connector',
    'createaddition:redstone_relay',
    'createaddition:copper_spool',
    'createaddition:gold_spool',
    'createaddition:electrum_spool',
    'createaddition:festive_spool',
  ]);

  // Malum
  event.add('malum:gross_foods', [
    'alexsdelight:maggot_salad',
    'alexsmobs:maggot',
  ]);
  
  // Quark Revertable Chests
  event.add('quark:revertable_chests', [
    'ars_nouveau:archwood_chest',
    /ad_astra:.*_chest$/,
    /blue_skies:.*_chest$/,
    /twilightforest:.*_chest$/,
  ]);

});