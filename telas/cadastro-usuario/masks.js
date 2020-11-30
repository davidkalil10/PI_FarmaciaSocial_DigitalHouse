/**
 * Inputs masks
 */

/**
 * Mask for Phone input
 */
/*document.querySelector("#phone").addEventListener("change", (input) => {
  let value = input.target.value;
  let len;

  let newValue = "";

  for (i = 0, len = value.length; i < len; i++) {
    if (i === 0) {
      newValue = newValue += "(";
    }
    if (i === 2) {
      newValue = newValue += ") ";
    }
    if (i === 7) {
      newValue = newValue += "-";
    }
    newValue = newValue += value.substr(i, 1);
  }

  input.target.value = newValue;
});

*/
/* Nova Mascara para Telefone */
function inputHandler(masks, max, event) {
    var c = event.target;
    var v = c.value.replace(/\D/g, '');
    var m = c.value.length > max ? 1 : 0;
    VMasker(c).unMask();
    VMasker(c).maskPattern(masks[m]);
    c.value = VMasker.toPattern(v, masks[m]);
}

var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
var tel = document.querySelector("#phone");
VMasker(tel).maskPattern(telMask[0]);
tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);

/**
 * Mask for CPF input
 */
/*
document.querySelector("#cpf").addEventListener("change", (input) => {
    let value = input.target.value;
    let len;

    let newValue = "";

    for (i = 0, len = value.length; i < len; i++) {
        if (i === 3) {
            newValue = newValue += ".";
        }
        if (i === 6) {
            newValue = newValue += ".";
        }
        if (i === 9) {
            newValue = newValue += "-";
        }
        newValue = newValue += value.substr(i, 1);
    }

    input.target.value = newValue;
});
*/
/*Nova mascara para CPF */
var docMask = ['999.999.999-999', '99.999.999/9999-99'];
var doc = document.querySelector('#cpf');
VMasker(doc).maskPattern(docMask[0]);
doc.addEventListener('input', inputHandler.bind(undefined, docMask, 14), false);

/**
 * Mask for CEP input
 */
/*
document.querySelector("#cep").addEventListener("change", (input) => {
    let value = input.target.value;
    let len;

    let newValue = "";

    for (i = 0, len = value.length; i < len; i++) {
        if (i === 5) {
            newValue = newValue += "-";
        }
        newValue = newValue += value.substr(i, 1);
    }

    input.target.value = newValue;
});
*/

/*Nova mascara CEP */
var cepMask = ['99999-999'];
var cep = document.querySelector('#cep');
VMasker(cep).maskPattern(cepMask[0]);
cep.addEventListener('input', inputHandler.bind(undefined, cepMask, 14), false);