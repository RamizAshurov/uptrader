
const ProjectCard = ({ name, description }) => {
    return (
        <div className="project-card card">
            <h3 className="project-card__title">{name}</h3>
            <p className="project-card__desc">{description}</p>
        </div>
    )
}

export default ProjectCard