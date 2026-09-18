import type { IProject } from '#/data/projects'

interface ProjectsProps {
  projects: IProject[]
}
export function Projects({ projects }: ProjectsProps) {
  const visibleProjects = projects.filter((project) => project.isVisible)

  if (visibleProjects.length === 0) {
    return <p className='text-sm text-muted-foreground'>Brewing...</p>
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2">
      {visibleProjects.map((project) => (
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
    <div className="relative h-72 flex flex-col border">
      <div className="flex-1 overflow-hidden">
        <img
          src={project.img.src}
          alt={project.img.alt}
          className="w-full h-full object-contain"
        />
      </div>
      <header className="min-h-16 absolute bottom-0 w-full p-2 border-t backdrop-blur-md bg-muted/30">
        <div className="mb-2">
          <h3 className="sr-only">{project.title}</h3>
          <p className="tracking-wide text-base text-muted-foreground">
            {project.description}
          </p>
        </div>
        <ul className="flex gap-2 flex-wrap">
          {project.stack.map((entry) => (
            <li
              key={entry}
              className="text-sm tracking-wide uppercase text-muted-foreground/70"
            >
              {entry}
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}
