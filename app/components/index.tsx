import React, {forwardRef, useId, useState} from 'react'
import classNames from 'classnames'
import Select from 'react-select'
import {useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import type {ComponentProps, ReactNode} from 'react'
import type {GroupBase, Props} from 'react-select'

export function Label({className, ...labelProps}: ComponentProps<'label'>) {
  return (
    <label
      {...labelProps}
      className={classNames(
        'block text-sm font-medium text-gray-700',
        className,
      )}
    />
  )
}

type InputProps =
  | ({type: 'textarea'} & ComponentProps<'textarea'>)
  | ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref,
) {
  const className = classNames('text-input', props.className)

  if (props.type === 'textarea') {
    return (
      <textarea
        {...(props as ComponentProps<'textarea'>)}
        className={className}
      />
    )
  }

  return (
    <input
      {...(props as ComponentProps<'input'>)}
      className={className}
      ref={ref}
    />
  )
})

type InputErrorProps = {
  id: string
  children?: ReactNode | null
}

export function InputError({children, id}: InputErrorProps) {
  if (!children) {
    return null
  }

  return (
    <p role="alert" id={id} className="mt-2 text-sm text-red-600">
      {children}
    </p>
  )
}

export const Field = forwardRef<
  HTMLInputElement,
  {
    defaultValue?: string | null
    name: string
    label?: string
    className?: string
    error?: string | null
  } & InputProps
>(function Field(
  {defaultValue, error, name, label, className, id, ...props},
  ref,
) {
  const prefix = useId()
  const inputId = id ?? `${prefix}-${name}`
  const errorId = `${inputId}-error`

  return (
    <div className={className}>
      {label && <Label htmlFor={inputId}>{label}</Label>}

      <Input
        // @ts-expect-error no idea 🤷‍♂️
        ref={ref}
        {...(props as InputProps)}
        name={name}
        id={inputId}
        autoComplete={name}
        defaultValue={defaultValue}
        aria-describedby={error ? errorId : undefined}
        error={error}
      />

      <InputError id={errorId}>{error}</InputError>
    </div>
  )
})

export function SelectField<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  id,
  name,
  className,
  error,
  label,
  ...props
}: Props<Option, IsMulti, Group> & {
  label: string
  error?: string | null
}) {
  const prefix = useId()
  const inputId = id ?? `${prefix}-${name}`
  const errorId = `${inputId}-error`

  return (
    <div className={className}>
      <Label htmlFor={inputId}>{label}</Label>
      <Select
        inputId={inputId}
        instanceId={inputId}
        name={name}
        className="select"
        classNamePrefix="custom-select"
        {...props}
      />
      <InputError id={errorId}>{error}</InputError>
    </div>
  )
}
