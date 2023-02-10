const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 2, time, address}) {
        console.log(
            this.starterMenu[starterIndex], this.mainMenu[mainIndex], time, address
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Mỳ ống gồm có ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza: function (mainIngredients, ...ing) {
        console.log(mainIngredients);
        console.log(ing);
    }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const i of menu) console.log(i);

// viết thủ công
// for (const i of menu.entries()) { 
//     console.log(`${i[0] + 1}: ${i[1]}`);
// };

// áp dụng destructuring
for (const [i, ele] of menu.entries()) {
    console.log(`${i + 1}: ${ele}`);

}