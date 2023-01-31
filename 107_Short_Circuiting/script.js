// short-circuiting: đoản mạch
// toán tử || gặp giá trị TRUE thì dừng (nếu ko có giá trị TRUE -> trả về giá trị cuối)
// toán tử && gặp giá trị FALSE thì dừng (nếu ko có giá trị FALSE -> trả về giá trị cuối)
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

console.log('--- OR ---');
console.log(3 || 'Tùng'); // 3
console.log('' || 'Tùng'); // Tùng
console.log(0 || true); // true
console.log(undefined || null || 0 || ''); // ''
console.log(undefined || 0 || '' || 'Tùng' || 23 || null);

// cách dùng
restaurant.numguests = 23;
const num = restaurant.numguests || 10;
console.log(num);

console.log('--- AND ---');
console.log(0 && 'Tùng'); // 0
console.log(7 && 'Tùng'); // Tùng
console.log(7 && 'tùng' && null && 'tùng'); // null

// cách dùng
restaurant.orderPizza && restaurant.orderPizza('Phô mai', 'xúc xích');