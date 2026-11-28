export const personalInfo = {
    name: 'Naman Gupta',
    headline: 'Full Stack & AI Engineer',
    subheadline: '3rd-year CS student at Bennett University, former Ameriprise Financial intern. Specializing in high-performance React/Next.js interfaces, scalable Node.js backends, and AI-powered web applications.',
    bio: `I am a Computer Science undergraduate specializing in Full Stack Development with hands-on enterprise experience at Ameriprise Financial and a proven track record of engineering real, end-to-end products. I focus on building responsive, accessible, and performant web applications, bridging modern frontend architecture with robust backend APIs and intelligent AI workflows.`,
    email: 'guptanaman1006@gmail.com',
    phone: '+91-8384037842',
    location: 'Greater Noida / Gurgaon, India',
    status: 'Open to Software Engineering & Frontend Internships',
    github: 'https://github.com/naman1021-hub',
    linkedin: 'https://www.linkedin.com/in/naman-gupta28',
    resumeUrl: '/Naman_Gupta_Resume.pdf',
    stats: [
        { label: 'Enterprise Experience', value: 'Ameriprise Financial' },
        { label: 'Production Projects', value: '4+ Full Stack & AI' },
        { label: 'B.Tech Specialization', value: 'Full Stack Dev' },
        { label: 'Code Quality', value: 'Strict Type-Safe' }
    ]
};
export const projects = [
    {
        id: 'vayuvision',
        title: 'VayuVision',
        tagline: 'Conversational AI for Indian Weather, Forecasts & Alerts',
        category: 'AI & Web',
        featured: true,
        description: 'An AI-powered weather application combining conversational weather questions with a map-based Indian location explorer, current conditions, five-day forecasts, and forecast-based alerts.',
        problemStatement: 'Weather data is often presented as raw meteorological information that can be difficult for people to interpret and act on.',
        solution: 'Combines an AI weather chat, a map and region explorer covering Indian states and union territories, Open-Meteo location search, current conditions, five-day forecasts, prompt comparison, saved locations, and configurable forecast-threshold notices.',
        myRole: 'Team leader on a team project exploring conversational AI for weather forecasting, alerts, and climate information.',
        technologies: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express.js', 'Open-Meteo API', 'CSS'],
        githubUrl: 'https://github.com/naman1021-hub/VayuVision',
        highlights: [
            'Conversational AI assistant for weather questions and forecast context',
            'Explore weather across all 28 Indian states and 8 union territories with a map and five-day forecasts',
            'Search locations through Open-Meteo and view current weather conditions',
            'Compare three assistant prompt versions with forecast context and data checks',
            'Generate notices from configurable rain, wind, and temperature thresholds',
            'Save locations in browser storage for quick access'
        ],
        architectureWorkflow: 'React + Vite Frontend → Express API → Open-Meteo Geocoding & Forecast APIs → Weather Map, Region Explorer, Prompt Comparison & Threshold Notices',
        previewType: 'weather',
        mockupDetails: {
            stats: [
                { label: 'Forecast', value: 'Current + 5 Days' },
                { label: 'Location Data', value: 'Open-Meteo' },
                { label: 'Assistant Prompts', value: '3 Versions' }
            ],
            tags: ['Weather Assistant', 'Indian Locations', 'Forecast Alerts', 'Prompt Comparison'],
            accentColor: '#38BDF8'
        }
    },
    {
        id: 'worklens',
        title: 'WorkLens Edu',
        tagline: 'Full-Stack University Faculty & Staff Activity Tracking System',
        category: 'Full Stack',
        featured: true,
        description: 'A centralized university operations and work-tracking platform designed to help faculty and administrative staff manage attendance, leave requests, course schedules, and student assignments with live analytical dashboards.',
        problemStatement: 'University administrative workflows are notoriously fragmented across disjointed portals, causing communication delays, unmonitored assignment progress, and tedious manual approval cycles for faculty leaves.',
        solution: 'Engineered an end-to-end portal featuring role-based access control (Teaching, Non-Teaching, Admin), dynamic timetable synchronization, real-time Recharts analytics, and automated notification triggers.',
        myRole: 'Architected and built the full-stack system: implemented component-based frontend architecture with React & Tailwind CSS, created RESTful endpoints with Node.js/Express, modeled MongoDB schemas, and integrated Recharts for visual progress insights.',
        technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Recharts', 'JWT Auth'],
        githubUrl: 'https://github.com/naman1021-hub/Worklens',
        highlights: [
            'Role-based authentication with bcrypt password encryption & JWT tokens',
            'Interactive Analytics dashboard displaying live course progress and attendance metrics with Recharts',
            'Dynamic course & assignment CRUD with automated reminder triggers and submission tracking',
            'Leave and workflow review pipeline with persistent status updates',
            'Responsive Dark/Light mode theme toggle using persistent React Context'
        ],
        architectureWorkflow: 'Candidate/Faculty → React (Vite) UI → Express REST API (Auth Guard) → MongoDB Collections (Users, Courses, Assignments, Leaves) → Recharts Visualization Engine',
        previewType: 'dashboard',
        mockupDetails: {
            stats: [
                { label: 'Roles Supported', value: 'Teaching, Staff, Admin' },
                { label: 'Analytics Engine', value: 'Recharts Realtime' },
                { label: 'Persistence', value: 'MongoDB & Mongoose' }
            ],
            tags: ['Role-Based Auth', 'CRUD Operations', 'Analytics Engine', 'Theme Context'],
            accentColor: '#6366F1'
        }
    },
    {
        id: 'opticloud',
        title: 'OptiCloud',
        tagline: 'AI-Powered Cloud Cost & Architecture Optimizer',
        category: 'Full Stack',
        featured: true,
        description: 'A cloud optimization platform designed to analyze AWS resources and Terraform or Docker configurations, surface potential cost and architecture inefficiencies, and provide AI-assisted recommendations.',
        githubUrl: 'https://github.com/dhruvmehta221105/OptiCloud',
        problemStatement: 'Cloud infrastructure costs and configuration inefficiencies can be difficult to identify across usage data, infrastructure definitions, and container builds.',
        solution: 'Brings infrastructure analysis, cost trends, findings, and AI-powered optimization recommendations together in a centralized dashboard.',
        myRole: 'Developed a full-stack cloud optimization project combining infrastructure analysis, cost analytics, and AI-assisted recommendations.',
        technologies: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Redis', 'AWS', 'Terraform', 'Docker'],
        highlights: [
            'Analyzes AWS resources and utilization data for potential savings',
            'Reviews Terraform configurations and Docker builds for optimization opportunities',
            'Generates actionable AI-assisted explanations and recommendations',
            'Visualizes cloud spending, trends, and potential savings in a dashboard',
            'Tracks projects, analysis findings, and recommendations in one place'
        ],
        architectureWorkflow: 'AWS Usage Data / Terraform / Docker Configurations → React + Vite Dashboard → Node.js + Express API → PostgreSQL + Prisma; Redis Caching → AI Recommendations & Cost Analytics',
        previewType: 'cloud',
        mockupDetails: {
            stats: [
                { label: 'Cloud Provider', value: 'AWS' },
                { label: 'Infrastructure', value: 'Terraform & Docker' },
                { label: 'Data Store', value: 'PostgreSQL & Prisma' }
            ],
            tags: ['Cloud Cost Analysis', 'Infrastructure Review', 'AI Recommendations', 'Cost Analytics'],
            accentColor: '#38BDF8'
        }
    },
    {
        id: 'interviewx',
        title: 'Githired',
        tagline: 'AI-Powered Real-Time Technical & Behavioral Interview Platform',
        category: 'AI & Web',
        featured: true,
        description: 'An intelligent mock interview platform that conducts context-aware technical and behavioral interviews, analyzes responses in real time, and scores candidates across three distinct engineering competency axes.',
        githubUrl: 'https://github.com/dhruvmehta221105/GitHired.git',
        problemStatement: 'Aspiring software engineers lack access to realistic, adaptive technical mock interviews with instant, unbiased feedback on their technical reasoning and communication structure.',
        solution: 'Built an LLM-orchestrated interview engine that dynamically generates context-aware questions, supports speech-to-text input, and produces comprehensive evaluation reports with granular rubrics.',
        myRole: 'Designed the responsive candidate dashboard, voice/text interaction components with speech-to-text integration, and structured feedback report views connected to an Express and OpenAI backend.',
        technologies: ['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'Web Speech API', 'Axios'],
        highlights: [
            'Dynamic LLM question generation that adapts difficulty based on candidate response history',
            'Voice + text interaction using browser Speech-to-Text APIs with live transcription feedback',
            '3-Axis objective evaluation model: Technical Knowledge, Problem Solving, and Communication',
            'Session-protected candidate dashboard saving previous interview logs and score progressions',
            'Structured post-interview feedback report highlighting strengths and suggested reading'
        ],
        architectureWorkflow: 'Candidate Voice/Text → React UI → Express REST API → Interview Engine (OpenAI LLM) → 3-Axis Evaluator → MongoDB Persistence → Realtime Feedback Report',
        previewType: 'interview',
        mockupDetails: {
            stats: [
                { label: 'Evaluation Model', value: '3-Axis Scoring' },
                { label: 'Interaction Modes', value: 'Voice & Text' },
                { label: 'Response Latency', value: '< 900ms' }
            ],
            tags: ['LLM Orchestration', 'Speech-to-Text', 'Adaptive Prompting', 'Performance Analytics'],
            accentColor: '#38BDF8'
        }
    },
    {
        id: 'resume-matcher',
        title: 'Resume Matcher AI',
        tagline: 'Semantic Resume Screening & Skill Gap Analysis Engine',
        category: 'AI & Web',
        featured: true,
        description: 'An AI-driven candidate screening platform that moves beyond rigid keyword matching by using semantic vector embeddings and LLM reasoning to evaluate applicant resumes against job descriptions.',
        githubUrl: 'https://github.com/dhruvmehta221105/resume-match.git',
        problemStatement: 'Legacy ATS filters reject strong candidates due to superficial keyword mismatches and offer zero visibility into actual skill gaps or candidate potential.',
        solution: 'Implemented vector similarity matching with Pinecone and Sentence Transformers paired with Claude AI for deep resume-to-job analysis and actionable candidate recommendations.',
        myRole: 'Engineered the React TypeScript frontend application, featuring drag-and-drop document upload, real-time match score radar visualizations, and detailed skill gap inspection views.',
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python', 'Pinecone Vector DB', 'Anthropic Claude', 'PyMuPDF'],
        highlights: [
            'Multi-format resume parsing (PDF, DOCX) extracting structured text and metadata',
            'Dense vector semantic search comparing candidate profiles with job requirements in Pinecone',
            'AI-generated candidate ranking with qualitative skill gap breakdowns and experience insights',
            'Interactive recruiter dashboard for batch candidate comparison and recommendation reports'
        ],
        architectureWorkflow: 'Resume Upload → PyMuPDF Parser → Sentence Transformers Embeddings → Pinecone Vector DB ⇄ Job Description Vector → Semantic Search → Claude AI Deep Analysis → Recruiter UI',
        previewType: 'resume',
        mockupDetails: {
            stats: [
                { label: 'Search Model', value: 'Dense Vector Embeddings' },
                { label: 'Vector Index', value: 'Pinecone' },
                { label: 'Document Parsers', value: 'PyMuPDF & python-docx' }
            ],
            tags: ['Vector Search', 'Semantic ATS', 'Claude AI', 'Skill Gap Analytics'],
            accentColor: '#10B981'
        }
    }
];
export const experience = [
    {
        id: 'ameriprise',
        company: 'Ameriprise Financial',
        role: 'Software Developer Intern',
        period: 'June 2026 – July 2026',
        location: 'Gurgaon, India',
        type: 'Internship',
        project: 'IRNet Enterprise Platform',
        summary: 'Contributed to the frontend engineering of the enterprise IRNet application, collaborating with senior developers in an agile environment to build component-based UIs and streamline complex state workflows.',
        responsibilities: [
            'Developed and maintained modular React.js UI components adhering to corporate design systems and strict code quality standards.',
            'Architected state management workflows utilizing Redux, ensuring predictable unidirectional data flow across nested views.',
            'Explored and debugged asynchronous data communication between frontend components, Redux state slices, and backend microservice APIs using Axios.',
            'Navigated an enterprise-scale codebase, investigating UI bugs, optimizing rendering cycles, and participating in peer code reviews.'
        ],
        technologies: ['React.js', 'JavaScript (ES6+)', 'Redux', 'Axios', 'REST APIs', 'Enterprise Git Workflow', 'Agile/Scrum'],
        keyOutcomes: [
            'Gained deep practical understanding of enterprise frontend architecture and large-scale state synchronizations.',
            'Mastered disciplined version control, clean branch workflows, and code review methodologies.',
            'Strengthened debugging proficiency across complex, multi-tiered web applications.'
        ]
    }
];
export const education = [
    {
        id: 'bennett',
        institution: 'Bennett University',
        degree: 'Bachelor of Technology (B.Tech)',
        field: 'Computer Science & Engineering (Spec. Full Stack Development)',
        period: '2024 – 2028',
        location: 'Greater Noida, India',
        description: 'Actively specializing in Full Stack Web Development and modern software engineering fundamentals. Coursework covers Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, MLOps, Automata Theory, and Advanced Backend Engineering.',
        highlights: [
            'Specialization in Full Stack Development with hands-on lab projects',
            'Built multiple end-to-end full stack web platforms including WorkLens and Githired',
            'Active participant in coding challenges and engineering labs'
        ]
    },
    {
        id: 'bluebells',
        institution: 'Brahm Dutt Blue Bells Public School',
        degree: 'Senior Secondary & Secondary Education',
        field: 'Science Stream (PCM & Computer Science)',
        period: 'Completed 2022 (10th) & 2024 (12th)',
        location: 'Gurgaon, India',
        description: 'Completed foundational schooling with a strong analytical focus on Mathematics, Physics, Chemistry, and Computer Science fundamentals.',
        highlights: [
            'Strong academic foundation in analytical problem-solving and algorithmic thinking',
            'Early practical exposure to C++ and computer programming concepts'
        ]
    }
];
export const certifications = [
    {
        id: 'niit-node',
        title: 'Server side JavaScript with Node.js',
        issuer: 'NIIT via Coursera',
        issueDate: 'October 29, 2026',
        verificationUrl: 'https://coursera.org/verify/EHM3POQTDLUT',
        downloadUrl: '/certificate-niit-node.pdf',
        credentialId: 'EHM3POQTDLUT',
        skillsCovered: [
            'Asynchronous JavaScript & Event Loop',
            'Node.js Core Modules & File System',
            'Building RESTful APIs with Express',
            'Middleware Architecture & Error Handling',
            'Database Connectivity & CRUD operations'
        ]
    },
    {
        id: 'microsoft-azure-solutions',
        title: 'Develop Solutions for Microsoft Azure',
        issuer: 'Microsoft Azure',
        issueDate: 'June 26, 2026',
        verificationUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/NamanGupta-3519/WMMA643N?sharingId=C29AF16FAEDF5616',
        credentialId: 'WMMA643N'
    },
    {
        id: 'copilot-immersion-experience',
        title: 'Copilot Immersion Experience',
        issuer: 'Microsoft Azure',
        issueDate: 'June 26, 2026',
        verificationUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/NamanGupta-3519/8VVRLYMW?sharingId=C29AF16FAEDF5616',
        credentialId: '8VVRLYMW'
    }
];
export const skillCategories = [
    {
        title: 'Frontend Engineering',
        description: 'Building responsive, accessible, and high-performance user interfaces with modern toolchains.',
        icon: 'Layout',
        skills: [
            { name: 'React.js', level: 'experienced' },
            { name: 'Next.js', level: 'experienced' },
            { name: 'TypeScript', level: 'experienced' },
            { name: 'JavaScript (ES6+)', level: 'experienced' },
            { name: 'Tailwind CSS', level: 'experienced' },
            { name: 'Redux / State Mgmt', level: 'experienced' },
            { name: 'HTML5 & Semantic Web', level: 'experienced' },
            { name: 'CSS3 & Modern Animations', level: 'experienced' },
            { name: 'Recharts / Data Viz', level: 'experienced' }
        ]
    },
    {
        title: 'Backend & APIs',
        description: 'Developing secure, scalable RESTful services, server architectures, and authentication pipelines.',
        icon: 'Server',
        skills: [
            { name: 'Node.js', level: 'experienced' },
            { name: 'Express.js', level: 'experienced' },
            { name: 'REST APIs', level: 'experienced' },
            { name: 'JWT Authentication', level: 'experienced' },
            { name: 'Axios & HTTP Clients', level: 'experienced' },
            { name: 'FastAPI', level: 'learning' },
            { name: 'Microservices Fundamentals', level: 'learning' }
        ]
    },
    {
        title: 'Databases & Storage',
        description: 'Designing structured schemas, optimizing queries, and managing vector databases.',
        icon: 'Database',
        skills: [
            { name: 'MongoDB', level: 'experienced' },
            { name: 'Mongoose ODM', level: 'experienced' },
            { name: 'MySQL', level: 'experienced' },
            { name: 'SQL Querying', level: 'experienced' }
        ]
    },
    {
        title: 'AI & Machine Learning Integrations',
        description: 'Integrating LLM workflows, semantic search pipelines, and prompt orchestration.',
        icon: 'Sparkles',
        skills: [
            { name: 'Prompt Engineering', level: 'experienced' },
            { name: 'OpenAI API Integration', level: 'experienced' },
            { name: 'Claude AI API', level: 'learning' },
            { name: 'Vector Embeddings / Semantic Search', level: 'learning' },
            { name: 'Speech-to-Text APIs', level: 'experienced' }
        ]
    },
    {
        title: 'Tools & DevOps',
        description: 'Disciplined version control, CI/CD pipelines, containerization, and collaboration workflows.',
        icon: 'Wrench',
        skills: [
            { name: 'Git', level: 'experienced' },
            { name: 'GitHub & Pull Requests', level: 'experienced' },
            { name: 'VS Code', level: 'experienced' },
            { name: 'Figma to Code', level: 'experienced' },
            { name: 'Jenkins', level: 'learning' },
            { name: 'Swagger API Docs', level: 'experienced' },
            { name: 'BitBucket', level: 'experienced' },
            { name: 'Vite & Bundlers', level: 'experienced' }
        ]
    },
    {
        title: 'Languages & Fundamentals',
        description: 'Core computer science principles, data structures, and algorithmic programming.',
        icon: 'Code2',
        skills: [
            { name: 'JavaScript', level: 'experienced' },
            { name: 'TypeScript', level: 'experienced' },
            { name: 'Python', level: 'experienced' },
            { name: 'Java', level: 'experienced' },
            { name: 'C++', level: 'experienced' },
            { name: 'Data Structures & Algorithms', level: 'experienced' }
        ]
    }
];
export const githubShowcase = {
    profileUrl: 'https://github.com/naman1021-hub',
    username: 'naman1021-hub',
    publicRepos: [
        {
            name: 'VayuVision',
            url: 'https://github.com/naman1021-hub/VayuVision',
            description: 'AI-powered weather assistant for Indian locations with conversational weather, forecasts, location exploration, and forecast-based alerts.',
            language: 'JavaScript',
            stars: 1,
            forks: 1,
            isPrimary: true
        },
        {
            name: 'Worklens',
            url: 'https://github.com/naman1021-hub/Worklens',
            description: 'Centralized faculty & staff work-tracking platform: attendance, leaves, courses, assignments, and Recharts analytics dashboard.',
            language: 'JavaScript',
            stars: 1,
            forks: 0,
            isPrimary: false
        },
        {
            name: 'MLops',
            url: 'https://github.com/naman1021-hub/MLops',
            description: 'MLOps practical implementations covering end-to-end machine learning workflows, model training, evaluation, and experiment tracking.',
            language: 'Jupyter Notebook',
            stars: 0,
            forks: 0,
            isPrimary: false
        },
    ]
};
