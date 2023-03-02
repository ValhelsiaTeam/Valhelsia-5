// priority: 0

//   __   ___   _    _  _ ___ _    ___ ___   _       ___ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | __|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |__ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |___/
//

/**
 * @file Add ponder for Forbidden and Arcanus in Valhelsia 5.
 * @copyright Valhelsia Inc 2023
 */

/**
 * Add tutorial with the ponder format to create some features from Forbidden and Arcanus.
 */
Ponder.tags((event) => {
  event.createTag("kubejs:forbidden_arcanus", "forbidden_arcanus:hephaestus_forge", "Forbidden And Arcanus", "", [
      "forbidden_arcanus:arcane_crystal_obelisk",
  ]);
});

Ponder.registry((event) => {
  event
      .create("forbidden_arcanus:arcane_crystal_obelisk").scene("forbidden_arcanus:arcane_crystal_obelisk", "Create Arcane Crystal Obelisk", (scene, util) => {

      scene.showStructure();
      
      scene.world.setBlock([2, 1, 2], "forbidden_arcanus:arcane_polished_darkstone", false);
      scene.world.setBlock([2, 2, 2], "forbidden_arcanus:arcane_crystal_block", false);
      scene.world.setBlock([2, 3, 2], "forbidden_arcanus:arcane_crystal_block", false);

      scene.idle(15);

      scene
          .text(60, "Place two Arcane Crystal Blocks on top of an Arcane Polished Darkstone Block", [2.0, 2.5, 2.5])
          .colored(PonderPalette.WHITE)
          .attachKeyFrame()

      scene.idle(85);
          
      scene
          .showControls(60, [2.5, 4, 2.5], "down")
          .rightClick()
          .withItem("forbidden_arcanus:mundabitur_dust")
      scene
          .text(60, "Right-click with a Mundabitur Dust to create the Arcane Crystal Obelisk", [2.0, 2.5, 2.5])
          .colored(PonderPalette.WHITE)
          .attachKeyFrame()

      scene.idle(85);

      scene.addKeyframe();
      scene.world.setBlock([2, 1, 2], Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "lower"), true);
      scene.world.setBlock([2, 2, 2], Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "middle"), true);
      scene.world.setBlock([2, 3, 2], Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "upper"), true);

      scene.idle(50);
  });
});
