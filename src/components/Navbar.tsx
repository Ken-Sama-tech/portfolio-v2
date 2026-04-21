import { Menu } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

type Page = {
  path: string;
  label: string;
};

const pages: Page[] = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Navbar: FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const page =
      pages.find((p) => p.path === location.pathname)?.label || "Home";

    document.title = `Portfolio - ${page}`;
    setOpen(false); // close menu on route change
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 mb-12 bg-neutral-950/70 backdrop-blur-md border-b border-yellow-500/10">
      <NavLink to="/">
        <h1 className="gradient-gold bg-clip-text text-transparent text-xl font-semibold tracking-wide hover:opacity-80 transition lg:text-3xl">
          Ken Gallarde
        </h1>
      </NavLink>

      {/* Menu Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden size-6"
      >
        <Menu className="w-full h-full" />
      </button>

      {/* Nav Items */}
      <div
        className={`
          fixed top-15 right-0 w-64 h-screen bg-neutral-900
          flex flex-col gap-4 p-6
          transition-all duration-300
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
          
          md:static md:h-auto md:w-auto md:bg-transparent
          md:flex-row md:items-center md:gap-6
          md:translate-x-0 md:opacity-100 md:pointer-events-auto
        `}
      >
        {pages.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? "text-yellow-400" : "text-white/60 hover:text-white"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
