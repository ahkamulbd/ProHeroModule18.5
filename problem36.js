/*
    ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
*/

var myBooksPrices = [50, 300, 35, 195, 700, 99, 78, 489, 33, 122, 234, 87, 100, 200, 31];


for (var i = 0; i <= myBooksPrices.length; i++) {
    var myBooksPrice = myBooksPrices[i];
    if (myBooksPrice > 200) {
        continue;
    }
    console.log(myBooksPrice);
}