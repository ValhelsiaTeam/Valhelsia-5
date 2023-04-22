// priority: 20
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Developer commands to assist in creating new pack content.
 * @copyright Valhelsia Inc 2023
 */

/**
 * The root developer command.
 * @const {!string}
 * @default 'dev'
 */
const DEVELOPER_COMMAND = 'dev';

/**
 * The permission level required to use developer commands.
 * All developer commands require the same permission level to use.
 * @see {@link https://minecraft.fandom.com/wiki/Permission_level#Java_Edition Permission Level}
 * for information about each permission level.
 * @const {!number}
 * @default 3
 */
const DEVELOPER_COMMAND_PERMISSION_LEVEL = 3;

/**
 * The generate tips developer command.
 * @const {!string}
 * @default 'gentips'
 */
const GENERATE_TIPS_COMMAND = 'gentips';

/**
 * Command registry handler that adds the developer commands.
 * 
 * Command Syntax (assuming default command): 
 * Get Config: /dev [command]
 * Set Config: /dev [command] [arguments]
 */
ServerEvents.commandRegistry(event => {
  if (!global.config.developer) {
    // Only register developer commands if developer mode is enabled.
    // When turning on developer mode, this means that a reload is required.
    return;
  }

  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal(DEVELOPER_COMMAND)
      .requires((source) => source.hasPermission(DEVELOPER_COMMAND_PERMISSION_LEVEL))
      .then(Commands.literal(GENERATE_TIPS_COMMAND).executes((ctx) => generate_tips(ctx)))
      // Additional commands can be registered here.
  );
});