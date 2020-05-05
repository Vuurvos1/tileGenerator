let str = window.location.search;
str = str.slice(1);
str = str.replace(/%20/g, ' ');

const fontSize = 72;
const font = 'Marck Script';
const lineHeight = fontSize + 6;

const textSize = document.querySelector('#measureText');
const image = document.getElementById('tile');

textSize.innerHTML = str;
textSize.style.fontSize = `${fontSize}px`;
textSize.style.fontFamily = font;

const maxWidth = 540;

let bgTile = new Image();
bgTile.src = 'img/Blauw-omranding.jpg';

bgTile.onload = function () {
    // create canvas
    let canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext('2d');

    // draw bg and setup text 
    ctx.drawImage(this, 0, 0, this.width, this.height);
    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = '#0f1b65';
    ctx.textBaseline = 'baseline';

    //filling text on tile
    let words = str.split(' ');
    let line = '';

    let lineAmount = 0;

    for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + ' ';

        textSize.innerHTML = testLine;
        let testWidth = textSize.offsetWidth;

        if (testWidth > maxWidth && i > 0) {
            line = words[i] + ' ';
            lineAmount++;
        } else {
            line = testLine;
        }
    }

    let pHeight = lineAmount * lineHeight;
    let startX = 0;
    let startY = canvas.height / 2 - pHeight / 4;

    words = str.split(' ');
    line = '';

    for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + ' ';

        textSize.innerHTML = testLine;
        let testWidth = textSize.offsetWidth;
        startX = canvas.width / 2 - testWidth / 2;

        if (testWidth > maxWidth && i > 0) {
            textSize.innerHTML = line;
            let width = textSize.offsetWidth;
            startX = canvas.width / 2 - width / 2;
            ctx.fillText(line, startX, startY);
            line = words[i] + ' ';
            startY += lineHeight;
        } else {
            line = testLine;
        }
    }

    textSize.innerHTML = line;
    let width = textSize.offsetWidth;
    startX = canvas.width / 2 - width / 2;
    ctx.fillText(line, startX, startY);

    // convert the canvas to an image
    convertCanvasToImage(canvas)
}

function convertCanvasToImage(canvas) {
    let image = new Image();
    image.src = canvas.toDataURL("image/png");
    image.className = 'generatedTile';
    document.querySelector('main').appendChild(image);
}
