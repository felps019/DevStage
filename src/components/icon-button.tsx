import { type ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

//extends permite que seja possivel acessar todas as propriedades de um button html(Ex:type, onBlur...)
interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
