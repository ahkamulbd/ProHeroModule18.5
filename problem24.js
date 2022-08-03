/*
২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬0000 টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
*/

var myBudget = 30000;
var macPrice = 80000;
var gamingLaptopPrice = 60000;
var lenovoYogaPrice = 40000;
var oldLaptopPrice = 20000;

if (macPrice < myBudget) {
    console.log('I will buy MAC.');
}
else if (gamingLaptopPrice < myBudget) {
    console.log('I will buy Gaming Laptop.')
}
else if (lenovoYogaPrice < myBudget) {
    console.log('I will buy Lenovo Yoga.')
}
else {
    console.log('I will buy Old Laptop.')
}