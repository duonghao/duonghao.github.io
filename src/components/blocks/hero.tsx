import type { IContact } from '#/data/contacts'
import { CONTACTS } from '#/data/contacts'

export function Hero() {
  return (
    <div>
      <header className="mb-2">
        <h2 className="text-lg">Engineer</h2>
        <p className="text-sm text-muted-foreground">
          React | TypeScript | Node.Js
        </p>
      </header>
      <ul className="text-sm">
        {CONTACTS.map((contact) => (
          <li>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ContactProps {
  contact: IContact
}
function Contact({ contact }: ContactProps) {
  return <a href={contact.link}>{contact.name}</a>
}
