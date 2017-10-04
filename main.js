function $(id) {
    return document.getElementById(id);
}

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = 5;
ctx.strokeStyle = "#FFFFFF";


random = false;


function start() {
    depth = parseInt($("iterations").value);
    base = parseInt($("baseSize").value);
    a = parseInt($("angle1").value) * Math.PI / 180;
    b = parseInt($("angle2").value) * Math.PI / 180;
    pointA = new Point(canvas.width / 2 - base / 2, canvas.height / 4 * 3);
    pointB = new Point(canvas.width / 2 + base / 2, canvas.height / 4 * 3);
    //console.log("A: " + pointA.x + " : " + pointA.y + " B: " + pointB.x + " : " + pointB.y);
    triangle(pointA, pointB, depth);
}


function triangle(pA, pB, depth) {
    var pC = calcTriangle(pA, pB);

    if ($("triangleLines").checked) {
        drawTriangle(pA, pB, pC);
    }

    if (depth > 0) {
        unitAC = unitVector(pA, pC);
        normUnitAC = normVector(unitAC);
        d = Math.sqrt(Math.pow(pA.x - pC.x, 2) + Math.pow(pA.y - pC.y, 2)) * (
            random ? Math.random() : 1);
        pANew = new Point(pA.x, pA.y);
        pANew.x -= d * normUnitAC.x;
        pANew.y -= d * normUnitAC.y;

        pCNew = new Point(pC.x, pC.y);
        pCNew.x -= d * normUnitAC.x;
        pCNew.y -= d * normUnitAC.y;
        drawLine(pA, pANew);
        drawLine(pC, pCNew);
        triangle(pANew, pCNew, depth - 1);

        unitCB = unitVector(pC, pB);
        normUnitCB = normVector(unitCB);
        d = Math.sqrt(Math.pow(pC.x - pB.x, 2) + Math.pow(pC.y - pB.y, 2)) * (
            random ? Math.random() : 1);
        pCNew = new Point(pC.x, pC.y);
        pCNew.x -= d * normUnitCB.x;
        pCNew.y -= d * normUnitCB.y;

        pBNew = new Point(pB.x, pB.y);
        pBNew.x -= d * normUnitCB.x;
        pBNew.y -= d * normUnitCB.y;
        drawLine(pC, pCNew);
        drawLine(pB, pBNew);
        triangle(pCNew, pBNew, depth - 1);
    }
};

function getRandom(from, to) {
    return Math.random() * (to - from) + from;
}


function drawLine(pA, pB) {
    ctx.beginPath();
    ctx.moveTo(pA.x, pA.y);
    ctx.lineTo(pB.x, pB.y);
    ctx.stroke();
}

function drawTriangle(pA, pB, pC) {
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(pA.x, pA.y);
    ctx.lineTo(pB.x, pB.y);
    ctx.lineTo(pC.x, pC.y);
    ctx.closePath();
    ctx.stroke();
};


function calcTriangle(pA, pB) {
    base = Math.sqrt(Math.pow(pA.x - pB.x, 2) + Math.pow(pA.y - pB.y, 2));
    var d = base * Math.tan(b) / (Math.tan(a) + Math.tan(b));
    var h = Math.tan(a) * Math.tan(b) * base / (Math.tan(a) + Math.tan(b));
    var unitAB = unitVector(pA, pB);
    var normUnitAB = normVector(unitAB);
    var dirX = (d * unitAB.x - h * normUnitAB.x);
    var dirY = (d * unitAB.y - h * normUnitAB.y);
    var x = pA.x + dirX;
    var y = pA.y + dirY;
    return new Point(x, y);
};

function Point(x, y) {
    this.x = x;
    this.y = y;
};

function normVector(p) {
    return new Point(-p.y, p.x);
}

function unitVector(pA, pB) {
    var xAB = (pB.x - pA.x);
    var yAB = (pB.y - pA.y);
    var valueAB = Math.sqrt(xAB * xAB + yAB * yAB);
    return new Point(xAB / valueAB, yAB / valueAB);
};

refresh = function(event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    start();
}

$("triangleLines").onchange = refresh;
$("angle1").oninput = refresh;
$("angle2").oninput = refresh;
$("baseSize").oninput = refresh;
$("iterations").oninput = refresh;

start();
