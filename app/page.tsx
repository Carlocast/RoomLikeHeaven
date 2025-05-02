'use client';

import { useEffect, useState } from 'react';
import HeroSearch from '../components/HeroSearch';
import ListaCase from '../components/ListaCase';

const tutteLeCase = [
  {
    id: 1,
    titolo: "Villa sul Mare",
    località: "Pescara",
    prezzo: 120,
    tipo: "Villa",
    immagine: "/immagini/casa-roma.jpg",
  },
  {
    id: 2,
    titolo: "Appartamento in Centro",
    località: "Montesilvano",
    prezzo: 80,
    tipo: "Appartamento",
    immagine: "/immagini/casa-venezia.jpg",
  },
  {
    id: 3,
    titolo: "Villa con Piscina",
    località: "Francavilla al Mare",
    prezzo: 200,
    tipo: "Villa",
    immagine: "/immagini/casa-firenze.jpg",
  },
];

export default function HomePage() {
  const [filtri, setFiltri] = useState({
    destinazione: '',
    arrivo: '',
    partenza: '',
    ospiti: 1,
  });

  // Reset filtri ogni volta che si ricarica la pagina
  useEffect(() => {
    setFiltri({
      destinazione: '',
      arrivo: '',
      partenza: '',
      ospiti: 1,
    });
  }, []);

  const caseFiltrate = tutteLeCase.filter((casa) =>
    casa.località.toLowerCase().includes(filtri.destinazione.toLowerCase())
  );

  return (
    <div>
      <HeroSearch setFiltri={setFiltri} />
      <ListaCase caseDisponibili={caseFiltrate} />
    </div>
  );
}