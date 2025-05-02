'use client';

interface Casa {
  id: number;
  titolo: string;
  località: string;
  prezzo: number;
  tipo: string;
  immagine: string;
}

export default function ListaCase({ caseDisponibili }: { caseDisponibili: Casa[] }) {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Le nostre proposte</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseDisponibili.map((casa) => (
          <div key={casa.id} className="border rounded shadow hover:shadow-lg transition bg-white">
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