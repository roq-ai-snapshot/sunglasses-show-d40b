import * as yup from 'yup';

export const salesValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  product_id: yup.string().nullable().required(),
  sales_associate_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
