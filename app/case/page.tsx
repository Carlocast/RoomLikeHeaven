'use client';

import CardCasa from '../../components/CardCasa';
import { useState } from 'react';

const caseDisponibili = [
  {
    id: 1,
    titolo: "Villa sul Mare",
    località: "Pescara",
    prezzo: 120,
    tipo: "Villa",
    ospiti: 4,
    camere: 2,
    bagni: 1,
    immagine: "casa-roma.jpg"
  },
  {
    id: 2,
    titolo: "Appartamento in Centro",
    località: "Montesilvano",
    prezzo: 80,
    tipo: "Appartamento",
    ospiti: 2,
    camere: 1,
    bagni: 1,
    immagine: "casa-venezia.jpg"
  },
  {
    id: 3,
    titolo: "Villa con Piscina",
    località: "Francavilla al Mare",
    prezzo: 200,
    tipo: "Villa",
    ospiti: 6,
    camere: 3,
    bagni: 2,
    immagine: "casa-firenze.jpg"
  }
];

export default function PaginaCase() {
  const [lista] = useState(caseDisponibili);

  return (
    <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {lista.map((casa) => (
        <CardCasa key={casa.id} casa={{ ...casa, immagine: `/immagini/${casa.immagine}` }} />
      ))}
    </div>
  );
}