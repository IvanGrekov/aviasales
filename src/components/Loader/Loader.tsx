import React from 'react';

import './Loader.scss';

export const Loader = () => (
  <div className="Loader">
    <div className="Loader__spinner" />

    <span className="Loader__text">Загрузка цены...</span>
  </div>
);
