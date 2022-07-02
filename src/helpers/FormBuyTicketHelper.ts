import { InputValues, ValidInputs } from '../types';

//#region Patterns
const emailRegexpPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneNumberPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const passportNumberPattern = new RegExp('^([А-ЯЁ]{2})([0-9]{6})$', 'u');
//#endregion

//#region Validators
export const validateEmail = (email: string): boolean =>
  emailRegexpPattern.test(email.toLowerCase());

export const validatePhoneNumber = (phone: string): boolean =>
  phoneNumberPattern.test(phone);

export const validatePassportNumber = (passportNumber: string): boolean =>
  passportNumberPattern.test(passportNumber);
//#endregion

//#region Handlers
export const handleInputsValid = (
  setAreInputsValid: Function,
  input: string,
  value: boolean
): void => {
  setAreInputsValid(
    (prevState: ValidInputs): ValidInputs => ({
      ...prevState,
      [input]: value,
    })
  );
};

export const handleNameValidate = (
  setAreInputsValid: Function,
  input: string,
  value: string
): void => {
  if (value === '' || value === ' ') {
    handleInputsValid(setAreInputsValid, input, false);
  } else {
    handleInputsValid(setAreInputsValid, input, true);
  }
};

export const handleInputValues = (
  setInputValues: Function,
  input: string,
  value: string
): void => {
  setInputValues(
    (state: InputValues): InputValues => ({
      ...state,
      [input]: value,
    })
  );
};
//#endregion
