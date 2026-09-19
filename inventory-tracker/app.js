const STARTING_STOCK = 50;
const LOW_STOCK_THRESHOLD = 20;

const  ADJUSTMENT = [-15, -10, 5, -12, -8, 20, -18];

let current_stock = STARTING_STOCK;
let count_stock_drop = 0;

console.log("INVENTORY REPORT")
console.log("STARTING STOCK : " + STARTING_STOCK);

for (const item of ADJUSTMENT){
    current_stock = current_stock + item;
    if (current_stock < LOW_STOCK_THRESHOLD){
        console.log("LOW STOCK");
        count_stock_drop  = count_stock_drop + 1;
    }
}

console.log("STOCK at the END : " + current_stock);
console.log("No. of Times Stock DROP Lower than Threshold : " + count_stock_drop);

