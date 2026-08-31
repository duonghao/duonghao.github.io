import type { IContact } from '#/data/contacts'
import { CONTACTS } from '#/data/contacts'

export function Hero() {
  return (
    <div>
      <header className="mb-6">
        <div className="mb-2">
          <p className="text-lg">Software Engineer</p>
          <p className="text-sm text-muted-foreground">
            React | TypeScript | Node.Js
          </p>
        </div>
        <p>
          Australian, based in Tokyo.
        </p>
      </header>
      <ul>
        {CONTACTS.map((contact) => (
          <li key={contact.link}>
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
  return <a className="text-sm uppercase tracking-widest font-semibold" href={contact.link} target="_blank"
    rel="noreferrer noopener">{contact.name}</a>
}
