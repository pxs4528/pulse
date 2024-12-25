'use client'

import React from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FormFieldTypes, InitFormSchema } from "../util";
import { Field, useForm, Control } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import Image from "next/image";

interface CustomFormFieldProps {
    control: Control<z.infer<typeof InitFormSchema>>
    fieldType: FormFieldTypes
    name: "firstName" | "lastName" | "age" | "phone" | "email" | "address"
    label?: string
    placeholder?: string
    iconSrc?: string
    iconAlt?: string
    disabled?: boolean
    required?: boolean
    dateFormat?: string
    showTimeSelect?: boolean
    children?: React.ReactNode
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderSkeleton?: (field: any) => React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RenderField = ({ field, props }: { field: any, props: CustomFormFieldProps }) => {
    const { fieldType, iconSrc, iconAlt, placeholder, required, disabled, dateFormat, showTimeSelect } = props
    switch (props.fieldType) {
        case FormFieldTypes.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {iconSrc && (
                        <div className="flex items-center justify-center p-2">
                            <Image src={iconSrc} alt={iconAlt || 'icon'} width={20} height={20} />
                        </div>
                    )}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            required={required}
                            disabled={disabled}
                            {...field}
                            className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            )
            case FormFieldTypes.PHONE_INPUT
        default:
            return <Input {...field} {...props} />
            break
    }
}
const CustomFormField = (props: CustomFormFieldProps) => {
    const { control, fieldType, name, label } = props
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {fieldType !== FormFieldTypes.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    <RenderField field={field} props={props} />

                    <FormMessage className="shad-error" />

                </FormItem>
            )}
        />)
}

export default CustomFormField