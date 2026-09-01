import type { IContact } from '#/data/contacts'

interface ContactsProps {
  contacts: IContact[]
}
export function Contacts({ contacts }: ContactsProps) {
  return (
    <ul className="flex gap-4">
      {contacts.map((contact) => (
        <li key={contact.name}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  )
}

interface ContactProps {
  contact: IContact
}
function Contact({ contact }: ContactProps) {
  return (
    <a
      className="text-sm uppercase tracking-widest font-semibold"
      href={contact.link}
      target="_blank"
      rel="noreferrer noopener"
    >
      {contact.name}
    </a>
  )
}
