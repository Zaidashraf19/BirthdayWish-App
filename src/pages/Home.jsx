import { useEffect, useRef, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [birthdate, Setbirthdate] = useState([]);
  const navigate = useNavigate();

  // ADD NUMBER
  const handleNumberClick = (num) => {
    if (birthdate.length < 4) {
      Setbirthdate((prev) => [...prev, num]);
    }
  };

  // DELETE LAST NUMBER
  const handleDelete = () => {
    Setbirthdate((prev) => prev.slice(0, -1));
  };

  // NEXT BUTTON
  const nextbtn = () => {
    if (birthdate.length < 4) {
      alert("ENTER COMPLETE CODE");
      return;
    }

    const code = birthdate.join("");

    if (code === "1905" || code === "2306") {
      navigate("/celebration");
    } else {
      alert("WRONG PASSCODE");
    }
  };

  // DIAL NUMBERS
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  return (
    <>
      {/* MAIN CONTAINER */}
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 flex items-center justify-center px-5 py-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-6xl flex flex-col lg:flex-row gap-10 items-center">
          {/* IMAGE SECTION */}
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/736x/72/b5/dc/72b5dcf7d3451a5a629b684ecdc65ec8.jpg"
              alt="Birthday"
              className="w-[320px] md:w-[400px] rounded-3xl border-4 border-white shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* PASSCODE SECTION */}
          <div className="flex flex-col items-center w-full">
            <h1 className="text-4xl font-extrabold text-white mb-2 text-center animate-pulse">
              ENTER PASSCODE 🔐
            </h1>

            <p className="text-white/80 mb-8 text-center">
              Hint: A special date 💖
            </p>

            {/* DISPLAY */}
            <div className="flex gap-4 mb-8">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center text-2xl font-bold text-white bg-white/10 backdrop-blur-md"
                >
                  {birthdate[index] || ""}
                </div>
              ))}
            </div>

            {/* DIAL PAD */}
            <div className="grid grid-cols-3 gap-5">
              {numbers.map((num, index) => (
                <button
                  key={index}
                  onClick={() => handleNumberClick(num)}
                  className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-2xl font-bold hover:scale-110 hover:bg-white/30 active:scale-95 transition duration-300 shadow-lg"
                >
                  {num}
                </button>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-8">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
              >
                DELETE
              </button>

              <button
                onClick={nextbtn}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
