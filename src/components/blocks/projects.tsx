import type { ReactNode } from 'react'
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
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {visibleProjects.map((project) => (
        <li key={project.title}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  )
}

interface ProjectProps {
  project: IProject
}
function Project({ project }: ProjectProps) {
  return (
    <ProjectLink href={project.href}>
      <img
        src={project.img.src}
        alt={project.img.alt}
        className="w-full rounded-lg"
      />
      <header className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="font-semibold">{project.title}</h3>
        <span className="text-sm tabular-nums text-muted-foreground">
          {project.year}
        </span>
      </header>
      <p className="text-sm text-muted-foreground">{project.description}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground/70">
        {project.stack.join(' · ')}
      </p>
    </ProjectLink>
  )
}

interface ProjectLinkProps {
  href?: string
  children: ReactNode
}
function ProjectLink({ href, children }: ProjectLinkProps) {
  if (!href) {
    return <article>{children}</article>
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {children}
    </a>
  )
}
