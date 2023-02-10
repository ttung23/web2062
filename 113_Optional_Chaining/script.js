// dùng để kiểm tra xem object, function, mảng có tồn tại hay không, nếu ko thì trả về FALSE
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

//console.log(restaurant.openingHours.tue.open); // lỗi
console.log(restaurant.openingHours.tue?.open || "nhà hàng ko mở vào thứ 3"); // nhà hàng ko mở vào thứ 3

// viết cách đầy đủ
// if (restaurant.openingHours.tue) {
//     console.log(restaurant.openingHours.tue.open);
// } else {
//     console.log("nhà hàng ko mở vào thứ 3");
// }

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const aa = 'thu';

for (const i of days) {
    const open = restaurant.openingHours[i]?.open ?? "đóng cửa";
    console.log(`on ${i}, restaurant mở của vào ${open}`);
}

// Phương thức (hàm) [METHODS]
console.log(restaurant.orderBanhMy?.(0, 1) ?? "Hàm ko tồn tại"); // hàm ko tồn tại
console.log(restaurant.order?.(0,1) ?? "Hàm ko tồn tại"); // array(2)

// Mảng (Array)
const users = [
    {
        name: "Tùng",
        sdt: "0396007890"
    }
];

console.log(users[0]?.name ?? "ko tồn tại"); // Tùng
console.log(users[0]?.email ?? "ko tồn tại");
