import React from 'react';

import { ChooseCurrency } from './components/ChooseCurrency';
import { ChooseStopsAmount } from './components/ChooseStopsAmount';
import { TicketsList } from './components/TicketsList';

import './App.scss';

export const App = () => (
  <div className="App">
    <header className="App__header">
      <h1 className="App__title visually-hidden">Aviasales</h1>

      <div className="App__logo"></div>
    </header>

    <main className="App__main">
      <section className="App__search-params">
        <h2 className="visually-hidden">Filtering ans sorting of tickets</h2>

        <div className="App__currency">
          <ChooseCurrency />
        </div>

        <ChooseStopsAmount />
      </section>

      <section className="App__tickets-list">
        <h2 className="visually-hidden">Tickets</h2>

        <TicketsList />
      </section>
    </main>
  </div>
);
