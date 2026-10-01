You have raw API-style data. Each item is messy. Some fields are strings that should be numbers. You need to clean and reshape every item into a new, consistent format. This is one of the most common real backend tasks: transforming raw data into a clean shape.

Main concept being drilled: Using map() to reshape objects into new objects. Not just transforming a value — transforming the whole shape of the data.

other concepts used: map() basics , object literals, Number() parsing , template literals.

Features:

Raw "API" data: array of objects with inconsistent string/number fields
cleanProduct(raw) — takes one raw object, returns a new, clean object
Uses map() to clean the entire array in one line
Original raw data proven untouched after