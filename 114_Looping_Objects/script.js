// lặp đối tượng
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // thay đổi trong ES6
    openingHours,

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 2, time, address}) {
        console.log(
            this.starterMenu[starterIndex], this.mainMenu[mainIndex], time, address
        );
    },

    // xóa chữ function đi vẫn được
    orderPasta(ing1, ing2, ing3) {
        console.log(`Mỳ ống gồm có ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza: function (mainIngredients, ...ing) {
        console.log(mainIngredients);
        console.log(ing);
    }
};

// console.log(Object.prototype);
// lấy key của object
console.log(Object.keys(openingHours));

// lấy value của object
console.log(Object.values(openingHours));

// lấy cả key và value
// const [key, {open, close}] = Object.entries(openingHours);

console.log(Object.entries(openingHours));
for (const [key, {open, close}] of Object.entries(openingHours)) {
    console.log(`On ${key}, restaurant open at ${open}, and close at ${close}`);
}
