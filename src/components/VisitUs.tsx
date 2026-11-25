function VisitUs() {
  const ubicacion = "-17.9824045,-67.1163495";

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

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${ubicacion}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Cómo llegar
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
            </a>
          </div>

          {/* MAPA */}
          <div className="min-h-[350px] md:min-h-[450px]">
            <iframe
              title="Ubicación de Comercial Chávez"
              src={`https://maps.google.com/maps?q=${ubicacion}&z=17&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default VisitUs;