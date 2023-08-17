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
        let randY = Math.floor((Math.random() * 400) + 1);
        let randX = Math.floor((Math.random() * 400) + 1);
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
        this.radius = radius + 'px';
    }
    draw() {
        this.createDiv('circleDiv', 'thisCircle')
        $('.circleDiv').css('width', `${this.width}`);
        $('.circleDiv').css('height', `${this.height}`);
        $('.circleDiv').css('border-radius', `${this.radius}`);
        $('.circleDiv').css('background-color', 'purple');
        let randY = Math.floor((Math.random() * 400) + 1);
        let randX = Math.floor((Math.random() * 400) + 1);
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

// Rectangle class
class Rectangle extends Shape {
    constructor(height, width, cl, id) {
        super(cl, id);
        this.height = height+'px';
        this.width = width+'px';
    }
    draw() {
        this.createDiv('rectangleDiv', 'thisRectangle');
        $('.rectangleDiv').css('width', `${this.width}`);
        $('.rectangleDiv').css('height', `${this.height}`);
        $('.rectangleDiv').css('background-color', 'green');
        let randY = Math.floor((Math.random() * 400) + 1);
        let randX = Math.floor((Math.random() * 400) + 1);
        $('.rectangleDiv').css('transform', `translate(${randX}px, ${randY}px)`);
    }
    describe() {
        $('.shapeName').text('Rectangle');
        $('.shapeWidth').text(`Width: ${this.width}`);
        $('.shapeHeight').text(`Height: ${this.height}`);
        $('.shapeRadius').text(`Radius: ${this.radius}`);
        $('.shapePerimeter').text(`Perimeter: ${this.perimeter}`);
    }
}

// Rectangle btn
$('[id="RectangleBtn"]').click(function () {
    let height = $('[id="RectangleHeight"]').val();
    let width = $('[id="RectangleWidth"]').val();
    let rect = new Rectangle(height, width);
    rect.draw();

    // click shape to describe
    $(document).on('click', '.rectangleDiv', function () {
        rect.describe();
    })

    // dbl click shape to delete shape div
    $(document).on('dblclick', '.rectangleDiv', function() {
        $('.rectangleDiv').remove();
    })
});


// triangle class (right isoceles triangle)
class Triangle extends Shape {
    constructor(height, cl, id) {
        super(cl, id);
        this.height = height+'px';
    }
    draw() {
        this.createDiv('triangleDiv', 'thisTriangle');
        $('.triangleDiv').css('width', `${this.height}`);
        $('.triangleDiv').css('height', `${this.height}`);
        $('.triangleDiv').css('border-bottom', `${this.height} solid green`);
        $('.triangleDiv').css('border-right', `${this.height} solid transparent`);
        let randY = Math.floor((Math.random() * 400) + 1);
        let randX = Math.floor((Math.random() * 400) + 1);
        $('.triangleDiv').css('transform', `translate(${randX}px, ${randY}px)`);
    }
    describe() {
        $('.shapeName').text('Triangle');
        $('.shapeWidth').text(`Width: ${this.height}`);
        $('.shapeHeight').text(`Height: ${this.height}`);
        $('.shapeRadius').text(`Radius: ${this.radius}`);
        $('.shapePerimeter').text(`Perimeter: ${this.perimeter}`);
    }
}

// triangle btn
$('[id="IsocelesBtn"]').click(function () {
    let height = $('[id="IsocelesHeight"]').val();
    let tri = new Triangle(height);
    tri.draw();

    // click shape to describe
    $(document).on('click', '.triangleDiv', function () {
        tri.describe();
    })

    // dbl click shape to delete shape div
    $(document).on('dblclick', '.triangleDiv', function() {
        $('.triangleDiv').remove();
    })
});