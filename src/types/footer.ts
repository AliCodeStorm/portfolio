// types/footer.ts
export type FooterLink = {
    name: string;
    href: string;
};

export type FooterLinkSection = {
    title: string;
    links: FooterLink[];
};

export type SocialLink = {
    icon: React.ReactNode;
    href: string;
    label: string;
};

export type FooterProps = {
    logo: string;
    tagline: string;
    socialLinks: SocialLink[];
    socialLinksStyle: string;
    linkSections: FooterLinkSection[];
    linkStyle: string;
    copyrightText: string;
    builtByText: string;
    className?: string;
    containerClass?: string;
    linkSectionClass?: string;
    titleClass?: string;
    linksClass?: string;
    logoClass?: string;
    taglineClass?: string;
    socialLinksContainerClass?: string;
    bottomSectionClass?: string;
    copyrightClass?: string;
    builtByClass?: string;
    logoAlt?: string;
};