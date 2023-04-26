// priority: 25
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Functions to assist with the Tips mod.
 * @copyright Valhelsia Inc 2023
 */

/**
 * Generates translatable tips based on language entries, so that the JSON files don't have to be manually created for each
 * tip that is added to the pack. Run the command every time new tips are added.
 * @returns The number of tips generated.
 */
function generate_tips(ctx) {
  const languagePath = 'kubejs/assets/valhelsia/lang/en_us.json';
  const keyStart = 'valhelsia.tip.';

  let languageJson = JsonIO.read(languagePath);
  let tipCount = 0;

  for (var key in languageJson) {
    if (key.startsWith(keyStart)) {
      let tipName = key.substring(keyStart.length);
      let tipPath = `kubejs/assets/valhelsia/tips/${tipName}.json`;
      let tipData = {
        title: {
          translate: "valhelsia.tip_heading",
          bold: true,
          color: "gold",
          underlined: true
        },
        tip: {
          translate: key
        }
      };

      if (global.config.debug) {
        console.log(`Writing tip "${tipName}" to "${tipPath}".`);
      }
      
      JsonIO.write(tipPath, tipData);
      tipCount++;
    }
  }

  if (tipCount > 0) {
    // This is mostly to provide some visual feedback that the command actually ran.
    ctx.source.sendSuccess(Text.translate('commands.valhelsia.developer.tips_generated', `${tipCount}'.`), true);
  }

  return tipCount;
}