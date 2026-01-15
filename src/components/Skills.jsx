const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: '💻',
            skills: [
                { name: 'Python', level: 90 },
                { name: 'C', level: 80 },
                { name: 'Java', level: 75 },
                { name: 'JavaScript', level: 70 },
            ],
        },
        {
            title: 'AI & ML',
            icon: '🤖',
            skills: [
                { name: 'NumPy', level: 85 },
                { name: 'Pandas', level: 85 },
                { name: 'Keras', level: 75 },
                { name: 'Scikit-learn', level: 80 },
            ],
        },
        {
            title: 'Web & Tools',
            icon: '🛠️',
            skills: [
                { name: 'HTML & CSS', level: 80 },
                { name: 'Git & GitHub', level: 85 },
                { name: 'Feature Engineering', level: 75 },
                { name: 'Data Analysis', level: 80 },
            ],
        },
    ]

    const technologies = [
        'Python', 'C', 'Java', 'JavaScript', 'NumPy', 'Pandas',
        'Keras', 'Scikit-learn', 'HTML', 'CSS', 'Git', 'GitHub',
        'Machine Learning', 'Deep Learning', 'Data Analysis', 'Feature Engineering',
        'Recommendation Systems', 'Natural Language Processing',
    ]

    return (
        <section id="skills" className="py-24 gradient-bg">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="section-title">
                    My <span className="text-gradient">Skills</span>
                </h2>
                <p className="section-subtitle">
                    Technologies and tools I work with to build intelligent solutions.
                </p>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="glass rounded-2xl p-8 card-hover">
                            <div className="text-4xl mb-4">{category.icon}</div>
                            <h3 className="text-2xl font-bold mb-6">{category.title}</h3>

                            <div className="space-y-5">
                                {category.skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-purple-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full skill-bar transition-all duration-1000"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technology Tags */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="glass px-5 py-2.5 rounded-full text-sm text-gray-300 hover:text-white hover:scale-105 transition-all cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
