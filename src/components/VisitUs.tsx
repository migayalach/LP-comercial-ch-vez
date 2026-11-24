function VisitUs() {
  return (
    <section className="bg-background px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div className="grid items-center md:grid-cols-2">

          {/* INFORMACIÓN */}
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Estamos para atenderte
            </p>

            <h2 className="mt-4 text-3xl leading-tight text-heading md:text-4xl">
              VISÍTANOS EN COMERCIAL CHÁVEZ
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-text md:text-base">
              Encuentra todo lo que necesitas para tus celebraciones.
              Atendemos pedidos al por mayor y menor, siempre buscando
              ofrecerte los mejores productos y precios.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7v5l3 2"
                  />
                </svg>
              </div>

              <div>
                <p className="text-sm font-bold text-text">
                  Atención todos los días
                </p>
                <p className="text-xs text-muted">
                  Estamos disponibles para atenderte.
                </p>
              </div>
            </div>
          </div>

          {/* UBICACIÓN */}
          <div className="flex min-h-[320px] items-center justify-center bg-red-50 p-8 md:min-h-full">
            <div className="max-w-sm text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z"
                  />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>

              <h3 className="mt-5 text-2xl text-heading">
                NUESTRA UBICACIÓN
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                Próximamente agregaremos nuestra dirección para que
                puedas encontrarnos fácilmente.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-primary shadow-sm">
                <span>Pedidos por WhatsApp</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VisitUs;