// tách các phần tử trong object thành 1 biến riêng biệt (giải nén)

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
};

// tên biến trùng với tên thuộc tính trong object
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories); // Classico Italiano object array(4)

// cách đặt tên biến khác với tên thuộc tính trong object
const {name: tenNhaHang, openingHours: gioMoCua, categories: loaiMon} = restaurant;
console.log(tenNhaHang, gioMoCua, loaiMon); // Classico Italiano object array(4)

// đặt default value cho biến (trong trường hợp sợ bị sai tên biến hoặc biến undefined)
const {menu , starterMenu} = restaurant; // menu undefined
console.log(menu, starterMenu);

const {meNu = [] , starterMenu: starter} = restaurant; // meNu là 1 mảng rỗng (vì đặt default)
console.log(meNu, starterMenu);

// mutating variables (biến đột biến :v)
let a = 1111;
let b = 2222;
const obj = {a: 3, b: 4, c:5};

({a, b} = obj);
console.log(a, b);

// nested object
const {
    fri: {
        open: o, 
        close: c
    }
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
    time: "22:00",
    starterIndex: 2,
    mainIndex: 1,
    address: "Hà Nội",
});

restaurant.orderDelivery({
    time: "23:00",
    address: "Thanh Oai, Hà Nội",
});