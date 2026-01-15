const About = () => {
    const stats = [
        { number: '8.7', label: 'CGPA' },
        { number: '2+', label: 'Projects Completed' },
        { number: '2', label: 'Internships' },
        { number: '2', label: 'Certificates' },
    ]

    return (
        <section id="about" className="py-24 bg-[#0d0d1f]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="section-title">
                    About <span className="text-gradient">Me</span>
                </h2>
                <p className="section-subtitle">
                    Get to know more about my journey, skills, and what drives me as an AI/ML developer.
                </p>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative w-80 h-80 mx-auto">
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 rotate-6 opacity-50"></div>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 -rotate-6 opacity-50"></div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden glass animate-pulse-glow">
                                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                                    <svg className="w-32 h-32 text-purple-400/50" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div>
                        <h3 className="text-3xl font-bold mb-6">
                            A passionate AI/ML enthusiast building intelligent solutions
                        </h3>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I'm an entry-level AI & ML Engineer with hands-on experience in Python and Machine Learning.
                            Currently pursuing BTech in AI & ML at Kongu Engineering College, Perundurai, with a CGPA of 8.7.
                            I'm passionate about developing practical, industry-ready machine learning solutions.
                        </p>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I have completed internships at Ensemble Nexgen Erode and BioAreIA Chennai, gaining
                            real-world experience in AI/ML applications. I enjoy working with Python, NumPy, Pandas,
                            and Keras to build recommendation systems and intelligent learning applications.
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="glass rounded-xl p-4">
                                <p className="text-purple-400 text-sm mb-1">Name</p>
                                <p className="font-medium">Mohammed Aashik I</p>
                            </div>
                            <div className="glass rounded-xl p-4">
                                <p className="text-purple-400 text-sm mb-1">Email</p>
                                <p className="font-medium text-sm">mohammedaashik24sem@sktm.edu</p>
                            </div>
                            <div className="glass rounded-xl p-4">
                                <p className="text-purple-400 text-sm mb-1">Education</p>
                                <p className="font-medium">BTech AI & ML</p>
                            </div>
                            <div className="glass rounded-xl p-4">
                                <p className="text-purple-400 text-sm mb-1">Availability</p>
                                <p className="font-medium text-green-400">Open to work</p>
                            </div>
                        </div>

                        <a href="#contact" className="btn-primary inline-block">
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-8 text-center card-hover"
                        >
                            <h4 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                                {stat.number}
                            </h4>
                            <p className="text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
