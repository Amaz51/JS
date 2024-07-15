const str=["amaz","ahmed","akhter","ali"];

// Create an array of strings and print the longest string.

function longestStr(){
    let strrr=str.reduce((longest,curr)=>{
        if(curr.length>longest.length){
            return curr;
        }else{return longest;}
    },"")
    alert("The longest string is : "+strrr);
}

longestStr();

// Write a function to check if a string is a palindrome

function Checkpalindrome(str){
    let str1=str.split("").reverse().join("");
if(str1===str){
alert("The string is palindrome");
}else{
alert("The string is not palindrome");
}
}

// Write a function to reverse a string?

function reverse(str){
    return alert("The reversed string of "+str+" is : "+ str.split("").reverse().join(""))
}

// Sort an array of numbers in ascending order.
function sortnum(arr){
    return alert("The sorted array is : "+arr.sort());
}

// Find the index of an element in an array.
function indexofele(arr,ele){
    return alert("The index of "+ele+" is : "+arr.indexOf(ele));   
}

//Write a function to find the factorial of a number?
function factorial(num){
    let fac=1;
    for(let i=num;i>0;i--){
        fac=fac*i;
    }
    return alert("The factorial of "+num+" is : "+fac);

}

// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.
function sumofeven(arr){
   
    let sumarr=arr.reduce((sum,curr)=>{
        if(curr%2==0){
            sum+=curr;
        }
        return sum;
    },0)
    return alert("The sum of even numbers in the array is : "+sumarr);
}

// Write a function to check if a number is even or odd.

function evenodd(num){
    let num=5;
    return alert("The number is "+ (num%2===0 ? "EVEN." : "ODD."))
}

//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively.

async function fetchDataAsync() {
    const fetchApi1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 1');
        }, 10000);
    });

    const fetchApi2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 2');
        }, 5000);
    });

    const fetchApi3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 3');
        }, 7000);
    });

    try {
        const data1 = await fetchApi1;
        console.log(data1);

        const data2 = await fetchApi2;
        console.log(data2);

        const data3 = await fetchApi3;
        console.log(data3);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataAsync();
