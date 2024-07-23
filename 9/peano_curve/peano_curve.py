# Create a turtle program that draws a Peano space-filling curve. This is
# similar to the Hilbert curve program in this chapter. Figure 9-21 shows
# the first three iterations of the Peano curve. While each Hilbert curve
# iteration is split across a 2 × 2 section (which is, in turn, split into 2 × 2
# sections), the Peano curve is split across 3 × 3 sections.

import turtle

# Constants
SIZE = 10  # Line length
ANGLE = 90
LEVELS = 3  # Recursive level
DRAW_SOLID = True

# Colors
MAGENTA = '#B20059'
PINK = '#FFE6F2'
turtle.bgcolor(MAGENTA)
turtle.pencolor(PINK)
turtle.fillcolor(PINK)

turtle.tracer(1, 0)  # Make the turtle draw faster.

def peanoCurveQuadrant(level, angle):
    if level == 0:
        return

    turtle.left(angle)
    peanoCurveQuadrant(level - 1, -angle)
    turtle.forward(SIZE)
    turtle.right(angle)
    peanoCurveQuadrant(level - 1, angle)
    turtle.forward(SIZE)
    turtle.right(angle)
    peanoCurveQuadrant(level - 1, -angle)
    turtle.forward(SIZE)
    turtle.left(angle)
    peanoCurveQuadrant(level - 1, angle)
    turtle.forward(SIZE)
    peanoCurveQuadrant(level - 1, angle)
    turtle.left(angle)
    turtle.forward(SIZE)
    peanoCurveQuadrant(level - 1, -angle)
    turtle.forward(SIZE)
    turtle.right(angle)
    peanoCurveQuadrant(level - 1, angle)
    turtle.forward(SIZE)
    turtle.right(angle)
    peanoCurveQuadrant(level - 1, -angle)
    turtle.left(angle)

def filledInPeano():
    turtle.begin_fill()
    for _ in range(3):
        peanoCurveQuadrant(LEVELS, ANGLE)
        turtle.forward(SIZE)
        peanoCurveQuadrant(LEVELS, ANGLE)
        turtle.left(ANGLE)
        turtle.forward(SIZE)
        peanoCurveQuadrant(LEVELS, ANGLE)
        turtle.right(ANGLE)
    turtle.end_fill()

# Adjust the starting position to ensure it fits well on the screen
def peanoCurve(startingPosition):
    turtle.penup()
    turtle.goto(startingPosition)
    turtle.pendown()
    if DRAW_SOLID:
        turtle.begin_fill()
    filledInPeano()
    if DRAW_SOLID:
        turtle.end_fill()

# Initial function call
peanoCurve((-150, 150))
turtle.update()  # Finish drawing the screen.
turtle.exitonclick()  # When user clicks on the window, close it.

##It's output is not what I expected :(  but I got the gist of this chapter so I think we are good! :)