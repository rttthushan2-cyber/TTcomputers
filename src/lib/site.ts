/** Contact shortcuts — update to your real business numbers. */
export const SITE = {
  name: "TTComputers",
  tagline: "Premium Computer Shop",
  /** Shown under the navbar wordmark — short gaming retail line */
  navSubtitle: "Gaming · Builds · Parts",
  whatsappE164: "94750138695",
  /** Display + dial string for tel: links */
  phoneTel: "+94750138695",
  phoneDisplay: "+94 75 013 8695",
  email: "rttthushan@gmail.com",
  supportEmail: "rttthushan@gmail.com",
  address: "45 Galle Road, Colombo 03, Sri Lanka",
} as const;

export function waLink(message: string) {
  const q = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappE164}?text=${q}`;
}
