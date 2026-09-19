A temperature conversion utility that processes a batch of readings — reinforcing arrow syntax with more logic per function (multiple branches, still single-purpose), and introducing the single most common real-world use of arrow functions: passing them inline as arguments to another function (here, Array.prototype.forEach), rather than always assigning them to a named const first.


concept being drilled: Arrow functions used as inline, anonymous arguments — the pattern you'll use constantly once you reach map/filter/reduce. Also reinforces block-vs-expression body choice under slightly more complex logic (multi-branch conditionals).
All four arrow syntax forms (Project 11), guard clauses, block scope, for...of as a point of comparison against forEach.

Features:

celsiusToFahrenheit and classifyTemperature as named arrow functions (block body, multiple branches)
Uses Array.prototype.forEach with an inline arrow function (not pre-assigned to a variable) to process a batch of readings — first exposure to passing a function AS a value into another function
Compares this to the equivalent for...of version in a comment, so you can see both side by side