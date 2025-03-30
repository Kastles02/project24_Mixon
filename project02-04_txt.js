/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Kessler Mixon
      Date:   03/30/2025

      Filename: project02-04.js
 */
 const CHICKEN_PRICE = 10.95; //add chicken price constant
 const HALIBUT_PRICE = 13.95; //add halibut price constant
 const BURGER_PRICE = 9.95; //add burger price constant
 const SALMON_PRICE = 18.95; //add salmon price constant
 const SALAD_PRICE = 7.95; //add salad price constant
 const SALES_TAX = 0.07; //add sales tax constant

 //event handlers for check boxes
 document.getElementById("chicken").onchange = calcTotal;
 document.getElementById("halibut").onchange = calcTotal;
 document.getElementById("burger").onchange = calcTotal;
 document.getElementById("salmon").onchange = calcTotal;
 document.getElementById("salad").onchange = calcTotal;

 //Function to calculate the total.
 function calcTotal() {
     let cost = 0;
     let buyChicken = document.getElementById("chicken").checked;
     let buyHalibut = document.getElementById("halibut").checked;
     let buyBurger = document.getElementById("burger").checked; 
     let buySalmon = document.getElementById("salmon").checked;
     let buySalad = document.getElementById("salad").checked;
     //Total cost funtion if values are true
     calctotal += buyChicken ? CHICKEN_PRICE = 0;
     calctotal += buyHalibut ? HALIBUT_PRICE = 0;
     calctotal += buyBurger ? BURGER_PRICE = 0;
     calctotal += buySalmon ? SALMON_PRICE = 0;
     calctotal += buySalad ? SALAD_PRICE = 0;
     //set food total innerhtml to the cost total and dollar sign
     document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
     //declare tax
     tax = cost * SALES_TAX;
     //set food tax innerhtml to the tax total and dollar sign
     document.getElementById("foodTax").innerHTML = formatCurrency(tax);
     //declare total cost
     totalCost = tax + cost
     // set total bill inner html to total cost
     document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
 }


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 