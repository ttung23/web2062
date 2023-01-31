// tách các phần tử trong mảng thành 1 biến riêng biệt (giải nén)
// destructuring: hủy cấu trúc
// nested: lồng nhau

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
    }
};

const arr = [2, 3, 4];

// ko dùng destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// dùng destructuring
const [x, y, z] = arr;
console.log(x, y, z);

// có thể lấy 1 hoặc nhiều phần tử (nếu ko cần lấy hết) trong mảng
// lấy 2 phần tử đầu tiên trong restaurant.categories
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// lấy phần tử 1 và 3
const [mot, , ba] = restaurant.categories;
console.log(mot, ba);

// đổi vị trí
// nổi bọt
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// cách dễ hơn
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 1));

// nhận giá trị được trả về từ 1 hàm
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

// xử lý mảng lồng mảng
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// đặt giá trị mặc định khi destructuring (giải nén)
const [p, q = 2, r = 1] = [8, 9];
console.log(p, q, r);


