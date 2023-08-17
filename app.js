// Shape class
class Shape {
    constructor(cl, id, height = 100 + 'px', width = 100 + "px") {
        this.height = height;
        this.width = width;
        this.cl = cl;
        this.id = id;
    }
    createDiv(cl, id) {
        // create Div
        jQuery('<div>', {
            class: `${cl}`,
            id: `${id}`,
        }).appendTo('.addDraw');
    }
}

// Square class
class Square extends Shape {
    constructor(sideLength, cl, id, height, width) {
        super(cl, id, height, width);
        this.sideLength = sideLength + 'px';
    }
    draw() {
        this.createDiv('squareDiv', 'thisSquare')
        $('.squareDiv').css('width', `${this.sideLength}`);
        $('.squareDiv').css('height', `${this.sideLength}`);
        $('.squareDiv').css('background-color', 'red');
        let randY = Math.floor((Math.random() * 200) + 1);
        let randX = Math.floor((Math.random() * 200) + 1);
        $('.squareDiv').css('transform', `translate(${randX}px, ${randY}px)`);
    }
    describe() {
        $('.shapeName').text('Square');
        $('.shapeWidth').text(`Width: ${this.sideLength}`);
        $('.shapeHeight').text(`Height: ${this.sideLength}`);
        $('.shapeRadius').text(`Radius: ${this.radius}`);
        $('.shapePerimeter').text(`Perimeter: ${this.perimeter}`);
    }
}

// square btn
$('[id="SquareBtn"]').click(function () {
    let length = $('[id="SquareLength"]').val();
    let sq = new Square(length);
    sq.draw();

    // click shape to describe
    $(document).on('click', '.squareDiv', function () {
        sq.describe();
    })

    // dbl click shape to delete shape div
    $(document).on('dblclick', '.squareDiv', function() {
        $('.squareDiv').remove();
    })
});

// Circle class
class Circle extends Shape {
    constructor(radius, cl, id, height, width) {
        super(cl, id, height, width);
        this.radius = radius;
    }
    draw() {
        this.createDiv('circleDiv', 'thisCircle')
        $('.circleDiv').css('width', `${this.width}`);
        $('.circleDiv').css('height', `${this.height}`);
        $('.circleDiv').css('border-radius', `${this.radius}`);
        $('.circleDiv').css('background-color', 'purple');
        let randY = Math.floor((Math.random() * 200) + 1);
        let randX = Math.floor((Math.random() * 200) + 1);
        $('.circleDiv').css('transform', `translate(${randX}px, ${randY}px)`);
    }
    describe() {
        $('.shapeName').text('Circle');
        $('.shapeWidth').text(`Width: ${this.width}`);
        $('.shapeHeight').text(`Height: ${this.height}`);
        $('.shapeRadius').text(`Radius: ${this.radius}`);
        $('.shapePerimeter').text(`Perimeter: ${this.perimeter}`);
    }
}

// circle btn
$('[id="CircleBtn"]').click(function () {
    let radius = $('[id="CircleRadius"]').val();
    let circ = new Circle(radius);
    circ.draw();

    // click shape to describe
    $(document).on('click', '.circleDiv', function () {
        circ.describe();
    })

    // dbl click shape to delete shape div
    $(document).on('dblclick', '.circleDiv', function() {
        $('.circleDiv').remove();
    })
});