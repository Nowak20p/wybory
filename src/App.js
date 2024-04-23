import React, { useState } from 'react';
import './style.css';
import { Form } from './components/form/form';
import { Lista } from './components/lista/lista';
import { Procenty } from './components/procenty/procenty';

export default function App() {
  const [komitety, setKomitety] = useState([]);

  const dodajKomitet = (nazwa, czyKoalicja, iloscGlosow) => {
    const nowyKomitet = {
      nazwa: nazwa,
      czyKoalicja: czyKoalicja,
      iloscGlosow: iloscGlosow,
    };
    setKomitety([...komitety, nowyKomitet]);
  };

  const usunKomitet = (index) => {
    const noweKomitety = [...komitety];
    noweKomitety.splice(index, 1);
    setKomitety(noweKomitety);
  };

  return (
    <div>
      <div className="text-center w-50 mx-auto shadow p-2 bg-light m-5">
        <h1 className="text-primary">Kalkulator wyborczy</h1>
      </div>
      <Form dodajKomitet={dodajKomitet} />
      <Lista komitety={komitety} usunKomitet={usunKomitet} />
      <Procenty komitety={komitety} />
      <footer className="text-center w-50 mx-auto shadow p-2 bg-light">
        <p className="text-primary">&copy;JA</p>
      </footer>
    </div>
  );
}
