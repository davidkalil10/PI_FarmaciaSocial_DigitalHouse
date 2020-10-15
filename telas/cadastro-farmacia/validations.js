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
