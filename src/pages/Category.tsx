import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import EmptyProducts from "../components/EmptyProducts";

function Category() {
  const { categoria } = useParams();
  const { addToCart } = useCart();

  const nombres: Record<string, string> = {
    cervezas: "Cervezas",
    licores: "Licores",
    refrescos: "Refrescos",
    cigarrillos: "Cigarrillos",
    bocaditos: "Bocaditos",
    hielos: "Hielos",
  };

  const productosFiltrados = products.filter(
    (product) => product.category === categoria,
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {nombres[categoria ?? ""] || "Categoría no encontrada"}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productosFiltrados.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-56 items-center justify-center bg-gray-100">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-4"
                  />
                ) : (
                  <span className="text-gray-400">Sin fotografía</span>
                )}
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900">
                  {product.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {product.presentation}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-red-600">
                    Bs. {product.price}
                  </span>

                  <button
                    onClick={() => addToCart(product)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {productosFiltrados.length === 0 && <EmptyProducts />}
      </div>
    </main>
  );
}

export default Category;
