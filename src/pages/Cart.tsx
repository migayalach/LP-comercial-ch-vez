import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { WHATSAPP_LINK, generateWhatsAppMessage } from "../constants";

function Cart() {
  const navigate = useNavigate();

  const {
    items,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const finalizarPedido = () => {
    const mensaje = generateWhatsAppMessage(items, total);

    window.open(`${WHATSAPP_LINK}?text=${mensaje}`, "_blank");

    clearCart();
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-extrabold text-gray-900">
          Mi carrito
        </h1>

        {items.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="mb-6 text-gray-500">Tu carrito está vacío.</p>

            <Link
              to="/categoria/cervezas"
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
              Ver productos
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {items.map((item) => (
                <article
                  key={item.product.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {item.product.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {item.product.presentation}
                    </p>

                    <p className="mt-2 font-bold text-red-600">
                      Bs. {item.product.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.product.id)}
                      className="h-9 w-9 rounded-lg bg-gray-100 font-bold hover:bg-gray-200"
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.product.id)}
                      className="h-9 w-9 rounded-lg bg-gray-100 font-bold hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      Bs. {item.product.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="mt-2 text-sm text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold">Resumen del pedido</h2>

              <div className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-500">Productos</span>
                <span>
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>

              <div className="flex justify-between py-5">
                <span className="font-bold">Total</span>
                <span className="text-2xl font-extrabold text-red-600">
                  Bs. {total}
                </span>
              </div>

              <button
                onClick={finalizarPedido}
                className="w-full rounded-lg bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700"
              >
                Finalizar por WhatsApp
              </button>

              <Link
                to="/categoria/cervezas"
                className="mt-4 block text-center text-sm text-gray-500 hover:text-red-600"
              >
                Seguir comprando
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
