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
        super();
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
        $('.addDraw').css('width', this.width);
        $('.addDraw').css('height', this.height);
        $('.addDraw').css('background-color', 'green');
        let randY = Math.floor((Math.random() * 600) + 1);
        let randX = Math.floor((Math.random() * 600) + 1);
        $('.addDraw').css('transform', `translate(${randX}px, ${randY}px)`);
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
    let rect = new Rectangle(width, height);
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