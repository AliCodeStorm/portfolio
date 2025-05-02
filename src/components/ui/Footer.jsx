"use client";

import { cn } from '../../lib/cn';

const Footer = ({
    logo,
    tagline,
    socialLinks,
    socialLinksStyle,
    linkSections,
    linkStyle,
    copyrightText,
    builtByText,
    className = ''
}) => {
    return (
        <footer
            className={`w-full px-4 sm:px-8 md:px-10 py-6 border-t border-t-zinc-300 dark:border-t-zinc-800 ${className}`}>
            <div className="max-w-7xl mx-auto py-8 flex flex-col gap-10 md:flex-row md:justify-between">
                <div className="flex flex-col gap-6 max-w-md">
                    <div className="w-48 h-12 hover:scale-105 transition-all cursor-pointer">
                        <img alt="Logo" className="h-full w-full object-contain" src={logo} />
                    </div>

                    <p className="text-sm text-white dark:text-zinc-400">{tagline}</p>

                    <div className="flex gap-4 text-zinc-500">
                        {socialLinks.map(({ icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                aria-label={label}
                                rel="noopener noreferrer"
                                className={cn(
                                    'hover:text-zinc-800 dark:hover:text-zinc-100 hover:scale-105 transition-all',
                                    socialLinksStyle
                                )}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm text-white dark:text-zinc-400">
                    {linkSections.map(({ title, links }) => (
                        <div key={title} className="flex flex-col gap-2">
                            <h3 className="text-white dark:text-zinc-100 font-semibold">
                                {title}
                            </h3>
                            {links.map(({ name, href }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn('hover:text-zinc-700 dark:hover:text-zinc-100', linkStyle)}>
                                    {name}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-t-zinc-300 dark:border-t-zinc-800 mt-8 pt-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-sm text-white dark:text-zinc-300 gap-3">
                    <div>© 2025 {copyrightText}. All rights reserved.</div>
                    <div>
                        <span>Built with ❤️ by </span>
                        <span className="underline cursor-pointer">{builtByText}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
