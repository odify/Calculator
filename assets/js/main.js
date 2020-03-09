
// RESET CALCULATOR

function form_reset() {

document.getElementById("screen").value = " " ;

}
// RESULT ON SCREEN

function result() {

    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}

// CALCULATING NUMBERS

function update(value) {


    document.getElementById("screen").value += value;
}

// OPERATORS DO NOT REPEAT

// function notRepeat {}

