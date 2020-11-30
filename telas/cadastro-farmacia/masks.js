/**
 * Inputs masks
 */

/**
 * Mask for Phone input
 */
document.querySelector("#phone").addEventListener("change", (input) => {
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

/**
 * Mask for CPF input
 */
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

/**
 * Mask for CEP input
 */
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
