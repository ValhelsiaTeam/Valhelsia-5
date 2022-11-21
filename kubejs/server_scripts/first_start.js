// priority: 5
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//                       

/**
 * @file First Start Script - Handles the first time a player joins a world (whether single- or multiplayer).
 * 
 * This includes things like introductory chat messages + links, starting items, and anything else that needs 
 * to be set just once the first time a player connects.
 * 
 * @copyright Valhelsia Inc 2022
 */

/**
 * Player Login Event Handler
 */
PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('first_start')) {
    event.player.stages.add('first_start');

    event.player.tell(Text.translate('valhelsia.chat.first_start_message'));
    event.player.tell(Text.translate('valhelsia.chat.discord').blue().underlined().click('https://discord.com/invite/rdfQuaM'));

    event.player.give(Item.of('akashictome:tome', AKASHIC_TOME_NBT));
  }

  // Note: If added to in the future, creating multiple stages would allow players updating the pack to receive any new
  // "first start" items / settings / whatever.
  // eg. instead of 'first_start', use 'first_start_v2', 'first_start_v3' to allow versioning the first start script.
});