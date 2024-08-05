const path = require("path");
const fs = require("fs");

// Calls the match function with every file in the folder and its subfolders.
// Returns a list of files that the match function returned True for.
function walk(folder, matchFunc) {
  let matchedFiles = [];
  const absoluteFolderPath = path.resolve(folder);

  // Loop over every file and subfolder in the folder:
  for (const name of fs.readdirSync(absoluteFolderPath)) {
    const filepath = path.join(folder, name);
    const stats = fs.statSync(filepath);

    if (stats.isFile()) {
      // Call the match function for each file:
      if (matchFunc(filepath)) {
        matchedFiles.push(filepath);
      }
    } else if (stats.isDirectory()) {
      // Recursively walk through the subfolder
      matchedFiles.push(...walk(filepath, matchFunc));
    }
  }
  return matchedFiles;
}

function hasEveryVowel(fullFilePath) {
  // Get the base name of the file and convert it to lowercase
  const name = path.basename(fullFilePath).toLowerCase();

  // Check if the name contains all the vowels
  return ["a", "e", "i", "o", "u"].every((vowel) => name.includes(vowel));
}

function hasEvenByteSize(fullFilePath) {
  // Get the size of the file in bytes
  const fileSize = fs.statSync(fullFilePath).size;

  // Check if the size is even
  return fileSize % 2 === 0;
}

console.log(
  walk("E:\\Projects\\The recursive book of recursion", hasEvenByteSize)
);
console.log(
  walk("E:\\Projects\\The recursive book of recursion", hasEveryVowel)
);
