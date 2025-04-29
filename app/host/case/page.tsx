'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Casa {
  id: string;
  nome: string;
  città: string;
  prezzo: number;
  immagine: string;
  descrizione: string;
}

export default function CaseHost() {
  const [caseHost, setCaseHost] = useState<Casa[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('caseHost');
    if (stored) {
      setCaseHost(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">Le Tue Case</h1>
        {caseHost.length === 0 ? (
          <p className="text-gray-600">Non hai ancora pubblicato nessuna casa.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseHost.map((casa) => (
              <div key={casa.id} className="border rounded-xl shadow-sm overflow-hidden">
                <img
                 src={casa.immagine || '/immagini/immagine-default.jpg'}
                 alt={casa.nome}
                 className="w-full h-48 object-cover"
                 />

                <div className="p-4">
                  <h2 className="text-xl font-semibold">{casa.nome}</h2>
                  <p className="text-gray-600">{casa.città}</p>
                  <p className="text-green-700 font-bold mb-2">{casa.prezzo} € / notte</p>
                  <p className="text-gray-700 text-sm">
                       {casa.descrizione ? casa.descrizione.substring(0, 100) + '...' : 'Nessuna descrizione disponibile.'}
                  </p>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}