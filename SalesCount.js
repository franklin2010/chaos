let annualProfit = ( 30000 - 5000);
let fixedSales = (6/100 * 5000) + (8/100 * 5000);
annualProfit -= fixedSales;
let sales = (10/100 * 10000);
let CountedSales = 2;
while (annualProfit > 0) {
annualProfit -= sales
CountedSales++;
}
console.log("We need to make "+ CountedSales + " sales");
