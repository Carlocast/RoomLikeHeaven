import Link from "next/link";
import { Casa } from "@/utils/dataCase";

interface CardCasaProps {
  casa: Casa;
}

export default function CardCasa({ casa }: CardCasaProps) {
  return (
    <div className="border border-gray-300 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link href={`/case/${casa.id}`}>
        <div className="cursor-pointer">
          <img src={casa.immagini[0]} alt={casa.nome} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{casa.nome}</h2>
            <p className="text-gray-600 mb-2">{casa.città}</p>
            <p className="text-green-600 font-bold">{casa.prezzo} € / notte</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
