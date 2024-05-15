var shopping = {
    generalItems: ["soap", "shampoo", "brush"],
    fruits: ["bananas", "watermelon", "chikoo"],
    electricAppliances: ["copper wires, computer mouse"],
    stationary: ["blue pen", "black ink", "permanent marker", "A4 sheets"]
};
var generalItems = shopping.generalItems, fruits = shopping.fruits, electricAppliances = shopping.electricAppliances, stationary = shopping.stationary;
console.log("\nwe have to buy ".concat(generalItems, ", \n").concat(fruits, ", \n").concat(electricAppliances, ",\n").concat(stationary, "\n"));
