import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
// Page transition wrapper — smooth fade between routes
const pageVariants = {
    initial: { opacity: 0, y: 14 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
};
function AnimatedRoutes({ onSelectProject, onOpenResume, onNotify, }) {
    const location = useLocation();
    return (<AnimatePresence mode="wait" initial={false}>
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="enter" exit="exit" className="flex-1">
        <Routes location={location}>
          <Route path="/" element={<HomePage onOpenResume={onOpenResume}/>}/>
          <Route path="/projects" element={<ProjectsPage onSelectProject={onSelectProject}/>}/>
          <Route path="/skills" element={<SkillsPage />}/>
          <Route path="/experience" element={<ExperiencePage />}/>
          <Route path="/contact" element={<ContactPage onNotify={onNotify}/>}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </motion.div>
    </AnimatePresence>);
}
export function App() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);
    const showNotification = (message) => {
        setToastMessage(message);
    };
    return (<ThemeProvider>
      <BrowserRouter>
        <div className="relative isolate min-h-screen">
          <div className="page-ambient-animation fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true"/>
          <div className="relative z-10 min-h-screen text-[#F1F5F9] selection:bg-[#B9522C] selection:text-white transition-colors duration-300 flex flex-col">
            <Navbar onOpenResume={() => setIsResumeOpen(true)}/>

            <AnimatedRoutes onSelectProject={(project) => setSelectedProject(project)} onOpenResume={() => setIsResumeOpen(true)} onNotify={showNotification}/>

            <Footer />

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)}/>

            <Toast message={toastMessage} onClose={() => setToastMessage(null)}/>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>);
}
export default App;
