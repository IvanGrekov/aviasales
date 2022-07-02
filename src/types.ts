export interface TicketInterface {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
  id: string;
}

export type ValidInputsValues = {
  [key: string]: string;
};

export interface InputValues {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  passportNumber: string;
}

export type ValidInputsOption = {
  [key: string]: boolean;
};

export interface ValidInputs {
  firstName: boolean;
  secondName: boolean;
  email: boolean;
  phone: boolean;
  passportNumber: boolean;
}

export type InputsValidatorsOption = {
  [key: string]: Function;
};

export interface InputsInterface {
  name: string;
  type: string;
  title: string;
  format: string;
  placeholder: string;
}
