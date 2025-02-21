'use client' //Permite que esse componente seja renderizado pelo browser
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { IconButton } from '@/components/icon-button'
import { Copy, Link } from 'lucide-react'

interface InviteLinkProps {
  inviteLink: string
}

export function InviteLink({ inviteLink }: InviteLinkProps) {
  function copyInvite() {
    navigator.clipboard.writeText(inviteLink)
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link size={5} />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyInvite}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
