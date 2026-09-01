import type { IProject } from '#/data/projects'

interface ProjectsProps {
  projects: IProject[]
}
export function Projects({ projects }: ProjectsProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  )
}

interface ProjectProps {
  project: IProject
}
function Project({ project }: ProjectProps) {
  return (
    <div className="h-96 border rounded-lg flex flex-col shadow-sm">
      <div className="flex-1">
        <img src="" alt="blackjack project overview" />
      </div>
      <header className="min-h-16 p-4 border-t">
        <div className="mb-8">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <ul className="flex gap-2">
          {project.stack.map((entry) => (
            <li
              key={entry}
              className="text-sm tracking-wide uppercase text-muted-foreground/50"
            >
              {entry}
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}
