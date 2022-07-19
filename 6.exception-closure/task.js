function parseCount(value) {
    if (isNaN(Number.parseInt(value))) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseInt(value)
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error
    }
}

// Задача №2

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let semiPerimeter = this.getPerimeter() / 2;
        let area = semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c);
        return +(Math.sqrt(area).toFixed(3))
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}