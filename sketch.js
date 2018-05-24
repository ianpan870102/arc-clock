function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(400, 400);
    rotate(-90);

    let hr = hour();
    if(hr < 10) 
        hr = `0${hr}`;

    let min = minute();
    if(min < 10) 
        min = `0${min}`;

    let sec = second();
    if(sec < 10) 
        sec = `0${sec}`;

    strokeWeight(9);
    stroke(63, 255, 255);  // RGB colour of arc (sec)
    noFill();
    let secondAngle = map(sec, 0, 60, 0, 360);
    arc(0, 0, 720, 720, 0, secondAngle);


    strokeWeight(21);
    stroke(94, 255, 176);   // RGB colour of arc (minute)
    let minuteAngle = map(min, 0, 60, 0, 360);
    arc(0, 0, 390, 390, 0, minuteAngle);


    strokeWeight(39);
    stroke(255, 57, 165);   // RGB colour of arc (hour)
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 280, 280, 0, hourAngle);


    rotate(90);
    fill(255, 232, 1);      // RGB colour of number text
    noStroke();
    textSize(60);
    textFont('Georgia');
    text(hr + ':'+ min, -75, 20);
    textSize(20);
    text('  ' + sec, 65, 20);
}
