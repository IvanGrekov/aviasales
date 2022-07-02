import React, { useState, useMemo } from 'react';

import { Input } from '../Input';

import {
  InputValues,
  ValidInputsOption,
  ValidInputsValues,
  InputsValidatorsOption,
  InputsInterface,
} from '../../types';

import {
  validateEmail,
  validatePhoneNumber,
  validatePassportNumber,
  handleInputsValid,
  handleNameValidate,
} from '../../helpers/FormBuyTicketHelper';

import './FormBuyTicket.scss';

//#region Constants
const initialInputValues: ValidInputsValues = {
  firstName: '',
  secondName: '',
  email: '',
  phone: '',
  passportNumber: '',
};

const inputNames: InputValues = {
  firstName: 'firstName',
  secondName: 'secondName',
  email: 'email',
  phone: 'phone',
  passportNumber: 'passportNumber',
};

const initialAreInputsValid: ValidInputsOption = {
  firstName: true,
  secondName: true,
  email: true,
  phone: true,
  passportNumber: true,
};

const defaultPhoneNumber = '123-456-7890';
const defaultPassportNumber = 'АБ123456';
//#endregion

export const FormBuyTicket = React.memo(
  ({ handleSetFormActive }: { handleSetFormActive: Function }) => {
    const { firstName, secondName, email, phone, passportNumber }: InputValues =
      inputNames;

    const [inputValues, setInputValues] = useState(initialInputValues);
    const [areInputsValid, setAreInputsValid] = useState(initialAreInputsValid);

    const buttonDisabled = useMemo(
      () => Object.values(areInputsValid).includes(false),
      [areInputsValid]
    );

    const inputsValidators: InputsValidatorsOption = useMemo(
      () => ({
        [firstName]: (value: string): void => {
          handleNameValidate(setAreInputsValid, firstName, value);
        },

        [secondName]: (value: string): void => {
          handleNameValidate(setAreInputsValid, secondName, value);
        },

        [email]: (value: string): void => {
          if (validateEmail(value)) {
            handleInputsValid(setAreInputsValid, email, true);
          } else {
            handleInputsValid(setAreInputsValid, email, false);
          }
        },

        [phone]: (value: string): void => {
          if (validatePhoneNumber(value)) {
            handleInputsValid(setAreInputsValid, phone, true);
          } else {
            handleInputsValid(setAreInputsValid, phone, false);
          }
        },

        [passportNumber]: (value: string): void => {
          if (validatePassportNumber(value)) {
            handleInputsValid(setAreInputsValid, passportNumber, true);
          } else {
            handleInputsValid(setAreInputsValid, passportNumber, false);
          }
        },
      }),
      [email, firstName, passportNumber, phone, secondName]
    );

    const inputs: InputsInterface[] = useMemo(
      () => [
        {
          name: firstName,
          type: 'text',
          title: 'Имя',
          format: '',
          placeholder: 'Введите имя',
        },

        {
          name: secondName,
          type: 'text',
          title: 'Фамилия',
          format: '',
          placeholder: 'Введите фамилию',
        },

        {
          name: email,
          type: 'text',
          title: 'Email',
          format: '',
          placeholder: 'aviasales@gmail.com',
        },

        {
          name: phone,
          type: 'text',
          title: 'Номер телефона',
          format: defaultPhoneNumber,
          placeholder: defaultPhoneNumber,
        },

        {
          name: passportNumber,
          type: 'text',
          title: 'Серия и номер паспорта',
          format: defaultPassportNumber,
          placeholder: defaultPassportNumber,
        },
      ],
      [email, firstName, passportNumber, phone, secondName]
    );

    return (
      <form
        action=""
        className="FormBuyTicket"
        onSubmit={(event) => {
          event.preventDefault();

          handleSetFormActive();
        }}
      >
        {inputs.map((item: InputsInterface) => (
          <Input
            key={item.name}
            item={item}
            inputsValidators={inputsValidators}
            inputValues={inputValues}
            setInputValues={setInputValues}
            areInputsValid={areInputsValid}
            passportNumber={passportNumber}
          />
        ))}

        <button
          className="FormBuyTicket__button"
          type="submit"
          disabled={buttonDisabled}
        >
          Купить
        </button>
      </form>
    );
  }
);
