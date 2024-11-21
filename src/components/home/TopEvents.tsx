import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const topEvents = [
  {
    league: "UEFA Champions League",
    match: "PSG vs Manchester City",
    time: "Mer. 20:45",
    odds: { "1": 2.40, "X": 3.40, "2": 2.90 }
  },
  {
    league: "Premier League",
    match: "Arsenal vs Chelsea",
    time: "Sam. 18:30",
    odds: { "1": 2.10, "X": 3.30, "2": 3.50 }
  },
  {
    league: "La Liga",
    match: "Barcelona vs Atletico Madrid",
    time: "Dim. 21:00",
    odds: { "1": 1.85, "X": 3.50, "2": 4.20 }
  }
];

export default function TopEvents() {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">Événements Populaires</h2>
        </div>
        <Link
          to="/events"
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
        >
          Voir tout
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-4">
        {topEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-blue-600">{event.league}</span>
              <span className="text-sm text-gray-600">{event.time}</span>
            </div>
            
            <h3 className="text-lg font-semibold mb-4">{event.match}</h3>
            
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(event.odds).map(([key, value]) => (
                <button
                  key={key}
                  className="py-3 px-4 text-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="text-sm font-medium text-gray-600">
                    {key === "1" ? "Victoire 1" : key === "X" ? "Nul" : "Victoire 2"}
                  </div>
                  <div className="text-lg font-bold text-blue-600">{value}</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}