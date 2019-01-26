// Full clean

var textClear = document.getElementById('textClear');
textClear.addEventListener('click', clear);

    function clear() {
        document.form.textview.value = '';
    }

//  Add negative symbol

var addNegativeSymbol = document.getElementById('negativeSymbol');
addNegativeSymbol.addEventListener('click', negative);

    function negative() {
        document.form.textview.value = - document.form.textview.value;
    }

// Add equally

var equal = document.getElementById('equal');
equal.addEventListener('click', equally);

    function equally() {
        var eqv = document.form.textview.value;
        if(eqv) {
            document.form.textview.value = eval(eqv);
        }
    }

// Backspace function

var backClear = document.getElementById('back');
backClear.addEventListener('click', backspace);

    function backspace() {
        var lng = document.form.textview.value;
        document.form.textview.value = lng.substring(0, lng.length-1);
    }

// Make relations between buttons and text input

var numbers = document.getElementsByClassName('numbers');

    function insertNumber(event) {
        document.form.textview.value += event.target.value;
    }

    for (i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', insertNumber);
    }
