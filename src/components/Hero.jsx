const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="animate-fadeInUp">
                    <p className="text-purple-400 font-medium mb-4 tracking-wider uppercase text-sm">
                        Welcome to my portfolio
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I'm <span className="text-gradient">Mohammed Aashik</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
                        AI & ML Engineer
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                        Entry-level AI/ML enthusiast with hands-on experience in Python and Machine Learning.
                        Seeking an opportunity to start a career in Machine Learning and develop practical industry-ready skills.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#projects" className="btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mt-12">
                        {[
                            { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', href: 'https://github.com/aashik-21' },
                            { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', href: 'https://www.linkedin.com/in/mohammed-aashik-0175ba344/' },
                            { name: 'Email', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', href: 'mailto:mohammedaashik24sem@sktm.edu' },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                                aria-label={social.name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={social.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-purple-400/50 flex justify-center pt-2">
                        <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
