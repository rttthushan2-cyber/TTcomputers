export type AppPath =
  | "/"
  | "/used"
  | "/used-parts"
  | "/custom-builds"
  | "/pre-order"
  | "/mobile-phones"
  | "/services"
  | "/contact"
  | "/configurator"
  | "/catalog"
  | "/cart"
  | "/about"
  | "/checkout"
  | "/product/$id";

export type MainNavItem = {
  label: string;
  to: AppPath;
};

/** Primary navigation — paths must match `src/routes/*.tsx` file routes. */
export const MAIN_NAV: MainNavItem[] = [
  { label: "Home", to: "/" },
  { label: "Used PCs & Laptops", to: "/used" },
  { label: "Used Parts", to: "/used-parts" },
  { label: "Custom Builds", to: "/custom-builds" },
  { label: "Pre-Order", to: "/pre-order" },
  { label: "Mobile Phones", to: "/mobile-phones" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];
