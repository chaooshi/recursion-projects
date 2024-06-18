/* Problem:

Using the flood fill algorithm, count the number of “rooms,” or
enclosed spaces, in a 2D grid. You can do this by creating nested for
loops that call the flood fill function on each character in the grid if
it is a period, in order to change the periods into hash characters. For
example, the following data would result in the program finding six
places in the grid with periods, meaning there are five rooms (and the
space outside all the rooms).
______________________________________________________
...##########....................................
...#........#....####..................##########
...#........#....#..#...############...#........#
...##########....#..#...#..........#...##.......#
.......#....#....####...#..........#....##......#
.......#....#....#......############.....##.....#
.......######....#........................##....#
.................####........####..........######
_________________________________________________________
 */

// Solution:

function floodFill(image, x, y, newChar, oldChar) {
  const height = image.length;
  const width = image[0].length;
  if (oldChar === undefined) {
    oldChar = image[y][x];
  }
  if (image[y][x] != oldChar || newChar == oldChar) {
    // BASE CASE
    return image;
  }
  image[y][x] = newChar;

  if (y + 1 < height) {
    // I won't check (image[y + 1][x] == oldChar) condition since it is checked in Base Case
    image = floodFill(image, x, y + 1, newChar, oldChar);
  }

  if (y - 1 >= 0) {
    image = floodFill(image, x, y - 1, newChar, oldChar);
  }

  if (x + 1 < width) {
    image = floodFill(image, x + 1, y, newChar, oldChar);
  }

  if (x - 1 >= 0) {
    image = floodFill(image, x - 1, y, newChar, oldChar);
  }
  return image;
}

function countRooms(image) {
  const height = image.length;
  const width = image[0].length;
  let rooms = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (image[j][i] === ".") {
        floodFill(image, i, j, "#", ".");
        rooms++;
      }
    }
  }
  return rooms;
}

/**  Why it works?
For each character in the grid, the function checks if it is a period ('.').
A period indicates an empty space that could be part of a room.
When a period is found, it signifies the discovery of a new room. 
The function then calls the floodFill function to fill this room with hash characters ('#'), 
effectively marking it as visited and preventing it from being counted again.


The initial call to floodFill on the first period found will fill the outermost area that contains the entire grid. 
This area is considered the outermost room or space, and it will be filled with hash characters ('#') to mark it as visited.
This initial floodFill call effectively counts and marks the entire outer space, which is not enclosed by any walls,
as one room.
After the outermost space is filled, the nested loops continue to iterate over the grid.
Any remaining periods ('.') now represent enclosed spaces or rooms within the grid.
For each period found, another floodFill call is made.
This call will fill the entire enclosed room with hash characters ('#'),marking it as visited.
The rooms counter is incremented each time a new period is encountered and floodFill is called, effectively counting a new room.

 **/

// Test Case:
// 6 rooms

const image1 = [
  "...##########....................................".split(""),
  "...#........#....####..................##########".split(""),
  "...#........#....#..#...############...#........#".split(""),
  "...##########....#..#...#..........#...##.......#".split(""),
  ".......#....#....####...#..........#....##......#".split(""),
  ".......#....#....#......############.....##.....#".split(""),
  ".......######....#........................##....#".split(""),
  ".................####........####..........######".split(""),
];

console.log(countRooms(image1));

// Test Case 2:
// 5 rooms

const image2 = [
  "...##################............................".split(""),
  "...#................#..................##########".split(""),
  "...#................#...############...#........#".split(""),
  "...##################...#..........#...##.......#".split(""),
  ".......######...........#..........#....##......#".split(""),
  ".......#....#...........############.....##.....#".split(""),
  ".......######.............................##....#".split(""),
  ".................####........####..........######".split(""),
];
console.log(countRooms(image2));

// Test Case 3:
// 3 rooms

const image3 = [
  "...##################............................".split(""),
  "...#................#..................##########".split(""),
  "...#................#...############............#".split(""),
  "...##################..............#............#".split(""),
  ".......######......................#............#".split(""),
  ".......#....#...........############............#".split(""),
  ".......######...................................#".split(""),
  ".................####........####................".split(""),
];
console.log(countRooms(image3));
