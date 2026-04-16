// import { Fireworks } from "@fireworks-js/react";
// import birthdaySong from "./assets/Birthday-Song.mp3";
// // import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";

// const App = () => {
//   return (
//     <>
//       {/* <Fireworks
//         options={{ opacity: 0.5, particles: 100 }}
//         style={{ width: "100%", height: "100%", position: "fixed", top: 0 }}
//       /> */}
//       <div>
//         <br />
//         <br />
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 1.2,
//             delay: 0.5,
//             ease: "easeInOut",
//           }}
//           className="text-6xl text-red-600 font-extrabold text-center"
//         >
//           HELLO EVERYONE 👋
//         </motion.h1>
//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 2.5,
//             delay: 0.5,
//             ease: "easeInOut",
//           }}
//           className="text-3xl text-red-500 font-bold text-center"
//         >
//           GUESS WHAT
//         </motion.h2>
//         <div className="h-screen flex items-center justify-center">
//           <motion.div
//             initial={{ x: -500 }}
//             animate={{ x: 0 }}
//             transition={{
//               duration: 3.5,
//               delay: 0.5,
//               ease: "easeInOut",
//             }}
//             className="flex items-center justify-center text-xl h-40 w-64 rounded-md bg-red-950 text-red-200 font-bold shadow-[0_0_25px_rgba(255,0,0,0.6)]"
//           >
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 duration: 5.5,
//                 delay: 0.5,
//                 ease: "easeInOut",
//               }}
//             >
//               IT'S 19 <sup>th </sup> MAY
//             </motion.p>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// import { motion } from "framer-motion";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-pink-200 flex flex-col items-center">
//       {/* Top Text */}
//       <div className="flex flex-col items-center pt-10">
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-6xl text-red-600 font-extrabold text-center"
//         >
//           HELLO EVERYONE 👋
//         </motion.h1>
//         <br />
//         <br />
//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-3xl text-red-500 font-bold text-center mt-2"
//         >
//           GUESS WHAT
//         </motion.h2>
//       </div>
//       <br />
//       <motion.div
//         initial={{ x: -500 }}
//         animate={{ x: 0 }}
//         transition={{ duration: 3.5, delay: 0.5 }}
//         className="mt-10 flex items-center justify-center text-xl h-40 w-64 rounded-md bg-red-950 text-red-200 font-bold shadow-[0_0_25px_rgba(255,0,0,0.6)]"
//       >
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 5.5, delay: 0.5 }}
//         >
//           IT'S 19 <sup>th</sup> MAY
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// export default App;

import { Fireworks } from "@fireworks-js/react";
import birthdaySong from "./assets/Birthday-Song.mp3";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      {/* Fireworks (optional) */}
      {/* <Fireworks
        options={{ opacity: 0.5, particles: 100 }}
        style={{ width: "100%", height: "100%", position: "fixed", top: 0 }}
      /> */}

      <div className="min-h-screen bg-pink-200 flex flex-col items-center">
        {/* Top Text */}
        <div className="flex flex-col items-center pt-10">
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
            HELLO EVERYONE 👋
          </motion.h1>

          <br />
          <br />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="text-5xl text-red-500 font-bold text-center"
          >
            GUESS WHAT
          </motion.h2>
        </div>

        {/*   BIRTHDAY DATE */}
        <br />
        <br />
        <div>
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 3.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center text-xl h-40 w-64 rounded-md bg-red-950 text-red-200 font-bold shadow-[0_0_25px_rgba(255,0,0,0.6)]"
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
              IT'S XX <sup>th</sup> XX
            </motion.p>
          </motion.div>
        </div>

        {/* IT'S HER BIRTHDAY DIV */}
        <br />
        <br />
        <div>
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 10.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center text-xl h-40 w-64 rounded-md bg-red-950 text-red-200 font-bold shadow-[0_0_25px_rgba(255,0,0,0.6)]"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 12.5,
                delay: 0.5,
                ease: "easeInOut",
              }}
            >
              IT'S HER BIRTHDAY
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default App;
