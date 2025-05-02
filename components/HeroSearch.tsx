'use client';

import { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format, isBefore, isSameDay } from 'date-fns';

export default function HeroSearch({ setFiltri }: { setFiltri: Function }) {
  const [destination, setDestination] = useState('');
  const [guests, setGuests] = useState(1);
  const [arriveDate, setArriveDate] = useState(new Date());
  const [departDate, setDepartDate] = useState(new Date());
  const [showArriveCalendar, setShowArriveCalendar] = useState(false);
  const [showDepartCalendar, setShowDepartCalendar] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // 🔧 fix per rendere selezionabile oggi

  const handleArriveSelect = (date: Date) => {
    setArriveDate(date);
    setShowArriveCalendar(false);

    if (isBefore(departDate, date) || isSameDay(departDate, date)) {
      const newDepart = new Date(date);
      newDepart.setDate(newDepart.getDate() + 1);
      setDepartDate(newDepart);
    }
  };

  const handleDepartSelect = (date: Date) => {
    setDepartDate(date);
    setShowDepartCalendar(false);
  };

  const handleSearch = () => {
    setFiltri({
      destinazione: destination,
      arrivo: format(arriveDate, 'yyyy-MM-dd'),
      partenza: format(departDate, 'yyyy-MM-dd'),
      ospiti: guests,
    });
  };

  return (
    <div className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/immagini/hero-casa.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Book and visit wonderful places</h1>
        <p className="text-lg md:text-xl mb-8">Plan a trip to any part of the world</p>

        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-6xl grid grid-cols-1 md:grid-cols-6 gap-2 items-center relative z-20">
          <input
            type="text"
            placeholder="Where to go?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border rounded px-4 py-2 col-span-2 text-black"
          />

          <div className="relative">
            <div
              onClick={() => {
                setShowArriveCalendar(!showArriveCalendar);
                setShowDepartCalendar(false);
              }}
              className="border rounded px-4 py-2 bg-white cursor-pointer text-black"
            >
              <span>Arrive: {format(arriveDate, 'dd/MM/yyyy')}</span>
            </div>
            {showArriveCalendar && (
              <div className="absolute top-14 z-30">
                <Calendar
                  date={arriveDate}
                  onChange={handleArriveSelect}
                  minDate={today}
                />
              </div>
            )}
          </div>

          <div className="relative">
            <div
              onClick={() => {
                setShowDepartCalendar(!showDepartCalendar);
                setShowArriveCalendar(false);
              }}
              className="border rounded px-4 py-2 bg-white cursor-pointer text-black"
            >
              <span>Depart: {format(departDate, 'dd/MM/yyyy')}</span>
            </div>
            {showDepartCalendar && (
              <div className="absolute top-14 z-30">
                <Calendar
                  date={departDate}
                  onChange={handleDepartSelect}
                  minDate={new Date(arriveDate.getTime() + 24 * 60 * 60 * 1000)}
                />
              </div>
            )}
          </div>

          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="border rounded px-4 py-2 text-black"
            placeholder="Guests"
          />

          <button
            onClick={handleSearch}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}