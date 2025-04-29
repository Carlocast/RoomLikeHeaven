'use client';

import { useState } from 'react';

interface Casa {
  id: number;
  titolo: string;
  località: string;
  prezzo: number;
  tipo: string;
  immagine: string;
}

interface Props {
  caseDisponibili: Casa[];
}

export default function FiltroRicerca({ caseDisponibili }: Props) {
  const [query, setQuery] = useState('');
  const [tipo, setTipo] = useState('Tutti');
  const [prezzoMax, setPrezzoMax] = useState(1000);
  const [localita, setLocalita] = useState('Tutte');

  const localitaUniche = ['Tutte', ...new Set(caseDisponibili.map(c => c.località))];

  const caseFiltrate = caseDisponibili.filter((casa) => {
    const matchQuery = casa.titolo.toLowerCase().includes(query.toLowerCase()) || casa.località.toLowerCase().includes(query.toLowerCase());
    const matchTipo = tipo === 'Tutti' || casa.tipo === tipo;
    const matchPrezzo = casa.prezzo <= prezzoMax;
    const matchLocalita = localita === 'Tutte' || casa.località === localita;
    return matchQuery && matchTipo && matchPrezzo && matchLocalita;
  });

  return (
    <div className="mt-8 px-4 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Cerca per titolo o località"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="Tutti">Tutti i tipi</option>
          <option value="Villa">Villa</option>
          <option value="Appartamento">Appartamento</option>
        </select>
        <select
          value={localita}
          onChange={(e) => setLocalita(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          {localitaUniche.map((loc, idx) => (
            <option key={idx} value={loc}>{loc}</option>
          ))}
        </select>
        <input
          type="number"
          value={prezzoMax}
          onChange={(e) => setPrezzoMax(Number(e.target.value))}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="Prezzo massimo"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseFiltrate.map((casa) => (
          <div key={casa.id} className="border rounded shadow hover:shadow-lg transition">
            <img src={casa.immagine} alt={casa.titolo} className="w-full h-48 object-cover rounded-t" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{casa.titolo}</h3>
              <p className="text-gray-600">{casa.località}</p>
              <p className="text-green-600 font-bold mt-2">€{casa.prezzo} / notte</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}