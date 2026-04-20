import { useEffect, type FC } from "react";
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

  useEffect(() => {
    const page =
      pages.find((p) => p.path === location.pathname)?.label || "Home";

    document.title = `Portfolio - ${page}`;
  }, [location]);

  return (
    <nav
      className="
      sticky top-0 z-50
      flex items-center justify-between
      px-4 py-3
      mb-12
      bg-neutral-950/70 backdrop-blur-md
      border-b border-yellow-500/10
    "
    >
      <NavLink to="/">
        <h1
          className="
          gradient-gold bg-clip-text text-transparent!
          text-xl! font-semibold tracking-wide
          hover:opacity-80 transition
          lg:text-3xl!
        "
        >
          Ken Gallarde
        </h1>
      </NavLink>

      <div className="flex gap-6 items-center">
        {pages.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `
              text-sm transition-all duration-200
              ${isActive ? "text-yellow-400" : "text-white/60 hover:text-white"}
              `
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
