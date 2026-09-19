const parsedAmount = (raw) => {
    const isEmpty = raw.trim() === "" ;
    const parsed = Number(raw);
    if(isEmpty || Number.isNaN(parsed)){
        return null;
    }
    return parsed;

}

const formatCurrency = (amount) => {
    return `$ ${amount.toFixed(2)}`
}

const taxpay = (amount) => amount*1.08;




const rawPrices = ["19.99", "5.50", "ERR", "42.00", ""];

for (const raw of rawPrices){
    const parsed = parsedAmount(raw);
    if(parsed === null){
        console.log(`Skippin Invaild Amount : ${parsed}`);
        continue;
    }

    const amount = taxpay(parsed);
    const format = formatCurrency(amount);
    console.log(format);

}