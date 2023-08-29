import { GuestInterface } from 'interfaces/guest';
import { InventoryInterface } from 'interfaces/inventory';
import { ProductInterface } from 'interfaces/product';
import { SalesInterface } from 'interfaces/sales';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  guest?: GuestInterface[];
  inventory?: InventoryInterface[];
  product?: ProductInterface[];
  sales?: SalesInterface[];
  user?: UserInterface;
  _count?: {
    guest?: number;
    inventory?: number;
    product?: number;
    sales?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
