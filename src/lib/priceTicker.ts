/**
 * Regla de visibilidad del ticker de precios.
 *
 * Vive fuera del componente para que el header (que lo monta) y el layout (que
 * reserva el hueco bajo la barra fija) no mantengan dos listas de rutas que se
 * desincronicen: una sola fuente de verdad.
 */
export const PRICE_TICKER_ROUTES = ['/clubs', '/conetworking'];

export const showsPriceTicker = (pathname: string) => {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return PRICE_TICKER_ROUTES.includes(normalized);
};
