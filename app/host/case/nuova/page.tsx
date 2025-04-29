'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function NuovaCasa() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [città, setCittà] = useState('');
  const [prezzo, setPrezzo] = useState('');
  const [immagine, setImmagine] = useState('');
  const [descrizione, setDescrizione] = useState('');

  const handleAggiungi = (e: React.FormEvent) => {
    e.preventDefault();
    const nuovaCasa = {
      id: uuidv4(),
      nome,
      città,
      prezzo: Number(prezzo),
      immagine,
      descrizione,
    };
    const stored = localStorage.getItem('caseHost');
    const caseHost = stored ? JSON.parse(stored) : [];
    caseHost.push(nuovaCasa);
    localStorage.setItem('caseHost', JSON.stringify(caseHost));
    router.push('/host/case');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleAggiungi} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Aggiungi una Nuova Casa</h1>
        <input
          type="text"
          placeholder="Nome Casa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Città"
          value={città}
          onChange={(e) => setCittà(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Prezzo per notte (€)"
          value={prezzo}
          onChange={(e) => setPrezzo(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          placeholder="URL Immagine"
          value={immagine}
          onChange={(e) => setImmagine(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          placeholder="Descrizione Estesa"
          value={descrizione}
          onChange={(e) => setDescrizione(e.target.value)}
          className="w-full p-3 border rounded"
          rows={4}
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition">
          Pubblica Casa
        </button>
      </form>
    </div>
  );
}