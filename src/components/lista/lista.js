import React, { useState } from 'react';
export function Lista({ komitety, usunKomitet, edytujKomitet }) {
  return (
    <div className="text-center w-50 mx-auto shadow p-2 bg-light m-5">
      <h3 className="text-primary text-center m-3 w-75 mx-auto">
        Lista komitetów
      </h3>
      <ul>
        {komitety.map((komitet, index) => (
          <li key={index}>
            <strong>{komitet.nazwa}</strong> -{' '}
            {komitet.czyKoalicja ? 'Koalicja' : 'Nie koalicja'} -{' '}
            <strong>{komitet.iloscGlosow}</strong> głosów{' '}
            <button
              onClick={() => usunKomitet(index)}
              className="btn btn-primary"
            >
              Usuń
            </button>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
