/**
 * Sponsors propios: el espacio publicitario sin red externa ni cookies.
 *
 * Un patrocinador directo se paga por mes (o por campaña) y aquí no hay script de
 * terceros, ni píxeles, ni cookies: es una tarjeta más de la página. Eso significa
 * que se puede publicar hoy, sin cuenta de AdSense y sin tocar el consentimiento.
 *
 * Para añadir uno: copia un objeto, pon `slot` al espacio donde va y rellena el
 * enlace. Los campos `href` deben ser https y el componente los abre con
 * `rel="sponsored noopener"`.
 *
 * Vacío a propósito: un espacio sin patrocinador real no se pinta. Nada de cajas
 * "Ad Space" que hacen parecer rota la página.
 */

export type SponsorSlotName = 'clubs' | 'conetworking';

export interface Sponsor {
  id: string;
  slot: SponsorSlotName;
  /** Nombre del patrocinador, tal y como quiere que se muestre. */
  name: string;
  /** Una línea: qué ofrece. Sin promesas de rentabilidad. */
  body: string;
  href: string;
  cta: string;
  /** Opcional: "OFERTA", "NUEVO", "PATROCINADO". */
  badge?: string;
}

export const sponsors: Sponsor[] = [];

export const sponsorsFor = (slot: SponsorSlotName): Sponsor[] => sponsors.filter((s) => s.slot === slot);
