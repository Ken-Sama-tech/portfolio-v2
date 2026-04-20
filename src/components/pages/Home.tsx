import { type FC } from "react";
import logo from "@assets/hero.png";
import { Download, Code2 } from "lucide-react";

const Home: FC = () => {
  return (
    <section className="mb-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-gold bg-clip-text text-transparent!">
          Aspiring Dev
        </h2>

        <p className="text-white/70! mb-6">
          Self-taught developer who build applications for convenience.
        </p>

        <div className="flex gap-4">
          <button className="button-gold flex gap-2 items-center">
            View Projects <Code2 className="h-5" color="black" />
          </button>

          <button className="button-outline flex gap-2 items-center rounded-full">
            <span className="text-yellow-500!">Resume</span>
            <Download className="h-5 text-yellow-500!" />
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <img
            src={logo}
            alt="Profile"
            className="w-64 h-64 object-fill rounded-full border-2 border-yellow-500/80 shadow-[0_0_25px_rgba(234,179,8,0.25)]"
          />

          <div className="absolute inset-0 rounded-full border border-yellow-500/30 blur-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
