// priority: 0

//   __   ___   _    _  _ ___ _    ___ ___   _       ___ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | __|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |__ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |___/
//

/**
 * @file REI Blacklist for Valhelsia 5
 * 
 * For consistency, Item / Fluid IDs should be in the order of Minecraft entries first, then by mod in alphabetical order.
 *  
 * @copyright Valhelsia Inc 2022
 */

/**
 * REI Item Hiding Event Handler
 */
REIEvents.hide('item', event => {
  event.hide([

    // Minecraft
    'minecraft:barrier',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:structure_block',
    'minecraft:structure_void',

    // Ars Nouveau
    'ars_nouveau:creative_spell_book',

    // Biomes O' Plenty
    'biomesoplenty:blood',
    'biomesoplenty:bop_icon',
    'biomesoplenty:glowshroom_block',
    'biomesoplenty:glowing_moss_block',
    'biomesoplenty:glowing_moss_carpet',
    'biomesoplenty:glowworm_silk',
    'biomesoplenty:glowworm_silk_strand',
    'biomesoplenty:glowshroom',
    'biomesoplenty:potted_origin_sapling',
    'biomesoplenty:potted_flowering_oak_sapling',
    'biomesoplenty:potted_rainbow_birch_sapling',
    'biomesoplenty:potted_yellow_autumn_sapling',
    'biomesoplenty:potted_orange_autumn_sapling',
    'biomesoplenty:potted_maple_sapling',
    'biomesoplenty:potted_fir_sapling',
    'biomesoplenty:potted_redwood_sapling',
    'biomesoplenty:potted_white_cherry_sapling',
    'biomesoplenty:potted_pink_cherry_sapling',
    'biomesoplenty:potted_mahogany_sapling',
    'biomesoplenty:potted_jacaranda_sapling',
    'biomesoplenty:potted_palm_sapling',
    'biomesoplenty:potted_willow_sapling',
    'biomesoplenty:potted_dead_sapling',
    'biomesoplenty:potted_magic_sapling',
    'biomesoplenty:potted_umbran_sapling',
    'biomesoplenty:potted_hellbark_sapling',
    'biomesoplenty:potted_rose',
    'biomesoplenty:potted_violet',
    'biomesoplenty:potted_lavender',
    'biomesoplenty:potted_wildflower',
    'biomesoplenty:potted_orange_cosmos',
    'biomesoplenty:potted_pink_daffodil',
    'biomesoplenty:potted_pink_hibiscus',
    'biomesoplenty:potted_glowflower',
    'biomesoplenty:potted_wilted_lily',
    'biomesoplenty:potted_burning_blossom',
    'biomesoplenty:potted_sprout',
    'biomesoplenty:potted_clover',
    'biomesoplenty:potted_toadstool',
    'biomesoplenty:potted_glowshroom',

    // Citadel
    'citadel:debug',
    'citadel:citadel_book',
    'citadel:effect_item',
    'citadel:fancy_item',

    // Create
    'create:copper_backtank_placeable',

    // Decorative Blocks
    'decorative_blocks:blockstate_copy_item',

    // Darker Depths
    'darkerdepths:silver_ore',
    'darkerdepths:raw_silver',
    'darkerdepths:raw_silver_block',
    'darkerdepths:silver_ingot',
    'darkerdepths:silver_block',
    'darkerdepths:rope',

    // Domum Ornamentum
    'domum_ornamentum:plain',
    'domum_ornamentum:double_crossed',
    'domum_ornamentum:framed',
    'domum_ornamentum:side_framed',
    'domum_ornamentum:up_gated',
    'domum_ornamentum:down_gated',
    'domum_ornamentum:one_crossed_lr',
    'domum_ornamentum:one_crossed_rl',
    'domum_ornamentum:horizontal_plain',
    'domum_ornamentum:side_framed_horizontal',
    'domum_ornamentum:shingle',
    'domum_ornamentum:shingle_slab',
    'domum_ornamentum:blockpaperwall',
    'domum_ornamentum:blockpillar',
    'domum_ornamentum:vanilla_fence_compat',
    'domum_ornamentum:vanilla_wall_compat',
    'domum_ornamentum:vanilla_slab_compat',
    'domum_ornamentum:vanilla_trapdoors_compat',
    'domum_ornamentum:vanilla_stairs_compat',
    'domum_ornamentum:vanilla_fence_gate_compat',
    'domum_ornamentum:vanilla_doors_compat',
    'domum_ornamentum:fancy_trapdoors',
    'domum_ornamentum:fancy_door',
    'domum_ornamentum:panel',

    // Every Compat
    'everycomp:all_woods',

    // Immersive Engineering
    'immersiveengineering:ore_lead',
    'immersiveengineering:deepslate_ore_lead',
    'immersiveengineering:raw_lead',
    'immersiveengineering:raw_block_lead',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:storage_lead',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:ore_uranium',
    'immersiveengineering:deepslate_ore_uranium',
    'immersiveengineering:raw_uranium',
    'immersiveengineering:raw_block_uranium',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:storage_uranium',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:storage_steel',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:nugget_copper',

    // Mekanism
    'mekanism:block_charcoal',

    // Mekanism Additions
    'mekanismadditions:baby_creeper_spawn_egg',
    'mekanismadditions:baby_enderman_spawn_egg',
    'mekanismadditions:baby_wither_skeleton_spawn_egg',

    // Mekanism Tools
    'mekanismtools:lapis_lazuli_helmet',
    'mekanismtools:lapis_lazuli_chestplate',
    'mekanismtools:lapis_lazuli_leggings',
    'mekanismtools:lapis_lazuli_boots',
    'mekanismtools:lapis_lazuli_sword',
    'mekanismtools:lapis_lazuli_pickaxe',
    'mekanismtools:lapis_lazuli_axe',
    'mekanismtools:lapis_lazuli_shovel',
    'mekanismtools:lapis_lazuli_hoe',
    'mekanismtools:lapis_lazuli_paxel',
    'mekanismtools:lapis_lazuli_shield',
    'mekanismtools:steel_sword',
    'mekanismtools:steel_pickaxe',
    'mekanismtools:steel_axe',
    'mekanismtools:steel_shovel',
    'mekanismtools:steel_hoe',
    'mekanismtools:steel_helmet',
    'mekanismtools:steel_chestplate',
    'mekanismtools:steel_leggings',
    'mekanismtools:steel_boots',

    // Quark Oddities
    'quark:backpack',

    // Structure Gel API
    'structure_gel:red_gel',
    'structure_gel:blue_gel',
    'structure_gel:green_gel',
    'structure_gel:cyan_gel',
    'structure_gel:orange_gel',
    'structure_gel:yellow_gel',

    // Twilight Forest
    'twilightforest:uncrafting_table',

    // Woodworks
    'woodworks:spruce_bookshelf',
    'woodworks:birch_bookshelf',
    'woodworks:jungle_bookshelf',
    'woodworks:acacia_bookshelf',
    'woodworks:dark_oak_bookshelf',
    'woodworks:mangrove_bookshelf',
    'woodworks:crimson_bookshelf',
    'woodworks:warped_bookshelf',
    'woodworks:spruce_ladder',
    'woodworks:birch_ladder',
    'woodworks:jungle_ladder',
    'woodworks:acacia_ladder',
    'woodworks:dark_oak_ladder',
    'woodworks:mangrove_ladder',
    'woodworks:crimson_ladder',
    'woodworks:warped_ladder',
    'woodworks:oak_leaf_pile',
    'woodworks:spruce_leaf_pile',
    'woodworks:birch_leaf_pile',
    'woodworks:jungle_leaf_pile',
    'woodworks:acacia_leaf_pile',
    'woodworks:dark_oak_leaf_pile',
    'woodworks:mangrove_leaf_pile',
    'woodworks:azalea_leaf_pile',
    'woodworks:flowering_azalea_leaf_pile'
  ])
})