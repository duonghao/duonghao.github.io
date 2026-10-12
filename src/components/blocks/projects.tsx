import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import type { IProject } from '#/data/projects'
import { YYYY_FORMATTER } from '#/lib/dates'
import { Interval } from './interval'

interface ProjectsProps {
  projects: IProject[]
}
export function Projects({ projects }: ProjectsProps) {
  const visibleProjects = projects.filter((project) => project.isVisible)

  if (visibleProjects.length === 0) {
    return <p className="text-sm text-muted-foreground">Brewing...</p>
  }

  return (
    <ul className="grid grid-cols-1">
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
    <ProjectLink slug={project.slug}>
      <div className="flex gap-4">
        <img
          src={project.img.src}
          alt={project.img.alt}
          className="rounded-lg h-16 aspect-auto"
        />
        <header className="w-full">
          <div className="flex justify-between">
            <h3 className="font-semibold">{project.title}</h3>
            <Interval
              interval={{ start: new Date(Date.UTC(project.year, 0)) }}
              formatter={YYYY_FORMATTER}
            />
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground/70">
            {project.stack.join(' · ')}
          </p>
        </header>
      </div>
    </ProjectLink>
  )
}

interface ProjectLinkProps {
  slug?: string
  children: ReactNode
}
function ProjectLink({ slug, children }: ProjectLinkProps) {
  if (!slug) {
    return <article className="p-3">{children}</article>
  }

  return (
    <Link
      to="/project/$slug"
      params={{ slug }}
      className="block rounded-xl p-3 transition-colors hover:bg-muted-foreground/5 hover:no-underline!"
    >
      {children}
    </Link>
  )
}
