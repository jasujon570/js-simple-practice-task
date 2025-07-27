    
    
    
   // Practice task - 1

    var totalMoney = 1000;
    var applePrice = 300;
    var orangePrice = 400;
    var total = applePrice + orangePrice;
    // total price of 1kg apple and 1kg oranage
    console.log(total);

    var returnedMoney = totalMoney - total;
    // After I paid 1000 Taka, the shopkeeper returned the remaining amount.
    console.log(returnedMoney);

    // practice task - 2


    var mathematics = 75.57;
    var biology = 65.31;
    var chemestry = 85.19;
    var physics = 72.25;
    var bangla = 81.45;

    var sumOfMarks = mathematics + biology + chemestry + physics + bangla;
    // Total marks of 5 subjects
    console.log(sumOfMarks); 

    var averageMarks = sumOfMarks / 5;
    // Avarage marks of a student
    console.log(averageMarks.toFixed(2));


    // Practice task - 3 modulas or reminder



    var number = 91;

    var result = number % 5;

    console.log(result);


    var anotherNumber = 121;
    var anotherNumberResult = anotherNumber % 5;
    console.log(anotherNumberResult);


    // Practice task - 4 NaN


    var a = isNaN("11");
    var a = isNaN(parseInt("11"));
    console.log(typeof a);
    console.log(a);

    var b = isNaN(2-10);
    console.log(typeof b);
    console.log(b);

// isNaN("11") will try to convert the string value into integer, and it will find a number is 11 so 11 is a number then result will show false;

// isNaN (2-10) is equal to -8 is a valid number so result will print false also.



// Max Min Number find


var num1 = 25;
var num2 = 29;
var num3 = 105;
var num4 = 15;
var num5 = 755;
var num6 = 955;
var num7 = 215;
var num8 = 171;
var num9 = 2154;
var num10 = 5541;
var num11 = 9745;
console.log(Math.max(num1, num2, num3, num4, num5));
console.log("Min number is:",Math.min(num6, num7, num10, num9, num11));
console.log("Min number is: " + Math.min(num6, num7, num10, num9, num11));
console.log(`Min number is: ${Math.min(num6, num7, num10, num9, num11)}`);


// Mobile numbers total

var mobileNumbersTotal = 1+6+1+1+2+2+6+7;
console.log(mobileNumbersTotal);


 