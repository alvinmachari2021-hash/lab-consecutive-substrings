// FIXED import path
const consecutiveSubstrings = require("../consecutive_substrings");

test("handles 'abc'", () => {
  expect(consecutiveSubstrings("abc")).toEqual(["a","ab","abc","b","bc","c"]);
});

test("handles single character", () => {
  expect(consecutiveSubstrings("a")).toEqual(["a"]);
});

test("handles empty string", () => {
  expect(consecutiveSubstrings("")).toEqual([]);
});

test("handles longer string", () => {
  expect(consecutiveSubstrings("abcd")).toEqual([
    "a","ab","abc","abcd","b","bc","bcd","c","cd","d"
  ]);
});