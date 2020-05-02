// window.addEventListener("DOMContentLoaded", function () {
//     var image = document.getElementById("tile");
//     var canvas = document.createElement("canvas");
//     document.body.appendChild(canvas);


//     var context = canvas.getContext("2d");

//     context.drawImage(image, 0, 0);
// });
let str = window.location.search;
str = str.slice(1);
console.log(str);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('tile');
const fontSize = 40;

canvas.width = image.width;
canvas.height = image.height;

image.addEventListener('load', () => {
    ctx.drawImage(image, 0, 0);

    ctx.font = `bold ${fontSize}pt Roboto`;
    ctx.fillText(str, image.width / 2 - fontSize / 2, image.height / 2);
});



// function wrapText(context, text, x, y, maxWidth, lineHeight) {
//     var words = text.split(' ');
//     var line = '';

//     for(var n = 0; n < words.length; n++) {
//       var testLine = line + words[n] + ' ';
//       var metrics = context.measureText(testLine);
//       var testWidth = metrics.width;
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
  
//   var canvas = document.getElementById('myCanvas');
//   var context = canvas.getContext('2d');
//   var maxWidth = 400;
//   var lineHeight = 25;
//   var x = (canvas.width - maxWidth) / 2;
//   var y = 60;
//   var text = 'All the world \'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';

//   context.font = '16pt Calibri';
//   context.fillStyle = '#333';

//   wrapText(context, text, x, y, maxWidth, lineHeight);
