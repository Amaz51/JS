//Write a function to find the factorial of a number?
function factorial(num){
    let fac=1;
    for(let i=num;i>0;i--){
        fac=fac*i;
    }
    return alert("The factorial of "+num+" is : "+fac);

}
factorial(5);