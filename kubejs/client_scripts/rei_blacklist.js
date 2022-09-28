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
REIEvents.hideItems(event => {
  event.hide([

    // Minecraft
    'minecraft:barrier',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:structure_block',
    'minecraft:structure_void',

    // Biomes O' Plenty
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

    // Darker Depths
    'darkerdepths:silver_ore',
    'darkerdepths:raw_silver',
    'darkerdepths:raw_silver_block',
    'darkerdepths:silver_ingot',
    'darkerdepths:silver_block',

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
  ])
})