const str = "Hello world";
const str1 = "world";

function firstOccurrenceIndex(str, str1) {
    return str.indexOf(str1);
}
console.log("Index of first occurrence:", firstOccurrenceIndex(str, str1));
