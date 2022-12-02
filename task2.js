'use strict';

// RECTANGLE
const inputLength = document.querySelector('.length');
const inputWidth = document.querySelector('.width');
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

const calculateArea = function (length, width) {
    const areaRectangle = length * width;
    const output = {
        area: areaRectangle,
        figure: 'Rectangle',
        input: [length, width]
    }
    console.log(output);
    result.textContent = `площадь: ${areaRectangle}`;
    return output;
}

btn.addEventListener('click', function () {
    calculateArea(Number(inputLength.value), Number(inputWidth.value))
})