let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');
/*使用 document.getElementById 選取頁面中的元素 */

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    bg.style.top = value + 0.5 + 'px';
    moon.style.left = -value + 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
})
/*window.addEventListener監聽用戶的滾動操作，每次滾動執行回調函數。 */



