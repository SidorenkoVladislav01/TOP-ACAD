// 1.
// const car = {
//     manufacturer: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     averageSpeed: 60,

//     displayInfo() {
//         let info = `Manufacturer: ${this.manufacturer}\n`;
//         info += `Model: ${this.model}\n`;
//         info += `Year: ${this.year}\n`;
//         info += `Average Speed: ${this.averageSpeed} km/h`;
//         alert(info);
//     },

//     calculateTime(distance) {
//         const hours = distance / this.averageSpeed;
//         const restCount = Math.floor(hours / 4);
//         const totalHours = hours + restCount;
//         const totalTime = totalHours + restCount;

//         alert(`Time to cover ${distance} km: ${totalTime.toFixed(2)} hours`);
//     }
// };

// car.displayInfo();
// car.calculateTime(100);

// 2.
// const fraction = {
//     numerator: 1,
//     denominator: 2,

//     add(otherFraction) {
//         const result = {};
//         result.numerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
//         result.denominator = this.denominator * otherFraction.denominator;
//         this.reduceFraction(result);
//         return result;
//     },

//     subtract(otherFraction) {
//         const result = {};
//         result.numerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
//         result.denominator = this.denominator * otherFraction.denominator;
//         this.reduceFraction(result);
//         return result;
//     },

//     multiply(otherFraction) {
//         const result = {};
//         result.numerator = this.numerator * otherFraction.numerator;
//         result.denominator = this.denominator * otherFraction.denominator;
//         this.reduceFraction(result);
//         return result;
//     },

//     divide(otherFraction) {
//         const result = {};
//         result.numerator = this.numerator * otherFraction.denominator;
//         result.denominator = this.denominator * otherFraction.numerator;
//         this.reduceFraction(result);
//         return result;
//     },

//     reduceFraction(fr) {
//         const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
//         const divisor = gcd(fr.numerator, fr.denominator);
//         fr.numerator /= divisor;
//         fr.denominator /= divisor;
//     }
// };

// fraction.numerator = 3;
// fraction.denominator = 4;

// const otherFraction = {
//     numerator: 1,
//     denominator: 2
// };

// let result = fraction.add(otherFraction);
// alert(`Addition result: ${result.numerator}/${result.denominator}`);

// result = fraction.subtract(otherFraction);
// alert(`Subtraction result: ${result.numerator}/${result.denominator}`);

// result = fraction.multiply(otherFraction);
// alert(`Multiplication result: ${result.numerator}/${result.denominator}`);

// result = fraction.divide(otherFraction);
// alert(`Division result: ${result.numerator}/${result.denominator}`);