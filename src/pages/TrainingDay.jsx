import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { trainingData } from "../data"; // Importa los datos de entrenamiento

const TrainingDay = () => {
  // Obtén el día seleccionado desde la URL
  const { day } = useParams();

  // Estado para manejar los ejercicios y sus sesiones
  const [exercises, setExercises] = useState(trainingData[day - 1].exercises);

  // Función para marcar/desmarcar una sesión
  const handleSessionToggle = (exerciseIndex, sessionIndex) => {
    const updatedExercises = [...exercises];
    updatedExercises[exerciseIndex].sessions[sessionIndex] =
      !updatedExercises[exerciseIndex].sessions[sessionIndex];
    setExercises(updatedExercises);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Día {day} - Ejercicios</h1>
      <div className="space-y-4">
        {exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex} className="p-4 bg-gray-100 rounded-lg">
            {/* Nombre del ejercicio y repeticiones */}
            <h2 className="text-xl font-semibold">
              {exercise.name} <span className="text-gray-600">({exercise.repetitions})</span>
            </h2>

            {/* Sesiones del ejercicio */}
            <div className="mt-2">
              {exercise.sessions.map((session, sessionIndex) => (
                <button
                  key={sessionIndex}
                  onClick={() => handleSessionToggle(exerciseIndex, sessionIndex)}
                  className={`p-2 m-1 rounded ${
                    session ? "bg-green-500" : "bg-red-500"
                  } text-white`}
                >
                  Sesión {sessionIndex + 1}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingDay;