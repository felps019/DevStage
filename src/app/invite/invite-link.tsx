'use client' //Permite que esse componente seja renderizado pelo browser
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { IconButton } from '@/components/icon-button'
import { Copy, Link } from 'lucide-react'

export function InviteLink() {
  return (
    <InputRoot>
      <InputIcon>
        <Link size={5} />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/90431904300nlc"
      />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
