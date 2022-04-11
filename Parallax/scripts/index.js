let first = document.getElementById("first");
let last = document.getElementById("last");
let text = document.getElementById("text");
// dynamic function  that set a position to the elements by an  Add a click event to the window.
window.addEventListener('scroll', function () {
    var value = scrollY;
    // set the top of the variable 'first'.
    first.style.top = value * 0.7 + 'px';
    // set the bottom of the variable 'last'.
    last.style.bottom = value * 0.5 + 'px';
    // set the top of the variable 'text.
    text.style.top = value * 1 + 'px';
})