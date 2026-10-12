import { CONTACTS } from '#/data/contacts'
import { Button } from '#/components/ui/button'

const linkedin = CONTACTS.find((contact) => contact.name === 'LinkedIn')

export function Hero() {
  return (
    <header className="pb-48 w-full grid grid-cols-1 gap-6 md:grid-cols-2 pt-24 md:pt-32">
      <div>
        <h2 className="text-2xl mb-2">I'm Hao</h2>
        <p className="text-base text-muted-foreground">
          Full-stack software engineer based in Tokyo, Japan.
        </p>
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-foreground tracking-wide">
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
