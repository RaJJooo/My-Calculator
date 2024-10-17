document.addEventListener('DOMContentLoaded', function () {
    const modeswitchbutton = document.getElementById('switch');

    const normalbuttons1 = document.querySelectorAll('.normalr1');
    const scientificbuttons1 = document.querySelectorAll('.scientificr1');

    const normalbuttons2 = document.querySelectorAll('.normalr2');
    const scientificbuttons2 = document.querySelectorAll('.scientificr2');

    const normalbuttons3 = document.querySelectorAll('.normalr3');
    const scientificbuttons3 = document.querySelectorAll('.scientificr3');

    const normalbuttons4 = document.querySelectorAll('.normalr4');
    const scientificbuttons4 = document.querySelectorAll('.scientificr4');

    const normalbuttons5 = document.querySelectorAll('.normalr5');
    const scientificbuttons5 = document.querySelectorAll('.scientificr5');

    const radButton = document.getElementById('rad1');
    radButton.addEventListener('click', function () {
        isRadians = !isRadians;
        radButton.textContent = isRadians ? 'RAD' : 'DEG';
    });

    const normalbutton6 = document.getElementById('bigequal');
    const scientificbutton6 = document.getElementById('smallequal');

    modeswitchbutton.addEventListener('click', function () {
        if (modeswitchbutton.textContent === 'ALT') {
            normalbuttons1.forEach(btn => btn.style.display = 'none');
            scientificbuttons1.forEach(btn => btn.style.display = '');

            normalbuttons2.forEach(btn => btn.style.display = 'none');
            scientificbuttons2.forEach(btn => btn.style.display = '');

            normalbuttons3.forEach(btn => btn.style.display = 'none');
            scientificbuttons3.forEach(btn => btn.style.display = '');

            normalbuttons4.forEach(btn => btn.style.display = 'none');
            scientificbuttons4.forEach(btn => btn.style.display = '');

            normalbuttons5.forEach(btn => btn.style.display = 'none');
            scientificbuttons5.forEach(btn => btn.style.display = '');

            normalbutton6.style.display = 'none';
            scientificbutton6.style.display = 'inline';

            modeswitchbutton.textContent = 'alt';
        }
        else {
            normalbuttons1.forEach(btn => btn.style.display = 'flex');
            scientificbuttons1.forEach(btn => btn.style.display = 'none');

            normalbuttons2.forEach(btn => btn.style.display = 'flex');
            scientificbuttons2.forEach(btn => btn.style.display = 'none');

            normalbuttons3.forEach(btn => btn.style.display = 'flex');
            scientificbuttons3.forEach(btn => btn.style.display = 'none');

            normalbuttons4.forEach(btn => btn.style.display = 'flex');
            scientificbuttons4.forEach(btn => btn.style.display = 'none');

            normalbuttons5.forEach(btn => btn.style.display = 'flex');
            scientificbuttons5.forEach(btn => btn.style.display = 'none');

            normalbutton6.style.display = 'inline';
            scientificbutton6.style.display = 'none';

            modeswitchbutton.textContent = 'ALT';
        }
    });
});

let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let string = "";
buttons.forEach(item => {
    item.onclick = () => {
        if (item.innerHTML == '=') {
            if (string.includes('%')) {
                let num = parseFloat(string.replace('%', ''));
                string = num/100;
            }
            else if (string.includes('²')) {
                let base = parseFloat(string.replace('²', ''));
                string = Math.pow(base, 2);
            }
            else if (string.includes('³')) {
                let base = parseFloat(string.replace('³', ''));
                string = Math.pow(base, 3);
            }
            else if (string.includes('10^')) {
                let base = parseFloat(string.replace('10^', ''));
                string = Math.pow(10, base);
            }
            else if (string.includes('√')) {
                let base = parseFloat(string.replace('√', ''));
                string = Math.sqrt(base);
            }
            else if (string.includes('∛')) {
                let base = parseFloat(string.replace('∛', ''));
                string = Math.pow(base, 1 / 3);
            }
            // else if (string.includes('n√')) {
            //     let base = parseFloat(string.replace('n√', ''));
            //     let power = parseFloat(string.replace('n√', ''));
            //     string = Math.pow(base, 1 / );
            // }
            
            
            // else if (string.includes('x^')) {
            //     let parts = string.split('x^');
            //     let base = parseFloat(parts[0]); 
            //     let exponent = parseFloat(parts[1]); 
            //     string = Math.pow(base, exponent); 
            // }
            else if (string.includes('!')) {
                let num = parseInt(string);
                if (num >= 0) {
                    let f = 1;
                    for (let i = num; i >= 1; i--) {
                        f *= i;
                    }
                    input.value = f;
                    string = f.toString();
                } else {
                    input.value = "Error";
                }
            }
            else if (string.includes('sin')) {
                let value = extractValueFromFunction(string, 'sin');
                string = Math.sin(toRadians(value));
            }
            else if (string.includes('cos')) {
                let value = extractValueFromFunction(string, 'cos');
                string = Math.cos(toRadians(value));
            }
            else if (string.includes('tan')) {
                let value = extractValueFromFunction(string, 'tan');
                string = Math.tan(toRadians(value));
            }
            // Handle inverse trigonometric functions
            else if (string.includes('sin⁻¹')) {
                let value = extractValueFromFunction(string, 'sin⁻¹');
                string = toDegrees(Math.asin(value));
            }
            else if (string.includes('cos⁻¹')) {
                let value = extractValueFromFunction(string, 'cos⁻¹');
                string = toDegrees(Math.acos(value));
            }
            else if (string.includes('tan⁻¹')) {
                let value = extractValueFromFunction(string, 'tan⁻¹');
                string = toDegrees(Math.atan(value));
            }
            // Handle logarithmic functions
            else if (string.includes('log')) {
                let value = extractValueFromFunction(string, 'log');
                string = Math.log10(value);
            }
            else if (string.includes('ln')) {
                let value = extractValueFromFunction(string, 'ln');
                string = Math.log(value);
            }
            string = eval(string);
            input.value = string;
        }
        else if (item.innerHTML == 'π') {
            string += Math.PI;
            input.value = string;
        }
        else if (item.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (item.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (item.innerHTML == 'ALT' || item.innerHTML == 'alt') {
            input.value = string;
        }
        else if (item.innerHTML == 'x²') {
            string += '²';
            input.value = string;
        }
        else if (item.innerHTML == 'x³') {
            string += '³';
            input.value = string;
        }
        else if (item.innerHTML == 'sin' || item.innerHTML == 'cos'|| item.innerHTML == 'tan' || item.innerHTML == 'sin⁻¹' || item.innerHTML == 'cos⁻¹' || item.innerHTML == 'tan⁻¹' || item.innerHTML == 'log' || item.innerHTML == 'ln') {
            string = item.innerHTML+'(' + string + ')';
            input.value = string;
        }
        else if (item.innerHTML == '√') {
            string = item.innerHTML + string;
            input.value = string;
        }
        else if (item.innerHTML == '∛') {
            string = item.innerHTML + string;
            input.value = string;
        }
        // else if (item.innerHTML == 'n√') {
        //     string = item.innerHTML + string;
        //     input.value = string;
        // }
        else if (item.innerHTML == '|x|') {
            if (string > 0)
                input.value = string;
            else
                input.value = string * -1;
        }
        else if (item.innerHTML == '10^x') {
            string = '10^' + string;
            input.value = string;
        }
        else if (item.innerHTML == 'x!') {
            string += '!';
            input.value = string;
        }
        // else if (item.innerHTML == 'x^y') {
        //     string = string+'^';
        //     input.value = string;
        // }
        // // else if(item.innerHTML=='rad')
        // // {
        // //     string+=
        // //     input.value = string;
        // // }
        else {
            string += item.innerHTML;
            input.value = string;
        }
    }
})
function calculateanyroot() {
    let [base, root] = string.split(',');
    string = Math.pow(parseFloat(base), 1 / parseFloat(root)).toFixed(6);
    input.value = string;
}

function extractValueFromFunction(string, func) {
    let start = string.indexOf(func + '(') + func.length + 1;
    let end = string.indexOf(')', start);
    return parseFloat(string.substring(start, end));
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}



