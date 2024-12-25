import { z } from 'zod'

export const InitFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  phone: z.string(),
  email: z.string().email(),
  address: z.string(),
})

export enum FormFieldTypes {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  TIME = 'time',
  PHONE_INPUT = 'phone',
  AGE = 'age',
  EMAIL = 'email',
}
