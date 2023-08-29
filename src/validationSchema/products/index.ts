import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  brand: yup.string().required(),
  price: yup.number().integer().required(),
  style: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
