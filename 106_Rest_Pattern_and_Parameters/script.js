// rest pattern dùng để đóng gói các biến thành 1 mảng
// rest pattern có cú pháp giống spread operator (nhưng cách dùng ngược nhau)
// thông thường rest pattern được viết bên trái (tên biến) còn spread được viết bên phải (giá trị)
// còn trong hàm rest pattern được viết khi khai báo hàm còn spread được viết khi gọi hàm
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

const [a, b, ...other] = [1,2,3,4,5];
console.log(a, b, other); // 1 2 array(3)
console.log(other); // [3 4 5]

const [p, , r, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(p, r);
console.log(otherFood);

// Objects

const {fri, ...otherDay} = restaurant.openingHours;
console.log(otherDay);

// Function
function add (...num) {
    console.log(num);
}

add(1,2,3,4);
add(1,2,3,4,6,7,8,9);

restaurant.orderPizza('Phô mai', 'bơ', 'xúc xích');
restaurant.orderPizza('Phô mai');