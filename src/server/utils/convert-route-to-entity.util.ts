const mapping: Record<string, string> = {
  guests: 'guest',
  inventories: 'inventory',
  organizations: 'organization',
  products: 'product',
  sales: 'sales',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
