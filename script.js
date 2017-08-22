var my_canvas = document.getElementById("canvas")
var context = my_canvas.getContext("2d")

drawRandomDoor()

function drawRandomDoor()
{
  var doorColor = getRandomColor()
  var knobColor = getRandomColor()
  while (doorColor == knobColor)
  {
    knobColor = getRandomColor()
  }

  var windowWidth = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  var windowHeight = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  document.width = windowWidth
  document.height = windowHeight

  my_canvas.width = windowWidth
  my_canvas.height = windowHeight

  var doorHeight = windowHeight * 2 / 3
  var doorWidth = (doorHeight / 2) < windowWidth ? (doorHeight / 2) : windowWidth

  var doorX = (windowWidth / 2) > (doorWidth / 2) ? (windowWidth / 2) - (doorWidth / 2) : 0
  var doorY = 20

  var knobRadius = doorWidth / 15
  var knobX = doorX + knobRadius * 1.5
  var knobY = doorY + doorHeight * 7 / 12

  // Draw the door
  context.beginPath()
  context.fillStyle = doorColor
  context.rect(doorX, doorY, doorWidth, doorHeight)
  context.fill()
  context.stroke()
  // Draw random spots
  drawRandomSpots(doorHeight, doorWidth, doorX, doorY)
  // Draw the door knob
  context.beginPath()
  context.fillStyle = knobColor
  context.arc(knobX,knobY,knobRadius,0,2*Math.PI)
  context.fill()
  context.stroke()
}

function drawRandomSpots(doorHeight, doorWidth, doorX, doorY)
{
  var spotChance = 25
  var spotRadius = doorHeight / 200
  var spotDiameter = spotRadius*2
  for (y = doorY + spotDiameter; y < (doorY + doorHeight - spotDiameter); y += spotRadius*1.5)
  {
    for (x = doorX + spotDiameter; x < (doorX + doorWidth - spotDiameter); x += spotRadius*1.5)
    {
      if (Math.random() * 100 < spotChance)
      {
        context.beginPath()
        context.fillStyle = getRandomColor()
        context.arc(x,y,spotRadius,0,2*Math.PI)
        context.fill()
      }
    }
  }
}

function getRandomColor()
{
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}
