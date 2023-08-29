import { ProductInterface } from 'interfaces/product';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_id: string;
  quantity: number;
  status: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  status?: string;
  organization_id?: string;
}
