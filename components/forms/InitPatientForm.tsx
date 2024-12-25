"use client"

import React from 'react'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormFieldTypes, InitFormSchema } from '../util'
import CustomFormField from './CustomFormField'
import User from '@/public/assets/icons/user.svg'

const onSubmit = (data: z.infer<typeof InitFormSchema>) => {
  console.log(data)
}

const InitPatientForm = () => {
  const form = useForm<z.infer<typeof InitFormSchema>>({
    resolver: zodResolver(InitFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 0,
      phone: '',
      email: '',
      address: '',
    },
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className='mb-12 space-y-4'>
          <h1 className='header'>Hi there 👋</h1>
          <p className='text-dark-700'>Let's schedule your appointment.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldTypes.INPUT} 
          control={form.control} 
          name="firstName"
          label="First Name"
          iconSrc={User}
          required={true}
          />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT} 
          control={form.control} 
          name="lastName"
          label="Last Name"
          iconSrc={User}
          required={true}
          />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT} 
          control={form.control} 
          name="age"
          label="Age"
          required={true}
          />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT} 
          control={form.control} 
          name="phone"
          label="Phone"
          required={true}
          />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT} 
          control={form.control} 
          name="email"
          label="Email"
          required={false}
          />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT} 
          control={form.control} 
          name="address"
          label="Address"
          required={true}
          />
        
        <Button className='text-black bg-blue-500' type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default InitPatientForm