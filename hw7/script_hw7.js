// 1.
// class Circle {
//     constructor(radius) {
//         this._radius = radius;
//     }

//     get radius() {
//         return this._radius;
//     }

//     set radius(value) {
//         if (value <= 0) {
//             throw new Error("Радиус должен быть больше нуля");
//         }
//         this._radius = value;
//     }

//     get diameter() {
//         return this._radius * 2;
//     }

//     calculateArea() {
//         return Math.PI * this._radius ** 2;
//     }

//     calculatePerimeter() {
//         return 2 * Math.PI * this._radius;
//     }
// }

// const circle = new Circle(10);
// alert("Радиус окружности: " + circle.radius);
// alert("Диаметр окружности: " + circle.diameter);
// alert("Площадь окружности: " + circle.calculateArea());
// alert("Длина окружности: " + circle.calculatePerimeter());

// 2.
// class CssClass {
//     constructor(className) {
//         this.className = className;
//         this.styles = [];
//     }

//     setStyle(style) {
//         this.styles.push(style);
//     }

//     removeStyle(style) {
//         const index = this.styles.indexOf(style);
//         if (index !== -1) {
//             this.styles.splice(index, 1);
//         }
//     }

//     getCss() {
//         let cssCode = `.${this.className} {`;
//         this.styles.forEach(style => {
//             cssCode += ` ${style};`;
//         });
//         cssCode += ` }`;
//         return cssCode;
//     }
// }

// const myClass = new CssClass("my-class");
// myClass.setStyle("color: red");
// myClass.setStyle("font-size: 16px");
// myClass.setStyle("background-color: yellow");

// alert(myClass.getCss());

// myClass.removeStyle("font-size: 16px");

// alert(myClass.getCss());