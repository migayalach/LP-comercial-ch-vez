import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { items } = useCart();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  const cantidad = items.reduce((sum, item) => sum + item.quantity, 0);

  const enlaces = [
    { nombre: "Cervezas", ruta: "/categoria/cervezas" },
    { nombre: "Licores", ruta: "/categoria/licores" },
    { nombre: "Refrescos", ruta: "/categoria/refrescos" },
    { nombre: "Cigarrillos", ruta: "/categoria/cigarrillos" },
    { nombre: "Bocaditos", ruta: "/categoria/bocaditos" },
    { nombre: "Hielo", ruta: "/categoria/hielos" },
  ];

const linkActivo = (ruta: string) =>
  location.pathname === ruta
    ? "font-bold text-white border-b-2 border-white pb-2"
    : "text-white/90 hover:text-white border-b-2 border-transparent pb-2";

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setMenuAbierto(false)}
          className="shrink-0 text-lg font-extrabold text-white sm:text-2xl"
        >
          COMERCIAL CHÁVEZ
        </Link>

        {/* MENÚ ESCRITORIO */}
        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.ruta}
              to={enlace.ruta}
              className={`whitespace-nowrap text-sm transition ${linkActivo(enlace.ruta)}`}
            >
              {enlace.nombre}
            </Link>
          ))}
        </nav>

        {/* CARRITO Y BOTÓN MÓVIL */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/carrito"
            aria-label={`Carrito con ${cantidad} productos`}
            className="group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all duration-300 hover:w-28 sm:h-14 sm:w-14"
          >
            {/* ICONO */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.5l2.25 12.75a2.25 2.25 0 0 0 2.25 1.875h9.75a2.25 2.25 0 0 0 2.25-1.875L22.5 7.5H5.25M9 21h.008M18 21h.008"
              />
            </svg>

            {/* CONTADOR */}
            {cantidad > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-primary bg-yellow-400 px-1.5 text-xs font-extrabold text-gray-900 shadow-md">
                {cantidad}
              </span>
            )}

            {/* TEXTO AL PASAR EL RATÓN */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-14 group-hover:opacity-100">
              Carrito
            </span>
          </Link>

          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/30 text-white transition hover:bg-white/10 lg:hidden"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {menuAbierto && (
        <nav className="border-t border-white/20 bg-primary px-4 py-3 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {enlaces.map((enlace) => (
              <Link
                key={enlace.ruta}
                to={enlace.ruta}
                onClick={() => setMenuAbierto(false)}
                className={`border-b border-white/20 py-3 text-sm transition ${linkActivo(enlace.ruta)}`}
              >
                {enlace.nombre}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
