interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Sales Associate', 'Inventory Specialist'],
  tenantName: 'Organization',
  applicationName: 'sunglasses show application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View all sunglasses in catalog',
    'Search for sunglasses based on criteria',
    'View details of specific sunglasses',
  ],
  ownerAbilities: [
    'Manage the organization',
    'Invite members to the organization',
    'Remove members from the organization',
    'Update organization details',
  ],
};
