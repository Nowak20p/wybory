import React from 'react';

export function Procenty({ komitety }) {
  const sumaGlosow = komitety.reduce(
    (suma, komitet) => suma + parseInt(komitet.iloscGlosow),
    0
  );
  const progWyborczyKoalicja = 8;
  const progWyborczyKomitet = 5;

  return (
    <div className="text-center w-50 mx-auto shadow p-2 bg-light m-5">
      <h3 className="text-primary text-center m-3 w-75 mx-auto">
        Progi wyborcze
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nazwa komitetu</th>
            <th scope="col">Ilość głosów</th>
            <th scope="col">Wynik procentowy (%)</th>
            <th scope="col">Prog wyborczy (%)</th>
          </tr>
        </thead>
        <tbody>
          {komitety.map((komitet, index) => {
            const wynikProcentowy =
              (parseInt(komitet.iloscGlosow) / sumaGlosow) * 100;
            const klasaTla =
              wynikProcentowy >=
              (komitet.czyKoalicja ? progWyborczyKoalicja : progWyborczyKomitet)
                ? 'bg-success'
                : 'bg-danger';

            return (
              <tr key={index}>
                <td className={klasaTla}>{komitet.nazwa}</td>
                <td className={klasaTla}>{komitet.iloscGlosow}</td>
                <td className={klasaTla}>{wynikProcentowy.toFixed(2)}</td>
                <td className={klasaTla}>
                  {komitet.czyKoalicja
                    ? progWyborczyKoalicja
                    : progWyborczyKomitet}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
