import type { Product } from "./data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

export const NUMBER_PHONE = "59175718683";
export const WHATSAPP_LINK = `https://wa.me/${NUMBER_PHONE}`;

export function generateWhatsAppMessage(items: CartItem[], total: number) {
  if (items.length === 0) {
    return encodeURIComponent(
      `¡Hola, Comercial Chávez! 👋

Quisiera consultar sobre sus productos.

¡Gracias!`,
    );
  }

  let mensaje = `🛒 *PEDIDO - COMERCIAL CHÁVEZ*\n\n`;

  items.forEach((item) => {
    mensaje += `${item.quantity} ${item.product.name}\n`;
  });

  mensaje += `\n━━━━━━━━━━━━━━━━\n`;
  mensaje += `💰 *TOTAL: Bs. ${total}*\n`;
  mensaje += `━━━━━━━━━━━━━━━━`;

  return encodeURIComponent(mensaje);
}