let squarePerimeter = prompt("Введите сторону квадрата");
console.log(`Периметр квадрата равен ${squarePerimeter * 4}`);

let cubeEdge = prompt("Введите длину ребра куба");
console.log(`Объем куба: ${cubeEdge ** 3}, площадь его боковой поверхности: ${4 * (cubeEdge ** 2)}`);

let circleRadius = prompt("Введите радиус окружности")
console.log(`Длинна окружности: ${circleRadius * 2 * 3.14}, площадь круга: ${3.14 * (circleRadius ** 2)}`)

let substanceAmount = prompt("Введите объем вещества")
let substanceMass = prompt("Введите массу вещества")
console.log(`Плотность материала этого вещества равна ${substanceAmount * substanceMass}`)

let habitantsAmount = prompt("Введите количество жителей")
let areaSquare = prompt("Введите площадб территории")
console.log(`На один км^2 обходится ${parseFloat(areaSquare / habitantsAmount)} человека`)

let leg1 = prompt("Введите первый катет")
let leg2 = prompt("Введите второй катет")
console.log(`Гипотенуза данного треугольника равна ${Math.sqrt(leg1 ** 2 + leg2 ** 2)}`)

let a = prompt("Введите любое значение для а")
console.log(`y = ${(a ** 2 + 10) / (Math.sqrt(a ** 2 + 1))}`)