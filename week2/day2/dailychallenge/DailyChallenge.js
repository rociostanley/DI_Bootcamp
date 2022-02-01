let sentence = "The movie is not that bad, I like it";
console.log (sentence)
let sentence_array = sentence.split (" ");
// console.log (sentence_array)

let wordNot = sentence_array.indexOf("not");
let wordBad = sentence_array.indexOf("bad");

if (wordNot < wordBad && wordNot != -1 && wordBad != -1){
  
sentence_array.splice (wordNot, wordBad - wordNot + 1, "good")
let new_sentence = sentence_array.join (" ")
 console.log(new_sentence)
}
