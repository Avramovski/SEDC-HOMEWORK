// Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price. Create an array of 15 products. Now answer the following requirements:

// Find all products with price greater than 20.
// Get the names of all products of Category Food, that are on discount.
// Get the price of all products that are on discount.
// Find the name and price of all products with name starting with a vowel, that are not on discount.

let display = document.querySelector('div')


class Product {
    constructor(name, category, hasDiscount, price) {
        this.name = name;
        this.category = category;
        this.hasDiscount = hasDiscount;
        this.price = price

    }
}

const products = [
    new Product('Apple', 'food', true, 16),
    new Product('Milk', 'Drink', true, 20),
    new Product('Cat', 'Animal', false, 40),
    new Product('Aligator', 'Animal', true, 100),
    new Product('Nugets', 'food', false, 19),
    new Product('Sprite', 'Drink', true, 12),
    new Product('Tomato', 'food', false, 12),
    new Product('Ananas', 'food', true, 34),
    new Product('Zebra', 'Animal', false, 200),
    new Product('Coffee', 'Drink', false, 10),
    new Product('Pizza', 'food', false, 21),
    new Product('Onion', 'food', true, 18),
    new Product('Alkohol', 'Drink', false, 16),
    new Product('Dog', 'Animal', false, 50),
    new Product('Snake', 'Animal', true, 70)
]
console.log('all products');
console.log(products);

// function greaterThn20(product) {
//     return product.price > 20;
// }
// let greaterPrice = products.filter(greaterThn20);
// console.log(greaterPrice);
console.log('=======================');
console.log('Greater than 20');
products.filter(product => product.price > 20).forEach(product => console.log(`${product.name} ${product.price}`))
console.log('=======================');

// function foodWithDiscount(product) {
//     return product.category === 'food' && product.hasDiscount;
// }

// const foodWithDiscountNames = products   
//     .filter(foodWithDiscount)
//     .map(product => `${product.name} ${product.category}`);
//     console.log(foodWithDiscountNames);

console.log('=======================');
console.log('food products with discound');

products.filter(product => product.category === 'food' && product.hasDiscount).forEach(product => console.log(`${product.name} ${product.price}`))
console.log('==================');
function productsOnDiscound(product) {
    return product.hasDiscount === true;
}
let discountProducts = products.filter(productsOnDiscound);
console.log('products on discound');
discountProducts.map(product => console.log(`${product.name}  ${product.price}`));



function vowel(product) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const startingLetter = product.name.toLowerCase()[0];
    let isWowel = false
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] == startingLetter) {
            isWowel = true;
            break;
        }
    }
    return isWowel && !product.hasDiscount;
}
let filterdProduct = products.filter(vowel)

console.log('vowel withoud discound');

filterdProduct.map(product => console.log(`${product.name}  ${product.price}`));
