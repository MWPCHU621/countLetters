function countLetters(string)
{
  var wordObject = {};
  var cleanWord = string.split(" ").join("");

  for(letter of cleanWord)
  {
    if(wordObject[letter] === undefined)
    {
      wordObject[letter] = 1;
    }
    else
    {
      wordObject[letter]++;
    }
  }

  return wordObject
}

console.log(countLetters("lighthouse in the house"));