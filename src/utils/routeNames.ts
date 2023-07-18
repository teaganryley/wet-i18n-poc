// TODO: rename, export sensibly
const names = {
  '/en/': 'home',
  '/fr/': 'home'
};

/**
 * Breadcrumbs needs to look like this:
 *  [
 *    {
 *      href: url,
 *      title: string,
 *    }
 *  ]
 * 
 * In order to construct the breadcrumbs, I need:
 *  1. locale
 *  2. paths
 * 
 * PAth: ['/', 'en/', 'fire-risk'] ??
 * 
 * breadcrumbs = path.map(fragment => ({
 *  href: fragment,
 *  title: t(names[fragment])
 * }));
 * 
 */