var censoredWords = ["sad","Bad","mad"];
var customCensoredWords = [];
function censor(intStr){
   for (idx in CensoredWords){
     intStr = intStr.replace(censoredWords[idx]),
	 "****");
   }
   for (idx in customCensoredWords){
     intStr = 
	 intStr.replace(customCensoredWords[idx], "****");
   }
   return intStr;
}
function addCensoredWord(word){
   customCensoredWords.push(word);
   }
   function getCensoredWords(){
      return
	censoredWords.concat(customCensoredWords);
   }
   
   exports.censor = censor;
   exports.addCensoredWord = addCensoredWord;
   exports.getCensoredWords = getCensoredWords;
