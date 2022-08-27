///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((sum, sumTot,) => sum + sumTot.price, 0);
console.log(summedPrice)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice (cartTotal, couponValue, tax) {
    return cartTotal + (cartTotal * tax) - couponValue
    
  }
  console.log(calcFinalPrice(20,10,.06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The properties that I chose were One: what was there
    favorite cuisine so I know what to cook at the restaurant.
    Two: What is the average price per plate they were willing to pay.
    So I can figure out how to price my dishes
    Three: If most customers were into spicy or not so I cant create
    dishes based off spice.
    Four: Whats the maximum amount of time they would wait to be seated
    so I can try to make seating efficiently in that time frame.
    
    topCuisine should be a string since there will be no numerical
    value added to it

    pricePerplate should be a number so I can subtract it from my
    price point
    
    spicy should be a string since its either a yes or no statement

    waitTime should be a number so I can calculate it with my actual
    wait time later.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customers = {
    topCuisine: "Thai",
    priceperplate:15,
    spicy: "Yes",
    waitTime: 30
  };
