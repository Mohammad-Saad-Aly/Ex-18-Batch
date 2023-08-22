function abc(e) {
    document.getElementById("inp").value += e
}

function eq() {
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}
function clr() {
    document.getElementById('inp').value = ''
}

function ccc() {
    var display = document.getElementById("inp");
    display.value = display.value.slice(0, -1);
}

// var a = 'Hamdan'
// a.slice(0,-1)














