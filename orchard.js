///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0

for(let i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}

console.log(totalAcres)

/*
Created a variable totalAcres to use within the for loop to capure the total sum of all of the acres.
Used a for loop to iterate through each of the  acres array 
    the for loop 
        intialized the loop at 0 in order to start the first index of the array 
        can choose any one of arrays because the they are the same length
        used fujuAcres.length - 1 to iterate through the entire array 
    within the loop body 
        added each of the arrays indexes and added them the totalAcres variable 
    printed out the results of the totalAcres 
*/


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let entireWeek = 7;
let averageDailyAcres = totalAcres/entireWeek;
console.log(averageDailyAcres)

/*
Created a variable to store the amounts of days in an entire week 
Created a variable averageDailyAcre to store the calcualtion of totalAcres/entireWeek which should give us the average
printed averageDailyAcres
*/




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE


while(days < acresLeft){
    acresLeft - averageDailyAcres
    days++
}
console.log(`${days}`)

/*
Used a while loop to loop through days and acres untill days was greater than acres left
subtracted acresLeft from the averageDailyAcres 
updater was day++ which is used to update the condition until it becomes false to end the loop
*/


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
let fujiTons = []
let galaTons =[]
let pinkTons =[]

for(let i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * 6.5)
    galaTons.push(galaAcres[i] * 6.5)
    pinkTons.push(pinkAcres[i] * 6.5)
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)


/*
created empty arrays to push each of the total tons calucations into the the arrays
Used the for loop to iterate through the length of the array 
was able perform the calculation for each array within the same loop because they are all the same length 
    in the loop body 
    for each element(index) multiplied it by 6.5 pushed it into it's corresponding array 
printed the arrays 
*/



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0


for(let i = 0; i < fujiAcres.length;i++){
    fujiPounds += fujiTons[i] * 2000
    galaPounds += galaTons[i] * 2000
    pinkPounds += pinkTons[i] * 2000
}

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

/*
Initialize the variety variables to 0 so that we can the calculation to them 
Used the for loop to iterate through the length of the array 
for each element/index that we iterate through we multiply it by 2000
print out the variety variables that have the tons calculation 
*/



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice  
let galaProfit = galaPounds * galaPrice 
let pinkProfit = pinkPounds * pinkPrice 


console.log(`$${fujiProfit}`)
console.log(`$${galaProfit}`)
console.log(`$${pinkProfit}`)

/*
Calculated the profits by multiplying  the variety pounds by the fuji prices. 
Placed the calculation in the variaty variables 
Since the price is already listed in cents then we shouldn't have to convert them 
Printed out the variety variables that have the  profit per pound calculations 
Used Temperal literals to add the dollar sign in the console
*/



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/



// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`$${totalProfit}`)

/*
Created the totalProfits variable to hold the caluculation of all the profits from the varieties 
Calculated the total profit by adding all of the varieties togeter
Printed out the total profits with a $ using temperate literal
*/
