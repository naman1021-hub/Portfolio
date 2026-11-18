import React from 'react';
import { Projects } from '../components/Projects';
export const ProjectsPage = ({ onSelectProject }) => {
    return (<main>
      <Projects onSelectProject={onSelectProject}/>
    </main>);
};
