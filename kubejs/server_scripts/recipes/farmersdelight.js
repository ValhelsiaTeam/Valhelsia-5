// priority: 10

onEvent('recipes', function (event) {

  // Cutting Board Axe Stripping
  const strip = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tag: "forge:tools/axes"
      },
      result: [
        Item.of(output).toResultJson(),
        {item: "farmersdelight:tree_bark"}
      ],
      sound: "minecraft:item.axe.strip"
    })
  }

  // Cutting Board Axe Chopping
  const chop = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tag: "forge:tools/axes"
      },
      result: [
        Item.of(output).toResultJson()
      ]
    })
  }

  // Cutting Board Knife Cutting
  // Note: When using this, ensure that output is an array.
  const cut = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        tag: "forge:tools/knives"
      },
      result: output
    })
  }

  // Cooking Pot Recipes
  const pot = (output, input, container) => {
    event.custom({
      type: "farmersdelight:cooking",
      ingredients: input,
      result: Item.of(output).toResultJson(),
      container: Item.of(container).toJson(),
      experience: 0.2,
      cookingtime: 200
    })
  }

  // ----- Axe Recipes -----

  // ----- Knife Recipes -----
  cut([Item.of('minecraft:string', 2)], '#minecraft:wool')

  // ----- Cooking Pot Recipes -----

})