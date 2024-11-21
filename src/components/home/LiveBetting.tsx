import React from 'react';
import { Play, Clock } from 'lucide-react';

const liveMatches = [
  {
    sport: "Football",
    time: "65'",
    teams: ["Real Madrid", "Liverpool"],
    scores: [2, 1],
    odds: { "1": 1.45, "X": 4.50, "2": 6.75 }
  },
  {
    sport: "Tennis",
    time: "Set 2",
    teams: ["Djokovic", "Nadal"],
    scores: [1, 1],
    odds: { "1": 1.90, "2": 1.85 }
  },
  {
    sport: "Basketball",
    time: "Q3",
    teams: ["Lakers", "Warriors"],
    scores: [78, 82],
    odds: { "1": 2.10, "2": 1.70 }
  }
];

export default function LiveBetting() {
  return (
    <div className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <Play className="w-6 h-6 text-red-500 animate-pulse" />
        <h2 className="text-2xl font-bold text-gray-900">En Direct</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {liveMatches.map((match, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">{match.sport}</span>
              <div className="flex items-center gap-1 text-red-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{match.time}</span>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              {match.teams.map((team, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="font-medium">{team}</span>
                  <span className="text-lg font-bold">{match.scores[idx]}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(match.odds).map(([key, value]) => (
                <button
                  key={key}
                  className="py-2 px-3 text-center rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="text-sm text-gray-600">{key}</div>
                  <div className="font-bold text-blue-600">{value}</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}