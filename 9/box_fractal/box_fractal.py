# Create a turtle program that draws a box fractal as shown in Figure 9-20.
# This program is similar to the Sierpiński carpet program introduced
# in this chapter. Use the turtle.begin_fill() and turtle.end_fill() functions to draw the first large, black square.
# Then split this square into nine equal sections,
#  and draw white squares in the top, left, right, and
# bottom squares. Repeat this process for the four corner squares and the
# center square.


import turtle
turtle.tracer(100, 0) # Make the turtle draw faster.

# Setup the colors:
PALE_PINK = '#FFDFDE'
SHADOW_BLUE = '#6A7BA2'
FG_COLOR = SHADOW_BLUE
BG_COLOR = PALE_PINK
turtle.bgcolor(BG_COLOR)
turtle.pencolor(FG_COLOR)

LEVEL = 2


def drawCarpet(left, top, width, height, level):
    if level == 0:
        return

    # Draw the outer rectangle:
    turtle.penup()
    turtle.goto(left, top)
    turtle.pendown()
    turtle.fillcolor(FG_COLOR)

    turtle.begin_fill()
    turtle.setheading(0)
    turtle.forward(width)
    turtle.right(90)
    turtle.forward(height)
    turtle.right(90)
    turtle.forward(width)
    turtle.right(90)
    turtle.forward(height)
    turtle.end_fill()

    www = width / 3.0
    hhh = height / 3.0

    # Draw the top, left, right, and bottom rectangles white:
    # Top:
    turtle.penup()
    turtle.goto(left + www, top)
    turtle.pendown()
    turtle.fillcolor(BG_COLOR)

    turtle.begin_fill()
    turtle.setheading(0)
    turtle.forward(www)
    turtle.right(90)
    turtle.forward(hhh)
    turtle.right(90)
    turtle.forward(www)
    turtle.right(90)
    turtle.forward(hhh)
    turtle.end_fill()
    
    # Left:
    turtle.penup()
    turtle.goto(left, top -hhh)
    turtle.pendown()
    turtle.fillcolor(BG_COLOR)

    turtle.begin_fill()
    turtle.setheading(0)
    turtle.forward(www)
    turtle.right(90)
    turtle.forward(hhh)
    turtle.right(90)
    turtle.forward(www)
    turtle.right(90)
    turtle.forward(hhh)
    turtle.end_fill()

    # Bottom:
    turtle.penup()
    turtle.goto(left + www, top - (hhh * 2))
    turtle.pendown()
    turtle.fillcolor(BG_COLOR)

    turtle.begin_fill()
    turtle.setheading(0)
    turtle.forward(www)
    turtle.right(90)
    turtle.forward(hhh)
    turtle.right(90)
    turtle.forward(www)
    turtle.right(90)
    turtle.forward(hhh)
    turtle.end_fill()

    # Right:
    turtle.penup()
    turtle.goto(left + (www * 2), top -hhh)
    turtle.pendown()
    turtle.fillcolor(BG_COLOR)

    turtle.begin_fill()
    turtle.setheading(0)
    turtle.forward(www)
    turtle.right(90)
    turtle.forward(hhh)
    turtle.right(90)
    turtle.forward(www)
    turtle.right(90)
    turtle.forward(hhh)
    turtle.end_fill()


    # Recursive calls for the five surrounding sections:

    # Draw in the top-left section:
    drawCarpet(left, top, www, hhh, level - 1)
    # Draw in the top-right section:
    drawCarpet(left + (www * 2), top, www, hhh, level -1)
    # Draw in the bottom-left section:
    drawCarpet(left, top - (hhh * 2), www, hhh, level - 1)
    # Draw bottom-right:
    drawCarpet(left + (www * 2), top - (hhh * 2), www, hhh, level - 1)
    # Draw middle:
    drawCarpet(left + www , top - hhh , www, hhh, level - 1)

# Start the recursive drawing:
drawCarpet(-350, 350, 700, 700, LEVEL)

turtle.hideturtle() # Hide Turtle
turtle.update() # Finish drawing the screen.
turtle.exitonclick() # When user clicks on the window, close it.