// priority: 15
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Removes unused / undesired advancements from the pack.
 * @copyright Valhelsia Inc 2022
 */

/**
 * Which advancements to remove from the pack.
 * These should be the resource location of the advancement, including the .json file extension.
 * @example Example entry: 'outvoted:advancements/obtain_wildfire_helmet.json'
 * @const {!string[]}
 */
const ADVANCEMENTS_TO_REMOVE = [
  // TODO: Remove unused advancements here.
];

/**
 * Empty advancement JSON, for the purposes of effectively deleting an advancement (but without triggering errors).
 * @const {!Object}
 */
const EMPTY_ADVANCEMENT = {criteria:{impossible:{trigger:'minecraft:impossible'}}};

/**
 * Event handler for KubeJS's virtual datapack. Removes unused / undesired advancements
 * from the pack.
 */
ServerEvents.highPriorityData(event => {
  // Remove specified advancements.
  ADVANCEMENTS_TO_REMOVE.forEach(file => {
    event.addJson(file, EMPTY_ADVANCEMENT);
  });
});