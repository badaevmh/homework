'use strict';

const url = 'https://jsonplaceholder.typicode.com/users/'; 
const promiseArr = [];

for (let i = 0; i < 10; i++) {
    promiseArr[i] = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url + (i + 1));
        xhr.onload = function ()  {
            resolve(JSON.parse(xhr.responseText))
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
};

for (const promise of promiseArr) {
    promise.then((result) => {
        console.log(result);
    })
}

