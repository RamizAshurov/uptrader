import { useSelector } from 'react-redux' 
import { Link } from 'react-router-dom'
import ProjectCard from '../components/project-card'

const ProjectsPage = () => {
    const projects = useSelector(state => state.projects)

    return (
        <div className="projects-page">
            <div className="projects-page__header">
                <h1 className="projects-page__title">Uptrader Frontend</h1>
                <p className="projects-page__subtitle">Kanban App</p>
            </div>
            <div className="projects-page__body">
                { projects.map(({ id, name, description }) => (
                    <Link key={id} to={`/projects/${id}`}>
                        <ProjectCard name={name} description={description} />
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default ProjectsPage