'use client';

import { useParams } from 'next/navigation';

export default function CasaDettaglio() {
  const params = useParams();
  const { id } = params as { id: string };

  return (
    <div>
      <h1>Dettaglio Casa {id}</h1>
      <p>Descrizione completa della casa {id}.</p>
    </div>
  )
}
