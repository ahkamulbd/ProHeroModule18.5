// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

// Solution using for loop

for (var i = 412; i <= 456; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}