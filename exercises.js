import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_20();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1
    
    Comparison Operators
    
    1. Create two variables that hold different numbers.
    2. Then, check if one is bigger than the other using the 
       `>` (greater than) operator
    3. Log the result to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

 let var1 = 5;
 let var2 = 10;
 if(var2>var1)
 {
  console.log("var2 is greater than var1");
 }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2
    
    Comparison Operators

    1. Create two variables, one assigned to a number and one
       assigned to a string. Then, log the result of comparing them
       with the `===` (strict equality) operator
    
  
  */
  // CODE IN THE OPEN LINES BELOW

   let var1 = 5;
 let var2 = "10";
 if(var2 === var1)
 {
  console.log("Both are same");
 }
 else{
  console.log("not equal");
 }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3
    
    Conditionals

    1. Create a variable and store an even or odd number, your choice.
    2. Using the `%` (remainder) operator, write an if-else conditional
       that checks if a number is even. 
       
       If it is even, log "Even" to the console.
       If it is odd, log "Odd" to the console.
    
    3. Modify your initial variable code to assign a different number, 
       this time the opposite type (even or odd) than it was at first. 
       Run your code again and see how the result changes.

  */
  // CODE IN THE OPEN LINES BELOW


 let var2 = 10;
 if(var2 % 2 === 0)
 {
  console.log("Even");
 }
  else{
  console.log("odd");
 }
 var2 = 5;
if(var2 !== 0)
{
 console.log("odd");
}
 else{
  console.log("even");
 }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4
    
    Logical Operators

    1. Create a variable and assign it a number between 10 and 20
    2. Write an if statement, using the >= (greater than or equal to), 
       <= (lesser than or equal to), and && (AND conditional) operators
       to check if this value is between 10 and 20.
       If it is, have the message "Between 10 and 20" be logged to the console.

    3. Modify your initial variable definition to be assigned a number 
       either less than 10 or greater than 20. Then run your conditional code 
       again. This time, nothing should log to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let var1 = 15;

  if(var1 >=10 && var1 <=20)
  {
    console.log(" Between 10 and 20");
  }


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5
    
    Logical Operators

    1. Create a variable named `color` that is assigned a color name as a string.
    2. Create an if-else conditional statement that checks if the `color`
       variable is either "red" or "blue". 

       If it is, log "Color is red or blue" to the console.
       If it is not, log "Color is not red or blue" to the console

       Reminder: The logical OR operator in JavaScript is `||`.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let color = "blue";
  if(color === "red" || color ==="blue")
  {
    console.log("color is red or blue");
  }
  else{
    console.log("color is not either red or blue");
  }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  /* 
   
    Exercise 6
    
    Logical NOT

    1. Create a variable and assign it a Falsy value
    2. Then, using the `!` (NOT conditional) operator, 
       log the result of ![variableName] to the console
    
    Use `!` to check if a value is falsy and log the result
  
  */

  // CODE IN THE OPEN LINES BELOW

  const isTruthy = (name, exp) => {
//  console.log(`${name}: ${Boolean(exp)}`);
}

 isTruthy("val1", 1);
 //console.log(!isTruthy);
 let falsyValue  = true;
 console.log(!falsyValue);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_07() {
  /* 
   
    Exercise 7
    
    Mathematical Operators
    
    1. Add two numbers and log the result.
  
  */

  // CODE IN THE OPEN LINES BELOW

 let num1 = 5;
 let num2 = 10;
 console.log(num1+num2);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_08() {
  /* 
   
    Exercise 8
    
    Mathematical Operators
    
    1. Subtract one number from another and log the result.
  
  */

  // CODE IN THE OPEN LINES BELOW

   let num1 = 5;
 let num2 = 10;
 console.log(num2 - num1);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9
    
    Mathematical Operators
    
    1. Multiply two numbers and log the result.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let num1 = 5;
 let num2 = 10;
 console.log(num1 * num2);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  /* 
   
    Exercise 10
    
    Mathematical Operators and Conditional Statements: 
    
    1. Divide one number by another.
       
       If it is even, log "Result is Even" to the console.
       If it is odd, log "Result is Odd" to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

   let num1 = 5;
 let num2 = 10;
 console.log(num1 / num2);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11
    
    Remainder Operator
    
    1. Use the `%` (remainder) operator to find the 
       remainder of a division and log it.
  
  */

  // CODE IN THE OPEN LINES BELOW

   let num1 = 5;
 let num2 = 10;
 console.log(num2  % num1);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_12() {
  /* 
   
    Exercise 12
    
    Exponentiation
    
    1. Use the `**` (exponentiation) operator to 
       calculate 2 to the power of 3 and log the result.
    2. Then use the operator again to find the value of 11 to the power of 3.5.
       Log the result
  
  */

  // CODE IN THE OPEN LINES BELOW

  let num1 = 2;
 let num2 =  3;
 console.log(num1 ** num2);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13
    
    Increment and Decrement a Variable

    1. Create a variable and assign it the number 5.
    2. Increment the variable using the `++` operator, and log the variable.
    3. Then, decrement the variable using the `--` operator twice. 
       Log the variable again.
    
  */

  // CODE IN THE OPEN LINES BELOW

   let num1 = 5;
 num1++;
 console.log(num1);
 num1 -- ;
 num1 --;
console.log(num1);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14
    
    Assignment Operators

    1. Create a variable named `score` and assign it a value over 21.
    2. Use the `+=` operator to add 14 to this variable and log the variable.
    3. Then, use the `-=` to subtract 7 from this variable. Log the variable again.
  
  */

  // CODE IN THE OPEN LINES BELOW

 let score = 21;
score += 14;
console.log(score);
score -= 7;
console.log(score);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_15() {
  /* 
   
    Exercise 15
    
    Assignment Operators
    
    1. Create a variable named `savings` and assign it a value over 500

    2. Use the `*=` operator to multiply the variable by 1.08. 
       Log the variable to the console.

    3. Then, use the `/=` operator to divide the variable by .5.
       Log the variable to the console again.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let savings = 500;
  savings *= 1.80;
  console.log(savings);
  savings /= 0.5;
  console.log(savings);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  /* 
   
    Exercise 16
    
    Falsy Values
    
    1. Write a conditional statement to check if an empty string is falsy.
       If it is, log the message "An empty string is falsy" to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

 let falsyValue =" ";
 if(falsyValue === " "){
 console.log("An empty string is falsy ")
 }
 
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  /* 
   
    Exercise 17
    
    Truthy Values: 
    
    1. Write a conditional statement to check if a string value of "false" is falsy.
       
       If it is, log the message "the string is falsy" to the console.
       Otherwise, log the message, "the string is not falsy" to the console.

  
  */

  // CODE IN THE OPEN LINES BELOW

  let falsyValue ="false";
 if(falsyValue !== " "){
 console.log("the string is not falsy ")
 }
 else{
   console.log("An empty string is falsy ")
 }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  /* 
   
    Exercise 18
    
    Objects
    
    1. Create an object and assign it to a variable.
    2. Then create another variable, and assign it the first variable as a value.
    3. Then, using the `===` operator, check if the first and second varable 
       are strictly equal. Log the result to the console.
  
  */

  // CODE IN THE OPEN LINES BELOW

let obj1 = {
  firstName : "Hello"
};
let obj2 = obj1;
if(obj1 === obj2)
{
console.log("objects are same ")
}
else{
  console.log("objects are not same");
}

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  /* 
   
    Exercise 19

    Strict vs. Loose Equality
    
    1. Compare `undefined` and `null` using both `==` and `===`.
       Log both results to the console.
    
  
  */

  // CODE IN THE OPEN LINES BELOW

 let var1 = undefined;
 let var2 = null;

console.log(var1 === var2);
console.log(var1 == var2);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_20() {
  /* 
   
    Exercise 20
    Switch Statement: 

    1. Create a variable named `fruitColor` and 
       assign it a string for a color name.

    2. Then, write a switch statement that will log "Apple" if the 
       fruitColor is red, "Banana" if the fruit color is yellow, and 
       "Unknown fruit" as a default condition.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let fruitColor = "red";
  switch(fruitColor)
  {
    case 'red':
      console.log("Apple");
      break;

      case 'yellow':
        console.log("Banana");
        break;

        default:
          console.log("There is no fruit");
          break;

  }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_21() {
  /* 
   
    Exercise 21
    
    Nested Conditionals: 

    1. Create a variable that stores a positive or negative number.

    2. Then, create a nested conditional (using if, else if, and else) to
       log "Positive" if the number is positive, "Negative" if the number
       is negative, and "Zero" otherwise.
  
  
  */

  // CODE IN THE OPEN LINES BELOW

 let var1 = 5;
 if(var1>0)
 {
  console.log("Positive Number")
 }
 else if(var1<0)
 {
  console.log("Negative Number");
 }
 else{
  console.log("The Number is 0");
 }
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_22() {
  /* 
   
    Exercise 22
    
    Ternary Operator
    
    1. Create a variable named `age` and assign it a number between 12 and 22.
    2. Then, create a variable named `canVote` that is assigned a ternary operator
    with the following return conditions:
      - if `age` is greater than or equal to 18, return "Yes, can vote"
      - Otherwise, return "No, too young"
    
    3. Then log the `canVote` variable to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

  let var1 = 18;
  let canVote = var1 >= 18 ? "yes,can vote": "No, cannotvote";
  console.log(canVote);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_23() {
  /* 
   
    Exercise 23
    
    Combining Logical Operators

    1. Create a variable named `isProgramMember` and assign it a value of true or false.
    2. Create a variable named `age` and assign it a value between 10 and 85

    3. Write a condition that checks if isProgramMember is true AND that 
       their age is below 14 OR over 65
    
       Write this condition in one line using parenthesis, 
       the OR `||` operator, and the AND `&&` operator.

    4. If the condition returns true, log 
       "Eligible for special renewal discount" to the console.
        Otherwise, log "Not eligible for special renewal discount" to the console.
  
  */

  // CODE IN THE OPEN LINES BELOW

 let isProgramMember = true;
 let age = 25;
 if(isProgramMember && (age >= 14 && age<=65 ))
 {
  console.log("Eligible for special renewal discount");
 }
 else{
console.log("Not eligible for special renewal discount");

 }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_24() {
  /* 
   
    Exercise 24

    1. Create a variable named `day` and assign it the name of a day of the week.

    2. Create a switch statement that uses cascading `case` statements to print 
      "Weekend" if the day falls on the weekend. Otherwise, print "Weekday" if 
      it does not.
  
  */

  // CODE IN THE OPEN LINES BELOW

 let day = "Wednesday";

 switch(day){
  case 'Monday':
     case 'Tuesday':
       case 'Wednesday':
         case 'Thursday':
           case 'Friday':
            console.log("weekdays");
            break;
            default :
            console.log("weekend");
            
 }

  // CODE IN THE OPEN LINES ABOVE
}
