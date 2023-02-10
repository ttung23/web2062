// logical assignment operators: toán tử gán

const rest1 = {
    name: "Tiến", 
    // numGuests: 20, //0
    numGuests: 0, //0
}

const rest2 = {
    name: "Tùng",
    owner: "Tôi",
}


// toán tử gán OR (OR assginment operators): trả về giá trị TRUE đầu tiên
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// viết ngắn
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log("rest1.numGuests: "+rest1.numGuests + ", rest2.numGuests: "+rest2.numGuests);

// nếu rest1.numGuests = 0 thì dùng
// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log("rest1.numGuests: "+rest1.numGuests + ", rest2.numGuests: "+rest2.numGuests);

// toán tử AND (AND assginment operators): trả về giá trị FALSE đầu tiên
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log("rest1.owner: " + rest1.owner + ", rest2.owner: "+ rest2.owner);
console.log(rest1);
