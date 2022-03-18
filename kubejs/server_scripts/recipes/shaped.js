// priority: 10

onEvent('recipes', function (event) {

  // Minecraft
  event.shaped('minecraft:cobweb', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:string'
  })

  event.shaped('minecraft:dispenser', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: 'minecraft:cobblestone',
    B: 'minecraft:crossbow',
    C: 'minecraft:redstone'
  })

  event.shaped('minecraft:dispenser', [
    'RS ',
    'RDS',
    'RS '
  ], {
    R: 'minecraft:stick',
    S: 'minecraft:string',
    D: 'minecraft:dropper'
  })

  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  })

  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  })

  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  
  event.shaped('minecraft:bundle', [
    'SCS',
    'C C',
    'CCC'
  ], {
    S: 'minecraft:string',
    C: 'farmersdelight:canvas'
  })

  // Quartz Elevator
  event.shaped('quartzelv:quartz_elevator', [
    'BBB',
    'BAB',
    'BBB'
  ], {
    A: 'architects_palette:ender_pearl_block',
    B: 'minecraft:quartz'
  })
})
