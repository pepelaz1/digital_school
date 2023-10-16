value = 0;
function plusOne() {
    elem = document.getElementById("tbValue");
    tmp = parseInt(elem.value);
    value = tmp + 1;
    setValue();
}

function minusOne() {
    elem =  document.getElementById("tbValue");
    tmp = parseInt(elem.value);
    value = tmp - 1;
    setValue();
}


function generate() {
   value =  Math.floor(Math.random() * 10);
   setValue();
}

function setValue() {
    document.getElementById("tbValue").value = value;
}