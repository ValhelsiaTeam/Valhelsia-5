// priority: 90
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe add / remove potion brewing for Valhelsia 5.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Potion Brewing Event Handler
 */
MoreJSEvents.registerPotionBrewing((event) => {

  event.addPotionBrewing("biomesoplenty:rose_quartz_shard", "minecraft:awkward", "cave_enhancements:reversal");
});
