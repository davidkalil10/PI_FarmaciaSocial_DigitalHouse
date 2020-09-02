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
    // if (i === 0) {
    //   newValue = newValue += "(";
    // }
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

async function getCep(valor) {
  var cep = valor.replace(/\D/g, "");

  if (cep != "") {
    var validaCep = /^[0-9]{8}$/;
    if (validaCep.test(cep)) {
      try {
        const axiosConfig = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          responseType: "json",
          crossDomain: true,
        };

        const { data } = await axios.get(
          `https://ws.apicep.com/cep/${cep}.json`,
          null,
          axiosConfig
        );

        if (data.status !== 404 && data.status !== 500) {
          setAddressSearchValues(data);
        } else {
          alert("Falha ao encontrar o endereço");
          clearForm();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

function setAddressSearchValues(values) {
  document.getElementById("city").value = values.city;
  document.getElementById("street").value = values.address;
  document.getElementById("neighborhood").value = values.district;
  document.getElementById("state").value = values.state;
}

function clearForm() {
  document.getElementById("cep").value = "";
  document.getElementById("city").value = "";
  document.getElementById("street").value = "";
  document.getElementById("neighborhood").value = "";
  document.getElementById("state").value = "";
}

/**
 * Validations
 */
var validate = new Bouncer("form", {
  customValidations: {
    validation: function (field) {
      switch (field.name) {
        case "name":
          return validateName(field.value);
        case "email":
          return validateEmail(field.value);
        case "phone":
          return validatePhone(field.value);
        case "password":
          return validatePassword(field.value);
        case "cpf":
          return validateCPF(field.value);
        case "cep":
          return validateCEP(field.value);
        case "street":
          return validateStreet(field.value);
        case "neighborhood":
          return validateNeighborhood(field.value);
        case "number":
          return validateNumber(field.value);
        case "city":
          return validateCity(field.value);
        case "state":
          return validateState(field.value);
        default:
          return true;
      }
    },
  },
  messages: {
    // As a function
    validation: function (field) {
      // console.log(field.name);
      // return 'This field should have a value of "hello"';

      switch (field.name) {
        case "name":
          return nameErrorMessage();
        case "email":
          return emailErrorMessage();
        case "phone":
          return phoneErrorMessage();
        case "password":
          return passwordErrorMessage();
        case "cpf":
          return cpfErrorMessage();
        case "cep":
          return cepErrorMessage();
        case "street":
          return streetErrorMessage();
        case "neighborhood":
          return neighborhoodErrorMessage();
        case "number":
          return numberErrorMessage();
        case "city":
          return cityErrorMessage();
        case "state":
          return stateErrorMessage();
        default:
          break;
      }
    },
  },
});

/**
 *  Messages
 */

/**
 *
 * @param {boolean} value
 * @returns {string}
 */
function nameErrorMessage() {
  return "O campo Nome é obrigatório";
}

function emailErrorMessage() {
  return "O campo Email é obrigatório ou não é um email válido";
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function phoneErrorMessage() {
  return "O campo Celular é obrigatório ou não é válido";
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function passwordErrorMessage() {
  return "O campo Senha é obrigatório";
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function cpfErrorMessage() {
  return "O campo CPF é obrigatório ou não é válido";
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function cepErrorMessage() {
  return "O campo CEP é obrigatório ou não é válido";
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function streetErrorMessage() {
  return "O campo Rua é obrigatório";
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function neighborhoodErrorMessage() {
  return "O campo Bairro é obrigatório";
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function numberErrorMessage() {
  return "O campo Número é obrigatório";
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function cityErrorMessage() {
  return "O campo Cidade é obrigatório";
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function stateErrorMessage() {
  return "O campo Estado é obrigatório";
}

/**
 *
 * Validations
 */

/**
 *
 * @param {string} value
 */
function validateName(value) {
  return !value.length > 0 && value === "";
}

/**
 *
 * @param {string} value
 */
function validateEmail(value) {
  const regex = /\S+@\S+\.\S+/;
  return !regex.test(value);
}

/**
 *
 * @param {string} value
 */
function validatePhone(value) {
  const regex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
  return !regex.test(value);
}

/**
 * @param {boolean} value
 */
function validatePassword(value) {
  return value === "";
}

/**
 * @param {boolean} value
 */
function validateCPF(value) {
  const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  return !regex.test(value);
}

/**
 * @param {boolean} value
 */
function validateCEP(value) {
  const regex = /\d{5}\-\d{3}$/;
  return !regex.test(value);
}

/**
 * @param {boolean} value
 */
function validateStreet(value) {
  return value === "";
}

/**
 * @param {boolean} value
 */
function validateNeighborhood(value) {
  return value === "";
}

/**
 * @param {boolean} value
 */
function validateNumber(value) {
  return value === "";
}

/**
 * @param {boolean} value
 */
function validateCity(value) {
  return value === "";
}

/**
 * @param {boolean} value
 */
function validateState(value) {
  return value === "";
}
