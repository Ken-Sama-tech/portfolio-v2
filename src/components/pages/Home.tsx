import { type FC } from "react";
import logo from "@assets/hero.png";
import { Download, Code2 } from "lucide-react";

const Home: FC = () => {
  return (
    <section className="mb-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Apiring Idk</h2>
        <p className="text-yellow-200/70 mb-6">
          Pretend this is an introduction about myslef
        </p>

        <div className="flex gap-4">
          <button className="button-gold flex gap-2 items-center">
            View Projects <Code2 color="black" className="h-5" />
          </button>

          <button className="button-outline flex gap-2 items-center">
            Resume
            <Download className="h-5" />
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <img
            src={logo}
            alt="Profile"
            className="w-64 h-64 object-fill rounded-full border-2 border-yellow-500 shadow-lg"
          />
          <div className="absolute inset-0 rounded-full border border-yellow-500/30 blur-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
