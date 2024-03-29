// priority: 9002
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Global Constants for use in other scripts.
 * @copyright Valhelsia Inc 2023-2024
 */

/**
 * Minecraft's default colors, as used in vanilla item IDs and by most mods.
 * Note: Some mods use abnormal names for colors, such as Absent By Design (which uses 'silver' in some places 
 * instead of 'light_gray'), so this shouldn't be used blindly without verifying that the mod uses standard
 * color names.
 */
const COLORS = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
];

/**
 * NBT data for the filled Akashic Tome. Should be updated whenever new recipe books are added to the pack.
 */
const AKASHIC_TOME_NBT = '{"akashictome:data":{ad_astra:{Count:1b,id:"ad_astra:astrodux"},ae2:{Count:1b,id:"ae2:guide"},aether:{Count:1b,id:"aether:book_of_lore"},alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},botania:{Count:1b,id:"botania:lexicon"},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},integrateddynamics:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration"},irons_spellbooks:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}},patchouli_0:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"patchouli_0","patchouli:book":"engineersdecor:engineersdecor_manual"}},patchouli_1:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"patchouli_1","patchouli:book":"littlelogistics:guide"}},modularrouters:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}},patchouli_2:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"patchouli_2","patchouli:book":"advancedperipherals:manual"}},pneumaticcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}}}}';
 
/**
 * Item IDs for all leaf carpets (or BYG's foliage, which is essentially the same thing).
 */
const ALL_LEAF_CARPETS = [

];
 
/**
 * Block IDs of all natural logs, used mainly for the Reap mod.
 * To avoid accidental damage to custom builds, this list should be as close as possible to the
 * full set of naturally generating / growing log & stem blocks, without including any unnatural
 * ones (such as stripped / wood variants).
 */
const ALL_NATURAL_LOGS = [
  'minecraft:oak_log',
  'minecraft:spruce_log',
  'minecraft:birch_log',
  'minecraft:jungle_log',
  'minecraft:acacea_log',
  'minecraft:mangrove_log',
  'minecraft:dark_oak_log',
  'minecraft:crimson_stem',
  'minecraft:warped_stem',
]; 

const ALL_VANILLA_WOOD_TYPES = [
  'acacia',
  'birch',
  'crimson',
  'dark_oak',
  'jungle',
  'mangrove',
  'oak',
  'spruce',
  'warped',
];

const ALL_VANILLA_FLOWERS = [
  'allium',
  'azure_bluet',
  'blue_orchid',
  'cornflower',
  'dandelion',
  'lilac',
  'lily_of_the_valley',
  'orange_tulip',
  'oxeye_daisy',
  'peony',
  'pink_tulip',
  'poppy',
  'red_tulip',
  'rose_bush',
  'sunflower',
  'white_tulip',
  'wither_rose',
];

const ALL_BOP_FLOWERS = [
  'rose',
  'violet',
  'lavender',
  'wildflower',
  'orange_cosmos',
  'pink_daffodil',
  'pink_hibiscus',
  'glowflower',
  'wilted_lily',
  'burning_blossom',
  'tall_lavender',
  'blue_hydrangea',
  'goldenrod',
  'icy_iris',
];

const ALL_BLUE_SKIES_FLOWERS = [
  'camellia',
  'snowbloom',
  'blush_blossom',
  'polar_posy',
  'chillweed',
  'brittlebush',
  'briskbloom',
  'frose',
  'midday_bayhop',
  'moonlit_bloom',
  'crystal_flower',
  'blaze_bud',
  'flare_floret',
  'nightcress',
  'muckweed',
  'lucentroot',
];