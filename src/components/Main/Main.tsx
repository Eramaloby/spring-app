import { type ReactNode } from 'react';

import style from './Main.module.css';

import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';

const Main = () => {
  return (
    <main>
      <Container className='extra-padding light-grey'>
        <ProjectsContainer></ProjectsContainer>
      </Container>
      <div className={style['green-bar']}></div>
    </main>
  );
};

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  const classNamesArray = className ? className.split(' ') : [];

  const moduleClasses = classNamesArray.map((name) => style[name]).filter(Boolean);

  const containerClasses = `${style.container} ${moduleClasses.join(' ')}`.trim();
  return <div className={containerClasses}>{children}</div>;
};

export default Main;
