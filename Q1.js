// Create an array of strings and print the longest string.

function longestStr(){
    let strrr=str.reduce((longest,curr)=>{
        if(curr.length>longest.length){
            return curr;
        }else{return longest;}
    },"")
    alert("The longest string is : "+strrr);
}
let str=["amaz","ahmed","akhter","ali"];
longestStr(str);