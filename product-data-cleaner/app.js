const rawProducts = [
  { name: " Wireless Mouse ", price: "19.99", stock: "42" },
  { name: "USB Cable", price: "5.50", stock: "0" },
  { name: " Mechanical Keyboard", price: "89.00", stock: "15" },
];


function formattedData(raw) {
    return {
        Name : raw.name.trim(),
        Price : Number(raw.price),
        Stock : Number(raw.stock),
        Instock : Number(raw.stock) > 0,
    };
}

const newRaw = rawProducts.map(formattedData);

console.log(newRaw);