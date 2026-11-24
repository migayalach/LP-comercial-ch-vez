import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center px-6 py-20 text-center">
      {/* ICONO */}
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-red-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-14 w-14 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75 14.25 14.25m0-4.5-4.5 4.5M12 3l9 5v8l-9 5-9-5V8l9-5Z"
          />
        </svg>
      </div>

      {/* CÓDIGO 404 */}
      <h1 className="text-8xl font-bold text-primary sm:text-9xl">
        404
      </h1>

      <h2 className="mt-3 text-2xl font-bold text-heading sm:text-3xl">
        ¡Ups! Página no encontrada
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-muted sm:text-base">
        Parece que la página que buscas no existe o fue movida.
        Pero no te preocupes, puedes regresar y seguir explorando nuestros productos.
      </p>

      {/* BOTÓN */}
      <Link
        to="/"
        className="mt-8 rounded-lg bg-primary px-7 py-3 font-bold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg"
      >
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;