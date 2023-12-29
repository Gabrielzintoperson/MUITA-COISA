var vira = 0;
var invert = 0;

function toggle(){
    if(vira == 0){
        vira = 180;
        invert = 1;
        document.body.style.background = '#ffdd55';
    }else {
        vira = 0;
        invert = 0;
        document.body.style.background = '#0022aa';
    }

    console.log(vira);
    console.log(invert);
    document.querySelector('#img-tog').style.transform = 'rotateY(' + vira + 'deg)';
    document.querySelector('.invert').style.filter = 'invert(' + invert + ')';
}

var show = document.querySelector('#show');

function apaga(){
    show.value = ""
    n1 = 0;
    result = 0;
}

//#region Numeros

function um(){
    if(show.value.length < "15"){
        show.value += "1"
    }
}

function dois(){
    if(show.value.length < "15"){
        show.value += "2"
    }
}

function tres(){
    if(show.value.length < "15"){
        show.value += "3"
    }
}

function quatro(){
    if(show.value.length < "15"){
        show.value += "4"
    }
}

function cinco(){
    if(show.value.length < "15"){
        show.value += "5"
    }
}

function seis(){
    if(show.value.length < "15"){
        show.value += "6"
    }}

function sete(){
    if(show.value.length < "15"){
        show.value += "7"
    }
}

function oito(){
    if(show.value.length < "15"){
        show.value += "8"
    }
}

function nove(){
    if(show.value.length < "15"){
        show.value += "9"
    }
}

function zero(){
    if(show.value.length < "15"){
        show.value += "0"
    }
}

function virg(){
    if(show.value.length < "14"){
        if(show.value.length == "0"){
            show.value += "0."
        }else{
            show.value += "."
        }
    }
}

//#endregion

//#region Calculos

var n1 = 0;
var n2 = 0;
var tipoCalc = "";

function soma(){
    if(show.value.length){
        n1 = Number(show.value);
        show.value = "";
        tipoCalc = "soma";
    }
}

function menos(){
    if(show.value.length){
        n1 = Number(show.value);
        show.value = "";
        tipoCalc = "menos";
    }
}

function mult(){
    if(show.value.length){
        n1 = Number(show.value);
        show.value = "";
        tipoCalc = "mult";
    }
}

function divide(){
    if(show.value.length){
        n1 = Number(show.value);
        show.value = "";
        tipoCalc = "divide";
    }
}

function igual(){
    var result = 0
    if(tipoCalc == "soma"){
        result = n1 + Number(show.value);
        show.value = result;
    }

    if(tipoCalc == "menos"){
        result = n1 - Number(show.value);
        show.value = result;
    }

    if(tipoCalc == "mult"){
        result = n1*Number(show.value);
        show.value = result;
    }

    if(tipoCalc == "divide"){
        result = n1/Number(show.value);
        show.value = result;
    }

    console.log(result)
}
//#endregion