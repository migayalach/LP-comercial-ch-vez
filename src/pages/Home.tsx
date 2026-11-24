import { Link } from "react-router-dom";
import { products } from "../data/products";
import BrandsModal from "../components/BrandsModal";
import VisitUs from "../components/VisitUs";

const categories = [
  {
    name: "Cervezas",
    description: "Las mejores marcas siempre frías.",
    path: "/categoria/cervezas",
    icon: "🍺",
  },
  {
    name: "Licores",
    description: "Variedad para cada celebración.",
    path: "/categoria/licores",
    icon: "🥃",
  },
  {
    name: "Refrescos",
    description: "Bebidas para toda ocasión.",
    path: "/categoria/refrescos",
    icon: "🥤",
  },
  {
    name: "Cigarrillos",
    description: "Consulta nuestras opciones.",
    path: "/categoria/cigarrillos",
    icon: "🚬",
  },
];

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative flex min-h-[750px] items-center overflow-hidden bg-gray-950">
        {/* Imagen de fondo */}
        <img
          src="https://res.cloudinary.com/dqgcyonb9/image/upload/v1795480540/Chavez/r4cszzfpyk7a17wzdfrx"
          alt="Comercial Chávez"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Capa más clara */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/5" />

        {/* Contenido */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28">
          <div className="max-w-2xl">
            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
              Todo para tu
              <span className="block text-red-500">celebración.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white md:text-xl">
              Cervezas, licores, refrescos y mucho más al mejor precio. Todo lo
              que necesitas para compartir buenos momentos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/categoria/cervezas"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-red-700"
              >
                Ver productos →
              </Link>

              <a
                href="#categorias"
                className="rounded-xl border border-white/50 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
              >
                Explorar categorías
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section id="categorias" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">
              Nuestras categorías
            </h2>

            <p className="mt-3 text-gray-500">
              Encuentra lo que buscas en un solo lugar.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-4xl transition group-hover:bg-red-100">
                  {category.icon}
                </div>

                <h3 className="text-xl font-extrabold text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>

                <span className="mt-6 inline-block font-bold text-red-600">
                  Ver categoría →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">
                Productos destacados
              </h2>
            </div>

            <Link
              to="/categoria/cervezas"
              className="font-bold text-red-600 hover:text-red-700"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-56 items-center justify-center bg-gray-100">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-5"
                    />
                  ) : (
                    <span className="text-sm text-gray-400">
                      Sin fotografía
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {product.presentation}
                  </p>

                  <p className="mt-4 text-2xl font-black text-red-600">
                    Bs. {product.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <BrandsModal />

      {/* VISÍTANOS */}
      <VisitUs />
    </div>
  );
}

export default Home;
