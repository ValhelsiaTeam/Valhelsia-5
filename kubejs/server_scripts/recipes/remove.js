// priority: 100

onEvent('recipes', function (event) {

  var idRemove = [

    // Quartz Elevator
    'quartzelv:quartz_elevator',
    'quartzelv:quartz_elevator_from_quartz_block',
    'quartzelv:smooth_quartz_elevator_from_smooth_quartz',
  ]

  idRemove.forEach(function (remove) {
    event.remove({id: remove})
  })

  var outputRemove = [
  ]

  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })
})
