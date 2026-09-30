
function usdToEuro(a){
    return (a*1.2).toFixed(2);
}

const usd = [2, 3, 4, 5, 6, 7];

const euro = [];
for (const u of usd){
    euro.push(usdToEuro(u));
}

const mapEURO = usd.map(usdToEuro);


console.log(euro);
console.log(mapEURO);