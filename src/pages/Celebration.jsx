import Fireworks from "@fireworks-js/react";

export default function BirthdayWebsite() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 overflow-hidden relative text-white font-sans">
        {/* Fireworks Background */}
        <div className="absolute inset-0 z-0">
          <Fireworks
            options={{
              rocketsPoint: {
                min: 0,
                max: 100,
              },
              hue: {
                min: 0,
                max: 360,
              },
              delay: {
                min: 20,
                max: 40,
              },
              speed: 3,
              acceleration: 1.05,
              friction: 0.97,
              gravity: 1.5,
              particles: 120,
              traceLength: 3,
              explosion: 6,
              autoresize: true,
              brightness: {
                min: 50,
                max: 80,
              },
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* Floating Blur Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute text-pink-200 opacity-70 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 4}s`,
                fontSize: `${15 + Math.random() * 30}px`,
              }}
            >
              ❤
            </span>
          ))}
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center mt10">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-bounce">
              Happy Birthday 🎂
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-pink-200 mb-6">
              To The Most Special Person 💖
            </h2>

            <p className="text-lg md:text-2xl leading-relaxed text-white/90 mb-8">
              Today is all about you ✨ <br />
              Your smile makes every moment beautiful, your presence makes life
              brighter, and your happiness means everything.
            </p>

            <button className="px-8 py-4 rounded-full bg-white text-pink-600 font-bold text-lg hover:scale-110 hover:bg-pink-100 transition-all duration-300 shadow-lg">
              Made With Love 💕
            </button>
          </div>

          {/* Photo Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <img
              src="https://thumbs.dreamstime.com/b/cartoon-princess-forest-fairy-animals-ai-generated-354788477.jpg"
              alt="memory"
              className="rounded-3xl shadow-2xl h-72 object-cover hover:scale-105 transition duration-500"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt246YWHxb-zjN1bdYIPRJkuydqiZ-j8eyqw&s"
              alt="memory"
              className="rounded-3xl shadow-2xl h-72 object-cover hover:scale-105 transition duration-500"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75eWaSjwqI5SSdpcSPKisauOS_GG059Vibg&s"
              alt="memory"
              className="rounded-3xl shadow-2xl h-72 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Footer */}
          <div className="mt-14 text-white/80 text-sm md:text-base animate-pulse mb-4">
            Crafted specially for someone unforgettable 🌸
          </div>
        </div>

        {/* Tailwind Animation */}
        <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
      `}</style>
      </div>
    </>
  );
}
