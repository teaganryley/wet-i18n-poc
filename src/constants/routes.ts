// These names map to the route/page names in /locales
export const ROUTE_NAMES: Record<string, string> = {
  MINISTRY: 'ministry',
  HOME: 'home',
  FIRE_RISK: 'firerisk',
};

export const ROUTES: Record<string, string[]> = {
  '/en/': [ROUTE_NAMES.MINISTRY, ROUTE_NAMES.HOME],
  '/en/fire-risk/': [ROUTE_NAMES.MINISTRY, ROUTE_NAMES.HOME, ROUTE_NAMES.FIRE_RISK],
  '/fr/': [ROUTE_NAMES.MINISTRY, ROUTE_NAMES.HOME],
  '/fr/risque-de-feu/': [ROUTE_NAMES.MINISTRY, ROUTE_NAMES.HOME, ROUTE_NAMES.FIRE_RISK],
};

export const ROUTE_MATCHES = Object.keys(ROUTES);
