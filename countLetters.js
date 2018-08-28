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

function letterPosition(string)
{
  var wordObject = {};
  var cleanWord = string.split(" ").join("");
  console.log(cleanWord);
  for(var i = 0; i < cleanWord.length; i++)
  {
    if(wordObject[cleanWord[i]] === undefined)
    {
      wordObject[cleanWord[i]] = [i];
    }
    else
    {
      wordObject[cleanWord[i]].push(i);
    }
  }

  return wordObject;
}

//console.log(countLetters("lighthouse in the house"));
console.log(letterPosition("lighthouse in the house"));