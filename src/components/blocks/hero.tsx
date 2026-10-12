import { CONTACTS } from '#/data/contacts'
import { Button } from '#/components/ui/button'

const linkedin = CONTACTS.find((contact) => contact.name === 'LinkedIn')

export function Hero() {
  return (
    <header className="mb-12 w-full grid grid-cols-1 gap-6 md:grid-cols-2 pt-16 md:pt-24">
      <h2 className="text-2xl">I'm Hao</h2>
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-lg text-foreground">
            Full-stack software engineer based in Tokyo, Japan, currently at
            Liferay.
          </p>
          <p className="text-foreground/70 tracking-wide">
            I tinker. I build. Occasionally, rapid unscheduled disassembly.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="/resume.pdf" target="_blank" rel="noreferrer noopener">
                View resume
              </a>
            </Button>
            {linkedin && (
              <Button asChild variant="outline">
                <a
                  href={linkedin.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Contact on LinkedIn
                </a>
              </Button>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            Open to opportunities, feel free to reach out.
          </p>
        </div>
      </div>
    </header>
  )
}
