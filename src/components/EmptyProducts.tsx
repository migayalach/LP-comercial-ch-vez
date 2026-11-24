import { Link } from "react-router-dom";

function EmptyProducts() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* ICONO */}
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 21h.01M18 21h.01M10 11h8"
          />
        </svg>
      </div>

      {/* TEXTO */}
      <h2 className="mb-3 text-2xl font-bold text-heading">¡Próximamente!</h2>

      <p className="max-w-md text-sm leading-6 text-muted sm:text-base">
        Todavía no tenemos productos disponibles en esta categoría. Estamos
        preparando nuestro catálogo para ti.
      </p>

      {/* BOTÓN */}
      <Link
        to="/"
        className="mt-7 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default EmptyProducts;
