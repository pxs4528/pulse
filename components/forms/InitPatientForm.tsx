"use client"

import React, { useState } from 'react'
import { set, z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormFieldTypes, InitFormSchema } from '../util'
import CustomFormField from './CustomFormField'
import User from '@/public/assets/icons/user.svg'
import SubmitButton from '../SubmitButton'
import { UserFormValidation } from '@/lib/validation'
import { useRouter } from 'next/navigation'


const InitPatientForm = () => {
  const router = useRouter()
  const [isLoading, setisLoading] = useState(false)

  const onSubmit = async ({firstName, lastName, age, phone, email, address}: z.infer<typeof UserFormValidation>) => {
    setisLoading(true)

    try {
      // // await some async function
      // const userData = { firstName, lastName, age, phone, email, address }

      // const user = await createUser(userData)

      // if (user) {
      //   console.log('User created successfully')
      //   router.push(`/patients/${user.$id}/register`)
      // }
    }
    catch (error) {
      console.error(error)
    }
    finally {
      setisLoading(false)
    }
  }


  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
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
          <h2 className='header'>Hi there 👋</h2>
          <p className='text-dark-700'>Let&apos;s schedule your appointment.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="firstName"
          label="First Name*"
          iconSrc={User}
          required={true}
        />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="lastName"
          label="Last Name*"
          iconSrc={User}
          required={true}
        />
        <CustomFormField
          fieldType={FormFieldTypes.AGE}
          control={form.control}
          name="age"
          label="Age*"
          placeholder='1122334455'
          required={true}
        />
        <CustomFormField
          fieldType={FormFieldTypes.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone*"
          required={true}
        />
        <CustomFormField
          fieldType={FormFieldTypes.EMAIL}
          control={form.control}
          name="email"
          label="Email"
          required={false}
        />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="address"
          label="Address*"
          required={true}
        />

        {/* <Button className='text-black bg-blue-500' type="submit">Submit</Button> */}
        <SubmitButton className="bg-blue-700" isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default InitPatientForm