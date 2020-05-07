let str = window.location.search;

str = str.slice(1);
str = decodeURI(str);

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
    ctx.drawImage(bgTile, 0, 0);
    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = '#0f1b65';
    ctx.textBaseline = 'baseline';

    // filling text on tile
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

    let startX = 0;
    let startY = canvas.height / 2 - lineAmount * lineHeight / 2 + 20;

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

    // add copy to image
    const tile = document.querySelector('.generatedTile');

    tile.addEventListener('click', async () => {
        console.log('tile clicked');

        try {
            const imgURL = tile.src;
            const data = await fetch(imgURL);
            const blob = await data.blob();
            await navigator.clipboard.write([
              new ClipboardItem({
                [blob.type]: blob
              })
            ]);
            console.log('Image copied.');
          } catch(err) {
            console.error(err.name, err.message);
          }
    });
}

function convertCanvasToImage(canvas) {
    let image = new Image();
    image.src = canvas.toDataURL("image/png");
    image.className = 'generatedTile';
    document.querySelector('.tooltip').appendChild(image);
}
