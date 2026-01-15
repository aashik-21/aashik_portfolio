import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            value: 'mohammedaashik24sem@sktm.edu',
            link: 'mailto:mohammedaashik24sem@sktm.edu',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            value: '+91 9342872600',
            link: 'tel:+919342872600',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            title: 'LinkedIn',
            value: 'Mohammed Aashik',
            link: 'https://www.linkedin.com/in/mohammed-aashik-0175ba344/',
        },
    ]

    return (
        <section id="contact" className="py-24 gradient-bg">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="section-title">
                    Get In <span className="text-gradient">Touch</span>
                </h2>
                <p className="section-subtitle">
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </p>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
                            <p className="text-gray-400 mb-8">
                                I'm always open to discussing AI/ML projects, internship opportunities, or potential collaborations. Let's build something amazing together!
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className="flex items-center gap-4 group"
                                        target={info.link.startsWith('http') ? '_blank' : undefined}
                                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{info.title}</p>
                                            <p className="font-medium group-hover:text-purple-400 transition-colors">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-gray-800">
                                <p className="text-gray-400 text-sm mb-4">Follow me on</p>
                                <div className="flex gap-4">
                                    {[
                                        { name: 'GitHub', icon: 'G', href: 'https://github.com/aashik-21' },
                                        { name: 'LinkedIn', icon: 'Li', href: 'https://www.linkedin.com/in/mohammed-aashik-0175ba344/' },
                                    ].map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:scale-110 transition-all"
                                            aria-label={social.name}
                                        >
                                            <span className="text-xs font-bold">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors text-white"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors text-white"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors text-white"
                                    placeholder="Project Inquiry / Collaboration"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors text-white resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full py-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
