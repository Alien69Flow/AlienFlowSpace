/**
 * Catálogo de merch. Una entrada por producto, y el carrusel hace el resto.
 *
 * Regla de honestidad: si falta `url` o `price`, la tarjeta lo dice («precio
 * próximamente») y no muestra un botón de compra que no lleva a ninguna parte.
 * Añadir un producto es añadir un objeto aquí; no hay que tocar componentes.
 *
 * `image` apunta siempre a la miniatura WebP de 200 px (2,5× el hueco de 80 px):
 * las fotos originales de 1000 px pesaban 9,4 MiB en total.
 */

export interface MerchPrice {
  amount: number;
  currency: 'EUR' | 'USD';
}

export interface MerchProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: MerchPrice;
  /** Enlace de compra (tienda propia o marketplace). Sin esto no hay CTA. */
  url?: string;
  badge?: 'new' | 'limited' | 'bestseller';
  /** Material o certificación, para la línea corta de la tarjeta. */
  detail?: string;
}

export const merchProducts: MerchProduct[] = [
  {
    id: 'earrings-cannabis',
    name: 'Cannabis Leaf Earrings',
    description: 'Sterling silver hexagon earrings with 24k gold cannabis leaf design',
    detail: 'Plata 925 · baño de oro 24k',
    image: '/lovable-uploads/eco-earrings-thumb.webp',
  },
  {
    id: 'tee-orange',
    name: 'Orange Eco Trucker Hat',
    description: 'Sustainable trucker hat with embroidered alien cannabis logo',
    detail: 'Algodón orgánico · bordado',
    image: '/lovable-uploads/eco-hat-orange-thumb.webp',
  },
  {
    id: 'hat-navy',
    name: 'Navy Alien Hat',
    description: 'Premium navy trucker hat with golden alien symbol',
    detail: 'Edición DAO',
    image: '/lovable-uploads/eco-hat-navy-thumb.webp',
    badge: 'bestseller',
  },
  {
    id: 'bucket-organic',
    name: 'Organic Bucket Hat',
    description: '100% organic cotton bucket hat with eco-friendly design',
    detail: '100 % algodón orgánico',
    image: '/lovable-uploads/eco-bucket-hat-thumb.webp',
  },
  {
    id: 'cap-baseball',
    name: 'Organic Baseball Cap',
    description: 'Sustainable baseball cap with embroidered alien logo',
    detail: 'Algodón orgánico',
    image: '/lovable-uploads/eco-baseball-cap-thumb.webp',
  },
  {
    id: 'snapback-classic',
    name: 'Classic Snapback',
    description: 'Black and teal snapback with geometric alien symbol',
    detail: 'Ajustable · unisex',
    image: '/lovable-uploads/eco-snapback-thumb.webp',
  },
  {
    id: 'dad-hat-camo',
    name: 'Camo Dad Hat',
    description: 'Green camo dad hat with cannabis leaf embroidery',
    image: '/lovable-uploads/eco-dad-hat-thumb.webp',
  },
];

/** Solo se ofrece compra cuando hay precio y enlace: nada de botones muertos. */
export const isPurchasable = (product: MerchProduct): boolean =>
  Boolean(product.url && product.price);

export const formatPrice = (price?: MerchPrice): string | null => {
  if (!price) return null;
  const symbol = price.currency === 'EUR' ? '€' : '$';
  const amount = Number.isInteger(price.amount) ? price.amount.toString() : price.amount.toFixed(2);
  return price.currency === 'EUR' ? `${amount} ${symbol}` : `${symbol}${amount}`;
};
