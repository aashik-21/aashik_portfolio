const Projects = () => {
    const projects = [
        {
            title: 'Product Recommendation System',
            description: 'Developed a machine learning model to suggest best products based on user input. Used Python, Pandas, and Scikit-learn with improved recommendation accuracy through feature engineering.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            tags: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Study Mate Using Machine Learning',
            description: 'A machine-learning-based learning assistant that helps students improve study efficiency by analyzing learning patterns and providing personalized study recommendations.',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
            tags: ['Python', 'Machine Learning', 'NLP', 'Keras'],
            liveUrl: '#',
            githubUrl: '#',
        },
    ]

    const certifications = [
        {
            title: 'Advanced C Programming Language',
            issuer: 'Certification Course',
        },
        {
            title: 'Team Collaboration',
            issuer: 'Professional Development',
        },
    ]

    const internships = [
        {
            title: 'Implant Training',
            company: 'Ensemble Nexgen Erode',
            duration: '10 days',
        },
        {
            title: 'ML Internship',
            company: 'BioAreIA, Chennai',
            duration: '2 Months',
        },
    ]

    return (
        <section id="projects" className="py-24 bg-[#0d0d1f]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="section-title">
                    Featured <span className="text-gradient">Projects</span>
                </h2>
                <p className="section-subtitle">
                    Machine Learning projects that showcase my skills and passion for AI development.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl overflow-hidden card-hover group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <div className="flex gap-3">
                                        <a
                                            href={project.liveUrl}
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                                            aria-label="Live Demo"
                                        >
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications & Internships */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Certifications */}
                    <div className="glass rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span>🏆</span> Certifications
                        </h3>
                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{cert.title}</h4>
                                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Internships */}
                    <div className="glass rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span>💼</span> Internship & Training
                        </h3>
                        <div className="space-y-4">
                            {internships.map((intern, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{intern.title}</h4>
                                        <p className="text-gray-400 text-sm">{intern.company}</p>
                                        <p className="text-purple-400 text-xs mt-1">{intern.duration}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
