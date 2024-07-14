// Write a function to check if a string is a palindrome

function Checkpalindrome(str){
    let str1=str.split("").reverse().join("");
if(str1===str){
alert("The string is palindrome");
}else{
alert("The string is not palindrome");
}
}

Checkpalindrome("madam");