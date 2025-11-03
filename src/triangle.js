class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    
    getBase() {
        return this.base;
    }
    
    getHeight() {
        return this.height;
    }
    
    getArea() {
        return (this.base * this.height) / 2;
    }
    
    getPerimeter() {
        // Pour un triangle rectangle
        return this.base + this.height + Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.height, 2));
    }
}

module.exports = {
    Triangle: Triangle
}