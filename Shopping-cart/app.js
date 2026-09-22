
const cart = {
    items: [
    { name: "Notebook", price: 4.5, qty: 3 },
    { name: "Pen", price: 1.2, qty: 5 },
    { name: "Backpack", price: 25.0, qty: 1 },
  ],

  taxRate : 0.08,

  total : function () {
    let stotal = 0;

    this.items.forEach((item) => {
        stotal = stotal + item.price * item.qty;
    })

    const tax = stotal*this.taxRate;
    return stotal+tax;
  }
}

const cost = cart.total();
console.log(`Total cost including Tax $ ${cost.toFixed(2)}`);