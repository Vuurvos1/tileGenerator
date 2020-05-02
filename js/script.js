// window.addEventListener("DOMContentLoaded", function () {
//     var image = document.getElementById("tile");
//     var canvas = document.createElement("canvas");
//     document.body.appendChild(canvas);


//     var context = canvas.getContext("2d");

//     context.drawImage(image, 0, 0);
// });
let str = window.location.search;
str = str.slice(1);
str = str.replace(/%20/g, ' ');
console.log(str);

const fontSize = 60;
// zoals moeder zeurt, zeurt ze overal

const textSize = document.querySelector('#measureText');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('tile');

textSize.innerHTML = str;
textSize.style.fontSize = `${fontSize}px`;
textSize.style.fontFamily = 'Serif';

canvas.width = image.width;
canvas.height = image.height;

image.addEventListener('load', () => {
    ctx.drawImage(image, 0, 0);

    ctx.font = `bold ${fontSize}px Serif`;

    ctx.fillStyle = '#0f1b65';
    ctx.fillText(str, (image.width / 2 - textSize.offsetWidth / 2), (image.height / 2 + textSize.offsetHeight / 4));


    // Debug lines
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 800);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(800, 400);
    ctx.stroke();
});



// function wrapText(context, text, x, y, maxWidth, lineHeight) {
//     let words = text.split(' ');
//     let line = '';

//     for(let n = 0; n < words.length; n++) {
//       let testLine = line + words[n] + ' ';
//       let metrics = context.measureText(testLine);
//       let testWidth = metrics.width;
//       if (testWidth > maxWidth && n > 0) {
//         context.fillText(line, x, y);
//         line = words[n] + ' ';
//         y += lineHeight;
//       }
//       else {
//         line = testLine;
//       }
//     }
//     context.fillText(line, x, y);
//   }

//   let canvas = document.getElementById('myCanvas');
//   let context = canvas.getContext('2d');
//   let maxWidth = 400;
//   let lineHeight = 25;
//   let x = (canvas.width - maxWidth) / 2;
//   let y = 60;
//   let text = 'All the world \'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';

//   context.font = '16pt Calibri';
//   context.fillStyle = '#333';

//   wrapText(context, text, x, y, maxWidth, lineHeight);