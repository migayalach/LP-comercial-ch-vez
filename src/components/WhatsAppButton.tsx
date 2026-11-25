import { useNavigate } from "react-router-dom";
import { WHATSAPP_LINK, generateWhatsAppMessage } from "../constants";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function WhatsAppButton() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState(false);

  const enviarPedido = () => {
    const mensaje = generateWhatsAppMessage(items, total);

    window.open(`${WHATSAPP_LINK}?text=${mensaje}`, "_blank");

    if (items.length > 0) {
      clearCart();
      navigate("/");
      setMensajeConfirmacion(true);

      setTimeout(() => {
        setMensajeConfirmacion(false);
      }, 4000);
    }
  };

  return (
    <>
      <button
        onClick={enviarPedido}
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-9 w-9"
        >
          <path d="M16 .5A15.5 15.5 0 0 0 2.6 23.8L.5 31.5l7.9-2.1A15.5 15.5 0 1 0 16 .5Zm0 28.2c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5a12.7 12.7 0 1 1 11 6Zm7-9.5c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.3-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 3.9c.2.3 2.7 4.1 6.5 5.7.9.4 1.6.6 2.2.7.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z" />
        </svg>
      </button>

      {mensajeConfirmacion && (
        <div className="fixed right-6 top-6 z-[100] rounded-xl bg-green-600 px-6 py-4 text-white shadow-lg">
          <p className="font-bold">¡Pedido preparado!</p>
          <p className="text-sm">
            Revisa WhatsApp para confirmar el envío de tu pedido.
          </p>
        </div>
      )}
    </>
  );
}

export default WhatsAppButton;
