const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = [
        {
            title: 'Quick Links',
            links: [
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
            ],
        },
        {
            title: 'Expertise',
            links: [
                { name: 'Machine Learning', href: '#skills' },
                { name: 'Data Analysis', href: '#skills' },
                { name: 'Python Development', href: '#skills' },
                { name: 'AI Solutions', href: '#skills' },
            ],
        },
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-[#080812] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <a href="#home" className="text-3xl font-bold text-gradient inline-block mb-4">
                            Mohammed Aashik
                        </a>
                        <p className="text-gray-400 mb-6 max-w-md">
                            AI & ML Engineer passionate about building intelligent solutions. Let's create something amazing together.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: 'GitHub', href: 'https://github.com/aashik-21' },
                                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-aashik-0175ba344/' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all"
                                    aria-label={social.name}
                                >
                                    <span className="text-xs font-bold">{social.name[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Mohammed Aashik I. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Crafted with <span className="text-red-500">❤</span> using React & Tailwind CSS
                    </p>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
                    aria-label="Back to top"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </footer>
    )
}

export default Footer
