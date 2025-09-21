console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
console.log("---------------------------");
let favoriteFoods = ["Spaghetti", "Cheeseburger", "Chicken", "Rice", "Steak", "Fajita"]
// 2. Loop through the list and print: "One of my favorite foods is ______."
favoriteFoods.forEach(food => {
    console.log(food);
})



console.log("---------------------------");
// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.

for(let i = 0; i < favoriteFoods.length; i++) {
    console.log(`My #${i+1} favorite food is ${favoriteFoods[i]}`);
}


console.log("---------------------------");
// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."

function printFoodRecomendation(foodName) {
    console.log(`
    Have you ever tried ${foodName}?
    I always recommend ${foodName} to friends.
    Trust me — ${foodName} is delicious.
    `);
}

console.log("---------------------------");
// 4b. Call the function at least 3 times
printFoodRecomendation("pizza")
printFoodRecomendation("pasta")
printFoodRecomendation("lasagna")



// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.

console.log("Foods with an \"a\" in their name: ");
friendFavorites.filter(food=> {
    return food.indexOf("a") !== -1
}).forEach(foodWithA => {
    console.log(foodWithA)
})
console.log("---------------------------");
// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = friendFavorites.filter(food=> {
    return food.indexOf("a") !== -1
})


// 7. Create a new array longFoodNames for foods with names longer than 6 characters.




// 8. Create another array shortFoodNames for foods 6 characters or shorter.



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
