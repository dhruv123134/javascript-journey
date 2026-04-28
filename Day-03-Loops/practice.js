// Reverse counting (20 to 1)
for (let i = 20; i >= 1; i--) {
  console.log(i);
}

// Odd numbers (Method 1)
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Odd numbers (Method 2 - optimized)
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// Table of 5
for (let i = 1; i <= 10; i++) {
  console.log("5 * " + i + " = " + (5 * i));
}

// Sum 1 to 10
let sum1 = 0;
for (let i = 1; i <= 10; i++) {
  sum1 += i;
}
console.log("Sum 1 to 10:", sum1);

// Sum 11 to 20
let sum2 = 0;
for (let i = 11; i <= 20; i++) {
  sum2 += i;
}
console.log("Sum 11 to 20:", sum2);
