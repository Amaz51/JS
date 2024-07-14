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
sumofeven([1,2,3,4,5]);