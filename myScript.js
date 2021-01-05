var date = new Date();
document.body.innerHTML = "<h3> Hi Today's Date is: " +date +"</h3>";

/*
var a = 5;
var b = 10;

if (a==b) 
{
	console.log("They both are equal");
}
else
{
	console.log("They both are not equal");
}
*/

var pens;

//Here, we have created an object of Array class.

pens = ["red", "blue", "white", "pink"];

for (var i = 0 ; i < pens.length; i++) 
{
	console.log("The current pen in array is: " +pens[i]);
}

//Printing the reverse array
//We can use the inbuilt function reverse().

pens.reverse();

for(var i = 0; i < pens.length; i++)
{
	console.log("AFter reversing the values are " +pens[i]);
}

//This function is used to delete the 1st / 0th index value from the array
pens.shift();

console.log("Array values are: " +pens);

//FIbonacci series function

function myFactorial(number)
{

	if(number <=1)
	{
		return 1;
	}

	else
	{
		return number * myFactorial(number - 1);
	}

}

var factorial = myFactorial(5);

console.log("The factorial of given number is: " +factorial);