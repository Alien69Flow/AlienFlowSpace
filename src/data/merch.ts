/**
 * Tienda EcoFlow. Un objeto por producto y unas colecciones por familia.
 *
 * Los productos se imprimen/entregan en Printify, Printful, Etsy, Amazon o Temu;
 * lo único que falta es pegar `url` (y `price`) de cada uno. Aquí no hay enlaces
 * inventados: si un campo falta, la tarjeta lo dice y no ofrece un botón muerto.
 *
 * Amazon: si defines `VITE_AMAZON_TAG` en Vercel, `withAffiliate` añade la etiqueta
 * de asociado a cualquier enlace de amazon.*, sin tener que repetirla en cada
 * producto. La divulgación de afiliación la pinta el carrusel (obligatoria).
 */

export type StoreId = 'printify' | 'printful' | 'amazon' | 'temu' | 'etsy' | 'own' | 'other';
export type MerchCategory = 'headwear' | 'apparel' | 'jewelry' | 'hemp' | 'home';

export interface MerchPrice {
  amount: number;
  currency: 'EUR' | 'USD';
}

export interface MerchProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  category: MerchCategory;
  store?: StoreId;
  price?: MerchPrice;
  /** Enlace real (tienda o afiliado). Sin esto no hay CTA. */
  url?: string;
  badge?: 'new' | 'limited' | 'bestseller';
  detail?: string;
}

const amazonTag = (import.meta.env.VITE_AMAZON_TAG as string | undefined)?.trim() || '';

/** Añade la etiqueta de Amazon si el enlace es de Amazon y no la trae ya. */
export const withAffiliate = (url?: string): string | undefined => {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    if (/^amazon\./.test(parsed.hostname.replace(/^www\./, '')) && amazonTag) {
      if (!parsed.searchParams.get('tag')) parsed.searchParams.set('tag', amazonTag);
    }
    return parsed.toString();
  } catch {
    return url;
  }
};

export const STORE_LABEL: Record<StoreId, string> = {
  printify: 'Printify',
  printful: 'Printful',
  amazon: 'Amazon',
  temu: 'Temu',
  etsy: 'Etsy',
  own: 'Tienda DAO',
  other: 'Tienda',
};

export interface MerchCollection {
  id: MerchCategory;
  name: string;
  description: string;
  /** Enlace a la colección completa en la tienda (Printify/Printful/Etsy…). */
  url?: string;
}

export const merchCollections: MerchCollection[] = [
  {
    id: 'headwear',
    name: 'Headwear',
    description: 'Gorras y sombreros orgánicos bordados',
  },
  {
    id: 'jewelry',
    name: 'Eco Jewelry',
    description: 'Plata reciclada y baño de oro 24k',
  },
  {
    id: 'apparel',
    name: 'Apparel',
    description: 'Camisetas y sudaderas de algodón orgánico',
  },
  {
    id: 'hemp',
    name: 'Hemp',
    description: 'Cáñamo: textil y accesorios',
  },
];

export const merchProducts: MerchProduct[] = [
  {
    id: 'earrings-cannabis',
    name: 'Cannabis Leaf Earrings',
    description: 'Sterling silver hexagon earrings with 24k gold cannabis leaf design',
    detail: 'Plata 925 · baño de oro 24k',
    image: '/lovable-uploads/eco-earrings-thumb.webp',
    category: 'jewelry',
    store: 'etsy',
  },
  {
    id: 'hat-orange',
    name: 'Orange Eco Trucker Hat',
    description: 'Sustainable trucker hat with embroidered alien cannabis logo',
    detail: 'Algodón orgánico · bordado',
    image: '/lovable-uploads/eco-hat-orange-thumb.webp',
    category: 'headwear',
    store: 'printify',
  },
  {
    id: 'hat-navy',
    name: 'Navy Alien Hat',
    description: 'Premium navy trucker hat with golden alien symbol',
    detail: 'Edición DAO',
    image: '/lovable-uploads/eco-hat-navy-thumb.webp',
    category: 'headwear',
    store: 'printify',
    badge: 'bestseller',
  },
  {
    id: 'bucket-organic',
    name: 'Organic Bucket Hat',
    description: '100% organic cotton bucket hat with eco-friendly design',
    detail: '100 % algodón orgánico',
    image: '/lovable-uploads/eco-bucket-hat-thumb.webp',
    category: 'headwear',
    store: 'printful',
  },
  {
    id: 'cap-baseball',
    name: 'Organic Baseball Cap',
    description: 'Sustainable baseball cap with embroidered alien logo',
    detail: 'Algodón orgánico',
    image: '/lovable-uploads/eco-baseball-cap-thumb.webp',
    category: 'headwear',
    store: 'printful',
  },
  {
    id: 'snapback-classic',
    name: 'Classic Snapback',
    description: 'Black and teal snapback with geometric alien symbol',
    detail: 'Ajustable · unisex',
    image: '/lovable-uploads/eco-snapback-thumb.webp',
    category: 'headwear',
    store: 'printify',
  },
  {
    id: 'dad-hat-camo',
    name: 'Camo Dad Hat',
    description: 'Green camo dad hat with cannabis leaf embroidery',
    image: '/lovable-uploads/eco-dad-hat-thumb.webp',
    category: 'headwear',
    store: 'printify',
  },
];

/** Solo se ofrece compra cuando hay enlace: nada de botones muertos. */
export const isPurchasable = (product: MerchProduct): boolean => Boolean(product.url);

export const formatPrice = (price?: MerchPrice): string | null => {
  if (!price) return null;
  const symbol = price.currency === 'EUR' ? '€' : '$';
  const amount = Number.isInteger(price.amount) ? price.amount.toString() : price.amount.toFixed(2);
  return price.currency === 'EUR' ? `${amount} ${symbol}` : `${symbol}${amount}`;
};

/** Hay divulgación que mostrar en cuanto exista un enlace de tienda. */
export const hasShopLinks = (): boolean =>
  merchProducts.some((p) => Boolean(p.url)) || merchCollections.some((c) => Boolean(c.url));
