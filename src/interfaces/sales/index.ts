import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SalesInterface {
  id?: string;
  product_id: string;
  sales_associate_id: string;
  quantity: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface SalesGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  sales_associate_id?: string;
  organization_id?: string;
}
