import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Selecciona un día de entrenamiento</h1>
      <div className="space-y-2">
        {[1, 2, 3, 4].map((day) => (
          <Link
            key={day}
            to={`/training/${day}`}
            className="block p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600"
          >
            Día {day}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;