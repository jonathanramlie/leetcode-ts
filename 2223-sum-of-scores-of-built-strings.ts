import { generateZArray } from './cheatsheets/z-algorithm';

function sumScores(s: string): number {
  // In this problem we're given a string e.g. azbazbzaz
  // Which will generate a substring from the given string starting from end of the given string
  // s = "azbazbzaz"
  // s1 = "z", s2 = "az", s3 = "zaz"
  // Then we are asked to calculate the total of the longest common prefix for each substrings

  // Here we can utilize the Z Algorithm with generates Z Array
  // In the Z Array each index represents the longest common prefix, starting from that index

  // For example:
  // String  - azbazbzaz
  // Indexes - 012345678
  // Z Array - 000300020

  // Based on the Z Array, we can see that "azb" substring (on index 3) have 3 character long prefix
  // and "az" substring (on index 7) have 2 characters long prefix
  // Using the Z array we can take the sum of each indexes to calculate the total longest common prefix for every substrings
  // But when using Z Array usually we do P$T (Pattern [Dollar Sign] Text) e.g. azbazbzaz$azbazbzaz to calculate the Z Array

  // Resulting in azbazbzaz$azbazbzaz
  // Z Array  -   0003000200900300020
  // Then we can calculate the longest common prefix until we found the whole matched string "azbazbzaz" which is at index 10
  // Based on that condition we get 3 + 2 + 9 = 14

  // Since we can assume that we'll be comparing the given string with itself "azbazbzaz" with "azbazbzaz" resulting in 9 characters long common prefix
  // Using that knowledge, we can optimize to reduce the time and space complexity by just calculating the "azbazbzaz" without using P$T format

  // Resulting in azbazbzaz
  // Z Array  -   000300020
  // Total longest common prefix for each substring is 3 + 2 = 5
  // Since we don't compare the given string, we'll need to add it's own length to the total
  // Final result 5 + 9 = 14

  const zArray = generateZArray(s);
  let score = 0;
  for (let i = 1; i < s.length; ++i) {
    score += zArray[i];
  }
  return score + s.length;
}

export default sumScores;
