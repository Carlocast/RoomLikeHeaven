'use client';

import { FaBed, FaBath, FaUserFriends, FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function CardCasa({ casa }: { casa: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      <div className="relative">
        <Image
          src={casa.immagine || '/immagini/default.jpg'}
          alt={casa.titolo}
          width={500}
          height={300}
          className="w-full h-60 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
          <p className="text-xl font-semibold">€{casa.prezzo}.00<span className="text-sm font-normal">/night</span></p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{casa.titolo}</h3>
        <p className="text-sm text-gray-500 mb-2">{casa.indirizzo || 'Indirizzo non disponibile'}</p>

        <div className="flex flex-wrap items-center text-gray-700 text-sm gap-4 mb-2">
          <div className="flex items-center gap-1"><FaBed className="text-gray-500" /> {casa.camere} Bedrooms</div>
          <div className="flex items-center gap-1"><FaBath className="text-gray-500" /> {casa.bagni} Baths</div>
          <div className="flex items-center gap-1"><FaUserFriends className="text-gray-500" /> {casa.ospiti} Guests</div>
        </div>

        <p className="text-sm text-gray-700 italic">{casa.tipo}</p>

        <div className="flex items-center mt-2 text-sm text-gray-600">
          <FaStar className="text-yellow-500 mr-1" /> 4.0 - 0 Reviews
        </div>
      </div>
    </div>
  );
}