// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//                       

/**
 * @file Block Tag Additions for Valhelsia 5.
 * 
 * These tags differ from item tags in that they impact the block form only,
 * and therefore mainly have in-world effects. 
 * 
 * @see block_tags_remove.js
 * 
 * @copyright Valhelsia Inc 2022-2024
 */

/**
 * Block Tag Event Handler
 */
ServerEvents.tags('block', event => {
  
  // Bee Growables
  event.add('minecraft:bee_growables', [
    'blue_skies:fiery_bean_seeds',
    'blue_skies:pine_fruit_seeds',
    'blue_skies:scalefruit_seeds',
    'blue_skies:winter_leaf_seeds',
    'enlightened_end:elevibloom_seeds',
    'farmersrespite:tea_seeds',
    'immersiveengineering:seed',
  ]);

  // Crops
  event.add('minecraft:crops', [
    'blue_skies:fiery_bean_seeds',
    'blue_skies:pine_fruit_seeds',
    'blue_skies:scalefruit_seeds',
    'blue_skies:winter_leaf_seeds',
    'enlightened_end:elevibloom_seeds',
    'farmersrespite:tea_seeds',
    'immersiveengineering:seed',
  ]);
  
  // Missing Slab Tags
  event.add('minecraft:slabs', [
    'ae2:fluix_slab',
    'ae2:quartz_slab',
    'ae2:cut_quartz_slab',
    'ae2:smooth_quartz_slab',
    'ae2:quartz_brick_slab',
    'ae2:chiseled_quartz_slab',
    'ae2:quartz_pillar_slab',
    'ae2:sky_stone_slab',
    'ae2:smooth_sky_stone_slab',
    'ae2:sky_stone_brick_slab',
    'ae2:sky_stone_small_brick_slab',
    'ars_nouveau:sourcestone_slab',
    'ars_nouveau:sourcestone_mosaic_slab',
    'ars_nouveau:sourcestone_basketweave_slab',
    'ars_nouveau:sourcestone_alternating_slab',
    'ars_nouveau:sourcestone_large_bricks_slab',
    'ars_nouveau:sourcestone_small_bricks_slab',
    'ars_nouveau:smooth_sourcestone_slab',
    'ars_nouveau:smooth_sourcestone_mosaic_slab',
    'ars_nouveau:smooth_sourcestone_basketweave_slab',
    'ars_nouveau:smooth_sourcestone_alternating_slab',
    'ars_nouveau:smooth_sourcestone_large_bricks_slab',
    'ars_nouveau:smooth_sourcestone_small_bricks_slab',
    'ars_nouveau:gilded_sourcestone_mosaic_slab',
    'ars_nouveau:gilded_sourcestone_basketweave_slab',
    'ars_nouveau:gilded_sourcestone_alternating_slab',
    'ars_nouveau:gilded_sourcestone_large_bricks_slab',
    'ars_nouveau:gilded_sourcestone_small_bricks_slab',
    'ars_nouveau:smooth_gilded_sourcestone_mosaic_slab',
    'ars_nouveau:smooth_gilded_sourcestone_basketweave_slab',
    'ars_nouveau:smooth_gilded_sourcestone_alternating_slab',
    'ars_nouveau:smooth_gilded_sourcestone_large_bricks_slab',
    'ars_nouveau:smooth_gilded_sourcestone_small_bricks_slab',
    'cave_enhancements:polished_rose_quartz_slab',
    'cave_enhancements:rose_quartz_tile_slab',
    'createdeco:worn_bricks_slab',
    'createdeco:worn_brick_tiles_slab',
    'createdeco:worn_long_bricks_slab',
    'createdeco:worn_short_bricks_slab',
    'createdeco:cracked_worn_bricks_slab',
    'createdeco:cracked_worn_brick_tiles_slab',
    'createdeco:cracked_worn_long_bricks_slab',
    'createdeco:cracked_worn_short_bricks_slab',
    'createdeco:mossy_worn_bricks_slab',
    'createdeco:mossy_worn_brick_tiles_slab',
    'createdeco:mossy_worn_long_bricks_slab',
    'createdeco:mossy_worn_short_bricks_slab',
    'createdeco:red_brick_tiles_slab',
    'createdeco:red_long_bricks_slab',
    'createdeco:red_short_bricks_slab',
    'createdeco:cracked_red_bricks_slab',
    'createdeco:cracked_red_brick_tiles_slab',
    'createdeco:cracked_red_long_bricks_slab',
    'createdeco:cracked_red_short_bricks_slab',
    'createdeco:mossy_red_bricks_slab',
    'createdeco:mossy_red_brick_tiles_slab',
    'createdeco:mossy_red_long_bricks_slab',
    'createdeco:mossy_red_short_bricks_slab',
    'createdeco:pearl_bricks_slab',
    'createdeco:pearl_brick_tiles_slab',
    'createdeco:pearl_long_bricks_slab',
    'createdeco:pearl_short_bricks_slab',
    'createdeco:cracked_pearl_bricks_slab',
    'createdeco:cracked_pearl_brick_tiles_slab',
    'createdeco:cracked_pearl_long_bricks_slab',
    'createdeco:cracked_pearl_short_bricks_slab',
    'createdeco:mossy_pearl_bricks_slab',
    'createdeco:mossy_pearl_brick_tiles_slab',
    'createdeco:mossy_pearl_long_bricks_slab',
    'createdeco:mossy_pearl_short_bricks_slab',
    'createdeco:scarlet_bricks_slab',
    'createdeco:scarlet_brick_tiles_slab',
    'createdeco:scarlet_long_bricks_slab',
    'createdeco:scarlet_short_bricks_slab',
    'createdeco:cracked_scarlet_bricks_slab',
    'createdeco:cracked_scarlet_brick_tiles_slab',
    'createdeco:cracked_scarlet_long_bricks_slab',
    'createdeco:cracked_scarlet_short_bricks_slab',
    'createdeco:mossy_scarlet_bricks_slab',
    'createdeco:mossy_scarlet_brick_tiles_slab',
    'createdeco:mossy_scarlet_long_bricks_slab',
    'createdeco:mossy_scarlet_short_bricks_slab',
    'createdeco:blue_bricks_slab',
    'createdeco:blue_brick_tiles_slab',
    'createdeco:blue_long_bricks_slab',
    'createdeco:blue_short_bricks_slab',
    'createdeco:cracked_blue_bricks_slab',
    'createdeco:cracked_blue_brick_tiles_slab',
    'createdeco:cracked_blue_long_bricks_slab',
    'createdeco:cracked_blue_short_bricks_slab',
    'createdeco:mossy_blue_bricks_slab',
    'createdeco:mossy_blue_brick_tiles_slab',
    'createdeco:mossy_blue_long_bricks_slab',
    'createdeco:mossy_blue_short_bricks_slab',
    'createdeco:dusk_bricks_slab',
    'createdeco:dusk_brick_tiles_slab',
    'createdeco:dusk_long_bricks_slab',
    'createdeco:dusk_short_bricks_slab',
    'createdeco:cracked_dusk_bricks_slab',
    'createdeco:cracked_dusk_brick_tiles_slab',
    'createdeco:cracked_dusk_long_bricks_slab',
    'createdeco:cracked_dusk_short_bricks_slab',
    'createdeco:mossy_dusk_bricks_slab',
    'createdeco:mossy_dusk_brick_tiles_slab',
    'createdeco:mossy_dusk_long_bricks_slab',
    'createdeco:mossy_dusk_short_bricks_slab',
    'createdeco:dean_bricks_slab',
    'createdeco:dean_brick_tiles_slab',
    'createdeco:dean_long_bricks_slab',
    'createdeco:dean_short_bricks_slab',
    'createdeco:cracked_dean_bricks_slab',
    'createdeco:cracked_dean_brick_tiles_slab',
    'createdeco:cracked_dean_long_bricks_slab',
    'createdeco:cracked_dean_short_bricks_slab',
    'createdeco:mossy_dean_bricks_slab',
    'createdeco:mossy_dean_brick_tiles_slab',
    'createdeco:mossy_dean_long_bricks_slab',
    'createdeco:mossy_dean_short_bricks_slab',
    'engineersdecor:dark_shingle_roof_slab',
    'enlightened_end:smooth_purpur_slab',
    'enlightened_end:end_stone_slab',
    'enlightened_end:end_stone_tile_slab',
    'enlightened_end:palerock_slab',
    'enlightened_end:polished_palerock_slab',
    'enlightened_end:palerock_brick_slab',
    'enlightened_end:palerock_tile_slab',
    'enlightened_end:void_shale_slab',
    'enlightened_end:polished_void_shale_slab',
    'enlightened_end:void_shale_brick_slab',
    'enlightened_end:void_shale_tile_slab',
    'enlightened_end:glacium_brick_slab',
    'enlightened_end:malachite_slab',
    'enlightened_end:polished_malachite_slab',
    'enlightened_end:malachite_brick_slab',
    'enlightened_end:malachite_tile_slab',
    'enlightened_end:irradium_brick_slab',
    'enlightened_end:depleted_irradium_brick_slab',
    'enlightened_end:bismuth_sheet_slab',
    'enlightened_end:waxed_bismuth_sheet_slab',
    'enlightened_end:bismuth_sheet_slab',
    'enlightened_end:dazzling_bismuth_slab',
    'enlightened_end:verdant_bismuth_slab',
    'enlightened_end:poise_bismuth_slab',
    'enlightened_end:ethereal_bismuth_slab',
    'enlightened_end:serene_bismuth_slab',
    'enlightened_end:iridescent_bismuth_slab',
    'integrateddynamics:crystalized_menril_block_slab',
    'integrateddynamics:crystalized_menril_brick_slab',
    'integrateddynamics:crystalized_chorus_block_slab',
    'integrateddynamics:crystalized_chorus_brick_slab',
    'suppsquared:daub_slab',
    'suppsquared:daub_frame_slab',
    'upgrade_aquatic:luminous_prismarine_slab',
  ]);

  // Missing Stairs Tags
  event.add('minecraft:stairs', [
    'ae2:sky_stone_stairs',
    'ae2:smooth_sky_stone_stairs',
    'ae2:sky_stone_brick_stairs',
    'ae2:sky_stone_small_brick_stairs',
    'ae2:fluix_stairs',
    'ae2:quartz_stairs',
    'ae2:cut_quartz_stairs',
    'ae2:smooth_quartz_stairs',
    'ae2:quartz_brick_stairs',
    'ae2:chiseled_quartz_stairs',
    'ae2:quartz_pillar_stairs',
    'ars_nouveau:sourcestone_stairs',
    'ars_nouveau:sourcestone_mosaic_stairs',
    'ars_nouveau:sourcestone_basketweave_stairs',
    'ars_nouveau:sourcestone_alternating_stairs',
    'ars_nouveau:sourcestone_large_bricks_stairs',
    'ars_nouveau:sourcestone_small_bricks_stairs',
    'ars_nouveau:smooth_sourcestone_stairs',
    'ars_nouveau:smooth_sourcestone_mosaic_stairs',
    'ars_nouveau:smooth_sourcestone_basketweave_stairs',
    'ars_nouveau:smooth_sourcestone_alternating_stairs',
    'ars_nouveau:smooth_sourcestone_large_bricks_stairs',
    'ars_nouveau:smooth_sourcestone_small_bricks_stairs',
    'ars_nouveau:gilded_sourcestone_mosaic_stairs',
    'ars_nouveau:gilded_sourcestone_basketweave_stairs',
    'ars_nouveau:gilded_sourcestone_alternating_stairs',
    'ars_nouveau:gilded_sourcestone_large_bricks_stairs',
    'ars_nouveau:gilded_sourcestone_small_bricks_stairs',
    'ars_nouveau:smooth_gilded_sourcestone_mosaic_stairs',
    'ars_nouveau:smooth_gilded_sourcestone_basketweave_stairs',
    'ars_nouveau:smooth_gilded_sourcestone_alternating_stairs',
    'ars_nouveau:smooth_gilded_sourcestone_large_bricks_stairs',
    'ars_nouveau:smooth_gilded_sourcestone_small_bricks_stairs',
    'cave_enhancements:polished_rose_quartz_stairs',
    'cave_enhancements:rose_quartz_tile_stairs',
    'createdeco:worn_bricks_stairs',
    'createdeco:worn_brick_tiles_stairs',
    'createdeco:worn_long_bricks_stairs',
    'createdeco:worn_short_bricks_stairs',
    'createdeco:cracked_worn_bricks_stairs',
    'createdeco:cracked_worn_brick_tiles_stairs',
    'createdeco:cracked_worn_long_bricks_stairs',
    'createdeco:cracked_worn_short_bricks_stairs',
    'createdeco:mossy_worn_bricks_stairs',
    'createdeco:mossy_worn_brick_tiles_stairs',
    'createdeco:mossy_worn_long_bricks_stairs',
    'createdeco:mossy_worn_short_bricks_stairs',
    'createdeco:red_brick_tiles_stairs',
    'createdeco:red_long_bricks_stairs',
    'createdeco:red_short_bricks_stairs',
    'createdeco:cracked_red_bricks_stairs',
    'createdeco:cracked_red_brick_tiles_stairs',
    'createdeco:cracked_red_long_bricks_stairs',
    'createdeco:cracked_red_short_bricks_stairs',
    'createdeco:mossy_red_bricks_stairs',
    'createdeco:mossy_red_brick_tiles_stairs',
    'createdeco:mossy_red_long_bricks_stairs',
    'createdeco:mossy_red_short_bricks_stairs',
    'createdeco:pearl_bricks_stairs',
    'createdeco:pearl_brick_tiles_stairs',
    'createdeco:pearl_long_bricks_stairs',
    'createdeco:pearl_short_bricks_stairs',
    'createdeco:cracked_pearl_bricks_stairs',
    'createdeco:cracked_pearl_brick_tiles_stairs',
    'createdeco:cracked_pearl_long_bricks_stairs',
    'createdeco:cracked_pearl_short_bricks_stairs',
    'createdeco:mossy_pearl_bricks_stairs',
    'createdeco:mossy_pearl_brick_tiles_stairs',
    'createdeco:mossy_pearl_long_bricks_stairs',
    'createdeco:mossy_pearl_short_bricks_stairs',
    'createdeco:scarlet_bricks_stairs',
    'createdeco:scarlet_brick_tiles_stairs',
    'createdeco:scarlet_long_bricks_stairs',
    'createdeco:scarlet_short_bricks_stairs',
    'createdeco:cracked_scarlet_bricks_stairs',
    'createdeco:cracked_scarlet_brick_tiles_stairs',
    'createdeco:cracked_scarlet_long_bricks_stairs',
    'createdeco:cracked_scarlet_short_bricks_stairs',
    'createdeco:mossy_scarlet_bricks_stairs',
    'createdeco:mossy_scarlet_brick_tiles_stairs',
    'createdeco:mossy_scarlet_long_bricks_stairs',
    'createdeco:mossy_scarlet_short_bricks_stairs',
    'createdeco:blue_bricks_stairs',
    'createdeco:blue_brick_tiles_stairs',
    'createdeco:blue_long_bricks_stairs',
    'createdeco:blue_short_bricks_stairs',
    'createdeco:cracked_blue_bricks_stairs',
    'createdeco:cracked_blue_brick_tiles_stairs',
    'createdeco:cracked_blue_long_bricks_stairs',
    'createdeco:cracked_blue_short_bricks_stairs',
    'createdeco:mossy_blue_bricks_stairs',
    'createdeco:mossy_blue_brick_tiles_stairs',
    'createdeco:mossy_blue_long_bricks_stairs',
    'createdeco:mossy_blue_short_bricks_stairs',
    'createdeco:dusk_bricks_stairs',
    'createdeco:dusk_brick_tiles_stairs',
    'createdeco:dusk_long_bricks_stairs',
    'createdeco:dusk_short_bricks_stairs',
    'createdeco:cracked_dusk_bricks_stairs',
    'createdeco:cracked_dusk_brick_tiles_stairs',
    'createdeco:cracked_dusk_long_bricks_stairs',
    'createdeco:cracked_dusk_short_bricks_stairs',
    'createdeco:mossy_dusk_bricks_stairs',
    'createdeco:mossy_dusk_brick_tiles_stairs',
    'createdeco:mossy_dusk_long_bricks_stairs',
    'createdeco:mossy_dusk_short_bricks_stairs',
    'createdeco:dean_bricks_stairs',
    'createdeco:dean_brick_tiles_stairs',
    'createdeco:dean_long_bricks_stairs',
    'createdeco:dean_short_bricks_stairs',
    'createdeco:cracked_dean_bricks_stairs',
    'createdeco:cracked_dean_brick_tiles_stairs',
    'createdeco:cracked_dean_long_bricks_stairs',
    'createdeco:cracked_dean_short_bricks_stairs',
    'createdeco:mossy_dean_bricks_stairs',
    'createdeco:mossy_dean_brick_tiles_stairs',
    'createdeco:mossy_dean_long_bricks_stairs',
    'createdeco:mossy_dean_short_bricks_stairs',
    'enlightened_end:smooth_purpur_stairs',
    'enlightened_end:end_stone_stairs',
    'enlightened_end:end_stone_tile_stairs',
    'enlightened_end:palerock_stairs',
    'enlightened_end:polished_palerock_stairs',
    'enlightened_end:palerock_brick_stairs',
    'enlightened_end:palerock_tile_stairs',
    'enlightened_end:void_shale_stairs',
    'enlightened_end:polished_void_shale_stairs',
    'enlightened_end:void_shale_brick_stairs',
    'enlightened_end:void_shale_tile_stairs',
    'enlightened_end:glacium_brick_stairs',
    'enlightened_end:malachite_stairs',
    'enlightened_end:polished_malachite_stairs',
    'enlightened_end:malachite_brick_stairs',
    'enlightened_end:malachite_tile_stairs',
    'enlightened_end:irradium_brick_stairs',
    'enlightened_end:depleted_irradium_brick_stairs',
    'enlightened_end:bismuth_sheet_stairs',
    'enlightened_end:waxed_bismuth_sheet_stairs',
    'enlightened_end:bismuth_sheet_stairs',
    'enlightened_end:dazzling_bismuth_stairs',
    'enlightened_end:verdant_bismuth_stairs',
    'enlightened_end:poise_bismuth_stairs',
    'enlightened_end:ethereal_bismuth_stairs',
    'enlightened_end:serene_bismuth_stairs',
    'enlightened_end:iridescent_bismuth_stairs',
    'suppsquared:daub_stairs',
    'suppsquared:daub_frame_stairs',
    'upgrade_aquatic:luminous_prismarine_stairs',
  ]);

  // Missing Glass Panes Tags
  event.add('forge:glass_panes', [
    'enlightened_end:bismuth_glass_pane',
    'enlightened_end:waxed_bismuth_glass_pane',
    'enlightened_end:dazzling_bismuth_glass_pane',
    'enlightened_end:verdant_bismuth_glass_pane',
    'enlightened_end:poise_bismuth_glass_pane',
    'enlightened_end:ethereal_bismuth_glass_pane',
    'enlightened_end:serene_bismuth_glass_pane',
    'enlightened_end:iridescent_bismuth_glass_pane',
    'forbidden_arcanus:deorum_glass_pane',
    'moreminecarts:organic_glass_pane',
    'moreminecarts:chiseled_organic_glass_pane',
  ]);

  // Missing Ore Tags
  event.add('forge:ores', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore',
    'enlightened_end:bismuth_ore',
    'enlightened_end:irradium_ore',
    'forbidden_arcanus:arcane_crystal_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
    'irons_spellbooks:arcane_debris',
  ]);

  event.add('forge:ores/adamantite', [
    'enlightened_end:adamantite_node',
  ])

  event.add('forge:ores/arcane_crystal', [
    'forbidden_arcanus:arcane_crystal_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/arcane_debris', [
    'irons_spellbooks:arcane_debris',
  ]);

  event.add('forge:ores/bismuth', [
    'enlightened_end:bismuth_ore',
  ])

  event.add('forge:ores/blazing_quartz', [
    'malum:blazing_quartz_ore',
  ]);

  event.add('forge:ores/irradium', [
    'enlightened_end:irradium_ore',
  ])

  event.add('forge:ores/quartz', [
    'malum:natural_quartz_ore',
    'malum:deepslate_quartz_ore',
  ]);

  event.add('forge:ores/soulstone', [
    'malum:deepslate_soulstone_ore',
    'malum:soulstone_ore',
  ]);

  event.add('forge:ores/silver', [
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore',
  ]);

  // Missing Storage Block Tags
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
    'moreminecarts:silica_steel_block',
    'spirit:soul_steel_block',
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

  // ----- Mod-specific Tags -----

  // Create
  event.add('create:fan_processing_catalysts/haunting', [
    'decorative_blocks:soul_brazier',
    'valhelsia_structures:soul_brazier',
  ]);

  event.add('create:fan_processing_catalysts/smoking', [
    'decorative_blocks:brazier',
    'valhelsia_structures:brazier',
  ]);

  // Mekanism
  event.add('mekanism:cardboard_blacklist', [
    'waystones:waystone',
    'waystones:mossy_waystone',
    'waystones:sandy_waystone'
  ]);

  // Quark
  event.add('quark:vertical_slabs', [
    'createdeco:worn_bricks_slab_vert',
    'createdeco:worn_brick_tiles_slab_vert',
    'createdeco:worn_long_bricks_slab_vert',
    'createdeco:worn_short_bricks_slab_vert',
    'createdeco:cracked_worn_bricks_slab_vert',
    'createdeco:cracked_worn_brick_tiles_slab_vert',
    'createdeco:cracked_worn_long_bricks_slab_vert',
    'createdeco:cracked_worn_short_bricks_slab_vert',
    'createdeco:mossy_worn_bricks_slab_vert',
    'createdeco:mossy_worn_brick_tiles_slab_vert',
    'createdeco:mossy_worn_long_bricks_slab_vert',
    'createdeco:mossy_worn_short_bricks_slab_vert',
    'createdeco:red_bricks_slab_vert',
    'createdeco:red_brick_tiles_slab_vert',
    'createdeco:red_long_bricks_slab_vert',
    'createdeco:red_short_bricks_slab_vert',
    'createdeco:cracked_red_bricks_slab_vert',
    'createdeco:cracked_red_brick_tiles_slab_vert',
    'createdeco:cracked_red_long_bricks_slab_vert',
    'createdeco:cracked_red_short_bricks_slab_vert',
    'createdeco:mossy_red_bricks_slab_vert',
    'createdeco:mossy_red_brick_tiles_slab_vert',
    'createdeco:mossy_red_long_bricks_slab_vert',
    'createdeco:mossy_red_short_bricks_slab_vert',
    'createdeco:pearl_bricks_slab_vert',
    'createdeco:pearl_brick_tiles_slab_vert',
    'createdeco:pearl_long_bricks_slab_vert',
    'createdeco:pearl_short_bricks_slab_vert',
    'createdeco:cracked_pearl_bricks_slab_vert',
    'createdeco:cracked_pearl_brick_tiles_slab_vert',
    'createdeco:cracked_pearl_long_bricks_slab_vert',
    'createdeco:cracked_pearl_short_bricks_slab_vert',
    'createdeco:mossy_pearl_bricks_slab_vert',
    'createdeco:mossy_pearl_brick_tiles_slab_vert',
    'createdeco:mossy_pearl_long_bricks_slab_vert',
    'createdeco:mossy_pearl_short_bricks_slab_vert',
    'createdeco:scarlet_bricks_slab_vert',
    'createdeco:scarlet_brick_tiles_slab_vert',
    'createdeco:scarlet_long_bricks_slab_vert',
    'createdeco:scarlet_short_bricks_slab_vert',
    'createdeco:cracked_scarlet_bricks_slab_vert',
    'createdeco:cracked_scarlet_brick_tiles_slab_vert',
    'createdeco:cracked_scarlet_long_bricks_slab_vert',
    'createdeco:cracked_scarlet_short_bricks_slab_vert',
    'createdeco:mossy_scarlet_bricks_slab_vert',
    'createdeco:mossy_scarlet_brick_tiles_slab_vert',
    'createdeco:mossy_scarlet_long_bricks_slab_vert',
    'createdeco:mossy_scarlet_short_bricks_slab_vert',
    'createdeco:blue_bricks_slab_vert',
    'createdeco:blue_brick_tiles_slab_vert',
    'createdeco:blue_long_bricks_slab_vert',
    'createdeco:blue_short_bricks_slab_vert',
    'createdeco:cracked_blue_bricks_slab_vert',
    'createdeco:cracked_blue_brick_tiles_slab_vert',
    'createdeco:cracked_blue_long_bricks_slab_vert',
    'createdeco:cracked_blue_short_bricks_slab_vert',
    'createdeco:mossy_blue_bricks_slab_vert',
    'createdeco:mossy_blue_brick_tiles_slab_vert',
    'createdeco:mossy_blue_long_bricks_slab_vert',
    'createdeco:mossy_blue_short_bricks_slab_vert',
    'createdeco:dusk_bricks_slab_vert',
    'createdeco:dusk_brick_tiles_slab_vert',
    'createdeco:dusk_long_bricks_slab_vert',
    'createdeco:dusk_short_bricks_slab_vert',
    'createdeco:cracked_dusk_bricks_slab_vert',
    'createdeco:cracked_dusk_brick_tiles_slab_vert',
    'createdeco:cracked_dusk_long_bricks_slab_vert',
    'createdeco:cracked_dusk_short_bricks_slab_vert',
    'createdeco:mossy_dusk_bricks_slab_vert',
    'createdeco:mossy_dusk_brick_tiles_slab_vert',
    'createdeco:mossy_dusk_long_bricks_slab_vert',
    'createdeco:mossy_dusk_short_bricks_slab_vert',
    'createdeco:dean_bricks_slab_vert',
    'createdeco:dean_brick_tiles_slab_vert',
    'createdeco:dean_long_bricks_slab_vert',
    'createdeco:dean_short_bricks_slab_vert',
    'createdeco:cracked_dean_bricks_slab_vert',
    'createdeco:cracked_dean_brick_tiles_slab_vert',
    'createdeco:cracked_dean_long_bricks_slab_vert',
    'createdeco:cracked_dean_short_bricks_slab_vert',
    'createdeco:mossy_dean_bricks_slab_vert',
    'createdeco:mossy_dean_brick_tiles_slab_vert',
    'createdeco:mossy_dean_long_bricks_slab_vert',
    'createdeco:mossy_dean_short_bricks_slab_vert',
    'createdeco:andesite_sheet_slab_vert',
    'createdeco:brass_sheet_slab_vert',
    'createdeco:cast_iron_sheet_slab_vert',
    'createdeco:copper_sheet_slab_vert',
    'createdeco:gold_sheet_slab_vert',
    'createdeco:iron_sheet_slab_vert',
    'createdeco:netherite_sheet_slab_vert',
    'createdeco:zinc_sheet_slab_vert',
    'darkerdepths:petrified_vertical_slab',
    'darkerdepths:shale_vertical_slab',
    'darkerdepths:polished_shale_vertical_slab',
    'darkerdepths:shale_bricks_vertical_slab',
    'darkerdepths:aridrock_vertical_slab',
    'darkerdepths:polished_aridrock_vertical_slab',
    'darkerdepths:aridrock_bricks_vertical_slab',
    'darkerdepths:limestone_vertical_slab',
    'darkerdepths:polished_limestone_vertical_slab',
    'darkerdepths:limestone_bricks_vertical_slab',
    'darkerdepths:grimestone_vertical_slab',
    'darkerdepths:polished_grimestone_vertical_slab',
    'darkerdepths:grimestone_bricks_vertical_slab',
    'engineersdecor:clinker_brick_vertical_slab_structured',
    'supplementaries:lapis_bricks_vertical_slab',
    'supplementaries:ash_bricks_vertical_slab',
    'suppsquared:daub_vertical_slab',
    'suppsquared:daub_frame_vertical_slab',
    'upgrade_aquatic:luminous_prismarine_vertical_slab',
  ]);

  // Windowlogging
  event.add('windowlogging:window', [
    'create:andesite_bars',
    'create:brass_bars',
    'create:copper_bars',
    'createdeco:andesite_bars',
    'createdeco:andesite_bars_overlay',
    'createdeco:brass_bars',
    'createdeco:brass_bars_overlay',
    'createdeco:cast_iron_bars',
    'createdeco:cast_iron_bars_overlay',
    'createdeco:copper_bars',
    'createdeco:copper_bars_overlay',
    'createdeco:gold_bars',
    'createdeco:gold_bars_overlay',
    'createdeco:iron_bars_overlay',
    'createdeco:netherite_bars',
    'createdeco:netherite_bars_overlay',
    'createdeco:polished_iron_bars',
    'createdeco:polished_iron_bars_overlay',
    'createdeco:zinc_bars',
    'createdeco:zinc_bars_overlay',
    'quark:paper_wall',
    'quark:paper_wall_big',
    'quark:paper_wall_sakura',
    'quark:red_corundum_pane',
    'quark:orange_corundum_pane',
    'quark:yellow_corundum_pane',
    'quark:green_corundum_pane',
    'quark:blue_corundum_pane',
    'quark:indigo_corundum_pane',
    'quark:violet_corundum_pane',
    'quark:white_corundum_pane',
    'quark:black_corundum_pane',
    'valhelsia_structures:paper_wall',
  ]);

  event.add('windowlogging:windowable', [
    'engineersdecor:dark_shingle_roof_slabslice',
    'engineersdecor:old_industrial_wood_slabslice',
    'engineersdecor:halfslab_rebar_concrete',
    'immersiveengineering:concrete_sheet',
    'immersiveengineering:concrete_quarter',
    'immersiveengineering:concrete_three_quarter',
    '#quark:vertical_slabs',
  ]);
});