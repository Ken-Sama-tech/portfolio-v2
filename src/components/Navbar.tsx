import { type FC } from "react";
import { NavLink } from "react-router-dom";

type Page = {
  path: string;
  label: string;
};

const pages: Page[] = [
  { path: "/about", label: "About" },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const Navbar: FC = () => {
  return (
    <nav className="flex items-center sticky top-0 bg-(--dark-bg) z-9 justify-between mb-16 pb-4 border-b border-yellow-500/20 ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? (document.title = "Portfolio - Home") : ""
        }
      >
        <h1>Ken Gallarde</h1>
      </NavLink>

      <div className="flex gap-4 md:gap-6 items-center">
        {pages.map(({ path, label }) => {
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? (document.title = `Portfolio - ${label}`) : ""
              }
            >
              {label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
