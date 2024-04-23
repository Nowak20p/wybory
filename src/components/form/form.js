import React, { useState } from 'react';
import './style.css';

export function Form({ dodajKomitet }) {
  const [nazwa, setNazwa] = useState('');
  const [czyKoalicja, setCzyKoalicja] = useState(false);
  const [iloscGlosow, setIloscGlosow] = useState('');

  const handleDodajKomitet = () => {
    dodajKomitet(nazwa, czyKoalicja, iloscGlosow);
    setNazwa('');
    setCzyKoalicja(false);
    setIloscGlosow('');
  };

  const handleAnuluj = () => {
    setNazwa('');
    setCzyKoalicja(false);
    setIloscGlosow('');
  };

  return (
    <div>
      <form className="w-50 mx-auto shadow p-2 bg-light m-5 ">
        <h3 className="text-primary text-center m-3 w-50 mx-auto">
          Rejestracja komitetów
        </h3>
        <div className="container w-75">
          <label htmlFor="nazwa" className="form-label w-75 ms-5">
            Nazwa komitetu: <br />
            <input
              type="text"
              id="nazwa"
              className="form-control"
              value={nazwa}
              onChange={(e) => setNazwa(e.target.value)}
            />
          </label>
          <br />
          <label
            htmlFor="koalicja"
            className="form-label w-75 text-center ms-3"
          >
            <input
              type="checkbox"
              id="koalicja"
              className="m-3"
              checked={czyKoalicja}
              onChange={(e) => setCzyKoalicja(e.target.checked)}
            />
            Czy jest koalicja
          </label>
          <label htmlFor="ilosc" className="form-label w-75 ms-5">
            Ilość głosów: <br />
            <input
              type="text"
              id="ilosc"
              className="form-control"
              value={iloscGlosow}
              onChange={(e) => setIloscGlosow(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div className="container d-flex justify-content-evenly">
          <button
            type="button"
            className="btn btn-primary  w-30 mx-auto"
            onClick={handleDodajKomitet}
          >
            Dodaj
          </button>
          <button
            type="button"
            className="btn btn-primary  mx-auto w-30 "
            onClick={handleAnuluj}
          >
            Anuluj
          </button>
        </div>
      </form>
    </div>
  );
}
