import ProjectCard from './ProjectCard'
import ProjectCardSkeleton from './ProjectCardSkeleton'
import { ProjectName } from '../data/ProjectData'
import { fetchAllProjects } from '../utils/fetchGitHubprojects'
import { useState, useEffect } from 'react'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch projects from GitHub on component mount
  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true)
        const fetchedProjects = await fetchAllProjects(ProjectName)
        await new Promise(resolve => (setTimeout(resolve, 1500)))
        setProjects(fetchedProjects)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  // Loading state
  if (loading) {
    return (
      <div className='w-full flex flex-col gap-y-4'>
        <div className='mx-auto'>
          <h1 className='font-press text-[#172121] dark:text-[#E5D0CC]'>PROJECTS</h1>
        </div>
        <div className='w-full max-w-5xl mx-auto px-4'>
          <div className='flex gap-4 overflow-x-auto py-4 px-2 horizontal-scroll'>
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className='w-full flex flex-col gap-y-4'>
        <div className='mx-auto'>
          <h1 className='font-press text-[#172121] dark:text-[#E5D0CC]'>PROJECTS</h1>
        </div>
        <div className='mx-auto text-[#7F7B82] dark:text-[#BFACB5]'>
          Error loading projects: {error}
        </div>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col gap-y-4'>
      <div className='mx-auto'>
        <h1 className='font-press text-[#172121] dark:text-[#E5D0CC]'>PROJECTS</h1>
      </div>
      <div className='w-full max-w-5xl mx-auto px-4'>
        <div className='flex gap-4 overflow-x-auto py-4 px-2 horizontal-scroll scroll-smooth'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectName={project.projectName}
              description={project.description}
              link={project.link}
              github={project.github}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects