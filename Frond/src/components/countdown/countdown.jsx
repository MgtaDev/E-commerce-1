import React, { useState, useEffect } from "react";

function Countdown() {
  const [time, setTime] = useState(86400); // segundos en 24 horas

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  // Agregamos "0" delante de los números si son menores a 10
  const formatTime = (time) => `${time < 10 ? "0" : ""}${time}`;

  // Reiniciar la cuenta regresiva
  const resetCountdown = () => {
    setTime(86400);
  };

  return (
    <div className="">
      <div className="flex flex-row items-center justify-center">
        <div className="flex bg-green-500 text-white ml-2 rounded-md py-1 px-2 countdown-timer">
          <p>{formatTime(hours)}:</p>
          <p>{formatTime(minutes)}:</p>
          <p>{formatTime(seconds)}</p>
        </div>
      </div>
      {/* <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={resetCountdown}>Reiniciar</button> */}
    </div>
  );
}

export default Countdown;