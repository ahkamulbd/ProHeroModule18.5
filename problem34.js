/*
৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
*/

var usedMobiles = ['Nokia', 'Symphony', 'Samsung', 'Oppo', 'Tecno', 'Showmi'];

var i = 0;

while (i < usedMobiles.length) {
    var usedMobile = usedMobiles[i];
    console.log(usedMobile);
    i++;
}