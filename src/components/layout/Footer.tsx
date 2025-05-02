'use client';
import { Footer as CustomFooter } from '@/components/ui/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function FooterLayout() {
    return (
        <div>
            {/* Your other content here */}

            <CustomFooter // Using the renamed Footer component
                logo="/logo.png"
                tagline="Empowering your digital transformation journey."
                socialLinks={[
                    {
                        icon: <FontAwesomeIcon icon={faFacebookF} size="lg" />,
                        href: 'https://facebook.com',
                        label: 'Facebook',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faTwitter} size="lg" />,
                        href: 'https://twitter.com',
                        label: 'Twitter',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faInstagram} size="lg" />,
                        href: 'https://instagram.com',
                        label: 'Instagram',
                    },
                ]}
                socialLinksStyle="text-green-600"
                linkSections={[
                    {
                        title: 'Company',
                        links: [
                            { name: 'About Us', href: '#' },
                            { name: 'Careers', href: '#' },
                            { name: 'Blog', href: '#' },
                        ],
                    },
                    {
                        title: 'Support',
                        links: [
                            { name: 'Help Center', href: '#' },
                            { name: 'Contact Us', href: '#' },
                            { name: 'Status', href: '#' },
                        ],
                    },
                    {
                        title: 'Legal',
                        links: [
                            { name: 'Privacy Policy', href: '#' },
                            { name: 'Terms of Service', href: '#' },
                            { name: 'Cookie Policy', href: '#' },
                        ],
                    },
                ]}
                linkStyle="hover:text-green-600"
                copyrightText="YourCompany"
                builtByText="YourName"
            />
        </div>
    );
}
