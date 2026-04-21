import { Fireworks } from "@fireworks-js/react";
import birthdaySong from "./assets/Birthday-Song.mp3";
import { motion } from "framer-motion";
import { useState } from "react";
import balloon1 from "./assets/balloons.png";

const App = () => {
  const [celebration, SetCelebration] = useState(false);

  const celebrate = () => {
    console.log("BUTTON CHL RHA HA BHAI");
    SetCelebration(true);
  };

  return (
    <>
      {/* SONG */}
      <div>
        <audio autoPlay loop control>
          <source src={birthdaySong} type="audio/mpeg" />
        </audio>
      </div>
      {/* CELEBRATION */}

      {celebration ? (
        <>
          <div className="flex flex-col items-center gap-14 py-8 bg-pink-300 min-h-screen capitalize">
            {/* BIRTHDAY WISH */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center text-center text-xl h-40 w-64 rounded-md bg-[#800020] text-red-200 font-bold shadow-[0_0_25px_rgba(255,0,0,0.6)]"
            >
              HAPPIEST BIRTHDAY TO THE MOST BEAUTIFUL LADY IN THE WORLD
              🎂💗💟🫀🫶🫶💐🎁🎁
            </motion.h1>

            {/* 🎁 FINAL WISH SECTION */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 3.5,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center text-xl h40 w-64 rounded-md bg-[#800020] text-red-200 font-bold shadow-[0_0_25px_rgba(255,0,0,0.6)]"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 5.5,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <h2 className="text-xl font-bold text-center">
                    My Wish For You
                  </h2>
                  <p className="mt-2 text-sm opacity-90 text-center">
                    I WISH YOU ENDLESS HAPPINESS, SUCCESS, AND ALL THE DREAMS
                    YOU’RE CHASING COME TRUE. <br />
                    <br />
                    AND SELFISHLY… I WISH I GET TO BE A PART OF YOUR LIFE FOR
                    MANY MORE BIRTHDAYS TO COME 🎂❤️{" "}
                  </p>
                </motion.p>
              </motion.div>
            </div>

            {/* FOOTER */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 3.5,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center text-xl h40 w-64 rounded-md bg-[#800020] text-red-200 font-bold shadow-[0_0_25px_rgba(255,0,0,0.6)]"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 5.5,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <h2 className="text-4xl font-bold text-center">
                    Made with ❤️ just for you
                    <br />
                    <br />
                    Once again… Happy Birthday 🎉
                  </h2>
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* FIREWORKS */}
          <div>
            <Fireworks
              options={{ opacity: 0.5, particles: 100 }}
              style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 50,
              }}
            />
          </div>
        </>
      ) : (
        <div className="min-h-screen flex flex-col items-center mt-8 gap-14 capitalize">
          {/* HEADER */}
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="text-6xl text-red-600 font-extrabold text-center"
            >
              HEY YOU 👀
            </motion.h1>
          </div>

          {/* BIRTHDATE */}
          <div>
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 3.5,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center text-xl h-40 w-64 rounded-md bg-[#800020] text-red-200 font-bold shadow-[0_0_25px_rgba(255,0,0,0.6)]"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 5.5,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                IT'S 23<sup>rd </sup> JULY 🎂
                <p className="mt-2 text-sm opacity-90 text-center">
                  THE MOST SPECIAL DAY 💖
                </p>
              </motion.p>
            </motion.div>
          </div>

          {/* SPECIAL DAY  */}
          <div>
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 3.5,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center text-xl h-40 w-64 rounded-md bg-[#800020] text-red-200 font-bold shadow-[0_0_25px_rgba(255,0,0,0.6)]"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 5.5,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <h2 className="text-xl font-bold text-center">Guess What?</h2>
                <p className="mt-2 text-sm opacity-90 text-center">
                  TODAY IS NOT A NORMAL DAY
                </p>
              </motion.p>
            </motion.div>
          </div>

          {/* HER BIRTHDAY DIV */}
          <div>
            <motion.div
              initial={{ y: -500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 3.5,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center text-center py-2 text-xl h-40 w-64 rounded-md bg-[#800020] text-red-200 font-bold"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 5.5,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <h2 className="text-xl font-bold text-center">
                  IT'S HER BIRTHDAY ❤️{" "}
                </h2>
                <p className="mt-2 text-sm opacity-90 text-center">
                  SOMEONE VERY SPECIAL WAS BORN TODAY
                </p>
              </motion.p>
            </motion.div>
          </div>

          {/* CELEBRATE BTN */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            <button
              onClick={celebrate}
              className="px-6 py-3 bg-[#FF4D6D] hover:bg-[#E63956] text-[#FFFFFF] rounded-xl shadow-xl"
            >
              LET'S CELEBRATE 🥂🎉🎊🥳
            </button>
          </motion.button>
        </div>
      )}
    </>
  );
};

export default App;
