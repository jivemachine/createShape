class Shape {
    constructor() {

    };
    describe() {

    }
};

class Circle extends Shape {
    constructor(params) {

    };
    describe() {

    };
    draw() {
        
    };
};

class Triangle extends Shape {
    constructor(height) {
        super();
        this.height = height;

    };
    describe() {
        $('.shapeName').text('Triangle');
        $('.shapeWidth').text('');
        $('.shapeHeight').text(`Height: ${this.height}`);
        $('.shapeRadius').text('');
        $('.shapePerimeter').text('');
    }
    draw() {

    };
};

class Rectangle extends Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    };
    describe() {
        $('.shapeName').text('Rectangle');
        $('.shapeWidth').text(`Width: ${this.width}`);
        $('.shapeHeight').text(`Height: ${this.height}`);
        $('.shapeRadius').text('');
        $('.shapePerimeter').text('');
    };
    draw() {
        $('.draw').css('width', this.width);
        $('.draw').css('height', this.height);
        $('.draw').css('background-color', 'green');
    };
};

class Square extends Shape {
    constructor(params) {

    };
    describe() {

    };
    draw() {

    };
};

// Rectangle 
$('[id="RectangleBtn"]').click(function () {
    let width = $('[id="RectangleWidth"]').val();
    let height = $('[id="RectangleHeight"]').val();
    let rect = new Rectangle();
    rect.describe();
    rect.draw();
});

$('[id="IsocelesBtn"]').click(function() {
    let height = $('[id="IsocelesHeight"]').val();
    console.log(height);
    let tri = new Triangle(height);
    console.log(tri);
    tri.describe();
    tri.draw();
});