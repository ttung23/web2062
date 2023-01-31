// Iterables: cấu trúc lặp lại
// ingredients: thành phần
// pasta: mỳ ống
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
    }
};

const arr = [1,2,3,4];
console.log(...arr); // gần giống destructuring

const newMenu = [...restaurant.mainMenu, "Mì tôm"];
console.log(newMenu);

// kết hợp 2 mảng thành 1
const join2Menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(join2Menu);

// sao chép nông với mảng (shallow copy): thay đổi mảng chính ko thay đổi mảng copy và ngược lại
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// spread operator hoạt động trên các:
// Iterables: arrays, strings, maps, sets. NOT object
const str = "tung";
console.log(...str, 'm', 'o', 'c');

const ingredients = ['mỳ', 'nước dùng', 'gia vị'];

restaurant.orderPasta(...ingredients);

// kể từ ES2018 spread operator được dùng cho cả object mặc dù object ko phải iterables
// Object
// shallow copy
const restaurantCopy = {...restaurant};
restaurantCopy.name = "Tùng";

console.log(restaurantCopy.name); // Tùng
console.log(restaurant.name); // Classico Italiano
