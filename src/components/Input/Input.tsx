import React from 'react';
import classNames from 'classnames';

import { handleInputValues } from '../../helpers/FormBuyTicketHelper';
import {
  InputsValidatorsOption,
  ValidInputsOption,
  ValidInputsValues,
  InputsInterface,
} from '../../types';

import './Input.scss';

export const Input = ({
  item,
  inputsValidators,
  inputValues,
  setInputValues,
  areInputsValid,
  passportNumber,
}: {
  item: InputsInterface;
  inputsValidators: InputsValidatorsOption;
  inputValues: ValidInputsValues;
  setInputValues: Function;
  areInputsValid: ValidInputsOption;
  passportNumber: string;
}) => {
  const { name, type, title, format, placeholder } = item;

  return (
    <div className="Input">
      <label htmlFor={name} className="Input__label">
        <h3 className="Input__label-text">
          {title}
          {format !== '' && (
            <span className="Input__format">{` (${format})`}</span>
          )}
        </h3>

        <input
          id={name}
          className={classNames('Input__input', {
            'Input__input--valid-error': !areInputsValid[name],
            'Input__input--valid-success':
              areInputsValid[name] && inputValues[name] !== '',
          })}
          type={type}
          name={name}
          placeholder={placeholder}
          required
          value={inputValues[name]}
          onChange={(event) => {
            const value =
              name === passportNumber
                ? event.target.value.toUpperCase()
                : event.target.value;

            handleInputValues(setInputValues, name, value);
            inputsValidators[name](value);
          }}
        />

        <div
          className={classNames('Input__validation-icon', {
            'Input__validation-icon--active':
              areInputsValid[name] && inputValues[name] !== '',
          })}
        ></div>
      </label>
    </div>
  );
};
