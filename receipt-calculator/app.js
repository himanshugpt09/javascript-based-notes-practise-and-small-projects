const PRICE_COFFEE = 3.5;
const PRICE_MUFFIN = 2.75;
const PRICE_LATTE = 4.25;

const isMember = true;
const order = ["coffee", 'muffin', 'latte', 'coffee'];

let total = 0;

for(const item of order){
    if(item == 'coffee'){
        total = total + PRICE_COFFEE;
    }else if(item == 'muffin'){
        total = total + PRICE_MUFFIN;
    }else if(item == 'latte'){
        total = total + PRICE_LATTE;
    }
}

console.log("Receipt");
console.log("Items : ", order.join(", "));
console.log("SubTotal : $" + total.toFixed(2));

if (isMember){
    const DISCOUNT_RATE = 0.1;
    const DISCOUNT_AMOUNT = total * DISCOUNT_RATE;
    total = total - DISCOUNT_AMOUNT;
    console.log("Amount to pay after Discount : $" + total.toFixed(2));
}