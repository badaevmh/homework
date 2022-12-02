'use strict';

const loop = function (times = 0, callback = null) {
    for (let i = times; i > 0; i--) {
        callback();
    }
}

const example = function () {
    console.log('Проверка');
}

loop(5, example);