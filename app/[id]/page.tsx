'use client';

import { useParams } from 'next/navigation';

export default function CasaDettaglioPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Dettaglio Casa {id}</h1>
    </div>
  )
}
