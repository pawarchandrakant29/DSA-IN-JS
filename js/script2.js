
const inputStr = "   I'm Chandrakant   ";

function reverseWords(str) {
    
    str = str.trim();
    
    const words = str.split(/\s+/);

    const reversedWords = words.reverse();

    const reversedStr = reversedWords.join(' ');
    
    return reversedStr;
}
console.log("Reversed Words:", reverseWords(inputStr)); 
