import style from './ProjectsContainer.module.css';

const ProjectsContainer = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p className={style.description}>
        From configuration to security, web apps to big data—whatever the
        infrastructure needs of your application may be, there is a Spring
        Project to help you build it. Start small and use just what you
        need—Spring is modular by design.
      </p>
      <button className={style['release-calendar-button']}>
        RELEASE CALENDAR
      </button>
    </div>
  );
};

export default ProjectsContainer;
