import { CONTACTS } from '#/data/contacts'
import { Contacts } from './contacts'

export function Footer() {
  return (
    <footer className="min-h-16 flex items-center justify-end">
      <Contacts contacts={CONTACTS} />
    </footer>
  )
}
