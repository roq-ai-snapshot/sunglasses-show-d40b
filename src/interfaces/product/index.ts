import { InventoryInterface } from 'interfaces/inventory';
import { SalesInterface } from 'interfaces/sales';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  brand: string;
  price: number;
  style: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  sales?: SalesInterface[];
  organization?: OrganizationInterface;
  _count?: {
    inventory?: number;
    sales?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  brand?: string;
  style?: string;
  organization_id?: string;
}
