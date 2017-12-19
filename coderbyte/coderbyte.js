//1- First reverse
function FirstReverse(str) { 

  // code goes here 
  var string = str.split("").reverse();
  return string.join(""); 
         
}
   
// keep this function call here 
FirstReverse(readline());


//2- First Factorial
function FirstFactorial(num) { 

  // code goes here  
for(var i = num-1; i>0;i--){
    num = num*i;
}
    return num;     
}
   
// keep this function call here 
FirstFactorial(readline());



//3- Longest Word
function LongestWord(str) { 

  // code goes here  
  var longer = 0;
  var word = "";
  var string = str.split(" ");
  for(var i = 0; i<string.length;i++){
      if(longer<string[i].length){
          longer = string[i].length;
          word =  string[i];
      }
  }
  
  return word; 
         
}
   
// keep this function call here 
LongestWord(readline());



//4- Letter Changes
function LetterChanges(str) { 

  // code goes here  
var letters="abcdefghijklmnopqrstuvwxyz";
var arrayLetters=letters.split("");
var string=str.toLowerCase().split("");
var newArray=[];
for(var i =0;i<string.length;i++){
	var index = arrayLetters.indexOf(string[i]);
	newArray.push(arrayLetters[index+1]);
}
var vowel = "aeiou";
var arrayVowel = vowel.split("");
var arrayLast = [];
for(var k=0;k<newArray.length;k++){
		for(var j=0;j<arrayVowel.length;j++){
			if(newArray[k]==arrayVowel[j]){
				newArray[k]=newArray[k].toUpperCase();
			}
		}
		arrayLast.push(newArray[k]);
	}
return arrayLast.join(""); 
}
   
// keep this function call here 
LetterChanges(readline());



//5- Simple Adding
function SimpleAdding(num) { 

  // code goes here  
  var cont=0;
  for(var i =1;i<=num;i++){
      cont=cont+i;
  }
  return cont; 
         
}
   
// keep this function call here 
SimpleAdding(readline());



//6- Letter Capitalize
function LetterCapitalize(str) { 

  // code goes here  
var string = str.split(" ");
var newString = [];
for(var i=0;i<string.length;i++){
	newString.push(string[i][0].toUpperCase()+string[i].substring(1));
	}
return newString.join(" ");
}
   
// keep this function call here 
LetterCapitalize(readline());



//7- Simple simbols



//8- Check Nums
function CheckNums(num1,num2) { 

  // code goes here  
  if(num2>num1){
      return true;
  }else if(num2==num1){
      return -1;
  }else{
      return false;
  }
         
}
   
// keep this function call here 
CheckNums(readline());


//9- Time convert
function TimeConvert(num) { 

  // code goes here  
 var hours = Math.trunc(num/60);
 var minutesString = (num/60).toFixed(2).toString().split(".");
 minutesNumber = Math.round(("0."+minutesString[1])*60);
 return (hours+":"+minutesNumber);
         
}
   
// keep this function call here 
TimeConvert(readline());



//10- Alphabet Soup
function AlphabetSoup(str) { 

  // code goes here  
 var temp="";
    var array = str.split("");

    for(var i=0;i<array.length-1;i++){
    	var min = i;
    	for(j=i+1;j<array.length;j++){
    		if(array[j]<array[min]){
    			temp = array[j];
    			array[j]=array[min];
    			array[min]=temp;
    		}
    	}
    }
     return array.join("");    
}
   
// keep this function call here 
AlphabetSoup(readline());


//11- AB Check
function ABCheck(str){
var string = str.toLowerCase().split("");
  
  for(var i = 0; i<str.length; i++){
    if(str[i]==='a' && str[i+4]==='b')
        return 'true';
    
    if(str[i]==='b'){
      if(str[i+4]==='a')
        return 'true';
    }
  }
  return 'false';
}
// keep this function call here 
ABCheck(readline());



//12- Vowel Count
function VowelCount(str) { 

  // code goes here 
  var vowels = ["a","e","i","o","u"];
  var stringCap = str.toLowerCase();
  var string = stringCap.split("");
  var cont = 0;
  for(var i=0;i<string.length;i++){
      var index = vowels.indexOf(string[i]);
      if(index >-1){
          cont++;
      }
  }return cont;

}
   
// keep this function call here 
VowelCount(readline());



//13- Word Count
function WordCount(str) { 

  // code goes here  
 var string = str.split(" ");
 return string.length;
         
}
   
// keep this function call here 
WordCount(readline());



//14- Ex Oh
function ExOh(str) { 

  // code goes here  
  var string = str.split("");
  var countx = 0;
  var counte = 0;
  for(var i = 0; i<string.length;i++){
      if(string[i]=="x"){
          countx = countx+1;
      }else{
          counte = counte+1;
      }
  }

  if(countx===counte){
      return true;
  }else{
      return false;
  }        
}
// keep this function call here 
ExOh(readline());



//15- Palindrome
function Palindrome(str) { 
  // code goes here 
  	var string = str.split(" ").join("").split("").reverse().join("");
	str = str.split(" ").join("");
	if(str==string){
		return true;
	}else{
		return false;
	}     
}
   
// keep this function call here 
Palindrome(readline());



//16- Arith Geo
function ArithGeo(arr) { 

  // code goes here  
var length = arr.length;
  // code goes here
  for(var i=0;i<arr.length;i++){
  	if(arr[i+1]-arr[i]==arr[length-1]-arr[length-2]){
  		return "Arithmetic";
  	}else if(arr[i+1]/arr[i]==arr[length-1]/arr[length-2]){
  		return "Geometric";
  	}else{
  		return -1;
  	}
  }

         
}
   
// keep this function call here 
ArithGeo(readline());



//17- Array Adition I




//18- Letter Count I



//19- Second GreatLow



//20- Division Stringified

//21- Counting Minutes

//22- Mean Mode

//23- Dash Insert
function DashInsert(str) { 

  // code goes here  
var numbers=str.split("");
var result=[];
for(var i=0;i<numbers.length;i++){
    if((numbers[i]%2&&numbers[i+1]%2)==1){
        numbers[i]=numbers[i]+"-";

    }
    result.push(numbers[i]);
}
return result.join("");
}
   
// keep this function call here 
DashInsert(readline());



//24- Swap Case
function SwapCase(str) { 
  // code goes here  
var string = str.split("");
for(var i=0;i<string.length;i++){
  	if(string[i]==string[i].toUpperCase()){
  		string[i]=string[i].toLowerCase();
  	}else if(string[i]==string[i].toLowerCase()){
  		string[i]=string[i].toUpperCase();
  	}
 }
 return string.join("");
         
}
// keep this function call here 
SwapCase(readline());



//25- Number Addition
function NumberAddition(str) { 
  // code goes here  
  var arr = [];
  for(var i=0;i<str.length;i++){
    var tempArr = [];
    while(!isNaN(Number(str[i]))&& str[i]!==" "){
      tempArr.push((str[i]));
      i ++
    }
    if(tempArr[0]!== undefined){
      tempArr = tempArr.join("")
      arr.push(Number(tempArr));
    }
  }
  var sum = arr.reduce(function(pre,cur){
    return pre + cur;
  },0)
  return sum;
}
// keep this function call here 
NumberAddition(readline());



//26- Third Greatest



//27- Powers Of Two 
function PowersofTwo(num) { 
  // code goes here  
 var init = 2;
 var result = num;
 while(init<result){
     init=init*2;
 }
 if(init==result){
		return true;
	}else{
		return false;
	}
}
   
// keep this function call here 
PowersofTwo(readline());